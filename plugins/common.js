import Vue from "vue";
import animateMix from "../mixin/animateMix";

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
