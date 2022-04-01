<template>
  <div>
    <Card>
      <div class="flex justify-between">
        <div>
          <swiper :options="swiperOptionP1" style="width: 600px; height: 650px">
            <swiper-slide v-for="item in swiperDataP1" :key="item.index">
              <div class="display-box fadeInUp">
                <div style="color: rgba(153, 153, 153, 1)">
                  {{ item.slogenEn }}
                </div>
                <div class="text-4xl h-60">
                  {{ item.slogen }}
                </div>
                <div>{{ item.detail }}</div>
                <div class="absolute bottom-16">{{ item.time }}</div>
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination swiper-pagination-p1" slot="pagination"></div> -->
            <div class="swiper-button-prev swiper-button-p1" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-p1" slot="button-next"></div>
          </swiper>
        </div>
        <div class="canvas"></div>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/base/Card.vue";
export default {
  name: "Page1",
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
  props: {
    onSlideChange: {
      type: Function,
    },
  },
  components: {
    Card,
  },
  mounted() {},
  methods: {},
};
</script>
