"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = require("./seed");
const PUBLIC_READ = [
    { uid: 'api::landing-page.landing-page', actions: ['find'] },
    { uid: 'api::global.global', actions: ['find'] },
    { uid: 'api::service.service', actions: ['find', 'findOne'] },
    { uid: 'api::project.project', actions: ['find', 'findOne'] },
    { uid: 'api::testimonial.testimonial', actions: ['find', 'findOne'] },
];
const PUBLIC_WRITE = [
    { uid: 'api::lead.lead', actions: ['create'] },
];
async function setPublicPermissions(strapi) {
    const publicRole = await strapi.db
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });
    if (!publicRole)
        return;
    const desired = [];
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
exports.default = {
    register() { },
    async bootstrap({ strapi }) {
        try {
            await setPublicPermissions(strapi);
        }
        catch (err) {
            strapi.log.warn(`[bootstrap] Falha ao configurar permissões públicas: ${err.message}`);
        }
        if (process.env.SEED !== 'false') {
            try {
                await (0, seed_1.runSeed)(strapi);
            }
            catch (err) {
                strapi.log.warn(`[bootstrap] Falha no seed: ${err.message}`);
            }
        }
    },
};
