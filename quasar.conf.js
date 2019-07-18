// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

const path = require('path')
const fs = require('fs')

const serverPort = process.env.PORT || process.env.HTTPS_PORT || 8081
const clientPort = process.env.CLIENT_PORT || process.env.HTTPS_CLIENT_PORT || 8080

// Load config based on current NODE_ENV, etc.
const clientConfig = require('config')
// Write JSON config
fs.writeFileSync(path.join('config', 'client-config.json'), JSON.stringify(clientConfig))

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'events',
      'api',
      'i18n'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      components: [
        'QAjaxBar',
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QResizeObserver',
        'QBtn',
        'QTooltip',
        'QIcon',
        'QChip',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QExpansionItem',
        "QCard",
        "QCardSection",
        "QCardActions"
      ],

      directives: [
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'Notify'
      ]
    },

    supportIE: false,

    build: {
      env: ctx.dev ? { // so on dev we'll have
        NODE_ENV: '"development"'
      } : { // and on build (production):
        NODE_ENV: '"production"'
      },
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.resolve.modules = [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules')
        ],
        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing aliases
          '@': path.resolve(__dirname, './src/components'),
          config: path.resolve(__dirname, './config/client-config.json')
        }
      }
    },

    devServer: {
      port: clientPort,
      proxy: {
        '/api': {
          target: 'http://localhost:' + serverPort,
          changeOrigin: true,
          logLevel: 'debug'
        },
        '/apiws': {
          target: 'http://localhost:' + serverPort,
          changeOrigin: true,
          ws: true,
          logLevel: 'debug'
        }
      },
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        name: 'Kano',
        short_name: 'Kano',
        description: 'A Geospatial Data Explorer',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'com.kalisio.titi',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack        
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'titi'
      }
    }
  }
}
