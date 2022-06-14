<template>
  <Card class="flex items-center">
    <div class="flex justify-between main fadeInUp">
      <div class="swiper-box">
        <swiper class="wrapper" :options="swiperOption" ref="swiper1"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart">
          <swiper-slide v-for="(item, index) in imglist" :key="index">
            <img class="slider" :src="item" />
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-wrapper" slot="pagination"></div>
        </swiper>
        <div class="swiper-title">{{ titlelist[wpli] }}</div>
      </div>
      <div @mousewheel.stop="">
        <swiper :options="swiperOption2" ref="swiper2" class="swiper-main"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart2">
          <swiper-slide>
            <div class="main-data" ref="data">
              <div class="data-title">
                智慧园区<span style="margin-left: 5px;">(运用大数据、物联网、信息管理等技术，打造智慧互联的园区。)</span>
              </div>
              <div class="data-text line-height-1-5">
                重庆瞰图科技有限公司
                数字孪生园区平台，为泛园区行业提供数字化转型新动力，覆盖初期规划、营销展示、建设监管、物业运营的园区全生命周期。
              </div>
              <div class="fc">
                <div class="div1" @click="showToast">
                  <img src="@/assets/images/main/连接.png" alt="" />某投资控股智慧园区
                </div>
                <a href="https://www.kantu3d.com/demo/2205/tuowei/dist/" target="_blank" rel="noopener noreferrer"
                  class="div2">
                  <img src="@/assets/images/main/连接.png" alt="" />某园区大数据平台
                </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="main-data">
              <div class="data-title">
                工业制造<span style="margin-left: 5px;">(监测工厂产线，展示mes信息； 提高产能效益)</span>
              </div>
              <div class="data-text line-height-1-5">
                工业制造是现代工厂信息化发展晋级的阶段性成果，是建立在数字化工厂的基础上的升级，利用物联网和设备监控等技术加强信息管理和服务能力，集智能化设备、技术、系统为一体，实现高效、高控生产，减少人工干预，合理规划/优化生产进度等环节，构建智能高效、节能环保的智慧工厂
              </div>
              <div class="fc">
                <div class="div1" @click="showToast">
                  <img src="@/assets/images/main/连接.png" alt="" />某迪产线数据可视化中心
                </div>
                <!-- <a
                  href="https://www.kantu3d.com/demo/2205/BYD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="div1"
                >
                </a> -->
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="main-data">
              <div class="data-title">
                智慧工地<span style="margin-left: 5px;">(协同工地建设管理，集成物联网技术监管)</span>
              </div>
              <div class="data-text line-height-1-5">
                以工地大模型 、工地大数据 、工地大协同
                、应用碎片化为标准，积极布局钢筋翻样、精细管理、材料管理等成熟领域，开拓三维工地、模架产品、劳务验收、云资料等孵化产品，并延伸到智能安全帽、工地平板等施工业务硬件领域。实现工地联合监管。
              </div>
              <div class="fc">
                <div class="div1" @click="showToast">
                  <img src="@/assets/images/main/连接.png" alt="" />中科院·科学中心一期工程
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="main-data">
              <div class="data-title">
                智慧能源<span style="margin-left: 5px;">(从原料到成品全链展示，提升 各环节安全系数)</span>
              </div>
              <div class="data-text line-height-1-5">
                智慧能源基于云计算、移动互联网、大数据等先进技术,通过采集各类能耗监测点的用能数据,经过专业的数据分析处理形成对能耗的分类、分项、分时、分区域的统计分析,并通过三维可视化技术,让企业实现对能源使用的全面数字化和可视化,直观发现用能改进优化点,进而帮助企业优化能源使用,降低企业综合能耗,达到节能增效的目的。
              </div>
              <div class="fc">
                <a href="https://www.kantu3d.com/demo/2111/gasGatheringStation/" target="_blank"
                  rel="noopener noreferrer" class="div1">
                  <img src="@/assets/images/main/连接.png" alt="" />天然气站大数据平台
                </a>
                <a href="https://www.kantu3d.com/demo/2201/dx/" target="_blank" rel="noopener noreferrer" class="div1">
                  <img src="@/assets/images/main/连接.png" alt="" />北京大兴油库可视化平台
                </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="main-data">
              <div class="data-title">
                航天航空<span style="margin-left: 5px;">(同步机场业态信息，有序管控 航班流量)</span>
              </div>
              <div class="data-text line-height-1-5">
                通过数字孪生还原机场业态，虚拟规划、仿真航班出入境流量状态。通过IOT设备查看实时工作画面，指挥中心高效、有序管理。
              </div>
              <a href="https://www.kantu3d.com/demo/aerospaceDemo/" target="_blank" rel="noopener noreferrer"
                class="fc">
                <div class="div1">
                  <img src="@/assets/images/main/连接.png" alt="" />智慧航空可视化数据平台
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/base/Card.vue";
import toast from "@/mixin/toast";
// import animateMix from "@/mixin/animateMix.js";
export default {
  mixins: [toast],
  components: {
    Card,
  },
  data() {
    return {
      wpli: 0,
      imglist: [
        require("@/assets/images/main/zhyq.jpg"),
        require("@/assets/images/main/gyzz.jpg"),
        require("@/assets/images/main/zhgd.jpg"),
        require("@/assets/images/main/zhny.jpg"),
        require("@/assets/images/main/hthk.jpg"),
      ],
      titlelist: ["智慧园区", "工业制造", "智慧工地", "智慧能源", "航天航空"],
      swiperOption: {
        autoplay: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination.swiper-pagination-wrapper',
          clickable: true,
          bulletClass: 'my-bullet',//需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active',
        },
      },
      swiperOption2: {
        direction: 'vertical',
        mousewheel: true,
      },
      controlledSwiper: null
    };
  },
  methods: {
    getCss(el, css) {
      return el && window.getComputedStyle(el)[css];
    },
    onSwiperSlideChangeTransitionStart() {
      this.wpli = this.$refs.swiper1.$swiper.realIndex;
      this.$refs.swiper2.$swiper.slideTo(this.$refs.swiper1.$swiper.activeIndex)
    },
    onSwiperSlideChangeTransitionStart2() {
      this.wpli = this.$refs.swiper2.$swiper.realIndex;
      this.$refs.swiper1.$swiper.slideTo(this.$refs.swiper2.$swiper.activeIndex)
    }
  },
};
</script>

<style lang="less" scoped>
// .swiper {
//   width: 100%;
//   height: 37.75rem;
//   background-color: tomato;
//   border-radius: 1.25rem;
//   display: none;
// }
.main {
  margin-top: 6.75rem;
  flex: 1;
}

.mian {
  margin-top: 3.625rem;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 35.4375rem;
  border-radius: 1.25rem;
  padding-bottom: 3rem;
}

.slider {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #4d4d4d;
  transition: all 1s ease;
  border-radius: 1.25rem;
  text-align: center;
  line-height: 39.75rem;

  img {
    width: 100%;
    height: 100%;
  }
}

/deep/ .my-bullet {
  width: .75rem;
  height: .75rem;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-block;
  margin: 0 .1875rem;
}

/deep/ .my-bullet-active {
  background-color: #1a1a1a;
  border: .125rem solid #ffffff;
}

.swiper-title {
  width: 8.8125rem;
  height: 3rem;
  font-size: 1.5625rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #808080;
  padding-bottom: .625rem;
  text-align: center;
  margin: auto;
  margin-top: 1.875rem;
  transition: all 0.01s ease-in;
  // border-bottom: .125rem solid #808080;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 1.125rem;
  opacity: 0.75;
  line-height: 18.75rem;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
.flex {
  // align-items: flex-start;
}

.swiper-box {
  width: 57.625rem;
  height: 39.75rem;
  // background: #4d4d4d;
  border-radius: 1.25rem;
  // overflow: auto;
}

.swiper-main {
  width: 35.875rem;
  height: 39.75rem;
  // background-color: brown;
  transition: all 0.25s ease-in;
}

.main-data {
  width: 35.875rem;
  // height: 39.75rem;
  height: 100%;
  text-align: left;
  transition: all 0.25s ease-in;

  .data-title {
    margin-top: 3.625rem;
    font-size: 1.875rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;

    span {
      color: #b3b3b3;
      font-size: 1.125rem;
    }
  }

  .data-text {
    width: 35.875rem;
    font-size: .875rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
    margin-top: 3.625rem;
  }

  .fc {
    width: 19rem;
    height: 6.75rem;
    margin-top: 9.375rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    // margin-left: 16.625rem;;

    .div1,
    .div2 {
      // width: 9.375rem;
      height: 2.75rem;
      background: #4d4d4d;
      border-radius: 1.375rem;
      text-align: center;
      line-height: 2.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      padding: 0 .9375rem;
      font-size: .875rem;
      cursor: pointer;

      img {
        width: 1.1875rem;
        height: 1.4375rem;
        margin-right: .9375rem;
      }
    }

    .div3 {
      // width: 19.25rem;
      height: 2.75rem;
      background: #4d4d4d;
      border-radius: 1.375rem;
      font-size: .875rem;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .9375rem;

      img {
        width: 1.1875rem;
        height: 1.4375rem;
        margin-right: .9375rem;
      }
    }
  }

  .button {
    width: 11.875rem;
    height: 3.125rem;
    background: #1a1a1a;
    color: #fff;
    text-align: center;
    line-height: 3.125rem;
    box-shadow: 0rem 0rem 1.1875rem .0625rem rgba(255, 255, 255, 0.38);
    border-radius: .625rem;
    font-size: .875rem;
    font-family: Source Han Sans SC;
    font-weight: bold;
    transition: all 0.36s;
    margin-top: 5.5rem;
    margin-left: 1.125rem;
  }

  .button:hover {
    background-color: #fff;
    color: #1a1a1a;
    /* box-shadow:none; */
    transform: translateY(-0.3125rem);
  }
}
</style>