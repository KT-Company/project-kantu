<template>
  <Card>
    <div class="flex justify-between main">
      <div class="swiper-box fadeInUp2">
        <div class="wrapper">
          <div
            class="slider"
            :class="{ action: index === wpli }"
            v-for="(item, index) in 5"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <ul class="swiper-bottom">
          <li
            v-for="(item, index) in 5"
            :key="index"
            @click="handleli(index)"
            :class="wpli === index ? 'active' : ''"
          ></li>
        </ul>
        <div class="swiper-title">{{ titlelist[wpli] }}</div>
      </div>
      <div class="swiper-main fadeInUp" @wheel.stop @scroll="scrollsp" ref="sm">
        <div class="main-data" ref="data">
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
// import animateMix from "@/mixin/animateMix.js";
export default {
  // mixins: [animateMix],
  components: {
    Card,
  },
  data() {
    return {
      wpli: 0,
      titlelist:["智慧园区","智慧园区1","智慧园区2","智慧园区3","智慧园区4"]
    };
  },
  mounted() {},
  methods: {
    getCss(el, css) {
      return el && window.getComputedStyle(el)[css];
    },
    scrollsp(e) {
      console.log(e.target.scrollTop);
      let dataheight = parseInt(this.getCss(this.$refs.data, "height"));
      if(e.target.scrollTop){
      this.wpli=parseInt(e.target.scrollTop/dataheight)
      }
    },
    handleli(idx) {
      let dataheight = parseInt(this.getCss(this.$refs.data, "height"));
      if (idx == 0) {
        this.$refs.sm.scrollTo({top: 0, behavior: 'smooth'})
      } else {
        this.$refs.sm.scrollTo({top: (dataheight * idx)+58*idx, behavior: 'smooth'})
      }
    },
  },
};
</script>

<style lang="less" scoped>
// .swiper {
//   width: 100%;
//   height: 604px;
//   background-color: tomato;
//   border-radius: 20px;
//   display: none;
// }
.mian {
  margin-top: 58px;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 604px;
  border-radius: 20px;
}
.slider {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #4d4d4d;
  opacity: 0;
  transition: all 1s ease;
  border-radius: 20px;
  text-align: center;
  line-height: 636px;
}
.slider.action {
  opacity: 1;
}
// .slider:nth-child(odd) {
//   background: red;
// }

.swiper-bottom {
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 18px;
  align-items: center;
}
li {
  width: 12px;
  height: 12px;
  background: #ffffff;
  // box-sizing: content-box;
  // padding:8px;
  box-sizing: border-box;
  border-radius: 50%;
  transition: all 0.25s ease-in;
}
.active {
  width: 12px;
  height: 12px;
  background-color: #1a1a1a;
  border: 2px solid #ffffff;
  border-radius: 50%;
}
.swiper-title {
  width: 141px;
  height: 48px;
  font-size: 25px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #808080;
  padding-bottom: 10px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  border-bottom: 2px solid #808080;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.flex {
  height: 100vh;
  align-items: flex-start;
}
.swiper-box {
  width: 922px;
  height: 636px;
  // background: #4d4d4d;
  border-radius: 20px;
  // overflow: auto;
}
.swiper-main {
  width: 35.875rem;
  height: 100%;
  // background-color: brown;
  overflow: auto;
  transition: all 0.25s ease-in;
}
.main-data {
  width: 35.875rem;
  // height: 39.75rem;
  height: 100%;
  text-align: right;
  transition: all 0.25s ease-in;
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