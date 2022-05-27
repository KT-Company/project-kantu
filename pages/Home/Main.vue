<template>
  <div class="home" @wheel="homeWheel">
    <main>
      <article>
        <swiper
          :options="swiperOptionMain"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          @transitionEnd="transitionEnd"
          :style="{ height: pageHeight + 'px' }"
          ref="swiper-main"
        >
          <swiper-slide v-for="(item, index) in swiperPages" :key="index">
            <div class="back-card">
              <component :is="swiperPages[index]" ref="child"></component>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </article>
    </main>
  </div>
</template>
<style scoped>
.home {
  flex: 1;
  height: 100%;
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import { Page1, Page2, Page3, Page4, Page5, Page6 } from "@/components/Main";
import Footer from "@/components/Footer.vue";
import animateMix from "@/mixin/animateMix.js";
export default {
  name: "Main",
  mixins: [animateMix],
  data() {
    return {
      isPageEnd: false,
      idx: 0,
      swiperOptionMain: {
        speed: 1500,
        height: 1080,
        direction: "vertical",
        origin: "left bottom",
        // // 设置分页器
        pagination: {
          el: ".swiper-pagination",
          // 设置点击可切换
          clickable: true,
        },
        // // 设置前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-main.swiper-button-next",
        //   prevEl: ".swiper-button-main.swiper-button-prev",
        // },
        // 切换特效
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          // modifier: 0,
        },
        // 设置自动轮播
        // autoplay: {
        //   delay: 5000, // 5秒切换一次
        // },
        // 设置轮播可循环
        // loop: true,
        allowTouchMove: false,
        mousewheel: {
          //   invert: true,
          releaseOnEdges: true,
        },
        on: {
          slideChangeTransitionEnd: () => {
            this.activeIndex;
          },
        },
      },
      fadeUpIn: null,
      fadeUpIn2: null,
      swiperPages: ["Page1", "Page2", "Page3", "Page4", "Page5", "Page6"],
      pageHeight: 1080,
    };
  },
  components: { Card, Page1, Page2, Page3, Page4, Page5, Page6, Footer },
  created() {},
  watch: {
    idx(newValue, oldValue) {
      console.log(newValue);
      if (newValue < 5) {
        this.isPageEnd = false;
        console.log(this.isPageEnd);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },
  },
  mounted() {
    if (this.idx < 5) {
      this.isPageEnd = false;
      console.log(this.isPageEnd);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    // if (process.browser) {
    //   this.pageHeight = window.innerHeight;
    //   this.swiperOptionMain = {
    //     speed: 1500,
    //     height: this.pageHeight,
    //     direction: "vertical",
    //     origin: "left bottom",
    //     pagination: {
    //       el: ".swiper-pagination",
    //       // 设置点击可切换
    //       clickable: true,
    //     },
    //     effect: "coverflow",
    //     coverflowEffect: {
    //       rotate: 0,
    //       // modifier: 0,
    //     },
    //     allowTouchMove: false,
    //     on: {
    //       slideChangeTransitionEnd: () => {
    //         this.activeIndex;
    //       },
    //       // reachEnd: () => {},
    //     },
    //   };
    //   this.$refs["swiper-main"].updateSwiper();
    // }
  },
  methods: {
    onSwiper() {},
    onSlideChange(...args) {
      console.log("change args: ", args);
      let index = this.$refs["swiper-main"].$swiper.activeIndex;
      this.idx = index;
      this.$nextTick(() => {
        if (this.$refs.child[index]?.handleSlideChange)
          this.$refs.child[index].handleSlideChange();
        this.fadeUpIn.restart().delay(1);
        this.fadeUpIn2.restart().delay(2.2);
      });
    },
    testChange(e) {
      return e;
    },
    transitionEnd(...args) {
      if (this.idx === 5) {
        this.isPageEnd = true;
        console.log("transitionend args: ", args);
      }
    },
    homeWheel(ev) {
      if (!this.isPageEnd) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
  },
};
</script>
