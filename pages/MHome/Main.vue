<template>
  <div class="home" @wheel="homeWheel">
    <main>
      <article>
        <div style="position: relative">
          <component :is="'MPage1'"></component>
        </div>
        <MCard title="数字孪生">
          <div class="h-20 fadeInUp text-center">
            <span class="text-2xl">四要素</span>
            <span class="color-subtext text-sm">(设计、模型、交互、数据)</span>
          </div>
          <div class="box-page2-display mt-20">
            <div class="item" v-for="(item, index) in dataDisplay" :key="index">
              <div class="icon-box">
                <img v-if="item.iconUrl" :src="item.iconUrl" alt="" srcset="" />
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="detail">{{ item.detail }}</div>
            </div>
          </div>
          <div class="relative" style="padding: 0 10%">
            <img class="img" src="@/assets/images/main/1111.png" alt="" />
          </div>
        </MCard>
        <MCard title="GIS - 地理信息系统">
          <div class="text-center">
            <div style="padding: 0 9rem; margin-bottom: 9rem">
              <span class="color-subtext text-sm">
                GIS(地理信息系统):广泛运用于物联网、智慧城市等，与位置相关的应用关联。通过WebGIS的方式呈现地理信息，地图可视化便是GIS与web前端技术相结合的重要方向。瞰图科技充分运用GIS技术，在工业制造、智慧园区、智慧工地、智慧能源、航空航天等项目中作为开发基础。
              </span>
            </div>
            <div class="relative">
              <img class="img" src="@/assets/images/main/图.jpg" alt="" />
              <div class="button-right" @click="handlemore">
                <i class="el-icon-d-arrow-left mr-6"></i>体验GIS底图场景
              </div>
            </div>
          </div>
        </MCard>
        <MCard title="三维可视化">
          <div
            class="flex justify-between rounded-xl p-4"
            style="
              background: #262626;
              margin-bottom:9rem;
              box-shadow: 0.25rem 0.25rem 0.5rem rgba(255, 255, 255, 0.1);
            "
          >
            <span>数据模型采集 </span>
            <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
            <span>模型制作</span>
            <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
            <span>三维可视化功能</span>
            <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
            <span>大数据集成</span>
          </div>
          <MTimeline/>
        </MCard>
        <MCard title="数据可视化">
          <div
            class="justify-between rounded-xl p-6 mb-20"
            style="
              background: rgba(26, 26, 26, 0.5);
              color: rgba(179, 179, 179, 1);
              font-size: 2rem;
              box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);
            "
          >
            <p>根据项目可视化数据展示：</p>
            <p>
              园区管理后台系统(OA、ERP、MIS、IBMS等）、综合态势、综合安防、便捷通行、资产管理、能效管理、设施管理、环境空间、智能预警等数据。
            </p>
            <p>
              以及项目中的设备后台系统（ems、数据采集等）提供设备数据来源，以多时态、多维度、多层面的方式展示。
            </p>
          </div>
          <div class="echarts fadeInUp">
            <Chart height="16rem" :chartOption="option()" class="echart"></Chart>
            <Chart height="16rem" :chartOption="option2()" class="echart2"></Chart>
          </div>
          <div class="echarts fadeInUp">
            <Chart height="16rem" :chartOption="option3()" class="echart"></Chart>
            <Chart height="16rem" :chartOption="option4()" class="echart2"></Chart>
          </div>
        </MCard>
        <MCard title="合作伙伴">
          <div class="imgs">
            <div class="imgs-top fadeInUp">
              <div class="images" v-for="(item, index) in imgs" :key="index">
                <img :src="item" alt="" />
              </div>
            </div>
            <div class="imgs-bottom fadeInUp2">
              <div class="images" v-for="(item, index) in imgs2" :key="index">
                <img :src="item" alt="" />
              </div>
            </div>
          </div>
        </MCard>
      </article>
    </main>
  </div>
</template>
<style lang="less" scoped>
.home {
  flex: 1;
  height: 100%;
  font-size: 14px;
}
.box-page2-display {
  display: flex;

  .item {
    text-align: center;
    flex: 1;

    .icon-box {
      display: inline-block;
      // width: 8rem;
      // height: 12rem;
      // background: url("@/assets/images/main/icon-back.png") no-repeat;
      // background-size: contain;
      // background-position: bottom center;

      img {
        display: inline-block;
        margin-top: 3.875rem;
        // width: 5rem;
        height: 18rem;
      }
    }

    .title {
      color: #999999;
      margin-top: 6.1rem;
      margin-bottom: 1.25rem;
    }

    .detail {
      display: none;
      width: 100%;
      color: #999999;
      padding-bottom: 0.3125rem;

      &::after {
        content: "";
        width: 100%;
        height: 0.0625rem;
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #999999;
        animation: showWidth 1s;
        -webkit-animation: showWidth 1s;
      }
    }

    &:hover {
      .detail {
        display: block;
        // line-height: 1rem;
        position: relative;
        animation: fadeIn 0.3s;
        -webkit-animation: fadeIn 0.3s;

        &::after {
          display: inline-block;
        }
      }

      // .icon-box {
      //   background: url("~/assets/images/main/icon-back-hover.png") no-repeat;
      //   background-size: contain;
      //   background-position: bottom center;
      // }
    }
  }
}
.button-right {
  // width:21rem;
  padding: 3rem 1.5rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  box-shadow: 0rem 0rem 1.1875rem 0.0625rem rgba(255, 255, 255, 0.38);
  border-radius: 1rem;
  font-size: 0.875rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  transition: all 0.36s;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.button-right:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  // transform: translateY(-0.3125rem);
}

.echarts {
  // flex: 0 0 59.375rem;
  // height: 50.375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  .echart {
    width: 40rem;
    height: 30rem;
    margin-top: 6.25rem;
    /* background-color: #4d4d4d; */
  }
  .echart2 {
    width: 60rem;
    height: 30rem;
    margin-top: 6.25rem;
    /* background-color: #4d4d4d; */
    color: #1a1a1a;
    font-size: 1.875rem;
    text-align: center;
    line-height: 16rem;
  }
}
.imgs{
  padding: 0 10%;
  .imgs-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
    .images {
      width: 22rem;
      height: 9rem;
      // background-color: #fff;
      background-color: rgba(77, 77, 77, 0.1);
      border-radius: 0.625rem;
      border: 0.0625rem solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      img {
        vertical-align: middle;
      }
    }
    .images:hover{
      background-color: rgba(77, 77, 77, 0.3);
    }
  }
  .imgs-bottom {
    margin-top: 14rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
    .images {
      width: 22rem;
      height: 9rem;
      // background-color: #fff;
      background-color: rgba(77, 77, 77, 0.1);
      border-radius: 0.625rem;
      border: 0.0625rem solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      img {
        vertical-align: middle;
      }
    }
    .images:hover {
      background-color: rgba(77, 77, 77, 0.3);
    }
  }
}
</style>
<script>
import MCard from "@/components/base/MCard.vue";
import { MPage1, Page2, Page3, Page4, Page5, Page6 } from "@/components/Main";
import Footer from "@/components/Footer.vue";
import animateMix from "@/mixin/animateMix.js";
import Chart from "@/components/Charts.vue";
import * as echarts from "echarts";
import MTimeline from "@/components/base/MTimeline.vue";

export default {
  name: "Main",
  mixins: [animateMix],
  data() {
    return {
      isPageEnd: false,
      idx: 0,
      swiperOptionMain: {
        speed: 1000,
        direction: "vertical",
        origin: "left bottom",
        // // 设置分页器
        pagination: {
          el: ".swiper-pagination.main",
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
      swiperPages: ["MPage1", "Page2", "Page3", "Page4", "Page5", "Page6"],
      pageHeight: 1080,
      dataDisplay: [
        {
          iconUrl: require("assets/images/main/sj-elements.png"),
          title: "设计",
          detail: "拥有完善的产品设计",
        },
        {
          iconUrl: require("assets/images/main/mx-elements.png"),
          title: "模型",
          detail: "多精度的模型标准",
        },

        {
          iconUrl: require("assets/images/main/xh-elements.png"),
          title: "交互",
          detail: "个性化的交互效果",
        },
        {
          iconUrl: require("assets/images/main/data-elements.png"),
          title: "数据",
          detail: "精准的数据引入",
        },
      ],
      imgs: [
        require("@/assets/images/main/1.png"),
        require("@/assets/images/main/2.png"),
        require("@/assets/images/main/3.png"),
        require("@/assets/images/main/4.png"),
        require("@/assets/images/main/5.png"),
        require("@/assets/images/main/6.png"),
      ],
      imgs2: [
        require("@/assets/images/main/7.png"),
        require("@/assets/images/main/8.png"),
        require("@/assets/images/main/9.png"),
        require("@/assets/images/main/10.png"),
        require("@/assets/images/main/11.png"),
        require("@/assets/images/main/12.png"),
      ],
    };
  },
  components: { Chart, MCard, MPage1, Page2, Page3, Page4, Page5, Page6, Footer, MTimeline },
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
    handlemore() {
      document.documentElement.scrollTop = document.body.clientHeight;
    },
    option() {
      let option = {
        title: [
          {
            text: "已完成",
            x: "center",
            top: "55%",
            textStyle: {
              color: "rgba(225,225,225,0.3)",
              fontSize: 9,
              fontWeight: "100",
            },
          },
          {
            text: "75%",
            x: "center",
            y: "center",
            textStyle: {
              fontSize: "16",
              color: "rgba(225,225,225,0.3)",
              fontFamily: "DINAlternate-Bold, DINAlternate",
              foontWeight: "600",
            },
          },
        ],
        // backgroundColor: "#111",
        polar: {
          radius: ["32%", "92%"],
          center: ["50%", "50%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 30,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [60],
            coordinateSystem: "polar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#fff",
                  },
                  {
                    offset: 1,
                    color: "#1a1a1a",
                  },
                ]),
              },
            },
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["82%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#fff",
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["42%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#1a1a1a",
            },
            data: [100],
          },
        ],
      };
      return option;
    },
    option2() {
      let option = {
        // backgroundColor: "1a1a1a",
        title: {
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
          },
          top: "5%",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "10%",
          left: 30,
          right: "10%",
          bottom: 20,
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "rgba(66, 66, 66, .3)",
              lineStyle: {
                color: "rgba(66, 66, 66, .3)",
              },
            },
            axisLabel: {
              fontSize: 9,
              color: "rgba(225,225,225,0.3)",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(0,0,0,0)",
                padding: "1.25rem",
              },
            },
            boundaryGap: false,
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(66, 66, 66, .3)",
              },
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              fontSize: 9,
              color: "rgba(225,225,225,0.3)",
            },
            axisTick: {
              show: true,
            },
          },
        ],
        series: [
          {
            name: "发展趋势",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "rgba(66, 66, 66, .3)",
                shadowColor: "rgba(225,225,225,0.3)",
                // shadowBlur: 0,
                // shadowOffsetY: 5,
                // shadowOffsetX: 5,
                // borderWidth: 5,
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     textStyle: {
            //         color: '#00ca95',
            //     }
            // },

            itemStyle: {
              color: "#005792",
              borderColor: "#6b778d",
              borderWidth: 3,
              // shadowColor: 'rgba(0, 0, 0, .3)',
              // shadowBlur: 0,
              // shadowOffsetY: 2,
              // shadowOffsetX: 2,
            },
            // tooltip: {
            //     show: false
            // },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#17223b",
                    },
                    {
                      offset: 1,
                      color: "#263859",
                    },
                  ],
                  false
                ),
                // shadowColor: 'rgba(0,202,149, 0.9)',
                // shadowBlur: 20
              },
            },
            data: [
              281.55,
              398.35,
              214.02,
              179.55,
              289.57,
              356.14,
              281.55,
              398.35,
              214.02,
              179.55,
              289.57,
              356.14,
            ],
          },
        ],
      };
      return option;
    },
    option3() {
      let everyDepartment = {
        stages: [
          { name: "维护", max: 100 },
          { name: "活动", max: 100 },
          { name: "巡查", max: 100 },
          { name: "整改", max: 100 },
          { name: "值班", max: 100 },
        ],
        scores: [73, 87, 93, 80, 72],
      };

      function contains(arr, obj) {
        var i = arr.length;
        while (i--) {
          if (arr[i].name === obj) {
            return i;
          }
        }
        return false;
      }
      // 格式化数据
      function formatNumber(n) {
        var b = parseInt(n).toString();
        var len = b.length;
        if (len <= 3) {
          return b;
        }
        var r = len % 3;
        return r > 0
          ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",")
          : b.slice(r, len).match(/\d{3}/g).join(",");
      }
      let option = {
        // backgroundColor: "#081A2F",
        color: ["rgba(225,225,225,0.3)"],
        radar: {
          center: ["50%", "50%"],
          radius: "60%",
          triggerEvent: true,
          splitNumber: 6,
          name: {
            rich: {
              a: {
                color: "rgba(225,225,225,0.3)",
                fontSize: 12,
                lineHeight: 20,
              },
              b: {
                color: "rgba(225,225,225,0.3)",
                fontSize: 12,
                align: "right",
              },
              d: {
                color: "rgba(225,225,225,0.3)",
                fontSize: 12,
                align: "right",
              },
              triggerEvent: true,
            },
            formatter: (a, index) => {
              let values = a.length > 6 ? a.slice(0, 6) + "..." : a;
              let i = contains(everyDepartment.stages, a); // 处理对应要显示的样式
              return `{b| ${formatNumber(
                everyDepartment.scores[i]
              )}}{d|%}\n{a| ${values}}`;
            },
          },
          nameGap: "2",
          indicator: everyDepartment.stages,
          splitArea: {
            areaStyle: {
              color: [
                "rgba(38, 96, 144, .1)",
                "rgba(38, 96, 144, .2)",
                "rgba(38, 96, 144, .4)",
                "rgba(38, 96, 144, .6)",
                "rgba(38, 96, 144, .8)",
                "rgba(38, 96, 144, 1)",
              ].reverse(),
            },
          },
          // axisLabel:{//展示刻度
          //     show: true
          // },
          axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
              color: "#263859",
              width: 2,
            },
          },
          splitLine: {
            lineStyle: {
              width: 1,
              // color: "RGBA(24, 67, 101, 1)",
              color: "rgba(225,225,225,0.3)",
            },
          },
        },

        series: [
          {
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(225,225,225,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(225,225,225,0.3)",
                  },
                ],
                false
              ),
              width: 2,
            },
            itemStyle: {
              color: "#20366b",
              borderColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(225,225,225,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(225,225,225,0.3)",
                  },
                ],
                false
              ),
              borderWidth: 2,
              opacity: 1,
            },
            data: [
              {
                value: everyDepartment.scores,
                name: "",
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: "#000",
                    },
                    shadowColor: "#000",
                    shadowBlur: 20,
                  },
                },
                areaStyle: {
                  normal: {
                    color: "#20366b",
                  },
                },
              },
            ],
          },
        ],
      };
      return option;
    },
    option4() {
      const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          // 会canvas的应该都能看得懂，shape是从custom传入的
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x, shape.y];
          const c1 = [shape.x - 13, shape.y - 13];
          const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13];
          const c3 = [xAxisPoint[0], xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
        },
      });
      // 绘制右侧面
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c1 = [shape.x, shape.y];
          const c2 = [xAxisPoint[0], xAxisPoint[1]];
          const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
          const c4 = [shape.x + 18, shape.y - 9];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      // 绘制顶面
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y];
          const c2 = [shape.x + 18, shape.y - 9];
          const c3 = [shape.x + 5, shape.y - 22];
          const c4 = [shape.x - 13, shape.y - 13];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      // 注册三个面图形
      echarts.graphic.registerShape("CubeLeft", CubeLeft);
      echarts.graphic.registerShape("CubeRight", CubeRight);
      echarts.graphic.registerShape("CubeTop", CubeTop);

      const MAX = [800, 800, 800, 800, 800, 800, 800];
      const VALUE = [210.9, 260.8, 204.2, 504.9, 740.5, 600.3, 119.0];
      let option = {
        // backgroundColor: "#012366",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params, ticket, callback) {
            const item = params[1];
            return item.name + " : " + item.value;
          },
        },
        grid: {
          left: 30,
          right: 0,
          bottom: 20,
          top: 20,
          // containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(225,225,225,0.3)",
            },
          },
          offset: 25,
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
              color: "#7DFFFD",
            },
          },
          axisLabel: {
            show: true,
            fontSize: 9,
          },
        },
        yAxis: {
          min: 0,
          max: 1200,
          interval: 400,
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(225,225,225,0.3)",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,0.1)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            fontSize: 9,
          },
          boundaryGap: ["20%", "20%"],
        },
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(0,0,0,0)",
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(0,0,0,0)",
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(0,0,0,0)",
                    },
                  },
                ],
              };
            },
            data: MAX,
          },
          {
            type: "custom",
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              var color =
                api.value(1) > 800
                  ? "red"
                  : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#1a1a1a",
                      },
                      {
                        offset: 0.8,
                        color: "#fff",
                      },
                    ]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: color,
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: color,
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: color,
                    },
                  },
                ],
              };
            },

            data: VALUE,
          },
          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",

                fontSize: 12,
                color: "#fff",
                offset: [2, -25],
              },
            },
            itemStyle: {
              color: "transparent",
            },
            tooltip: {},
            // data: MAX,
          },
        ],
      };
      return option;
    },
  },
};
</script>
