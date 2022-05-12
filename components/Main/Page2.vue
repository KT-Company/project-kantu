<template>
  <Card>
    <div class="flex justify-between flexmain">
      <div>
        <div class="fadeInUp" style="width: 60vh">
          <div class="text-3xl sm:h-20 md:h-40">数字孪生</div>
          <div class="h-20">
            <span class="text-2xl">四要素</span>
            <span class="color-subtext">(设计、模型、交互、数据)</span>
            <div class="text-xs color-subtext">Four elements</div>
          </div>
          <div class="color-subtext fadeInUp2">
            3D园区数字孪生充分利用物理模型、传感器更新、运行历史等数据，集成多学科、多物理量、多尺度、多概率的仿真过程，通过物联网技术在虚拟空间中完成映射，从而反映相对应的实体装备的全生命周期过程。
          </div>
          <div class="color-subtext fadeInUp2">
            瞰图科技在“数字孪生”制作上，具备成熟的开发管理流程；拥有完善的产品设计、多精度的模型标准、个性化的交互效果、精准的数据引入。运用更多前沿技术完成数字映射，建立更全面的孪生场景。
          </div>
          <div class="box-page2-display mt-20">
            <div class="item" v-for="item in dataDisplay" :key="item">
              <div class="icon-box">
                <!-- <img src="@/assets/images/main/icon-design.png" alt="" srcset="" /> -->
                <img v-if="item.iconUrl" :src="item.iconUrl" alt="" srcset="" />
                <!-- <img v-if="item.iconUrl" :src="require(item.iconUrl)" alt="" srcset="" /> -->
                <!-- <img :src="'../../'+item.iconUrl" alt="" srcset="" /> -->
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="detail">{{ item.detail }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="canvas">
        <canvas id="view2" class="canvasBox"></canvas>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
.flexmain{
  align-items:  flex-start;
}
.box-page2-display {
  display: flex;
  .item {
    text-align: center;
    flex: 1;
    .icon-box {
      display: inline-block;
      width: 8rem;
      height: 12rem;
      background: url("@/assets/images/main/icon-back.png") no-repeat;
      background-size: contain;
      background-position: bottom center;
      img {
        display: inline-block;
        margin-top: 30px;
      }
    }
    .title {
      color: #999999;
      margin-bottom: 1.25rem;
    }
    .detail {
      display: none;
      width: 100%;
      color: #999999;
      padding-bottom: 5px;

      &::after {
        content: "";
        width: 100%;
        height: 1px;
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #999999;
        animation: showWidth 1s;
        -webkit-animation: showWidth 1s;
      }
    }
    &:hover {
      .detail {
        display: block;
        line-height: 1rem;
        position: relative;
        animation: fadeIn 1s;
        -webkit-animation: fadeIn 1s;
        &::after {
          display: inline-block;
        }
      }
      .icon-box {
        background: url("~/assets/images/main/icon-back-hover.png") no-repeat;
        background-size: contain;
        background-position: bottom center;
      }
    }
  }
}
</style>
<script>
import Card from "@/components/base/Card.vue";
import { pageOnloadBuild } from "../../3d/index.js"

export default {
  name: "Page2",

  data() {
    return {
      dataDisplay: [
        {
          iconUrl: require("assets/images/main/icon-design.png"),
          title: "设计",
          detail: "拥有完善的产品设计",
        },
        {
          iconUrl: require("assets/images/main/icon-modal.png"),
          title: "模型",
          detail: "多精度的模型标准",
        },

        {
          iconUrl: require("assets/images/main/icon-interactive.png"),
          title: "交互",
          detail: "个性化的交互效果",
        },
        {
          iconUrl: require("assets/images/main/icon-data.png"),
          title: "数据",
          detail: "精准的数据引入",
        },
      ],
    };
  },
  components: {
    Card,
  },
  mounted() {
    let view1 = document.getElementById("view2");
    // pageOnloadBuild(view1, () => {
    //   console.log("done");
    // });
  },
  methods: {},
};
</script>
