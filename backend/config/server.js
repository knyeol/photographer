module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "4d55f9e8cbea44142a08d2ab28e87fac"),
    },
  },
});
