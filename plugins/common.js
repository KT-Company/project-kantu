import Vue from "vue";
import animateMix from "../mixin/animateMix";
// var _hmt = _hmt || [];
// (function() {
//   console.log('############')
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?bf77978f029077f7fe6bef22480e278f";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();
var comsys = {
  install(Vue) {
    // Vue.prototype.comsys = {
    //   val: function (val) {
    //     return val;
    //   },
    // };
    // Vue.mixin(animateMix);
  },
};
Vue.use(comsys);
