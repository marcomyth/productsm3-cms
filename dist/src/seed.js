"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSeed = void 0;
const SERVICES = [
    {
        title: 'Sites Institucionais',
        slug: 'sites-institucionais',
        icon: 'lucide:building-2',
        shortDescription: 'Sites profissionais que transmitem credibilidade e geram autoridade para sua marca.',
        description: 'Criamos sites institucionais sob medida, com design único, performance de ponta e otimização para os mecanismos de busca. Sua empresa com uma presença digital à altura do seu posicionamento.',
        features: [
            {
                icon: 'lucide:palette',
                title: 'Design exclusivo',
                description: 'Identidade visual única, alinhada à marca e ao público.',
            },
            {
                icon: 'lucide:gauge',
                title: 'Performance máxima',
                description: 'Score 90+ no PageSpeed e Core Web Vitals no verde.',
            },
            {
                icon: 'lucide:search',
                title: 'SEO técnico',
                description: 'Estrutura, schema.org e meta tags prontos para o Google.',
            },
        ],
        order: 1,
        featured: true,
    },
    {
        title: 'Landing Pages',
        slug: 'landing-pages',
        icon: 'lucide:target',
        shortDescription: 'Páginas focadas em conversão para campanhas, lançamentos e captação de leads.',
        description: 'Landing pages de alta conversão com copy persuasivo, design otimizado e integração com suas ferramentas de marketing (Meta Ads, Google Ads, CRM).',
        features: [
            {
                icon: 'lucide:zap',
                title: 'Conversão otimizada',
                description: 'A/B testing, heatmaps e otimização contínua.',
            },
            {
                icon: 'lucide:plug',
                title: 'Integrações',
                description: 'Conecta com RD Station, HubSpot, Pipedrive, WhatsApp e mais.',
            },
            {
                icon: 'lucide:bar-chart',
                title: 'Mensuração',
                description: 'GTM, GA4 e pixels configurados desde o dia 1.',
            },
        ],
        order: 2,
        featured: true,
    },
    {
        title: 'E-commerce',
        slug: 'ecommerce',
        icon: 'lucide:shopping-cart',
        shortDescription: 'Lojas virtuais escaláveis, com checkout otimizado e integração com meios de pagamento.',
        description: 'Desenvolvemos e-commerces robustos em Shopify, VTEX, WooCommerce ou headless com Next.js, sempre pensando em conversão e experiência do cliente.',
        features: [
            {
                icon: 'lucide:credit-card',
                title: 'Checkout otimizado',
                description: 'PIX, cartão, boleto e parcelamento sem dor de cabeça.',
            },
            {
                icon: 'lucide:truck',
                title: 'Logística integrada',
                description: 'Correios, Melhor Envio, Frenet e transportadoras próprias.',
            },
            {
                icon: 'lucide:trending-up',
                title: 'Pronto para escalar',
                description: 'Infraestrutura preparada para Black Friday e picos de tráfego.',
            },
        ],
        order: 3,
        featured: true,
    },
    {
        title: 'Aplicações SaaS',
        slug: 'aplicacoes-saas',
        icon: 'lucide:layers',
        shortDescription: 'Plataformas web sob medida para automatizar operações e gerar receita recorrente.',
        description: 'Desenvolvemos SaaS B2B/B2C completos: autenticação, billing recorrente (Stripe), multi-tenant, painel admin e tudo que sua operação precisa.',
        features: [
            {
                icon: 'lucide:lock',
                title: 'Autenticação robusta',
                description: 'Login social, MFA, RBAC e SSO quando necessário.',
            },
            {
                icon: 'lucide:repeat',
                title: 'Billing recorrente',
                description: 'Stripe, Pagar.me ou Iugu integrados desde o início.',
            },
            {
                icon: 'lucide:cloud',
                title: 'Cloud escalável',
                description: 'Deploy em Vercel, AWS ou GCP com CI/CD.',
            },
        ],
        order: 4,
        featured: false,
    },
    {
        title: 'Blog e Conteúdo',
        slug: 'blog-e-conteudo',
        icon: 'lucide:book-open',
        shortDescription: 'Plataformas de conteúdo otimizadas para SEO e estratégia de inbound marketing.',
        description: 'Blogs e portais com CMS amigável (Strapi, Sanity, WordPress headless), SEO técnico de ponta e estrutura preparada para escalar tráfego orgânico.',
        features: [
            {
                icon: 'lucide:edit-3',
                title: 'CMS amigável',
                description: 'Sua equipe publica sem precisar de desenvolvedor.',
            },
            {
                icon: 'lucide:rss',
                title: 'SEO + AEO',
                description: 'Conteúdo pronto para Google, ChatGPT e Perplexity.',
            },
            {
                icon: 'lucide:share-2',
                title: 'Distribuição',
                description: 'RSS, newsletter, redes sociais integradas.',
            },
        ],
        order: 5,
        featured: false,
    },
    {
        title: 'Manutenção e Performance',
        slug: 'manutencao-e-performance',
        icon: 'lucide:wrench',
        shortDescription: 'Cuidamos do seu site para que ele permaneça rápido, seguro e sempre no ar.',
        description: 'Plano mensal de manutenção: atualizações, backups, monitoramento 24/7, melhorias contínuas de performance e SEO. Você foca no negócio, a gente cuida do site.',
        features: [
            {
                icon: 'lucide:shield',
                title: 'Segurança',
                description: 'WAF, backups diários e monitoramento de vulnerabilidades.',
            },
            {
                icon: 'lucide:activity',
                title: 'Uptime 99.9%',
                description: 'Monitoramento 24/7 com alertas e SLA garantido.',
            },
            {
                icon: 'lucide:rocket',
                title: 'Otimização contínua',
                description: 'Melhorias mensais de performance e UX.',
            },
        ],
        order: 6,
        featured: false,
    },
];
const PROJECTS = [
    {
        title: 'Plataforma Aurora Finance',
        slug: 'aurora-finance',
        client: 'Aurora Finance',
        year: 2026,
        category: 'saas',
        shortDescription: 'SaaS de gestão financeira para PMEs, com onboarding em 3 minutos e billing recorrente.',
        description: 'Desenvolvemos do zero a plataforma Aurora Finance: autenticação, multi-tenant, integração com Open Finance, dashboards em tempo real e billing recorrente via Stripe.',
        liveUrl: 'https://exemplo-aurora.com',
        technologies: ['Next.js', 'TypeScript', 'Postgres', 'Prisma', 'Stripe', 'Vercel'],
        featured: true,
        order: 1,
    },
    {
        title: 'Site Institucional Vértice Arquitetura',
        slug: 'vertice-arquitetura',
        client: 'Vértice Arquitetura',
        year: 2025,
        category: 'site-institucional',
        shortDescription: 'Site institucional minimalista que valoriza o portfólio de um escritório de arquitetura premium.',
        description: 'Projeto focado em apresentar com sofisticação o portfólio do escritório. Layout editorial, fotografias em alta resolução, animações suaves e ótima performance.',
        liveUrl: 'https://exemplo-vertice.com',
        technologies: ['Astro', 'TailwindCSS', 'Strapi', 'Cloudflare'],
        featured: true,
        order: 2,
    },
    {
        title: 'E-commerce Brutto Coffee',
        slug: 'brutto-coffee',
        client: 'Brutto Coffee',
        year: 2025,
        category: 'ecommerce',
        shortDescription: 'Loja virtual headless de café especial, com clube de assinatura e checkout otimizado.',
        description: 'E-commerce headless conectando Shopify (catálogo/pagamentos) a um front-end Next.js para performance e SEO máximos. Clube de assinatura mensal e PIX integrados.',
        liveUrl: 'https://exemplo-brutto.com',
        technologies: ['Next.js', 'Shopify', 'Sanity', 'Stripe'],
        featured: true,
        order: 3,
    },
    {
        title: 'Landing Page Lançamento Helix Pro',
        slug: 'helix-pro-launch',
        client: 'Helix Tecnologia',
        year: 2026,
        category: 'landing-page',
        shortDescription: 'Landing page de lançamento que converteu 18% do tráfego pago na primeira semana.',
        description: 'Página de lançamento criada em parceria com a equipe de marketing da Helix. Foco em copy persuasivo, vídeo hero, prova social e CTAs claros.',
        liveUrl: 'https://exemplo-helix.com',
        technologies: ['Astro', 'TailwindCSS', 'GTM', 'Meta Ads'],
        featured: false,
        order: 4,
    },
    {
        title: 'Portal de Conteúdo Norte Médico',
        slug: 'norte-medico',
        client: 'Norte Médico',
        year: 2025,
        category: 'blog',
        shortDescription: 'Portal de saúde com mais de 400 artigos otimizados para SEO e geração de leads.',
        description: 'Migramos um WordPress legado para uma stack moderna (Next.js + Strapi), melhorando performance em 300% e dobrando o tráfego orgânico em 6 meses.',
        liveUrl: 'https://exemplo-norte.com',
        technologies: ['Next.js', 'Strapi', 'Postgres', 'Algolia'],
        featured: false,
        order: 5,
    },
    {
        title: 'App Web Coletta Logística',
        slug: 'coletta-logistica',
        client: 'Coletta',
        year: 2026,
        category: 'app-web',
        shortDescription: 'Aplicação web para gestão de coletas e rotas, usada por 1.200 motoristas diariamente.',
        description: 'PWA com modo offline, geolocalização em tempo real, integração com Google Maps e painel administrativo completo para a operação.',
        liveUrl: 'https://exemplo-coletta.com',
        technologies: ['React', 'PWA', 'Node.js', 'Postgres', 'Mapbox'],
        featured: false,
        order: 6,
    },
];
const TESTIMONIALS = [
    {
        name: 'Mariana Costa',
        role: 'CEO',
        company: 'Aurora Finance',
        quote: 'A productsm3 entendeu nosso produto desde o primeiro briefing. Entregaram um SaaS robusto, escalável e bonito — fechamos a Série A 3 meses depois do lançamento.',
        rating: 5,
        projectSlug: 'aurora-finance',
        featured: true,
        order: 1,
    },
    {
        name: 'Rafael Linhares',
        role: 'Sócio-fundador',
        company: 'Vértice Arquitetura',
        quote: 'Pela primeira vez nosso site representa de verdade o nível dos nossos projetos. Recebemos mais briefings qualificados em 2 meses do que em todo o ano anterior.',
        rating: 5,
        projectSlug: 'vertice-arquitetura',
        featured: true,
        order: 2,
    },
    {
        name: 'Camila Tavares',
        role: 'Head de Marketing',
        company: 'Helix Tecnologia',
        quote: 'A landing converteu 18% no lançamento. A equipe da productsm3 é técnica de verdade e entende de marketing — uma combinação rara.',
        rating: 5,
        projectSlug: 'helix-pro-launch',
        featured: true,
        order: 3,
    },
    {
        name: 'Diego Almeida',
        role: 'Fundador',
        company: 'Brutto Coffee',
        quote: 'Migramos para o headless e o resultado foi imediato: site 4x mais rápido, conversão +35% e SEO crescendo todo mês.',
        rating: 5,
        projectSlug: 'brutto-coffee',
        featured: false,
        order: 4,
    },
    {
        name: 'Patricia Nunes',
        role: 'Diretora de Conteúdo',
        company: 'Norte Médico',
        quote: 'Saímos de um WordPress travado para uma plataforma de verdade. Hoje publicamos sem depender de ninguém e o tráfego orgânico não para de crescer.',
        rating: 5,
        projectSlug: 'norte-medico',
        featured: false,
        order: 5,
    },
];
async function seedServices(strapi) {
    const existing = await strapi.documents('api::service.service').findMany({ status: 'published' });
    if (existing.length > 0) {
        strapi.log.info(`[seed] services já existem (${existing.length}). Pulando.`);
        return;
    }
    for (const s of SERVICES) {
        await strapi.documents('api::service.service').create({
            data: s,
            status: 'published',
        });
    }
    strapi.log.info(`[seed] criados ${SERVICES.length} serviços.`);
}
async function seedProjects(strapi) {
    const existing = await strapi.documents('api::project.project').findMany({ status: 'published' });
    if (existing.length > 0) {
        strapi.log.info(`[seed] projects já existem (${existing.length}). Pulando.`);
        return;
    }
    for (const p of PROJECTS) {
        await strapi.documents('api::project.project').create({
            data: p,
            status: 'published',
        });
    }
    strapi.log.info(`[seed] criados ${PROJECTS.length} projetos.`);
}
async function seedTestimonials(strapi) {
    const existing = await strapi
        .documents('api::testimonial.testimonial')
        .findMany({ status: 'published' });
    if (existing.length > 0) {
        strapi.log.info(`[seed] testimonials já existem (${existing.length}). Pulando.`);
        return;
    }
    for (const t of TESTIMONIALS) {
        let projectDocId;
        if (t.projectSlug) {
            const match = await strapi
                .documents('api::project.project')
                .findFirst({ filters: { slug: t.projectSlug }, status: 'published' });
            projectDocId = match === null || match === void 0 ? void 0 : match.documentId;
        }
        await strapi.documents('api::testimonial.testimonial').create({
            data: {
                name: t.name,
                role: t.role,
                company: t.company,
                quote: t.quote,
                rating: t.rating,
                featured: t.featured,
                order: t.order,
                ...(projectDocId ? { project: projectDocId } : {}),
            },
            status: 'published',
        });
    }
    strapi.log.info(`[seed] criados ${TESTIMONIALS.length} depoimentos.`);
}
async function seedGlobal(strapi) {
    const existing = await strapi
        .documents('api::global.global')
        .findFirst({ status: 'published' });
    if (existing) {
        strapi.log.info(`[seed] global já existe. Pulando.`);
        return;
    }
    await strapi.documents('api::global.global').create({
        data: {
            siteName: 'productsm3',
            tagline: 'Criamos sites e produtos digitais que geram resultado.',
            defaultSeo: {
                metaTitle: 'productsm3 — Sites, landing pages e SaaS de alta performance',
                metaDescription: 'Estúdio de produtos digitais. Criamos sites institucionais, landing pages, e-commerces e SaaS sob medida para empresas que querem crescer.',
                keywords: 'criação de sites, landing page, e-commerce, saas, desenvolvimento web',
                preventIndexing: false,
            },
            header: {
                links: [
                    { label: 'Serviços', url: '#servicos', external: false },
                    { label: 'Portfólio', url: '#portfolio', external: false },
                    { label: 'Processo', url: '#processo', external: false },
                    { label: 'Depoimentos', url: '#depoimentos', external: false },
                    { label: 'FAQ', url: '#faq', external: false },
                ],
                ctaButton: {
                    label: 'Fale com a gente',
                    url: '#contato',
                    variant: 'primary',
                    external: false,
                },
            },
            footer: {
                tagline: 'Criamos sites e produtos digitais que geram resultado.',
                links: [
                    { label: 'Serviços', url: '#servicos', external: false },
                    { label: 'Portfólio', url: '#portfolio', external: false },
                    { label: 'Contato', url: '#contato', external: false },
                    { label: 'Política de Privacidade', url: '/privacidade', external: false },
                ],
                socialLinks: [
                    { label: 'Instagram', url: 'https://instagram.com/productsm3', external: true },
                    { label: 'LinkedIn', url: 'https://linkedin.com/company/productsm3', external: true },
                    { label: 'GitHub', url: 'https://github.com/productsm3', external: true },
                ],
                copyright: '© 2026 productsm3. Todos os direitos reservados.',
            },
            contact: {
                email: 'contato@productsm3.com',
                phone: '+55 (11) 99999-0000',
                whatsapp: '+5511999990000',
                address: 'São Paulo, SP — atendimento 100% remoto',
            },
        },
        status: 'published',
    });
    strapi.log.info(`[seed] global criado.`);
}
async function seedLandingPage(strapi) {
    const existing = await strapi
        .documents('api::landing-page.landing-page')
        .findFirst({ status: 'published' });
    if (existing) {
        strapi.log.info(`[seed] landing-page já existe. Pulando.`);
        return;
    }
    const services = await strapi
        .documents('api::service.service')
        .findMany({ status: 'published', sort: 'order:asc' });
    const projects = await strapi
        .documents('api::project.project')
        .findMany({ status: 'published', sort: 'order:asc' });
    const testimonials = await strapi
        .documents('api::testimonial.testimonial')
        .findMany({ status: 'published', sort: 'order:asc' });
    const sections = [
        {
            __component: 'sections.hero',
            eyebrow: 'Estúdio de produtos digitais',
            title: 'Sites e produtos digitais que geram resultado.',
            subtitle: 'A productsm3 cria sites institucionais, landing pages, e-commerces e SaaS sob medida — com design, performance e SEO de ponta.',
            primaryCta: {
                label: 'Quero um orçamento',
                url: '#contato',
                variant: 'primary',
                external: false,
            },
            secondaryCta: {
                label: 'Ver portfólio',
                url: '#portfolio',
                variant: 'outline',
                external: false,
            },
        },
        {
            __component: 'sections.stats',
            title: 'Resultados que falam por si',
            subtitle: 'Mais de 7 anos transformando ideias em produtos digitais de alto impacto.',
            items: [
                { value: '120', label: 'Projetos entregues', suffix: '+' },
                { value: '95', label: 'Score médio no PageSpeed', suffix: '' },
                { value: '18', label: 'Conversão média em LPs', suffix: '%' },
                { value: '99.9', label: 'Uptime garantido', suffix: '%' },
            ],
        },
        {
            __component: 'sections.feature-grid',
            eyebrow: 'Por que productsm3',
            title: 'Mais que um site bonito — um produto que vende.',
            subtitle: 'Cada projeto combina design, performance, SEO e estratégia de conversão. Resultado: sites que carregam rápido, posicionam no Google e convertem visitantes em clientes.',
            features: [
                {
                    icon: 'lucide:palette',
                    title: 'Design sob medida',
                    description: 'Nada de templates engessados. Cada projeto nasce de um briefing profundo e tem identidade única.',
                },
                {
                    icon: 'lucide:gauge',
                    title: 'Performance de ponta',
                    description: 'Score 90+ no PageSpeed, Core Web Vitals no verde e tempo de carregamento abaixo de 1s.',
                },
                {
                    icon: 'lucide:search',
                    title: 'SEO técnico desde o dia 1',
                    description: 'Estrutura semântica, schema.org, sitemap, robots e Open Graph configurados corretamente.',
                },
                {
                    icon: 'lucide:shield-check',
                    title: 'Acessibilidade real',
                    description: 'Conformidade com WCAG 2.2 AA — seu site funciona para todo mundo, em todos os dispositivos.',
                },
                {
                    icon: 'lucide:rocket',
                    title: 'Stack moderna',
                    description: 'Next.js, Astro, Strapi, Vercel. Tecnologia atual, deploy contínuo e código bem documentado.',
                },
                {
                    icon: 'lucide:headphones',
                    title: 'Suporte de verdade',
                    description: 'Atendimento direto com quem desenvolveu o seu projeto. Sem terceirizar, sem call center.',
                },
            ],
        },
        {
            __component: 'sections.services-list',
            eyebrow: 'O que fazemos',
            title: 'Serviços',
            subtitle: 'Do site institucional ao SaaS completo — entregamos a solução web que sua empresa precisa.',
            services: services.map((s) => s.documentId),
        },
        {
            __component: 'sections.process',
            eyebrow: 'Como trabalhamos',
            title: 'Um processo claro, do briefing ao deploy.',
            subtitle: 'Você sempre sabe em que etapa está o seu projeto — sem caixas-pretas.',
            steps: [
                {
                    stepNumber: 1,
                    title: 'Briefing e estratégia',
                    description: 'Entendemos seu negócio, público e objetivos. Definimos escopo, prazo e métricas de sucesso.',
                    icon: 'lucide:compass',
                },
                {
                    stepNumber: 2,
                    title: 'Design e protótipo',
                    description: 'Wireframes e protótipos em Figma com aprovação iterativa antes de uma única linha de código.',
                    icon: 'lucide:figma',
                },
                {
                    stepNumber: 3,
                    title: 'Desenvolvimento',
                    description: 'Sprints semanais com entregas visíveis em ambiente de homologação. Você acompanha tudo.',
                    icon: 'lucide:code-2',
                },
                {
                    stepNumber: 4,
                    title: 'Lançamento e otimização',
                    description: 'Deploy, testes finais, analytics e SEO. Depois, otimizamos com base em dados reais.',
                    icon: 'lucide:rocket',
                },
            ],
        },
        {
            __component: 'sections.portfolio',
            eyebrow: 'Cases recentes',
            title: 'Projetos que nos deixam orgulhosos.',
            subtitle: 'Uma seleção dos últimos trabalhos entregues pela productsm3.',
            projects: projects.map((p) => p.documentId),
        },
        {
            __component: 'sections.testimonials',
            eyebrow: 'Depoimentos',
            title: 'O que nossos clientes dizem.',
            subtitle: 'Confiança construída projeto por projeto.',
            testimonials: testimonials.map((t) => t.documentId),
        },
        {
            __component: 'sections.faq',
            title: 'Perguntas frequentes',
            subtitle: 'Dúvidas comuns de quem está pensando em contratar a gente.',
            items: [
                {
                    question: 'Quanto custa um site com a productsm3?',
                    answer: 'O investimento varia conforme o escopo. Sites institucionais começam em R$ 9.000. Landing pages a partir de R$ 4.500. SaaS são orçados por sprint. Após o briefing inicial, enviamos uma proposta detalhada.',
                },
                {
                    question: 'Quanto tempo leva para entregar um projeto?',
                    answer: 'Landing pages ficam prontas em 2 a 3 semanas. Sites institucionais entre 4 e 8 semanas. Projetos de SaaS variam — em média começam a rodar em produção em 8 a 12 semanas.',
                },
                {
                    question: 'Vocês oferecem hospedagem?',
                    answer: 'Sim. Usamos Vercel, Cloudflare e AWS como padrão. Cuidamos do deploy, do domínio e do SSL. Você pode optar por usar a nossa infra ou hospedar com seu provedor.',
                },
                {
                    question: 'E depois que o site entra no ar?',
                    answer: 'Oferecemos um plano mensal de manutenção opcional: atualizações, monitoramento, backups, ajustes e melhorias contínuas de performance e SEO.',
                },
                {
                    question: 'Posso editar os textos e imagens sozinho?',
                    answer: 'Sim. Entregamos com um CMS amigável (Strapi, Sanity ou WordPress headless, conforme o caso). Sua equipe edita sem precisar de desenvolvedor.',
                },
            ],
        },
        {
            __component: 'sections.cta',
            title: 'Pronto para colocar seu projeto no ar?',
            description: 'Conte para a gente o que você precisa. Em até 24h respondemos com próximos passos e estimativa inicial.',
            primaryCta: {
                label: 'Solicitar orçamento',
                url: '#contato',
                variant: 'primary',
                external: false,
            },
            secondaryCta: {
                label: 'Falar no WhatsApp',
                url: 'https://wa.me/5511999990000',
                variant: 'outline',
                external: true,
            },
        },
        {
            __component: 'sections.contact-form',
            eyebrow: 'Contato',
            title: 'Vamos conversar sobre o seu projeto.',
            subtitle: 'Preencha o formulário e nossa equipe entra em contato em até 24 horas úteis.',
            submitLabel: 'Enviar mensagem',
            successMessage: 'Recebemos sua mensagem. Em breve nossa equipe entra em contato!',
        },
    ];
    await strapi.documents('api::landing-page.landing-page').create({
        data: {
            seo: {
                metaTitle: 'productsm3 — Sites, landing pages e SaaS sob medida',
                metaDescription: 'Estúdio de produtos digitais especializado em sites institucionais, landing pages, e-commerces e SaaS. Design, performance e SEO de ponta.',
                keywords: 'criação de sites, landing page, e-commerce, saas, desenvolvimento web, agência digital',
                preventIndexing: false,
            },
            sections,
        },
        status: 'published',
    });
    strapi.log.info(`[seed] landing-page criada com ${sections.length} seções.`);
}
async function runSeed(strapi) {
    await seedServices(strapi);
    await seedProjects(strapi);
    await seedTestimonials(strapi);
    await seedGlobal(strapi);
    await seedLandingPage(strapi);
}
exports.runSeed = runSeed;
