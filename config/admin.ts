import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env.array('CLIENT_URL', [env('CLIENT_URL', '')]),
      async handler(uid, { documentId, locale, status }) {
        const previewUrl = new URL('/api/preview', env('CLIENT_URL'));
        previewUrl.searchParams.set('secret', env('PREVIEW_SECRET'));

        const slugByUid: Record<string, string> = {
          'api::landing-page.landing-page': '/',
          'api::global.global': '/',
          'api::project.project': '/#portfolio',
          'api::service.service': '/#servicos',
          'api::testimonial.testimonial': '/#depoimentos',
        };

        previewUrl.searchParams.set('slug', slugByUid[uid] ?? '/');
        return previewUrl.href;
      },
    },
  },
});

export default config;
