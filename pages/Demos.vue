<template>
  <div class="mian">
    <div class="left">
      <div class="title">重庆瞰图科技有限公司</div>
      <div class="text">致力可视化系统设计<br />三维虚拟仿真开发</div>
      <div class="data">
        <div class="data-mian">
          <div class="data-img"></div>
          <div class="data-text">绵阳高新区</div>
        </div>
        <div class="data-mian">
          <div class="data-img"></div>
          <div class="data-text">绵阳高新区</div>
        </div>
      </div>
      <div class="button">
        <nuxt-link to="/home/main">返回首页</nuxt-link>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<style lang="less" scoped>
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
  transition: all .36s;
  margin-top:4rem;
}
.button:hover{
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-.3125rem);
}
.mian {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 582px;
  height: 1080px;
  background: #1a1a1a;
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.7);
  padding: 74px 0 0 150px;
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
    margin-top: 5.625rem;
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
.right {
  width: 1372px;
  height: 1080px;
  background: #808080;
}
</style>
<script>
export default {
  name: "Demos",
  methods: {},
};
</script>
