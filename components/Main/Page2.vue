<template>
  <div>
    <Card>
      <div class="flex justify-between">
        <div class="fadeInUp" style="width: 600px; height: 650px">
          <div class="text-3xl h-40">数字孪生</div>
          <div class="h-20">
            <span class="text-2xl">四要素</span>
            <span class="color-subtext">(设计、模型、交互、数据)</span>
            <div class="text-xs color-subtext">Four elements</div>
          </div>
          <div class="color-subtext h-20 fadeInUp2">
            3D园区数字孪生充分利用物理模型、传感器更新、运行历史等数据，集成多学科、多物理量、多尺度、多概率的仿真过程，通过物联网技术在虚拟空间中完成映射，从而反映相对应的实体装备的全生命周期过程。
          </div>
          <div class="color-subtext h-20 fadeInUp2">
            瞰图科技在“数字孪生”制作上，具备成熟的开发管理流程；拥有完善的产品设计、多精度的模型标准、个性化的交互效果、精准的数据引入。运用更多前沿技术完成数字映射，建立更全面的孪生场景。
          </div>
        </div>
        <div class="canvas"></div>
      </div>
    </Card>
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
  name: "Page2",

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
  methods: {},
};
</script>
