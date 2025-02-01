<<<<<<< HEAD
module.exports = {
  upload: {
    provider: 'local', // Use the local file system for image storage
    providerOptions: {
      sizeLimit: 50000000, // Set the file size limit to 50 MB (50 * 1024 * 1024)
    },
  },
};
=======
require('dotenv').config();
const cloudinary = require('cloudinary').v2; // Assuming you're using Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
>>>>>>> d009c98fb05893330afc10f098184c733673e1b5
