module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/abstracts/_variables.scss"; @import "@/styles/abstracts/_mixins.scss"; @import "@/styles/base/_utilities.scss";',
      },
    },
  },
};
