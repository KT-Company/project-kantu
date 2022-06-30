<template>
  <div>
    <div class="wrap">
      <div class="white-square">
        <div class="big"></div>
        <div class="min"></div>
      </div>
      <div class="swiper-box">
        <swiper :options="swiperOptionP1" style="width: 100%; height: 100%">
          <swiper-slide v-for="item in swiperDataP1" :key="item.index">
            <div class="display-box fadeInUp fast">
              <!-- <div style="color: rgba(153, 153, 153, 1)">{{ item.slogenEn }}</div> -->
              <div class="title">{{ item.slogen }}</div>
              <div class="title title-next">{{ item.slogenNext }}</div>
              <div class="text line-height-1-5">{{ item.detail }}</div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-button-prev swiper-button-p1" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-p1" slot="button-next"></div> -->
        </swiper>
      </div>
      <div class="bg-wrap">
        <div class="canvas bg-ywy">
          <img class="img" src="@/static/2d/image/ywy.gif" alt="" />
          <!-- <canvas id="view1" ref="view1" class="canvasBox"></canvas> -->
        </div>
        <div class="bg-box">
          <img class="img" src="@/assets/images/main/rectangular.png" alt="" />
        </div>
        <span class="bottom-data">{{ bottomData.toUpperCase() }}</span>
      </div>
      <div class="swiper-pagination swiper-pagination-p1 before" slot="pagination"></div>
    </div>
  </div>

  <!-- </div>
  </Card> -->
</template>
<style lang="less" scoped>
@font-face {
  font-family: Mypang;
  src: url(@/assets/style/font/庞门正道标题体2.0增强版_0.TTF);
}

.swiper-pagination {
  font-size: 0.9375rem;
  font-family: Mypang;
  font-weight: 400;
  color: #b3b3b3;
  line-height: 1.875rem;
  text-align: center;
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;

  /deep/ .swiper-pagination-current {
    font-size: 1.875rem;
    font-family: Mypang;
    font-weight: 400;
    color: #fffefe;
  }

  /deep/ &.before > *::before {
    // content: "0";
  }
  /deep/ .swiper-pagination-bullet {
    background: #fff;
    width: 4px;
    height: 4px;
    margin: 0 9px;
    vertical-align: middle;
    &.swiper-pagination-bullet-active {
      width: 9px;
      height: 9px;
      background-color: transparent;
      border: solid 2px #fff;
    }
  }
}

.swiper-container.swiper-container-horizontal .swiper-button-prev:after,
.swiper-container.swiper-container-horizontal .swiper-button-next:after {
  background: transparent;
}

.swiper-container.swiper-container-horizontal .swiper-button-prev:hover::after,
.swiper-container.swiper-container-horizontal .swiper-button-next:hover::after {
  background: #4d4d4d;
}

.swiper-container.swiper-container-horizontal .swiper-button-prev {
  left: calc(22% - 40px);
}

.swiper-container.swiper-container-horizontal .swiper-button-next {
  left: calc(20% + 40px);
}

// .canvas {
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .img {
//     width: 855px;
//   }
// }

.wrap {
  width: 110rem;
  height: 45rem;
  margin: 7rem auto;

  // 两白框
  .white-square {
    position: absolute;
    bottom: 16rem;
    left: 7rem;

    .big {
      width: 3rem;
      height: 3rem;
      background-color: #fffefe;
      position: relative;
      left: 1.5rem;
    }

    .min {
      width: 1.5rem;
      height: 1.5rem;
      background-color: #fffefe;
    }
  }

  // swiper
  .swiper-box {
    position: absolute;
    width: 50%;
    height: 80%;

    .display-box {
      position: absolute;
      height: 16rem;
      margin-top: 10rem;
      width: 100%;

      .title {
        font-family: DigitalThick;
        font-size: 4.5rem;
      }

      .title-next {
        font-family: DigitalThick;
        padding-left: 12rem;
      }

      .text {
        padding-left: 12rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        // position: absolute;
        // bottom: 0;
      }
    }
  }

  // 图片背景盒子
  .bg-wrap {
    position: relative;
    width: 103rem;
    height: 100%;
    float: right;

    .bg-ywy {
      position: absolute;
      width: 34rem;
      height: 24rem;
      right: 5rem;
      top: 5rem;
    }

    .bg-box {
      position: absolute;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .bottom-data {
      position: absolute;
      bottom: 3rem;
      left: 4rem;
      font-size: 0.6rem;
      letter-spacing: 2px;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import { pageOnload } from "../../3d/index.js";
import "../../assets/style/font/font.css";
export default {
  name: "Page1",
  data() {
    return {
      swiperDataP1: [
        {
          index: "01",
          slogen: "科技改变生活",
          slogenNext: "数字成就未来",
          slogenEn: "Technology changes life\nDigital makes the future",
          detail: "数字孪生平台公司，致力于可视化系统设计、三维虚拟仿真开发等",
        },
        {
          index: "02",
          slogen: "瞰图科技",
          slogenNext: "3D可视化平台开发",

          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "可视化技术、数字孪生技术、可视化运行平台、数字孪生、三维场景管理、UI界面组件、3D产品展示、3D创意设计等多项技术。",
          time: "01/04",
        },
        {
          index: "03",
          slogen: "自主研发编辑器",
          slogenNext: "",

          slogenEn: "Technology changes life\nDigital makes the future",
          detail:
            "基于自研引擎的数字孪生可视化编辑器；数据看板可方便、快捷自定义，支持多格式三维模型文件导入，并编辑模型等",
          time: "01/04",
        },
        {
          index: "04",
          slogen: "项目主要涉及领域",
          slogenNext: "",

          slogenEn: "Technology changes life\nDigital makes the future",
          detail: "工业制造、智慧园区、智慧工地、智慧能源、航空航天等。",
          time: "01/04",
        },
      ],

      swiperOptionP1: {
        // 设置分页器
        pagination: {
          el: ".swiper-pagination.swiper-pagination-p1.before",
          // type: 'fraction',
          // 设置点击可切换
          clickable: true,
        },
        autoplay: true,
        loop: true,
        allowTouchMove: true,
        // 设置前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next.swiper-button-p1",
        //   prevEl: ".swiper-button-prev.swiper-button-p1",
        // },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      },
      swiperIndex: 0, // 当前选中index
      loading: true,
      bottomData: "Technology changes life Digital makes the future",
    };
  },
  components: {
    Card,
  },
  mounted() {
    // let view1 = document.getElementById("view1");
    // pageOnload(view1, () => {
    //   console.log("done");
    // });
    // this.getmx();
  },
  created() {},
  methods: {
    getmx() {
      const loading = this.$loading({
        lock: true, //lock的修改符--默认是false
        text: "模型加载中", //显示在加载图标下方的加载文案
        spinner: "el-icon-loading", //自定义加载图标类名
        background: "rgba(0, 0, 0, 0)", //遮罩层颜色
        target: document.querySelector(".canvas"), //loadin覆盖的dom元素节点
      });
      let view1 = document.getElementById("view1");
      pageOnload(view1, () => {
        console.log("done");
        loading.close();
      });
    },
    // onSlideChange(index) {
    //   console.log(index)
    // }
  },
};
</script>
