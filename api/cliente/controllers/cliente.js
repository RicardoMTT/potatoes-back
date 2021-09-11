"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  updateClient: async (ctx) => {
    try {
      const data = ctx.request.body.input || ctx.request.body;
      const user = ctx.state.user;
      const client = await strapi.services.cliente.findOne({
        usuario: user.id,
      });

      const cliente = await strapi.services.cliente.update(
        {
          id: client.id,
        },
        {
          ...data.cliente,
        }
      );

      return cliente;
    } catch (error) {
      throw error;
    }
  },
  getProfile: async (ctx) => {
    try {
      const user = ctx.state.user;
      const ownerProfile = await strapi.services.cliente.findOne({
        usuario: user.id,
      });
      if (!ownerProfile) {
        return ctx.throw(404, "auth.no_profile");
      }
      return {
        cliente: ownerProfile,
      };
    } catch (error) {
      throw error;
    }
  },
};
