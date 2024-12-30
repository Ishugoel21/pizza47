module.exports = [
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://pizza76.web.app', 
        'https://pizza76.firebaseapp.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
];
