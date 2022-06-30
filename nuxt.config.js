import { resolve } from "path";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "瞰图",
    htmlAttrs: {
      lang: "cn",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "瞰图科技,webgl,canvas,瞰图,数字孪生,3d可视化,三维可视化,3维可视化,threejs,大数据可视化,web3d,瞰图科技官网" },
      { hid: "description", name: "description", content: "重庆瞰图科技有限公司是一家数字孪生平台公司，致力于可视化系统设计、三维虚拟仿真开发。本公司坚持以人才和技术为核心，以质量和服务为准则，以开发专业、优质、客户满意的产品为己任。重庆瞰图科技有限公司涉及可视化技术、数字孪生技术、可视化运行平台、数字孪生、三维场景管理、UI界面组件、3D产品展示、3D创意设计等多项技术。其中，代表案例有智慧园区、工业制造、智慧能源、航空航天。数据可视化，webgl" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      { src:'/flexible.js', type: 'text/javascript', charset: 'utf-8'}
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
    port:8000,
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
  router: {
    routes: [
      { name: 'index', path: '/', component: 'pages/Home/Main.vue' }
    ]
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
