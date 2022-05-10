<template>
  <Card>
    <div class="flex flex-col justify-between">
      <div>
        <div class="fadeInUp" style="height: 80vh">
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
                class="rounded-xl p-4 mb-20"
                style="
                  background: #262626;
                  box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.1);
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
              <div class="color-subtext fadeInUp2">
                制作三维可视化平台过程共分为4个步骤流程，随着每一个步骤制作，系统整体真实可视化性也逐步实现。
                全要素场景是瞰图科技的核心价值，其包含来自现实世界的城市、道路、建筑、植被、设施、产线等场景，同时兼具视觉真实、地理信息、物理模拟及自由交互等要素。
                三维模型工程师将多种格式的模型文件打包，前端工程师将渲染后的模型于web端呈现。同时工程师对模型的场景、光照、交互、等属性进行编辑；使模型具备更逼真的效果。
                采用新一代HTML5+WebGL构架和Canvas布局的B/S
                架构，电脑不用安装任何插件软件即可运行。
              </div>
            </div>
          </div>
          <ul class="mt-20 xian">
            <li class="item" v-for="item in 11" :key="item">
              <div class="message-dialog-wrapper">
                <h3 class="m-d-title"></h3>
                <p class="m-d-content"></p>
              </div>
            </li>
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
<style>
.xian {
  width: 1350px;
  height: 9px;
  background: linear-gradient(#4d4d4d 0%, #4d4d4d 100%) center center/calc(100% - 20px) 1px
    no-repeat;
  margin: auto;
  margin-top: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  box-sizing: content-box;
  position: relative;
  height: 9px;
  width: 9px;
  padding: 10px;
  border-radius: 100px;
  background-color: #4d4d4d;
  background-clip: content-box;
  cursor: pointer;
}
.item:hover {
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
  border: 1px solid transparent;
  opacity: 0;
  width: 0;
  height: 0;
  transition: all .25s ease-in;
  transform: translate(-50%,-50%);
}
.item:hover:after {
  width: 29px;
  height: 29px;
  opacity: 1;
  border: 1px solid #FFF;
}

.item:hover>.message-dialog-wrapper{
  opacity: 1;
  pointer-events: auto;
}
.message-dialog-wrapper{
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 50%;
  width: 229px;
  height: 159px;
  transform: translate(-50%,-100%);
  transition: all .25s ease-in;
  background: url('@/assets/images/main/dialog.png');
}
.item:nth-child(even)>.message-dialog-wrapper{
  background: red;
  transform: translateX(-50%);

}


.one {
  width: 9px;
  height: 9px;
  background: #4d4d4d;
  border-radius: 50%;
  transform: translateY(-4.5px);
}
.one:hover {
  background-color: #fff;
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
    };
  },
  components: {
    Card,
    Timeline,
  },
  mounted() {},
  methods: {},
};
</script>
