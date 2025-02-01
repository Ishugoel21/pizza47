module.exports = [
  'strapi::errors',
  'strapi::security',
<<<<<<< HEAD
=======
  'strapi::cors',
>>>>>>> 8c93e7ea04b898a25e3121a7b180dabbaf753efc
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://pizza12-five.vercel.app', 
        'https://pizza12-11vt4srm9-ishugoel21s-projects.vercel.app'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
