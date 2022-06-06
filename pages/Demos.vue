<template>
  <div class="mian">
    <div :class="{box: true,hover: showMune}" ref="box">
      <div class="left" @wheel.stop>
        <div class="title">重庆瞰图科技有限公司</div>
        <div class="text">致力可视化系统设计<br />三维虚拟仿真开发</div>
        <div class="data">
          <div
            class="data-mian"
            @wheel.stop
            v-for="(item, index) in demolist"
            :key="index"
            @click="handledemo(item.projectAddress,index)"
          >
            <div :class="['data-img',item.projectAddress == demodz ? 'active' : '']">
              <img :src="item.imgurl" alt="" />
            </div>
            <div :class="['data-text',item.projectAddress == demodz ? 'active' : '']">{{ item.title }}</div>
          </div>
        </div>
        <!-- <nuxt-link to="/home/main">
          <div class="button">返回首页</div>
        </nuxt-link> -->
      </div>
    </div>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="300"
      height="200"
      :src="demodz"
    >
    </iframe>
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
  height: 100vh;
  transition: all 0.36s;
  padding-right: 10px;
  z-index: 3;
  transform: translateX(calc(-100% + 10px));
}
.box:hover,
.box.hover {
  transform: translateX(0);
}
.left {
  height: 100%;
  background: #1a1a1a;
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.7);
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #ffffff;
    line-height: 152px;
  }
  .text {
    width: 180px;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 35px;
  }
  .data {
    width: 22.5rem;
    flex: 1;
    padding: 10px;
    box-sizing: content-box;
    // background-color: cornflowerblue;
    margin-top: 3rem;
    overflow: auto;
    position: relative;
    .data-mian {
      width: 100%;
      height: 15.625rem;
      // background-color: #fff;
      margin-bottom: 3rem;
      cursor: pointer;
      .data-img {
        width: 360px;
        height: 210px;
        background: #4d4d4d;
        opacity: .8;
        &.active {
          // border: 3px solid #01adf2;
          box-shadow: 0px 0px 10px #fff;
          opacity: 1;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .data-text {
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        margin-top: 10px;
        color: #595959;
        line-height: 35px;
        &.active {
          color: #fff;
        }
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
      showMune: true
    };
  },
  created() {
    request
      .get({
        url: "/getDemo",
      })
      .then((res) => {
        console.log(res.data.data[0].projectAddress);
        this.demodz = res.data.data[0].projectAddress;
      });
  },
  mounted() {
    this.getdemolist();
    setTimeout(() => {
      this.showMune = false
    }, 3000);
    this.getxm();
  },
  methods: {
    async getdemolist() {
      let data = await request.get({
        url: "/getDemo",
      });
      this.demolist = data.data.data;
    },
    handledemo(idx,i) {
      this.demodz = idx;
      const dom = document.querySelectorAll('.data-mian')[i];
      const top = dom.offsetTop - 10;
      const parent = dom.parentNode;
      parent.scrollTop = top
      // clearInterval(this.timer)
      // this.timer = setInterval(() => {
      // let speed = (top - parent.scrollTop) / 5;
      //   speed = speed>0?Math.ceil(speed):Math.floor(speed)
      //   parent.scrollTop = parent.scrollTop + speed;
      //   // 滚动条是否已经到底: 盒子被卷去的高度+盒子可见区域的高度 = 盒子正文的总高度
      //   let isBottom = (parent.scrollTop + parent.clientHeight >=  parent.scrollHeight)
      //   if(speed==0 || isBottom){
      //     clearInterval(this.timer)
      //   }
      // },30)
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
