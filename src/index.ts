import type { Core } from '@strapi/strapi';
import { runSeed } from './seed';

type PublicAction =
  | { uid: string; actions: string[] };

const PUBLIC_READ: PublicAction[] = [
  { uid: 'api::landing-page.landing-page', actions: ['find'] },
  { uid: 'api::global.global', actions: ['find'] },
  { uid: 'api::service.service', actions: ['find', 'findOne'] },
  { uid: 'api::project.project', actions: ['find', 'findOne'] },
  { uid: 'api::testimonial.testimonial', actions: ['find', 'findOne'] },
];

const PUBLIC_WRITE: PublicAction[] = [
  { uid: 'api::lead.lead', actions: ['create'] },
];

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) return;

  const desired: string[] = [];
  for (const { uid, actions } of [...PUBLIC_READ, ...PUBLIC_WRITE]) {
    for (const action of actions) {
      desired.push(`${uid}.${action}`);
    }
  }

  for (const actionId of desired) {
    const existing = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({ where: { action: actionId, role: publicRole.id } });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: { action: actionId, role: publicRole.id },
      });
    }
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await setPublicPermissions(strapi);
    } catch (err) {
      strapi.log.warn(`[bootstrap] Falha ao configurar permissões públicas: ${(err as Error).message}`);
    }

    if (process.env.SEED !== 'false') {
      try {
        await runSeed(strapi);
      } catch (err) {
        strapi.log.warn(`[bootstrap] Falha no seed: ${(err as Error).message}`);
      }
    }
  },
};
