# productsm3-cms

CMS Strapi 5 (TypeScript + SQLite) para a **landing page da productsm3** — empresa que cria sites.

## Stack

- **Strapi** v5 (TypeScript)
- **Banco**: SQLite (`.tmp/data.db`) — para desenvolvimento. Em produção, trocar para Postgres via env.
- **Node** >= 20

## Comandos

```bash
npm run develop   # modo watch (admin em http://localhost:1337/admin)
npm run start     # produção
npm run build     # build do painel admin
```

## Estrutura de conteúdo

### Single Types
- `global` — configurações do site (nome, logo, SEO padrão, header, footer, contato)
- `landing-page` — página inicial com **dynamic zone** de seções

### Collection Types
- `service` — serviços oferecidos (site institucional, landing page, e-commerce, SaaS, etc.)
- `project` — cases / portfólio
- `testimonial` — depoimentos de clientes
- `lead` — leads capturados pelo formulário de contato

### Componentes

**`shared`**
- `seo` — metadados (title, description, OG image, canonical, no-index)
- `button` — CTA reutilizável (label, url, variant, external)
- `nav-link` — link de navegação

**`layout`**
- `header` — logo + links + CTA
- `footer` — logo + links + redes sociais + copyright
- `contact-info` — email, phone, whatsapp, endereço

**`sections`** (usados na dynamic zone da landing page)
- `hero` — seção principal acima da dobra
- `feature` / `feature-grid` — grade de benefícios
- `stat-item` / `stats` — métricas/números
- `services-list` — relação com serviços
- `portfolio` — relação com projetos
- `process-step` / `process` — etapas/metodologia
- `testimonials` — relação com depoimentos
- `faq-item` / `faq` — perguntas frequentes
- `cta` — chamada para ação
- `contact-form` — bloco de captura de leads

## API pública

O `src/index.ts` configura automaticamente, no bootstrap, as permissões do **role Public**:

**Leitura (GET)**
- `/api/landing-page`
- `/api/global`
- `/api/services`, `/api/services/:id`
- `/api/projects`, `/api/projects/:id`
- `/api/testimonials`, `/api/testimonials/:id`

**Escrita (POST)**
- `/api/leads` (apenas `create`)

> Para trazer todas as seções da landing page, use populate aninhado:
> `GET /api/landing-page?populate[sections][populate]=*&populate[seo][populate]=*`

## Primeiros passos

1. `npm run develop`
2. Acesse `http://localhost:1337/admin` e crie o **primeiro usuário admin**.
3. Em **Content Manager**:
   - Preencha **Global** (single type).
   - Preencha **Landing Page** adicionando seções na dynamic zone.
   - Crie alguns **Serviços**, **Projetos** e **Depoimentos**.
4. Publique cada entrada (Draft & Publish ativo).
5. Consuma a API no front-end (Next.js/Astro/Nuxt) com os endpoints acima.

## Próximos passos sugeridos

- Trocar SQLite por Postgres em produção (`config/database.ts` + env).
- Configurar provider de upload (S3/Cloudinary) em `config/plugins.ts`.
- Adicionar webhook para revalidar o front-end no `publish`/`unpublish`.
- Habilitar i18n caso o site precise de múltiplos idiomas.
