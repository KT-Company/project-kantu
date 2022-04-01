<template>
  <div class="home">
    <main>
      <article>
        <swiper
          :options="swiperOptionMain"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          @reachEnd="reachEnd"
          :style="{ height: pageHeight + 'px' }"
          ref="swiper-main"
        >
          <swiper-slide v-for="(item, index) in swiperPages" :key="index">
            <div class="back-card">
              <component :is="swiperPages[index]" ref="child"></component>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>

          <!-- <div class="swiper-pagination swiper-pagination-main" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-main" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-main" slot="button-next"></div> -->
          <!-- <swiper-slide v-for="item in swiperDataMain" :key="item.index">
                <div class="swiper-item" :style="{ background: 'url(' + item.url + ')' }">
                  <transition name="slide-fade">
                    <p class="text">hello</p>
                  </transition>
                  <div class="darkback">
                    <div class="fadeInUp">111 111 111</div>
                  </div>
                  <div class="text fadeInUp2">{{ item.desc }}</div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div> -->
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
import Page1 from "@/components/Main/Page1.vue";
import Page2 from "@/components/Main/Page2.vue";
import Page3 from "@/components/Main/Page3.vue";
import animateMix from "@/mixin/animateMix.js";

export default {
  name: "Main",
  mixins: [animateMix],
  data() {
    return {
      // swiperDataMain: [
      //   {
      //     index: 1,
      //     url: "https://www.kantu3d.com/images/smartPark.png",
      //     desc: "desc1",
      //   },
      //   {
      //     index: 2,
      //     url: "https://www.kantu3d.com/images/industryFactory.png",
      //     desc:
      //       "desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2",
      //   },
      //   {
      //     index: 3,
      //     url: "https://www.kantu3d.com/images/substation.png",
      //     desc: "desc2desc2desc2desc2desc2descesc2desc2desc2desc2",
      //   },
      // ],
      swiperOptionMain: {
        speed: 1500,
        height: 960,
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
          // invert: true,
          releaseOnEdges: true,
        },
        on: {
          slideChangeTransitionEnd: () => {
            this.activeIndex;
          },
          reachEnd: () => {},
        },
      },
      fadeUpIn: null,
      fadeUpIn2: null,
      swiperPages: ["Page1", "Page2", "Page3"],
      pageHeight: 960,
    };
  },
  components: {
    Card,
    Page1,
    Page2,
    Page3,
  },
  mounted() {
    if (process.browser) {
      this.pageHeight = window.innerHeight;
      this.swiperOptionMain = {
        speed: 1500,
        height: this.pageHeight,
        direction: "vertical",
        origin: "left bottom",
        pagination: {
          el: ".swiper-pagination",
          // 设置点击可切换
          clickable: true,
        },
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          // modifier: 0,
        },

        allowTouchMove: false,
        on: {
          slideChangeTransitionEnd: () => {
            this.activeIndex;
          },
          reachEnd: () => {},
        },
      };
      // debugger
      this.$refs["swiper-main"].updateSwiper;
    }
  },
  methods: {
    onSwiper() {},
    onSlideChange() {
      let index = this.$refs["swiper-main"].$swiper.activeIndex;
      // this.fadeUpIn.delay(1).restart();
      // this.fadeUpIn2.delay(2.2).restart();
      // let _this = this;
      // if (_this.wowContainer) {
      //   setTimeout(() => {
      //     _this.wowContainer.stop();
      //     _this.wowContainer = new WOW({
      //       live: false,
      //       offset: 0,
      //     });
      //     _this.wowContainer.init();
      //   }, 0);
      // }
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
    reachEnd() {},
  },
};
</script>
