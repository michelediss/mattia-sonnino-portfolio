const webpack = require('webpack');

module.exports = {
  // Configura il publicPath per GitHub Pages
  publicPath: process.env.NODE_ENV === "production"
    ? "/mattia-sonnino-portfolio/"
    : "/",

  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        // Assicurati che compilerOptions esista
        options.compilerOptions = options.compilerOptions || {};
        return options;
      });
  },

  // Aggiungi configurazioni Webpack aggiuntive
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // Assicura che l'API delle opzioni di Vue sia disponibile
        __VUE_PROD_DEVTOOLS__: false, // Disabilita gli strumenti di sviluppo Vue in produzione
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // Disabilita il controllo del mismatch di hydration
      }),
    ],
  },
};
