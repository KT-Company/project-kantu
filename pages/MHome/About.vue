<template>
  <div class="box">
    <div class="site">你的位置：首页 > <span style="color: #fff">了解瞰图</span></div>
    <div class="mian fadeInUp">
      <div class="mian-left">
        <div class="font-bold" style="font-size: 5.375rem">About</div>
        <div style="font-size: 1.875rem">重庆瞰图科技有限公司</div>
        <div class="text line-height-1-5" style="font-size: 0.875rem">
          <div>
            重庆瞰图科技有限公司是一家数字孪生平台公司，国产自主研发三维引擎的技术领先者；致力于可视化系统设计、三维虚拟仿真开发，完善国产化自主研发三维引擎，打破国外3A工业设计软件的垄断。
          </div>
          <div>
            公司坚持以人才和技术为核心；以质量重庆瞰图科技有限公司涉及可视化技术、数字孪生技术、可视化运行平台、数字孪生、三维场景管理、UI界面组件、3D产品展示、3D创意设计等多项技术。
          </div>
          <div>
            其中，代表案例有智慧园区、工业制造、智慧能源、航空航天等。公司坚持以人才和技术为核心；以质量和服务为准则；为客户开发专业、优质、满意、适用的互联网产品。
          </div>
        </div>
        <div style="padding: 0 5rem; margin-top: 5rem">
          <img src="@/static/2d/image/about-back.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="mian-bottom fadeInUp">
      <div>
        <div style="font-size: 3.125rem">使命愿景</div>
        <div style="font-size: 1.5625rem; color: #808080">
          致力可视化系统设计 三维虚拟仿真开发
        </div>
      </div>
      <div class="split-line"></div>
      <div class="mian-data">
        <div class="data">
          <div class="data-icon">
            <img src="@/assets/images/main/企业愿景.png" alt="" />
          </div>
          <div class="data-text">
            <div style="font-size: 1.875rem; color: #ffffff">企业愿景</div>
            <div style="font-size: 0.875rem; color: #4d4d4d">Enterprise vision</div>
            <div style="margin-top: 2.125rem">运用专业的可视化系统</div>
            <div>为人们实现传统拍摄无法实现</div>
            <div>的相应场景和事件</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img src="@/assets/images/main/企业使命.png" alt="" />
          </div>
          <div class="data-text">
            <div style="font-size: 1.875rem; color: #ffffff">企业使命</div>
            <div style="font-size: 0.875rem; color: #4d4d4d">Enterprise mission</div>
            <div style="margin-top: 2.125rem">以技术实力为支撑</div>
            <div>以用户需求为导向</div>
            <div>以技术创新为根本</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img src="@/assets/images/main/核心.png" alt="" />
          </div>
          <div class="data-text">
            <div style="font-size: 1.875rem; color: #ffffff">核心价值</div>
            <div style="font-size: 0.875rem; color: #4d4d4d">Core value</div>
            <div style="margin-top: 2.875rem">做正直守信的人</div>
            <div>做对社会有价值的事</div>
          </div>
        </div>
        <div class="data">
          <div class="data-icon">
            <img src="@/assets/images/main/定位.png" alt="" />
          </div>
          <div class="data-text">
            <div style="font-size: 1.875rem; color: #ffffff">战略定位</div>
            <div style="font-size: 0.875rem; color: #4d4d4d">Strategic positioning</div>
            <div style="margin-top: 2.875rem">致力可视化系统设计</div>
            <div>三维虚拟仿真开发</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.site {
  width: 101.25rem;
  margin: 0 auto;
  color: #808080;
  font-size: 0.8125rem;
  margin-top: 7.25rem;
}
// .box {
//   width: 100vw;
//   background: url("@/assets/images/main/背景.png") 100%;
// }
iframe {
  height: 26.9375rem;
  width: 43.4375rem;
}
.button {
  width: 13.125rem;
  height: 3.125rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
  box-shadow: 0rem 0rem 1.1875rem 0.0625rem rgba(255, 255, 255, 0.38);
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  transition: all 0.36s;
  // margin-top: 6rem;
  margin-left: 1.25rem;
}
.button:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.mian {
  width: 101.25rem;
  /* background-color: azure; */
  margin: auto;
  margin-top: 5.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.text {
  // width: 37.6875rem;
  margin-top: 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mian-left {
  padding-bottom: 1.25rem;
  text-align: center;
}
.mian-right {
  flex: 1;
  // width: 47.8125rem;
  height: 43.4375rem;
  // // background-color: #4d4d4d;
  text-align: center;
  .img_box {
    display: inline-block;
    height: 100%;
    position: relative;
    .light {
      position: absolute;
      top: 0;
      height: 13.85rem;
      right: 4.8rem;
      animation: lightAnimate 5s linear infinite alternate;
      opacity: 0.5;
    }
    .img {
      height: 100%;
      border: none;
    }
  }
}
.mian-bottom {
  width: 101.25rem;
  // background-color: seagreen;
  margin: auto;
  margin-top: 6.5625rem;
  text-align: center;
  .split-line {
    height: 1px;
    margin: 5rem;
    background: linear-gradient(90deg, transparent, #fff, transparent);
  }
}
.mian-data {
  /* background-color: seagreen; */
  margin: auto;
  margin-top: 7.25rem;
  // display: flex;
  justify-content: space-between;
  .data {
    // flex: 1;
    display: inline-block;
    min-width: 40rem;
    padding-bottom: 5rem;
  }
}
.data-icon {
  width: 4.0625rem;
  height: 4.0625rem;
  // background-color: #4d4d4d;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.data-text {
  margin-top: 1.25rem;
  font-size: 1.125rem;
  color: #808080;
}
.mian-img {
  width: 101.25rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10.25rem;
  padding-bottom: 2.5rem;
  // background-color: sienna;
}
.img {
  height: 26.9375rem;
  width: 43.4375rem;
  border: 0.3125rem solid #4d4d4d;
  border-radius: 0;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
}
.img-data {
  width: 43.4375rem;
  height: 26.9375rem;
  background: #262626;
  border: 0.3125rem solid #4d4d4d;
  padding: 2.5rem;
  text-align: left;
  .data-title {
    font-size: 1.875rem;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #fff;
  }
  .data-2wm {
    width: 7.5rem;
    height: 7.5rem;
    background: #333333;
    margin-top: 3.125rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .data-phone {
    // text-align: .9375rem;
    margin-top: 3.125rem;
    line-height: 1.875rem;
    color: #808080;
    font-size: 0.875rem;
  }
}
@keyframes lightAnimate {
  0% {
    top: 0;
  }
  100% {
    top: 58%;
  }
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import animateMix from "@/mixin/animateMix.js";
import { pageOnloadBuild } from "../../3d/index.js";
export default {
  name: "About",
  mixins: [animateMix],
  components: {
    Card,
  },
  created() {},
  mounted() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    console.log(document.documentElement.scrollTop);
    // this.getmx();
  },
  methods: {
    handlemore() {
      document.documentElement.scrollTop = document.body.clientHeight;
    },
    getmx() {
      const loading = this.$loading({
        lock: true, //lock的修改符--默认是false
        text: "模型加载中", //显示在加载图标下方的加载文案
        spinner: "el-icon-loading", //自定义加载图标类名
        background: "rgba(0, 0, 0, 0)", //遮罩层颜色
        target: document.querySelector(".mian-right"), //loadin覆盖的dom元素节点
      });
      let view3 = document.getElementById("view3");
      pageOnloadBuild(view3, () => {
        console.log("done");
        loading.close();
      });
    },
  },
};
</script>
