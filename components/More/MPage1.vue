<template>
  <Card>
    <div>
      <div style="color: #808080; font-size: 13px; margin-top: 52px">
        你的位置：首页 > <span style="color: #fff">产品业务</span>
      </div>
      <div class="flex justify-between main">
        <div class="mian-left fadeInUp">
          <div class="title">瞰图编辑器<span>(方便，快捷，高效)</span></div>
          <ul>
            <li>支持三维场景中修改设备点位、属性数据等信息。</li>
            <li>支持数据看板层面，根据数据类型选择各形态的图表展示。</li>
            <li>支持模型、看板数据业务绑定。</li>
          </ul>
          <div class="fc">
            <div><img src="@/assets/images/main/格式.png" alt=""> 多格式导入</div>
            <div><img src="@/assets/images/main/图层 647.png" alt="">多图表选择</div>
            <div><img src="@/assets/images/main/基础样式.png" alt="">多样式修改  </div>
          </div>
          <div class="button" @click="handlemore">
            <i class="el-icon-d-arrow-left mr-6"></i>
            获取体验
          </div>
        </div>
        <div class="mian-right fadeInUp">
          <el-carousel indicator-position="outside" height="610px">
            <el-carousel-item>
              <img src="@/assets/images/main/bjq1.jpg" alt=""  class="bjq"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/images/main/bjq2.jpg" alt="" class="bjq"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/images/main/bjq3.jpg" alt="" class="bjq"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
.main{
  align-items: center;
}
.mian-left {
  margin-top: 5rem;
}
.title {
  font-size: 40px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: #ffffff;
  span {
    font-size: 1.125rem;
    color: #b3b3b3;
  }
}
ul {
  margin-top: 3.125rem;
  line-height: 30px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #b3b3b3;
}
.fc {
  width: 18.75rem;
  height: 6.75rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  div {
    width: 140px;
    height: 44px;
    background: #4d4d4d;
    border-radius: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    img{
      width: 19px;
      height: 23px;
    }
  }
}
.button {
  width: 10rem;
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
  margin-top: 5rem;
}
.button:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.mian-right {
  width: 1020px;
height: 610px;
background: #4D4D4D;
border-radius: 20px;
  // width: 683px;
  // height: 472px;
  // background: #4d4d4d;
  // box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  // margin-top: 9.125rem;
}
.bjq{
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>
<script>
import Card from "@/components/base/Card.vue";
// import animateMix from "@/mixin/animateMix.js";
export default {
  // mixins: [animateMix],
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  methods: {
    handlemore() {
      document.documentElement.scrollTop =document.body.clientHeight
    }
  },
};
</script>

