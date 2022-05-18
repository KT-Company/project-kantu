<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <swiper :options="swiperOptionP1" style="width: 60vh; height: 80vh">
          <swiper-slide v-for="item in swiperDataP1" :key="item.index">
            <div class="display-box fadeInUp">
              <div style="color: rgba(153, 153, 153, 1)">
                {{ item.slogenEn }}
              </div>
              <div class="text-4xl h-60">
                {{ item.slogen }}
              </div>
              <div>{{ item.detail }}</div>
              <div class="absolute bottom-16">{{ item.time }}</div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination swiper-pagination-p1" slot="pagination"></div> -->
          <div
            class="swiper-button-prev swiper-button-p1"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-next swiper-button-p1"
            slot="button-next"
          ></div>
        </swiper>
      </div>
      <div class="canvas">
        <canvas id="view1" class="canvasBox"></canvas>
      </div>
    </div>
  </Card>
</template>
<script>
import Card from "@/components/base/Card.vue";
import { pageOnload } from "../../3d/index.js";

export default {
  name: "Page1",
  data() {
    return {
      swiperDataP1: [
        {
          index: "1001",
          slogen: "科技改变生活\n数字成就未来",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail: "数字孪生平台公司\n致力于可视化系统设计、三维虚拟仿真开发等",
          time: "01/04",
        },
        {
          index: "2002",
          slogen: "瞰图科技\n3D可视化平台开发",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "可视化技术、数字孪生技术、可视化运行平台、数字孪生、三维场景管理、UI界面组件、3D产品展示、3D创意设计等多项技术。",
          time: "01/04",
        },
        {
          index: "2003",
          slogen: "自主研发编辑器",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "基于自研引擎的数字孪生可视化编辑器；数据看板可方便、快捷自定",
          time: "01/04",
        },
        {
          index: "2004",
          slogen: "项目主要涉及领域",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "工业制造、智慧园区、智慧工地、智慧能源、航空航天等。义，支持多格式三维模型文件导入，并编辑模型等。",
          time: "01/04",
        },
      ],
      swiperOptionP1: {
        // 设置分页器
        pagination: {
          el: ".swiper-pagination.swiper-pagination-p1",
          // 设置点击可切换
          clickable: true,
        },
        allowTouchMove: true,
        // 设置前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next.swiper-button-p1",
          prevEl: ".swiper-button-prev.swiper-button-p1",
        },
      },
    };
  },
  props: {
    onSlideChange: {
      type: Function,
    },
  },
  components: {
    Card,
  },
  mounted() {
    let view1 = document.getElementById("view1");
    // pageOnload(view1, () => {
    //   console.log("done");
    // });
  },
  methods: {},
};
</script>
