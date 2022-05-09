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
          <div class="mt-20 xian">
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
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
            <div class="one"></div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
<style>
.xian {
  width: 1330px;
  height: 1px;
  background: #4d4d4d;
  margin: auto;
  margin-top: 12.5rem;
  display: flex;
  justify-content: space-between;
}
.one {
  width: 9px;
  height: 9px;
  background: #4d4d4d;
  border-radius: 50%;
  transform: translateY(-4.5px);
}
.one:hover{
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
