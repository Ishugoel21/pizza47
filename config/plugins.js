module.exports = {
  upload: {
    provider: 'local',
    providerOptions: {
      sizeLimit: 50000000, // Set the max file size limit (10 MB in this case)
    },
  },
};
