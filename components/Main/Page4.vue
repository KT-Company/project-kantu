<template>
  <Card class="flex items-center">
    <div class="flex flex-col justify-between" style="flex: 1;">
      <div>
        <div class="fadeInUp" style="padding-bottom: 9.9375rem;">
          <div class="text-3xl h-40">三维可视化</div>
          <div class="flex">
            <img
              src="~assets/images/main/p4-mobile.png"
              class="mr-20"
              alt=""
              srcset=""
            />
            <div>
              <div
                class="rounded-xl p-4 mb-20 tiao"
                style="
                  background: #262626;
                  box-shadow: .25rem .25rem .625rem rgba(255, 255, 255, 0.1);
                "
              >
                <span>数据模型采集 </span>
                <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
                <span>模型制作</span>
                <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
                <span>三维可视化功能</span>
                <i class="el-icon-d-arrow-right ml-6 mr-6"></i>
                <span>大数据集成</span>
              </div>
              <div class="color-subtext fadeInUp2 line-height-1-5">
                制作三维可视化平台过程共分为4个步骤流程，随着每一个步骤制作，系统整体真实可视化性也逐步实现。
                全要素场景是瞰图科技的核心价值，其包含来自现实世界的城市、道路、建筑、植被、设施、产线等场景，同时兼具视觉真实、地理信息、物理模拟及自由交互等要素。
                三维模型工程师将多种格式的模型文件打包，前端工程师将渲染后的模型于web端呈现。同时工程师对模型的场景、光照、交互、等属性进行编辑；使模型具备更逼真的效果。
                采用新一代HTML5+WebGL构架和Canvas布局的B/S
                架构，电脑不用安装任何插件软件即可运行。
              </div>
            </div>
          </div>
          <ul class="mt-10 xian">
            <li
              :class="['item',listnum == index ? 'hover' : '']"
              v-for="(item, index) in activelist"
              :key="index"
              @mouseover="overnum(index)"
              @mouseout="outnum"
            >
              <div class="message-dialog-wrapper" ref="textkuang">
                <h3 class="m-d-title">{{ item.title }}</h3>
                <p class="m-d-content">{{ item.content }}</p>
              </div>
            </li>
            <div class="num">{{ listnum+1 > 9 ? listnum+1 : '0' + (listnum+1) }}</div>
            <!-- <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
                <el-card v-show="false">
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline> -->
            <!-- <Timeline /> -->
            <!-- <div class="one"></div> -->
          </ul>
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
.tiao {
  width: 52.875rem;
  height: 3.625rem;
  padding: 0;
  padding-left: .9375rem;
  background: #262626;
  border-radius: .625rem;
  font-size: 1.5625rem;
  line-height: 3.625rem;
}
.xian {
  width: 84.375rem;
  height: .625rem;
  background: linear-gradient(#4d4d4d 0%, #4d4d4d 100%) center
    center/calc(100% - 1.25rem) .0625rem no-repeat;
  margin: auto;
  margin-top: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .num {
    position: absolute;
    left: 46.4%;
    font-size: 5rem;
    font-family: Source Han Sans SC;
    font-weight: 800;
    color: #4d4d4d;
    line-height: 4.75rem;
    opacity: 0.8;
  }
}
.item {
  box-sizing: content-box;
  position: relative;
  height: .625rem;
  width: .625rem;
  padding: .625rem;
  border-radius: 6.25rem;
  background-color: #4d4d4d;
  background-clip: content-box;
  cursor: pointer;
}
.item.hover {
  transition: all 0.25s;
  background-color: #fff;
}
.item::after {
  content: "";
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: .0625rem solid transparent;
  opacity: 0;
  width: 0;
  height: 0;
  transition: all 0.25s ease-in;
  transform: translate(-50%, -50%);
}
.item.hover:after {
  width: 1.875rem;
  height: 1.875rem;
  opacity: 1;
  border: .0625rem solid #fff;
}

.item.hover > .message-dialog-wrapper {
  opacity: 1;
  pointer-events: auto;
}
.message-dialog-wrapper {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 50%;
  width: 14.3125rem;
  height: 9.9375rem;
  transform: translate(-50%, -100%);
  transition: all 0.25s ease-in;
  background: url("@/assets/images/main/dialog.png") no-repeat center / 100%;
  padding: 1.5rem;
  text-align: center;
}
.m-d-title {
  font-size: 1.125rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
}
.m-d-content {
  font-size: .875rem;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 1.25rem;
  margin-top: 1.125rem;
}
.item:nth-child(even) > .message-dialog-wrapper {
  background: red;
  transform: translate(-50%, .625rem);
  background: url("@/assets/images/main/dialog2.png") no-repeat center / 100%;
  padding: 3.625rem 1.0625rem 0 1.0625rem;
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import Timeline from "@/components/base/Timeline.vue";
export default {
  name: "Page4",

  data() {
    return {
      // activities: [
      //   {
      //     content: "活动按期开始",
      //     timestamp: "2018-04-15",
      //   },
      //   {
      //     content: "通过审核",
      //     timestamp: "2018-04-13",
      //   },
      //   {
      //     content: "创建成功",
      //     timestamp: "2018-04-11",
      //   },
      // ],
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
      listnum: 0,
    };
  },
  components: {
    Card,
    Timeline,
  },
  mounted() {
    this.initInterval()
  },
  methods: {
    overnum(index) {
      // console.log(index)
       this.listnum = index;
       clearInterval(this.timer)
    },
    outnum() {
      this.initInterval()
    },
    initInterval() {
      this.timer = setInterval(() => {
        if(this.listnum < this.activelist.length - 1) {
          this.listnum ++;
        } else {
          this.listnum = 0;
        }
      },2000)
    }
  },
};
</script>
