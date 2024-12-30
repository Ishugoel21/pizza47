module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Ensure it listens on all available network interfaces
  port: env.int('PORT', process.env.PORT || 1337), // Dynamically use the port provided by Render
  url: env('PUBLIC_URL', process.env.PUBLIC_URL || 'http://localhost:1337/'), // Ensure PUBLIC_URL uses Render's environment variable if set
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: true, // Enable if behind a proxy (like Render or Azure App Service)
});
