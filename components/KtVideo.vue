<template>
  <div class="">
    <div class="video-img" @click="visual = true" v-if="!isFirst">
      <img class="thumb" :src="data.img" alt="" />
      <!-- <img class="player" src="@/assets/images/main/播放.png" alt=""> -->
    </div>
    <a class="video-img" target="_blank" :href="data.projectAddress" v-else>
      <img class="thumb" :src="data.img" alt="" />
    </a>
    <div class="title-two">{{ data.title }}</div>
    <video-player
      :src="data.spurl"
      :visual="visual"
      @close="visual = false"
    ></video-player>
  </div>
</template>

<script>
import videoPlayer from "./videoPlayer.vue";
export default {
  components: {
    videoPlayer,
  },
  props: {
    data: Object,
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visual: false,
    };
  },
  mounted() {
    // console.log(this.data)
  },
};
</script>

<style lang="less" scoped>
.video-img {
  width: 252px;
  height: 173px;
  position: relative;
  cursor: pointer;
  display: block;
  .thumb {
    width: 100%;
    height: 100%;
  }
  .player {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 50%;
    top: 50%;
    margin-top: -16px;
    margin-left: -16px;
  }
}

.title-two {
  line-height: 32px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
