<template>
  <div class="mian">
    <div class="box" ref="box" @mouseover="boxover" @mouseout="boxout">
      <div class="left" @wheel.stop>
        <div class="title">重庆瞰图科技有限公司</div>
        <div class="text">致力可视化系统设计<br />三维虚拟仿真开发</div>
        <div class="data">
          <div
            class="data-mian"
            @wheel.stop
            v-for="(item, index) in demolist"
            :key="index"
            @click="handledemo(item.projectAddress)"
          >
            <div class="data-img">
              <img :src="item.imgurl" alt="" />
            </div>
            <div class="data-text">{{ item.title }}</div>
          </div>
        </div>
        <!-- <nuxt-link to="/home/main">
          <div class="button">返回首页</div>
        </nuxt-link> -->
      </div>
    </div>
    <!-- <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="300"
      height="200"
      :src="demodz"
    >
    </iframe> -->
  </div>
</template>
<style lang="less" scoped>
iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.output {
  background: #eee;
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
  margin-top: 3rem;
}
.button:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.mian {
  width: 100%;
  height: 100%;
  position: relative;
}
.box {
  position: fixed;
  left: 0;
  top: 0;
  width: 37.5rem;
  height: 100vh;
  // transform: translateX(-36.375rem);
  transition: all 0.36s;
  z-index: 3;
  background-color: #1a1a1a;
}
.box:hover {
  transform: translateX(0);
}
.left {
  width: 36.375rem;
  height: 67.5rem;
  background: #1a1a1a;
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.7);
  padding: 0 0 0 150px;
  .title {
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #ffffff;
    line-height: 152px;
  }
  .text {
    width: 180px;
    height: 54px;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 35px;
  }
  .data {
    width: 22.5rem;
    height: 34.5rem;
    // background-color: cornflowerblue;
    margin-top: 5rem;
    overflow: auto;
    .data-mian {
      width: 22.5rem;
      height: 15.625rem;
      // background-color: #fff;
      margin-bottom: 4rem;
      .data-img {
        width: 360px;
        height: 210px;
        background: #4d4d4d;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .data-text {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 35px;
      }
    }
  }
  .data::-webkit-scrollbar {
    display: none;
  }
}
</style>
<script>
import request from "@/util/request";
export default {
  name: "Demos",
  data() {
    return {
      demolist: [],
      demodz: "",
    };
  },
  created() {
    // request
    //   .get({
    //     url: "/getDemo",
    //   })
    //   .then((res) => {
    //     console.log(res.data.data[0].projectAddress);
    //     this.demodz = res.data.data[0].projectAddress;
    //   });
  },
  mounted() {
    this.getdemolist();
    setTimeout(this.navtf, 3000);
    this.getxm();
  },
  methods: {
    async getdemolist() {
      let data = await request.get({
        url: "/getDemo",
      });
      console.log(data.data.data);
      this.demolist = data.data.data;
    },
    handledemo(idx) {
      console.log(idx);
      this.demodz = idx;
    },
    navtf() {
      this.$refs.box.style.transform = "translateX(-36.375rem)";
    },
    boxover() {
      this.$refs.box.style.transform = "translateX(0)";
    },
    boxout() {
      this.$refs.box.style.transform = "translateX(-36.375rem)";
    },
    getxm() {
      const loading = this.$loading({
        lock: true, //lock的修改符--默认是false
        text: "项目加载中", //显示在加载图标下方的加载文案
        spinner: "el-icon-loading", //自定义加载图标类名
        background: "rgba(0, 0, 0, 0.1)", //遮罩层颜色
        target: document.querySelector("#inlineFrameExample"), //loadin覆盖的dom元素节点
      });
      setTimeout(()=>{loading.close()},3000);
    },
  },
};
</script>
