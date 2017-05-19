const { join } = require('path');

module.exports = {
  srcDir: 'src/',
  loading: { color: '#3B8070' },
  css: [{ src: 'src/css/main.scss', lang: 'scss' }],
  plugins: ['plugins/bootstrap', 'plugins/vueForm'],
  build: {
    extractCSS: true,
    extend(config, { dev, isClient }) {
      config.resolve.alias.src = join(process.cwd(), 'src');

      if (isClient && !dev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    vendor: ['vue-class-component', 'bootstrap-vue'],
    babel: {
      presets: ['vue-app', 'stage-0', 'es2015'],
      plugins: ['transform-decorators-legacy', 'transform-class-properties'],
    },
  },

  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
};
