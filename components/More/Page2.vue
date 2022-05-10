<template>
  <Card>
    <div class="flex justify-between main">
      <div class="swiper-box">
        <swiper>
          
        </swiper>
      </div>
      <div ref="swiper" class="swiper-main" @wheel.stop>
        <div class="main-data">1</div>
        <div class="main-data">2</div>
        <div class="main-data">3</div>
        <div class="main-data">4</div>
        <div class="main-data">5</div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/base/Card.vue";
import animateMix from "@/mixin/animateMix.js";
export default {
  mixins: [animateMix],
  components: {
    Card,
  },
  mounted () {
    console.log(this.$refs.swiper.scroll);
  },
};
</script>

<style lang="less" scoped>
.swiper-box {
  width: 922px;
  height: 636px;
  background: #4d4d4d;
  border-radius: 20px;
}
.swiper-main {
  width: 35.875rem;
  height: 39.75rem;
  background-color: brown;
  overflow: auto;
}
.main-data {
  width: 35.875rem;
  height: 39.75rem;
}
</style>