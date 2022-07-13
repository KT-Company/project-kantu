<template>
  <!--时间线-->
  <div class="text-center">
    <div class="timeline">
      <div class="timeline-content">
        <div
          :class="['item', activeIndex == index ? 'hover' : '']"
          v-for="(item, index) in activelist"
          :key="index"
          @click="activeIndex = index"
        >
          <div class="message-dialog-wrapper">
            <h3 class="m-d-title">{{ item.title }}</h3>
            <p class="m-d-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="num">
        {{ activeIndex + 1 > 9 ? activeIndex + 1 : "0" + (activeIndex + 1) }}
      </div>
      <div
        class="active-pointer"
        :style="{
          left: 'calc(50% - 3px)',
          top: Math.floor(activeIndex / 2) * 17 + 8.5 + 'rem',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  data() {
    return {
      activelist: [
        {
          title: "实时光影变化",
          content: "随着太阳走向产生不同明暗",
        },
        {
          title: "景深效果",
          content: "可调节景深参数",
        },
        {
          title: "天气变化",
          content: "可模拟物理场景不同天气变化",
        },
        {
          title: "勾边泛光效果",
          content: "模型发光高亮显示",
        },
        {
          title: "镜头控制器",
          content: "可设置相机位置及鼠标事件",
        },
        {
          title: "流光效果",
          content: "三维灯光特效",
        },
        {
          title: "风格切换",
          content: "可一键切换三维场景建筑风格",
        },
        {
          title: "镜头聚焦",
          content: "对具体模型进行距离特写",
        },
        {
          title: "自动巡检",
          content: "根据镜头预设点位进行巡检移动",
        },
        {
          title: "天空球变化",
          content: "可切换多种天空状态",
        },
        {
          title: "高度面积计算",
          content: "通过鼠标框选可计算真实场景大小",
        },
        {
          title: "小地图功能",
          content: "实时定位当前位置",
        },
      ],
      activeIndex: 0,
      timer:null
    };
  },
  mounted() {
    this.initInterval()
  },
  methods: {
    initInterval() {
      this.timer = setInterval(() => {
        if(this.activeIndex < this.activelist.length - 1) {
          this.activeIndex ++;
        } else {
          this.activeIndex = 0;
        }
      },2000)
    }
  },
};
</script>

<style lang="less" scoped>
.timeline {
  position: relative;
  display: inline-block;
  .timeline-content {
    // width: 78rem;
    display: grid;
    grid-template-columns: 50% 50%;
    .item {
      display: inline-block;
      position: relative;
      width: 33rem;
      height: 17rem;
      padding: 3.2rem 5.6rem;
      background: url("@/assets/images/mmain/dialog-back.png") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      &:nth-of-type(even) {
        margin-left: 2rem;
        background: url("@/assets/images/mmain/dialog-back2.png") no-repeat;
        background-size: 100% 100%;
      }
      &:nth-of-type(odd) {
        &::after {
          content: "";
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 1px;
          background: white;
        }
      }
      .m-d-title {
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      .m-d-content {
        font-size: 2rem;
        color: rgba(204, 204, 204, 1);
      }
    }
  }
  .num {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 6.64rem;
    font-family: Source Han Sans SC;
    font-weight: 800;
    color: #4d4d4d;
    line-height: 6.33rem;
    opacity: 0.8;
  }
  .line {
    position: absolute;
    width: 1px;
    left: 50%;
    top: 0;
    height: 100%;
    background: rgba(77, 77, 77, 1);
  }
   @keyframes shining {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .active-pointer {
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    transition: all 0.25s ease-in;
    // animation: shining ease-in 2s infinite;
       
    &::after {
      content: "";
      display: inline-block;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      opacity: 1;
      margin: 3px 0 0 3px;
      transform: translate(-50%, -50%);
      border: 1px solid #fff;
    }
  }
}
</style>
