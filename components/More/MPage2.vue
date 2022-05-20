<template>
  <Card>
    <div class="flex justify-between main fadeInUp">
      <div class="swiper-box">
        <div class="wrapper">
          <!-- <div
            class="slider"
            :class="{ action: index === wpli }"
            v-for="(item, index) in 5"
            :key="item"
          >
          </div> -->
          <img
            class="slider"
            :class="{ action: index === wpli }"
            v-for="(item, index) in imglist"
            :key="index"
            :src="item"
          />
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
      <div class="swiper-main" @wheel.stop @scroll="scrollsp" ref="sm">
        <div class="main-data" ref="data">
          <div class="data-title">
            智慧园区<span
              >运用大数据、物联网、信息管理等技术，打造智慧互联的园区。</span
            >
          </div>
          <div class="data-text">
            重庆瞰图科技有限公司
            数字孪生园区平台，为泛园区行业提供数字化转型新动力，覆盖初期规划、营销展示、建设监管、物业运营的园区全生命周期。
          </div>
          <div class="fc">
            <div class="div1">
              <img src="@/assets/images/main/连接.png" alt="" />绵阳高新区
            </div>
            <div class="div2">
              <img src="@/assets/images/main/连接.png" alt="" />绵阳高新区
            </div>
            <div class="div3">
              <img
                src="@/assets/images/main/连接.png"
                alt=""
              />绵阳新兴投资控股智慧园区领导驾驶舱
            </div>
          </div>
          <!-- <div class="button">
            体验智慧园区
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div> -->
        </div>
        <div class="main-data">
          <div class="data-title">
            工业制造<span>(监测工厂产线，展示mes信息； 提高产能效益)</span>
          </div>
          <div class="data-text">
            工业制造是现代工厂信息化发展晋级的阶段性成果，是建立在数字化工厂的基础上的升级，利用物联网和设备监控等技术加强信息管理和服务能力，集智能化设备、技术、系统为一体，实现高效、高控生产，减少人工干预，合理规划/优化生产进度等环节，构建智能高效、节能环保的智慧工厂
          </div>
          <div class="fc">
            <div class="div1">
              <img src="@/assets/images/main/连接.png" alt="" />BYD生产车间
            </div>
          </div>
          <!-- <div class="button">
            体验工业制造
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div> -->
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧工地<span>(协同工地建设管理，集成物联网技术监管)</span>
          </div>
          <div class="data-text">
            以工地大模型 、工地大数据 、工地大协同
            、应用碎片化为标准，积极布局钢筋翻样、精细管理、材料管理等成熟领域，开拓三维工地、模架产品、劳务验收、云资料等孵化产品，并延伸到智能安全帽、工地平板等施工业务硬件领域。实现工地联合监管。
          </div>
          <div class="fc">
            <div class="div3">
              <img
                src="@/assets/images/main/连接.png"
                alt=""
              />中科院科学城智慧工地
            </div>
          </div>
          <!-- <div class="button">
            体验智慧工地
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div> -->
        </div>
        <div class="main-data">
          <div class="data-title">
            智慧能源<span>(从原料到成品全链展示，提升 各环节安全系数)</span>
          </div>
          <div class="data-text">
            智慧能源基于云计算、移动互联网、大数据等先进技术,通过采集各类能耗监测点的用能数据,经过专业的数据分析处理形成对能耗的分类、分项、分时、分区域的统计分析,并通过三维可视化技术,让企业实现对能源使用的全面数字化和可视化,直观发现用能改进优化点,进而帮助企业优化能源使用,降低企业综合能耗,达到节能增效的目的。
          </div>
          <div class="fc">
            <div class="div1">
              <img src="@/assets/images/main/连接.png" alt="" />火电厂
            </div>
          </div>
          <!-- <div class="button">
            体验智慧能源
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div> -->
        </div>
        <div class="main-data">
          <div class="data-title">
            航天航空<span>(同步机场业态信息，有序管控 航班流量)</span>
          </div>
          <div class="data-text">
            通过数字孪生还原机场业态，虚拟规划、仿真航班出入境流量状态。通过IOT设备查看实时工作画面，指挥中心高效、有序管理。
          </div>
          <div class="fc">
            <div class="div1">
              <img src="@/assets/images/main/连接.png" alt="" />南京航空系统
            </div>
          </div>
          <!-- <div class="button">
            体验航天航空
            <i class="el-icon-d-arrow-left mr-6" style="margin-left: 38px"></i>
          </div> -->
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
      imglist: [
        require("@/assets/images/main/zhyq.png"),
        require("@/assets/images/main/gyzz.png"),
        require("@/assets/images/main/zhgd.jpg"),
        require("@/assets/images/main/zhny.png"),
        require("@/assets/images/main/hthk.png"),
      ],
      titlelist: ["智慧园区", "工业制造", "智慧工地", "智慧能源", "航天航空"],
    };
  },
  mounted() {},
  methods: {
    getCss(el, css) {
      return el && window.getComputedStyle(el)[css];
    },
    scrollsp(e) {
      console.log(e.target);
      let dataheight = parseInt(this.getCss(this.$refs.data, "height"));
      if (e.target.scrollTop) {
        this.wpli = parseInt(e.target.scrollTop / dataheight);
      }
    },
    handleli(idx) {
      // this.wpli = idx
      let dataheight = parseInt(this.getCss(this.$refs.data, "height"));
      if (idx == 0) {
        this.$refs.sm.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$refs.sm.scrollTo({
          top: dataheight * idx + 58 * idx,
          behavior: "smooth",
        });
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
.main{
  margin-top: 108px;
}
.mian {
  margin-top: 58px;
}
.wrapper {
  position: relative;
  width: 100%;
  height:519px;
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
  img {
    width: 100%;
    height: 100%;
  }
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
  transition: all 0.01s ease-in;
  // border-bottom: 2px solid #808080;
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
  text-align: left;
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
    width: 19rem;
    height: 6.75rem;
    margin-top: 9.375rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    // margin-left: 266px;;

    .div1,
    .div2 {
      // width: 150px;
      height: 44px;
      background: #4d4d4d;
      border-radius: 22px;
      text-align: center;
      line-height: 2.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      img {
        width: 19px;
        height: 23px;
      }
    }
    .div3 {
      // width: 308px;
      height: 44px;
      background: #4d4d4d;
      border-radius: 22px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      img {
        width: 19px;
        height: 23px;
      }
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
    margin-left: 18px;
  }
  .button:hover {
    background-color: #fff;
    color: #1a1a1a;
    /* box-shadow:none; */
    transform: translateY(-0.3125rem);
  }
}
</style>