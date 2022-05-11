<template>
  <Card>
    <div class="flex justify-between main">
      <div class="swiper-box">
        <swiper :options="swiperMain" :style="{ height: pageHeight2 + 'px' }">
          <swiper-slide v-for="(item, index) in 2" :key="index">
            <div class="back-card">
              {{ item }}
            </div>
          </swiper-slide>
          <div class="swiper-pagination2" slot="pagination"></div>
        </swiper>
      </div>
      <div ref="swiper" class="swiper-main" @wheel.stop @scroll="scrollsp">
        <div class="main-data">
          <div class="data-title">
            智慧园区<span>(各类园区三维场景与园区各业态系统结合)</span>
          </div>
          <div class="data-text">
            智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、物联网(IOT)、大数据分析等新一代信息技术进行整合；将园区运营、楼宇、安防、业务、能耗等，通过可视化管理方式，实时、动态、直观的对园区内建筑设备从宏观到微观进行全方位管理。
          </div>
          <div class="fc">
            <div class="div1">绵阳高新区</div>
            <div class="div2">绵阳高新区</div>
            <div class="div3">绵阳新兴投资控股智慧园区领导驾驶舱</div>
          </div>
          <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div>
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧园区1<span>(各类园区三维场景与园区各业态系统结合)</span>
          </div>
          <div class="data-text">
            智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、物联网(IOT)、大数据分析等新一代信息技术进行整合；将园区运营、楼宇、安防、业务、能耗等，通过可视化管理方式，实时、动态、直观的对园区内建筑设备从宏观到微观进行全方位管理。
          </div>
          <div class="fc">
            <div class="div1">绵阳高新区</div>
            <div class="div2">绵阳高新区</div>
            <div class="div3">绵阳新兴投资控股智慧园区领导驾驶舱</div>
          </div>
          <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div>
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧园区2<span>(各类园区三维场景与园区各业态系统结合)</span>
          </div>
          <div class="data-text">
            智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、物联网(IOT)、大数据分析等新一代信息技术进行整合；将园区运营、楼宇、安防、业务、能耗等，通过可视化管理方式，实时、动态、直观的对园区内建筑设备从宏观到微观进行全方位管理。
          </div>
          <div class="fc">
            <div class="div1">绵阳高新区</div>
            <div class="div2">绵阳高新区</div>
            <div class="div3">绵阳新兴投资控股智慧园区领导驾驶舱</div>
          </div>
          <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div>
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧园区3<span>(各类园区三维场景与园区各业态系统结合)</span>
          </div>
          <div class="data-text">
            智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、物联网(IOT)、大数据分析等新一代信息技术进行整合；将园区运营、楼宇、安防、业务、能耗等，通过可视化管理方式，实时、动态、直观的对园区内建筑设备从宏观到微观进行全方位管理。
          </div>
          <div class="fc">
            <div class="div1">绵阳高新区</div>
            <div class="div2">绵阳高新区</div>
            <div class="div3">绵阳新兴投资控股智慧园区领导驾驶舱</div>
          </div>
          <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div>
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧园区4<span>(各类园区三维场景与园区各业态系统结合)</span>
          </div>
          <div class="data-text">
            智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、物联网(IOT)、大数据分析等新一代信息技术进行整合；将园区运营、楼宇、安防、业务、能耗等，通过可视化管理方式，实时、动态、直观的对园区内建筑设备从宏观到微观进行全方位管理。
          </div>
          <div class="fc">
            <div class="div1">绵阳高新区</div>
            <div class="div2">绵阳高新区</div>
            <div class="div3">绵阳新兴投资控股智慧园区领导驾驶舱</div>
          </div>
          <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div>
        </div>
        <!-- <div class="main-data">2</div>
        <div class="main-data">3</div>
        <div class="main-data">4</div>
        <div class="main-data">5</div> -->
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/base/Card.vue";
import animateMix from "@/mixin/animateMix.js";
export default {
  mixins: [animateMix],
  components: {
    Card,
  },
  data() {
    return {
      swiperMain: {
        speed: 1500,
        height: 960,
        direction: "vertical",
        origin: "left bottom",
        // // 设置分页器
        pagination: {
          el: ".swiper-pagination2",
          // 设置点击可切换
          clickable: true,
        },
      },
      pageHeight2: 636,
    };
  },
  mounted() {
    // console.log(this.$refs.swiper.body.scrollTop);
  },
  methods: {
    scrollsp(e) {
      console.log(e.target.scrollTop);
    },
  },
};
</script>

<style lang="less" scoped>
.flex{
  height:100vh;
}
.swiper-box {
  width: 922px;
  height: 636px;
  background: #4d4d4d;
  border-radius: 20px;
  // overflow: auto;
}
.swiper-main {
  width: 35.875rem;
  height: 100%;
  // background-color: brown;
  overflow: auto;
}
.main-data {
  width: 35.875rem;
  // height: 39.75rem;
  height: 100%;
  text-align: right;
  .data-title {
    margin-top: 58px;
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
    span {
      color: #b3b3b3;
      font-size: 18px;
    }
  }
  .data-text {
    width: 574px;
    height: 63px;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
    margin-top: 3.625rem;
  }
  .fc {
    width: 18.75rem;
    height: 6.75rem;
    margin-top: 9.375rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    margin-left: 266px;

    .div1,
    .div2 {
      width: 140px;
      height: 44px;
      background: #4d4d4d;
      border-radius: 22px;
      text-align: center;
      line-height: 2.75rem;
    }
    .div3 {
      width: 308px;
      height: 44px;
      background: #4d4d4d;
      border-radius: 22px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      line-height: 44px;
    }
  }
  .button {
    width: 190px;
    height: 50px;
    background: #1a1a1a;
    color: #fff;
    text-align: center;
    line-height: 50px;
    box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
    border-radius: 10px;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    transition: all 0.36s;
    margin-top: 5.5rem;
    margin-left: 365px;
  }
  .button:hover {
    background-color: #fff;
    color: #1a1a1a;
    /* box-shadow:none; */
    transform: translateY(-0.3125rem);
  }
}
</style>