module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93635782e982b6129f2200b2f06db862'),
  },
});
