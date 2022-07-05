module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/base/_variables.scss";
          @import "@/assets/scss/base/_mixin.scss";
          @import "@/assets/scss/layout/_structure.scss";
        `,
      },
    },
  },
};
