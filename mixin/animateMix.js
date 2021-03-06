import { gsap } from "gsap";
export default {
  data() {
    return {
      fadeUpIn: null,
      fadeUpIn2: null,
    };
  },
  mounted() {
    // if (process.browser) {
    //   this.wowContainer = new WOW({
    //     live: false,
    //     offset: 0,
    //   });
    //   this.wowContainer.init();
    // }
    this.fadeUpIn = gsap.from(".fadeInUp", {
      transform: 'translateY(200px)',
      duration: .8,
      opacity: 0,
    });
    this.fadeUpIn2 = gsap.from(".fadeInUp2", {
      transform: 'translateY(200px)',
      duration: .8,
      opacity: 0,
      delay: 1.2,
    });
  },
};
