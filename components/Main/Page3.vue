<template>
  <div>
    <div class="flex justify-between">
      <div class="canvas" style="width: 900px; height: 600px"></div>
      <Card>
        <div class="fadeInUp" style="width: 600px; height: 650px">
          <div class="text-3xl h-40">GIS</div>
          <div class="h-20">
            <span class="text-2xl">GIS - 地理信息系统</span>
          </div>
          <div class="color-subtext h-20 fadeInUp2">
            GIS(地理信息系统):广泛运用于物联网、智慧城市等，与位置相关的应用关联。通过WebGIS的方式呈现地理信息，地图可视化便是GIS与web前端技术相结合的重要方向。瞰图科技充分运用GIS技术，在工业制造、智慧园区、智慧工地、智慧能源、航空航天等项目中作为开发基础。
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<style>
.color-subtext {
  color: #b3b3b3;
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
