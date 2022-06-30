<template>
  <!-- <div class="flex justify-between">
  <div class="canvas flex1" style="height: calc(80vh - 4rem)">
    <img src="" alt="">
  </div> -->
  <Card class="flex justify-between items-center">
    <img class="img" src="@/assets/images/main/图.jpg" alt="" />
    <div class="fadeInUp main3" style="margin-left: 2%;width: 60%;">
      <div class="text-3xl h-40">
        GIS <i class="el-icon-location-outline"></i>
      </div>
      <div class="h-20">
        <span class="text-2xl">GIS - 地理信息系统</span>
      </div>
      <div class="color-subtext h-60 fadeInUp2 line-height-1-5">
        GIS(地理信息系统):广泛运用于物联网、智慧城市等，与位置相关的应用关联。通过WebGIS的方式呈现地理信息，地图可视化便是GIS与web前端技术相结合的重要方向。瞰图科技充分运用GIS技术，在工业制造、智慧园区、智慧工地、智慧能源、航空航天等项目中作为开发基础。
      </div>
      <div>
        <!-- <el-button class="btn-normal"><i class="el-icon-d-arrow-left mr-6"></i>体验GIS底图场景</el-button> -->
        <div class="button-right" @click="handlemore">
          <i class="el-icon-d-arrow-left mr-6"></i>体验GIS底图场景
        </div>
      </div>
    </div>
  </Card>
</template>
<style scoped>
.button-right {
  width: 13.125rem;
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
  cursor: pointer;
  display: inline-block;
}
.button-right:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.main3 {
  text-align: right;
  /* padding-top: 9.375rem; */
  /* background-color: #fff; */
}

.img {
  width: 55rem;
  display: block;
  border-radius: .625rem;
  }
</style>
<script>
import Card from "@/components/base/Card.vue";
export default {
  name: "Page3",
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
          slogen: "slogen2",
          slogenEn: "slogen2",
          time: "01/03",
        },
        {
          index: "3002",
          slogen: "slogen3",
          slogenEn: "slogen3",
          time: "01/02",
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
  components: {
    Card,
  },
  mounted() {},
  methods: {
    handleSlideChange() {},
    handlemore() {
      document.documentElement.scrollTop = document.body.clientHeight;
    },
  },
};
</script>
