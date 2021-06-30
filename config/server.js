module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3001),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "4bd1a5bf96f79197553eed074f85ad90"),
    },
  },
});
