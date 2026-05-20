import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_infos';
  info: {
    displayName: 'Informa\u00E7\u00F5es de Contato';
    icon: 'address-card';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: 'Rodap\u00E9 do site';
    displayName: 'Footer';
    icon: 'window-minimize';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.nav-link', true>;
    logo: Schema.Attribute.Media<'images'>;
    socialLinks: Schema.Attribute.Component<'shared.nav-link', true>;
    tagline: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: 'Cabe\u00E7alho do site';
    displayName: 'Header';
    icon: 'window-maximize';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    links: Schema.Attribute.Component<'shared.nav-link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    description: 'Se\u00E7\u00E3o com formul\u00E1rio para captura de leads';
    displayName: 'Formul\u00E1rio de Contato';
    icon: 'envelope';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    submitLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Enviar'>;
    subtitle: Schema.Attribute.Text;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Recebemos sua mensagem. Em breve entraremos em contato.'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Se\u00E7\u00E3o de chamada para a\u00E7\u00E3o';
    displayName: 'CTA';
    icon: 'bullhorn';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    description: Schema.Attribute.Text;
    primaryCta: Schema.Attribute.Component<'shared.button', false>;
    secondaryCta: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: 'Perguntas frequentes';
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Perguntas frequentes'>;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: 'Item individual de feature/benef\u00EDcio';
    displayName: 'Feature';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    description: 'Se\u00E7\u00E3o com grade de benef\u00EDcios/diferenciais';
    displayName: 'Grade de Features';
    icon: 'grid';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'sections.feature', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Se\u00E7\u00E3o principal acima da dobra';
    displayName: 'Hero';
    icon: 'rocket';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    primaryCta: Schema.Attribute.Component<'shared.button', false>;
    secondaryCta: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_sections_portfolios';
  info: {
    description: 'Se\u00E7\u00E3o de cases/projetos realizados';
    displayName: 'Portf\u00F3lio';
    icon: 'images';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_processes';
  info: {
    description: 'Como funciona / metodologia em etapas';
    displayName: 'Processo';
    icon: 'diagram-project';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'sections.process-step', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'Etapa do Processo';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServicesList extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_lists';
  info: {
    description: 'Se\u00E7\u00E3o que exibe servi\u00E7os oferecidos';
    displayName: 'Lista de Servi\u00E7os';
    icon: 'briefcase';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    displayName: 'Estat\u00EDstica';
    icon: 'chart-bar';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    description: 'Se\u00E7\u00E3o com m\u00E9tricas/n\u00FAmeros da empresa';
    displayName: 'Estat\u00EDsticas';
    icon: 'chart-pie';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    items: Schema.Attribute.Component<'sections.stat-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    description: 'Se\u00E7\u00E3o com depoimentos de clientes';
    displayName: 'Depoimentos';
    icon: 'quote-right';
  };
  attributes: {
    appearance: Schema.Attribute.Component<'shared.appearance', false>;
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAppearance extends Struct.ComponentSchema {
  collectionName: 'components_shared_appearances';
  info: {
    description: 'Controles visuais reutiliz\u00E1veis: tema, alinhamento, largura, espa\u00E7amento e fundo';
    displayName: 'Apar\u00EAncia';
    icon: 'paint-brush';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    backgroundColor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'images'>;
    hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    spacing: Schema.Attribute.Enumeration<['none', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'lg'>;
    theme: Schema.Attribute.Enumeration<
      ['light', 'dark', 'primary', 'accent', 'muted']
    > &
      Schema.Attribute.DefaultTo<'light'>;
    variant: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['narrow', 'default', 'wide', 'full']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'Bot\u00E3o / CTA reutiliz\u00E1vel';
    displayName: 'Bot\u00E3o';
    icon: 'cursor';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Link de Navega\u00E7\u00E3o';
    icon: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Metadados para SEO';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.contact-info': LayoutContactInfo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'sections.contact-form': SectionsContactForm;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.faq-item': SectionsFaqItem;
      'sections.feature': SectionsFeature;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.hero': SectionsHero;
      'sections.portfolio': SectionsPortfolio;
      'sections.process': SectionsProcess;
      'sections.process-step': SectionsProcessStep;
      'sections.services-list': SectionsServicesList;
      'sections.stat-item': SectionsStatItem;
      'sections.stats': SectionsStats;
      'sections.testimonials': SectionsTestimonials;
      'shared.appearance': SharedAppearance;
      'shared.button': SharedButton;
      'shared.nav-link': SharedNavLink;
      'shared.seo': SharedSeo;
    }
  }
}
