import colors from 'vuetify/es5/util/colors'
import id from 'vuetify/es5/locale/id'
import en from 'vuetify/es5/locale/en'
const webpack = require('webpack')
const jQueryPath = 'jquery/dist/jquery.js'
const env = require('dotenv').config()

export default {
  mode: 'universal',
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Inverview Test',
    title: 'Inverview Test',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        property: 'fb:pages',
        content: '331865743815422'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: {
            url: '/api/admin/logout',
            method: 'get'
          },
          user: {
            url: 'checklist',
            method: 'get',
            propertyName: ''
          },
          tokenRequired: true,
          autoFetchUser: false
        }
      }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    name: 'circle',
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '@/assets/css/custom.css',
      lang: 'css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    {
      src: '~/plugins/tiptap-vuetify',
      ssr: false
    },
    {
      src: '~/plugins/telinput.js',
      ssr: false
    },
    {
      src: '~/plugins/apexChart.js',
      ssr: false
    },
    {
      src: '~/plugins/croppie.js',
      ssr: false
    },
    {
      src: '~/plugins/croppa.js',
      ssr: false
    },
    {
      src: '~/plugins/localcomponent.js',
      ssr: false
    },
    // {
    //     src: '~/plugins/vee-validate'
    // },
    {
      src: '~/plugins/dateTimePicker.js',
      ssr: false
    },
    {
      src: '~/plugins/trumbowyg.js',
      ssr: false
    },
    {
      src: '~/plugins/dropzone.js',
      ssr: false
    },
    {
      src: '~/plugins/axios',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: env.API_URL
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    lang: {
      locales: { id, en },
      current: 'id'
    },
    theme: {
      dark: false,
      themes: {
        primary: '#363FA0',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery'],
    transpile: ['@nuxtjs/auth', 'vee-validate/dist/rules'],
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        jQuery: jQueryPath,
        $: jQueryPath,
        'window.jQuery': jQueryPath,
        _: 'lodash'
      })
    ]
  },
  router: {
    middleware: ['auth']
  }
}
