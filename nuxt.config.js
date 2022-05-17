import { resolve } from "path";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "瞰图",
    htmlAttrs: {
      lang: "cn",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "~assets/style/theme.less", lang: "less" },
    { src: "~assets/style/animate.css", lang: "css" },
    // { src: 'wowjs/css/libs/animate.css', lang: 'css' },
    "element-ui/lib/theme-chalk/index.css",
  ],
  server: {
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/element-ui.js", ssr: true },
    // { src: '~/plugins/wow.js', ssr: false },
    { src: "~/plugins/swiper.js", ssr: true },
    { src: "~/plugins/common.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
  },
  vender: ["element-ui"],
  alias: {
    "@": resolve(__dirname, "./"),
  },
  // router:{
  //   extendRoutes(routes,resolve){
  //     routes.splice(0)
  //     routes.push({
  //       path:"/",
  //       name:"Home",
  //       component:resolve(__dirname,'pages/home/index')
  //     })
  //   }
  // }

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://kantu3d.com/api', // 你的接口服务器地址，以我自己的项目
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
};
