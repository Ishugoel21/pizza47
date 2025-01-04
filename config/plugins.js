module.exports = {
  upload: {
    provider: 'local', // Use the local file system for image storage
    providerOptions: {
      sizeLimit: 50000000, // Set the file size limit to 50 MB (50 * 1024 * 1024)
    },
  },
};
