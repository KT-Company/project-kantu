<template>
  <div class="box">
    <Card>
      <div style="color: #808080; font-size: 13px; margin-top: 116px">
        你的位置：首页 > <span style="color: #fff">了解瞰图</span>
      </div>
      <div class="mian fadeInUp">
        <div class="mian-left">
          <div style="font-size: 86px">About</div>
          <div style="font-size: 30px">重庆瞰图科技有限公司</div>
          <div class="text line-height-1-5" style="font-size: 14px">
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
          <div class="button" @click="handlemore">
            <i class="el-icon-d-arrow-left mr-6"></i>联系我们获取案例
          </div>
        </div>
        <div class="mian-right">
          <canvas id="view3" class="canvasBox"></canvas>
        </div>
      </div>
      <div class="mian-bottom fadeInUp">
        <div style="height: 148px">
          <div style="font-size: 50px">使命愿景</div>
          <div style="font-size: 25px; color: #808080">
            致力可视化系统设计 三维虚拟仿真开发
          </div>
        </div>
        <div class="mian-data">
          <div class="data">
            <div class="data-icon">
              <img src="@/assets/images/main/企业愿景.png" alt="" />
            </div>
            <div class="data-text">
              <div style="font-size: 30px; color: #ffffff">企业愿景</div>
              <div style="font-size: 14px; color: #4d4d4d">
                Enterprise vision
              </div>
              <div style="margin-top: 34px">运用专业的可视化系统</div>
              <div>为人们实现传统拍摄无法实现</div>
              <div>的相应场景和事件</div>
            </div>
          </div>
          <div class="data">
            <div class="data-icon">
              <img src="@/assets/images/main/企业使命.png" alt="" />
            </div>
            <div class="data-text">
              <div style="font-size: 30px; color: #ffffff">企业使命</div>
              <div style="font-size: 14px; color: #4d4d4d">
                Enterprise mission
              </div>
              <div style="margin-top: 34px">以技术实力为支撑</div>
              <div>以用户需求为导向</div>
              <div>以技术创新为根本</div>
            </div>
          </div>
          <div class="data">
            <div class="data-icon">
              <img src="@/assets/images/main/核心.png" alt="" />
            </div>
            <div class="data-text">
              <div style="font-size: 30px; color: #ffffff">核心价值</div>
              <div style="font-size: 14px; color: #4d4d4d">Core value</div>
              <div style="margin-top: 46px">做正直守信的人</div>
              <div>做对社会有价值的事</div>
            </div>
          </div>
          <div class="data">
            <div class="data-icon">
              <img src="@/assets/images/main/定位.png" alt="" />
            </div>
            <div class="data-text">
              <div style="font-size: 30px; color: #ffffff">战略定位</div>
              <div style="font-size: 14px; color: #4d4d4d">
                Strategic positioning
              </div>
              <div style="margin-top: 46px">致力可视化系统设计</div>
              <div>三维虚拟仿真开发</div>
            </div>
          </div>
        </div>
        <div class="mian-img">
          <div class="img">
            <!-- <iframe
              id="inlineFrameExample"
              title="地图 "
              src="https://ditu.amap.com/search?query=%E6%B8%9D%E9%AB%98%E5%A4%A7%E5%8E%A6F%E5%BA%A7&city=500107&id=B0FFHRRF7T&query_type=IDQ"
            >
            </iframe> -->
            <img src="@/assets/images/main/公司地图.jpg" alt="">
          </div>
          <div class="img-data">
            <div class="data-title">欢迎咨询我们</div>
            <div class="data-2wm">
              <img src="@/assets/images/main/二维码.png" alt="" />
            </div>
            <div class="data-phone">
              电话(微信同号)：158 2628 9334 <br />
              <!-- 微信：158 2628 9334 <br /> -->
              重庆市九龙坡区石桥铺渝高大厦F座17楼1706-1707
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<style scoped lang="less">
.box {
  width: 100vw;
  background: url("@/assets/images/main/背景.png") 100%;
}
iframe {
  height: 26.9375rem;
  width: 695px;
}
.button {
  width: 210px;
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
  // margin-top: 96px;
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
  height: 39rem;
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
  width: 37.6875rem;
  height: 100%;
}
.mian-right {
  flex: 1;
  // width: 47.8125rem;
  height: 100%;
  // // background-color: #4d4d4d;
}
.mian-bottom {
  width: 101.25rem;
  height: 71rem;
  // background-color: seagreen;
  margin: auto;
  margin-top: 6.5625rem;
  text-align: center;
}
.mian-data {
  width: 82.6875rem;
  height: 17.3125rem;
  /* background-color: seagreen; */
  margin: auto;
  margin-top: 116px;
  display: flex;
  justify-content: space-between;
}
.data {
  width: 15.25rem;
  height: 17.1875rem;
  /* background-color: sienna; */
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
  height: 26.9375rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10.25rem;
  // background-color: sienna;
}
.img {
  height: 26.9375rem;
  width: 695px;
  background-color: #4d4d4d;
  img{
    height: 100%;
  }
}
.img-data {
  width: 695px;
  height: 431px;
  background: #262626;
  border: 5px solid #4d4d4d;
  padding: 2.5rem;
  text-align: left;
  .data-title {
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #fff;
  }
  .data-2wm {
    width: 120px;
    height: 120px;
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
    this.getmx(); 
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
        background: "rgba(0, 0, 0, 0.1)", //遮罩层颜色
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
