module.exports = {
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Use the environment variable
      api_key: process.env.CLOUDINARY_API_KEY,        // Use the environment variable
      api_secret: process.env.CLOUDINARY_API_SECRET,  // Use the environment variable
      folder: 'strapi-media',                         // Optional: Specify a folder name for organization
    },
  },
};
