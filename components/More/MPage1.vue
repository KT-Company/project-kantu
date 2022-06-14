<template>
  <Card class="flex items-center">
    <div style="flex: 1">
      <div style="color: #808080; font-size: .8125rem; margin-top: 3.25rem">
        你的位置：首页 > <span style="color: #fff">产品业务</span>
      </div>
      <div class="flex justify-between main">
        <div class="mian-left fadeInUp">
          <div class="title">瞰图编辑器<span style="margin-left: 5px;">(方便，快捷，高效)</span></div>
          <ul>
            <li>支持三维场景中修改设备点位、属性数据等信息。</li>
            <li>支持数据看板层面，根据数据类型选择各形态的图表展示。</li>
            <li>支持模型、看板数据业务绑定。</li>
          </ul>
          <div class="fc">
            <div><img src="@/assets/images/main/格式.png" alt=""> 多格式导入</div>
            <div><img src="@/assets/images/main/图层 647.png" alt="">多图表选择</div>
            <div><img src="@/assets/images/main/基础样式.png" alt="">多样式修改 </div>
          </div>
          <div class="button" @click="handlemore">
            <i class="el-icon-d-arrow-left mr-6"></i>
            获取体验
          </div>
        </div>
        <div class="mian-right fadeInUp">
          <el-carousel indicator-position="outside" height="38.125rem">
            <el-carousel-item>
              <img src="@/assets/images/main/bjq1.jpg" alt="" class="bjq" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/images/main/bjq2.jpg" alt="" class="bjq" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/images/main/bjq3.jpg" alt="" class="bjq" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
.main {
  align-items: center;
}

.mian-left {
  margin-top: 5rem;
}

.title {
  font-size: 2.5rem;
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
  line-height: 1.875rem;
  font-size: .875rem;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #b3b3b3;
}

.fc {
  width: 320px;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  div {
    width: 140px;
    height: 44px;
    background: #4d4d4d;
    border-radius: 21.88px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 19px;
    font-size: 0.9rem;

    img {
      width: 19px;
      height: 23px;
      margin-right: 16px;
      margin-left: 15px;
    }
  }
}

.button {
  width: 10rem;
  height: 3.125rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
  box-shadow: 0rem 0rem 1.1875rem .0625rem rgba(255, 255, 255, 0.38);
  border-radius: .625rem;
  font-size: .875rem;
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
  width: 63.75rem;
  height: 38.125rem;
  background: #4D4D4D;
  border-radius: 1.25rem;
}

.bjq {
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 1.125rem;
  opacity: 0.75;
  line-height: 18.75rem;
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
      document.documentElement.scrollTop = document.body.clientHeight
    }
  },
};
</script>

