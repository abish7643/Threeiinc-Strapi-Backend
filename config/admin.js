module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60acd3978b92cd8bbac3d63cf3eea8c6'),
  },
});
