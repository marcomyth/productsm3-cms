# Blog Publisher API — contrato pra integração externa (Ascendly)

Este documento descreve o endpoint REST do content-type `blog-post` deste Strapi pra que sistemas externos (Ascendly e futuros) consigam publicar posts automaticamente.

## Setup no admin (uma vez)

1. **Gerar API Token**: `Settings → API Tokens → Create new API Token`
   - **Name**: `Ascendly Publisher` (ou nome do sistema)
   - **Token type**: `Custom`
   - **Token duration**: `Unlimited` (ou definir validade)
   - **Permissions**:
     - `Blog-post` → `create`, `update`, `find`, `findOne`
     - `Upload` → `upload` (pra subir imagem destacada)
   - Copiar token gerado (só aparece uma vez) e salvar como segredo no sistema cliente.

2. **Confirmar permissões públicas de leitura**: já configuradas via `src/index.ts` (`find`, `findOne` em `api::blog-post.blog-post`).

## Schema do `blog-post`

| Campo | Tipo | Obrigatório | Notas |
|---|---|---|---|
| `title` | string | sim | Título do post |
| `slug` | uid (gerado de `title`) | sim | Auto-gerado se não vier |
| `excerpt` | text (≤280 chars) | não | Resumo curto, usado em preview e meta description |
| `content` | blocks (Strapi v5) | não | Corpo. Array de blocks (paragraphs, headings, listas, images, code) |
| `cover` | media (single, image) | não | ID numérico da imagem (subir antes via `/api/upload`) |
| `author` | string | não | Nome do autor (ex: "Ascendly AI") |
| `category` | enum | não | `noticia`, `tutorial`, `case`, `novidade`, `tendencia`, `geral` (default) |
| `tags` | json (array de strings) | não | Ex: `["IA", "Marketing"]` |
| `readingTime` | integer | não | Minutos estimados |
| `source` | enum | não | `ascendly` (default), `manual` |
| `externalId` | string | não | ID do post no sistema de origem — usado pra evitar duplicar |
| `seo` | component `shared.seo` | não | `metaTitle`, `metaDescription`, `shareImage`, etc |

## Endpoint REST

**Base URL**: `https://<dominio-do-cms>/api`

### 1. (Opcional) Upload da imagem destacada

```http
POST /api/upload
Authorization: Bearer <API_TOKEN>
Content-Type: multipart/form-data

files: <arquivo binário>
```

Resposta:
```json
[{ "id": 42, "url": "/uploads/cover_xxx.jpg", "name": "cover.jpg", ... }]
```

Guardar o `id` (42 no exemplo) pra usar em `cover` no POST do post.

### 2. Verificar se já existe (idempotência)

Antes de criar, checar se já existe post com o mesmo `externalId`:

```http
GET /api/blog-posts?filters[externalId][$eq]=<id-do-ascendly>&pagination[pageSize]=1
Authorization: Bearer <API_TOKEN>
```

Se vier resultado, é UPDATE. Se vazio, é CREATE.

### 3. Criar post

```http
POST /api/blog-posts
Authorization: Bearer <API_TOKEN>
Content-Type: application/json

{
  "data": {
    "title": "Como a IA está mudando o marketing em 2026",
    "excerpt": "Tendências, ferramentas e impactos práticos no dia-a-dia do profissional.",
    "content": [
      { "type": "heading", "level": 2, "children": [{ "type": "text", "text": "Introdução" }] },
      { "type": "paragraph", "children": [{ "type": "text", "text": "..." }] }
    ],
    "cover": 42,
    "author": "Ascendly AI",
    "category": "tendencia",
    "tags": ["IA", "Marketing", "Tendências"],
    "readingTime": 5,
    "source": "ascendly",
    "externalId": "ascendly-article-12345",
    "seo": {
      "metaTitle": "Como a IA está mudando o marketing em 2026 | Agenciam3",
      "metaDescription": "Tendências, ferramentas e impactos práticos no dia-a-dia do profissional.",
      "keywords": "IA, marketing, 2026"
    },
    "publishedAt": "2026-06-17T15:00:00.000Z"
  }
}
```

**Notas importantes**:
- Wrap obrigatório em `{ "data": { ... } }` (padrão Strapi v5).
- Pra publicar direto (não draft): incluir `"publishedAt": <ISO timestamp>`. Sem isso, fica como draft no Strapi e não aparece no front.
- Pra deixar como draft (publicação manual depois pelo admin): omitir `publishedAt`.

### 4. Atualizar post existente

```http
PUT /api/blog-posts/:documentId
Authorization: Bearer <API_TOKEN>
Content-Type: application/json

{ "data": { ...campos a atualizar } }
```

`documentId` vem da resposta do GET de idempotência.

### 5. Leitura pública (front consome)

`find` e `findOne` estão **liberados pra role `public`** — não precisa de token. Site público consome livre:

```http
GET /api/blog-posts?populate=*&pagination[pageSize]=10&sort=publishedAt:desc
GET /api/blog-posts?filters[slug][$eq]=<slug>&populate=*
```

## Mapeamento sugerido (Ascendly → Strapi)

Quando implementar o publisher no Ascendly, o `fieldMap` por destino pode ser:

```js
{
  title:       (post) => post.title,
  excerpt:     (post) => post.summary,
  content:     (post) => convertMarkdownToBlocks(post.markdown), // ver nota abaixo
  cover:       (post) => uploadCoverFirst(post.coverUrl),         // retorna ID após upload
  author:      (post) => post.author?.name ?? 'Ascendly AI',
  category:    (post) => mapCategoria(post.tags),                 // ascendly tag → enum strapi
  tags:        (post) => post.tags,
  readingTime: (post) => post.readingTimeMinutes,
  source:      () => 'ascendly',
  externalId:  (post) => post.id,
  seo:         (post) => ({
    metaTitle: post.seoTitle ?? post.title,
    metaDescription: post.seoDescription ?? post.summary,
  }),
  publishedAt: () => new Date().toISOString(),
}
```

### Conversão Markdown → Blocks

Se o Ascendly gera markdown, precisa converter pro formato blocks do Strapi v5 antes de enviar. Opções:
- Lib `@strapi/blocks-react-renderer` tem helpers de parse
- Implementação manual simples: parsear markdown e gerar `[{ type: "paragraph", ... }, { type: "heading", ... }]`

Estrutura mínima de bloco:
```json
{ "type": "paragraph", "children": [{ "type": "text", "text": "conteúdo" }] }
{ "type": "heading", "level": 2, "children": [{ "type": "text", "text": "título" }] }
{ "type": "list", "format": "unordered", "children": [
    { "type": "list-item", "children": [{ "type": "text", "text": "item" }] }
]}
```

## Reutilização pra outros sites Strapi

Este schema é o **template padrão** que vai entrar no skill `/scaffold-strapi-cms`. Todo novo Strapi criado por esse skill virá com este content-type `blog-post` igual. Pra registrar um novo destino no Ascendly, só precisa:

1. Gerar API Token no admin do novo Strapi (mesmas permissões).
2. Cadastrar no Ascendly: `{ baseUrl, apiToken, contentType: 'blog-posts' }`.
3. Pronto — o publisher do Ascendly já sabe falar com qualquer destino que siga esse contrato.
