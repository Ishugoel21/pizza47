module.exports = {
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'cloudinary',  // Replace with your Cloudinary cloud name
      api_key: '728469492284454',        // Replace with your Cloudinary API key
      api_secret: 'bzGxWbxUNZpgMLEKWoZ0VnwYGzo'  // Replace with your Cloudinary API secret
      folder: 'strapi-media',         // Optional: Specify a folder name for organization
    },
  },
};
