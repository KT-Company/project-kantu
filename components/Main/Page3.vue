<template>
  <div class="flex justify-between">
  <div class="canvas flex1" style="height: calc(100vh - 4rem)">
    <img src="" alt="">
  </div>
  <Card>
      <div class="fadeInUp main3" style="width: 60vh; height: 80vh">
        <div class="text-3xl h-40">GIS <i class="el-icon-location-outline"></i></div>
        <div class="h-20">
          <span class="text-2xl">GIS - 地理信息系统</span>
        </div>
        <div class="color-subtext h-60 fadeInUp2">
          GIS(地理信息系统):广泛运用于物联网、智慧城市等，与位置相关的应用关联。通过WebGIS的方式呈现地理信息，地图可视化便是GIS与web前端技术相结合的重要方向。瞰图科技充分运用GIS技术，在工业制造、智慧园区、智慧工地、智慧能源、航空航天等项目中作为开发基础。
        </div>
        <div>
          <!-- <el-button class="btn-normal"><i class="el-icon-d-arrow-left mr-6"></i>体验GIS底图场景</el-button> -->
          <div class="button-right">
            <i class="el-icon-d-arrow-left mr-6"></i>体验GIS底图场景
          </div>
        </div>
      </div>
  </Card>
  </div>
</template>
<style>
.button-right {
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
  cursor: pointer;
  margin-left: 350px;
}
.button-right:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.main3 {
  text-align: right;
  padding-top: 150px;
  /* background-color: #fff; */
}
.flex1{
  width: 70rem;
  background: url("@/assets/images/main/图.png") no-repeat;
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
  },
};
</script>
