<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <swiper :options="swiperOptionP1" style="width: 70vh; height: 80vh">
          <swiper-slide v-for="item in swiperDataP1" :key="item.index">
            <div class="display-box fadeInUp">
              <div style="color: rgba(153, 153, 153, 1)">
                {{ item.slogenEn }}
              </div>
              <div class="text-4xl h-60 title">
                {{ item.slogen }}
              </div>
              <div class="text">{{ item.detail }}</div>
              <div class="absolute bottom-16 ye">
                <span>{{ item.index }}</span> / 04
              </div>
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
        <canvas id="view1" ref="view1" class="canvasBox"></canvas>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
@font-face {
  font-family: Mypang;
  src: url(@/assets/style/font/庞门正道标题体2.0增强版_0.TTF);
}
.title {
  font-family: Mypang;
  font-size: 72px;
  line-height: 72px;
}
.text {
  margin-top: 9.9375rem;
}
.ye {
  font-size: 15px;
  font-family: Mypang;
  font-weight: 400;
  color: #b3b3b3;
  line-height: 30px;
  span {
    font-size: 30px;
    font-family: Mypang;
    font-weight: 400;
    color: #fffefe;
  }
}
.canvas{
  flex: 1;
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import { pageOnload } from "../../3d/index.js";

export default {
  name: "Page1",
  data() {
    return {
      swiperDataP1: [
        {
          index: "01",
          slogen: "科技改变生活\n数字成就未来",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail: "数字孪生平台公司\n致力于可视化系统设计、三维虚拟仿真开发等",
        },
        {
          index: "02",
          slogen: "瞰图科技\n3D可视化平台开发",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "可视化技术、数字孪生技术、可视化运行平台、数字孪生、三维场景管理、UI界面组件、3D产品展示、3D创意设计等多项技术。",
          time: "01/04",
        },
        {
          index: "03",
          slogen: "自主研发编辑器",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "基于自研引擎的数字孪生可视化编辑器；数据看板可方便、快捷自定义，支持多格式三维模型文件导入，并编辑模型等",
          time: "01/04",
        },
        {
          index: "04",
          slogen: "项目主要涉及领域",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail: "工业制造、智慧园区、智慧工地、智慧能源、航空航天等。",
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
    // let view1 = document.getElementById("view1");
    // pageOnload(view1, () => {
    //   console.log("done");
    // });
     this.getmx();
  },
  created () {
  },
  methods: {
    getmx() {
      const loading = this.$loading({
        lock: false, //lock的修改符--默认是false
        text: "模型加载中", //显示在加载图标下方的加载文案
        spinner: "el-icon-loading", //自定义加载图标类名
        background: "rgba(0, 0, 0, 0.7)", //遮罩层颜色
        target:  document.querySelector('#view1'), //loadin覆盖的dom元素节点
      });
      let view1 = document.getElementById("view1");
      pageOnload(view1, () => {
        console.log("done");
        loading.close();
      });
    },
  },
};
</script>
