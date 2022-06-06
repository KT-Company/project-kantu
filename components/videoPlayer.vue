<template>
  <div @click.stop="">
    <el-dialog
      class="video-layer"
      :title="''"
      width="60%"
      center
      :modal-append-to-body="false"
      :visible.sync="centerDialogVisible"
      :before-close="handleClose"
      
    >
      <div class="video_wrapper">
        <video
          class="video"
          :src.sync="src"
          autoplay
          loop
          id="videoPlayer"
          controls
          preload="auto"
          ref="videoPlayer"
        ></video>
        <!-- <div v-if="isPlay" class="shadow" @click="videoplay()">
          <button class="btn"></button>
        </div> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "videoPlayer",
  props: {
    src: String,
    title: { type: String, default: "视频播放" },
    visual: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  mounted() {},
  watch: {
    visual(val) {
      this.centerDialogVisible = val;
      this.$nextTick(function () {
        if (val) this.$refs.videoPlayer.play();
      });
    },
  },
  methods: {
    videoplay() {
      this.$refs.videoPlayer.play();
    },
    handleClose() {
      this.centerDialogVisible = false;
      this.$refs.videoPlayer.pause();
      this.$refs.videoPlayer.currentTime = 0;
      this.$emit("close");
    },
  },
};
</script>

<style lang="less" scoped>
.video-layer {
  /deep/ .el-dialog--center {
    background: transparent;
  }
  /deep/ .el-dialog__header {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 3;
  }
  /deep/ .el-dialog--center .el-dialog__body {
    padding: 10px 0 0;
  }
}
.video_wrapper {
  width: 100%;
  position: relative;
  padding-top: 56%;
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .shadow {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .btn {
    width: 50px;
    height: 50px;
    background: url("@/assets/images/main/播放.png") no-repeat center center / 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
