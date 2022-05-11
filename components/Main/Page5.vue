<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <div class="fadeInUp" style="width: 60vh; height: 80vh">
          <div class="text-3xl md:h-40 sm:h-20">数据可视化</div>
          <div class="h-20">
            <span class="color-subtext">
              根据项目可视化数据展示：<br />
              园区管理后台系统(OA、ERP、 MIS、
              IBMS等）、综合态势、综合安防、便捷通行、资产管理、能效管理、设施管理、环境空间、智能预警等数据。
              以及项目中的设备后台系统（ems、数据采集等）提供设备数据来源，以多时态、多维度、多层面的方式展示。
            </span>
          </div>
          <div class="text-two">
            <div>
              <i class="el-icon-arrow-right"></i>
              <i class="el-icon-arrow-right" style="margin-left:-12px"></i>
              <i class="el-icon-arrow-right" style="margin-left:-12px"></i>
            </div>
            <div class="mb-2">大数据图表可视化</div>
            <div class="mb-2">图形分析化能力</div>
            <div class="mb-2">交互式观察数据改变</div>
            <div class="mb-2">一键集成方便部署</div>
          </div>
        </div>
      </div>
      <div class="echarts fadeInUp">
        <div class="echart fadeInUp2" v-for="item in 9" :key="item">Echart</div>
        <!-- <div class="echart">Echart</div>
        <div class="echart">Echart</div>
        <div class="echart">Echart</div>
        <div class="echart">Echart</div>
        <div class="echart">Echart</div>
        <div class="echart">Echart</div>
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
  background-color: #4d4d4d;
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
export default {
  name: "Page5",

  data() {
    return {};
  },
  components: {
    Card,
  },
  mounted() {},
  methods: {},
};
</script>
