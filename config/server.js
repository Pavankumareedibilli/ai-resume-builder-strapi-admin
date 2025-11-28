module.exports = ({ env }) => ({
  url: env('RENDER_EXTERNAL_URL', 'http://localhost:1337'),
  admin: {
    url: env('RENDER_EXTERNAL_URL', 'http://localhost:1337'),
  },
});