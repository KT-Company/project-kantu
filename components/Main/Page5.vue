<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <div class="fadeInUp" style="width: 60vh; height: 80vh">
          <div class="text-3xl md:h-40 sm:h-20">数据可视化</div>
          <div class="h-20">
            <span class="color-subtext line-height-1-5">
              根据项目可视化数据展示：<br />
              园区管理后台系统(OA、ERP、 MIS、
              IBMS等）、综合态势、综合安防、便捷通行、资产管理、能效管理、设施管理、环境空间、智能预警等数据。
              以及项目中的设备后台系统（ems、数据采集等）提供设备数据来源，以多时态、多维度、多层面的方式展示。
            </span>
          </div>
          <div class="text-two">
            <div>
              <i class="el-icon-arrow-right"></i>
              <i class="el-icon-arrow-right" style="margin-left: -12px"></i>
              <i class="el-icon-arrow-right" style="margin-left: -12px"></i>
            </div>
            <div class="mb-2">大数据图表可视化</div>
            <div class="mb-2">图形分析化能力</div>
            <div class="mb-2">交互式观察数据改变</div>
            <div class="mb-2">一键集成方便部署</div>
          </div>
        </div>
      </div>
      <div class="echarts fadeInUp">
        <!-- <div class="echart fadeInUp2" v-for="item in 9" :key="item">Echart</div> -->
        <Chart height="256px" :chartOption="option()" class="echart"></Chart>
        <Chart height="256px" :chartOption="option2()" class="echart2"></Chart>
        <Chart height="256px" :chartOption="option3()" class="echart"></Chart>
        <Chart height="256px" :chartOption="option4()" class="echart2"></Chart>
        <!-- <Chart height="256px" :chartOption="option5()" class="echart3"></Chart> -->
        <div class="echart2"></div>
        <div class="echart"></div>
        <div class="echart2"></div>
        <!-- <div class="echart">Echart</div>
        <div class="echart">Echart</div>
        <div class="echart">Echart</div> -->
      </div>
      <!-- <div class="canvas grid grid-flow-row auto-rows-max">
        <div class="grid grid-flow-col auto-cols-max">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div class="grid grid-flow-col auto-cols-max">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div class="grid grid-flow-col auto-cols-max">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div> -->
      <!-- <div class="grid-container">
        <div><div>1</div><div>1</div><div>1</div></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
      </div> -->
    </div>
  </Card>
</template>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
.echarts {
  width: 950px;
  height: 806px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #fff; */
  /* justify-content: space-between; */
  justify-content: space-around;
  align-items: stretch;
}
.echart {
  width: 304px;
  height: 256px;
  margin-top: 100px;
  /* background-color: #4d4d4d; */
}
.echart2 {
  width: 620px;
  height: 256px;
  margin-top: 100px;
  /* background-color: #4d4d4d; */
  color: #1a1a1a;
  font-size: 30px;
  text-align: center;
  line-height: 256px;
}
.text-two {
  margin-top: 250px;
}
</style>

<script>
import Card from "@/components/base/Card.vue";
// import * as echart from "@/components/echarts/echart.vue";
import Chart from "@/components/Charts.vue";
import * as echarts from "echarts";
export default {
  name: "Page5",

  data() {
    return {};
  },
  components: {
    Card,
    Chart,
  },
  mounted() {},
  methods: {
    option() {
      let option = {
        title: [
          {
            text: "已完成",
            x: "center",
            top: "55%",
            textStyle: {
              color: "rgba(225,225,225,0.3)",
              fontSize: 16,
              fontWeight: "100",
            },
          },
          {
            text: "75%",
            x: "center",
            y: "center",
            textStyle: {
              fontSize: "30",
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
          left: "10%",
          right: "10%",
          bottom: "10%",
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
              color: "rgba(225,225,225,0.3)",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(0,0,0,0)",
                padding: "20px",
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
                color: 'rgba(66, 66, 66, .3)'
              },
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
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
              281.55, 398.35, 214.02, 179.55, 289.57, 356.14, 281.55, 398.35,
              214.02, 179.55, 289.57, 356.14,
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
                color:"rgba(225,225,225,0.3)",
                fontSize: 12,
                align: "right",
              },
              d: {
                color:"rgba(225,225,225,0.3)",
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
          left: 78,
          right: 50,
          bottom: 70,
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
            fontSize: 12,
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
            fontSize: 12,
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
