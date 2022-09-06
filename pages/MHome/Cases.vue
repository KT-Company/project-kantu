<template>
  <div class="">
    <Card>
      <div class="top fadeInUp">
        <div class="item">
          <div class="top-num">
            50
            <div class="topjia">+</div>
          </div>
          <div class="top-text">名企合作中</div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="top-num">
            100
            <div class="topjia">+</div>
          </div>
          <div class="top-text">已提供专业解决方案</div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="top-num">
            30
            <div class="topjia">+</div>
          </div>
          <div class="top-text">涉及领域</div>
        </div>
      </div>
      <div class="nav">
        <div style="color: #808080; font-size: 4.6rem">
          你的位置：首页 > <span style="color: #fff">多元案例</span>
        </div>
        <!-- <ul>
          <li
            v-for="(item, index) in navlist"
            :key="item.title"
            :class="navli === index ? 'active' : ''"
            @click="handlenav(index)"
          >
            {{ item }}
          </li>
        </ul> -->
      </div>
      <div :class="['mian', isdata ? '' : 'main']" ref="mian">
        <div class="mian-data" v-show="isdata" v-for="(item, index) in mianlist.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )" :key="index">
          <div class="data-left">
            <div class="left-title">{{ item.title }}</div>
            <!-- <div class="left-text line-height-1-5">
              {{ item.content }}
            </div> -->
            <div class="xian"></div>
            <!-- <div class="left-more">MORE</div> -->
          </div>
          <div class="mt-4 mb-8 pl-8 pr-8 text-center" style="font-size: 3rem; color: #b3b3b3">
            {{ item.content }}
          </div>
          <div class="data-right">
            <a :href="item.projectAddress" v-if="item.projectAddress" target="_blank" rel="noopener noreferrer"
              class="left-more">
              <div class="video_wrapper">
                <!-- <video
                class="video"
                ref="video"
                controls
                :src="item.spurl"
                @play="handlePlay(index)"
                style="width: 100%; height: 100%; object-fit: fill"
              ></video> -->
                <img :src="item.img" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div class="bottom" v-show="isdata">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage4" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="pager"
            :total="mianlist.length" style="margin-left: -1.125rem">
          </el-pagination>
        </div>
        <!-- <div class="mian-data2" v-show="!isdata" style="margin-left: -5rem">
          <kt-video
            class="video_wrapper-two"
            v-for="(item, index) in mianlist2.slice(
              (currentPage - 1) * pageSize2,
              currentPage * pageSize2
            )"
            :isFirst="index == 0 && currentPage == 1"
            :key="item.title"
            :data="item"
          ></kt-video>
        </div>
        <div class="bottom" v-show="!isdata">
          <el-pagination
            background
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="pageSize2"
            layout="pager"
            :total="mianlist2.length"
            style="margin-left: -1.125rem"
          >
          </el-pagination>
        </div> -->
      </div>
    </Card>
  </div>
</template>
<style lang="less" scoped>
.top {
  // width: 78.125rem;
  // height: 12.5rem;
  padding: 2rem 0;
  background-color: #1a1a1a;
  margin: auto;
  margin-top: 7.25rem;
  // border: .0625rem solid #cccccc;
  box-shadow: 0rem 0rem 1.1875rem 0.0625rem rgba(255, 255, 255, 0.38);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  .item {
    position: relative;
    flex: 1;

    .top-num {
      font-size: 8rem;
      font-family: Source Han Sans SC;
      font-weight: 800;
      color: #ffffff;
      position: relative;

      .topjia {
        font-size: 3rem;
        display: inline;
        vertical-align: top;
        // position: absolute;
        // right: -3rem;
        // top: -1rem;
      }
    }

    .top-text {
      font-size: 3rem;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #b3b3b3;
    }

    .line {
      display: inline-block;
      width: 1px;
      height: 60%;
      position: absolute;
      right: 0;
      top: 20%;
      background: rgba(77, 77, 77, 1);
    }
  }
}

.nav {
  margin: auto;
  margin-top: 9.25rem;
  display: flex;
  justify-content: space-between;

  ul {
    width: 7.5rem;
    height: 0.875rem;
    font-size: 0.8125rem;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #808080;
    line-height: 1.4375rem;
    display: flex;
    justify-content: space-between;
    // justify-content: flex-end;
    cursor: pointer;

    .active {
      color: #fff;
    }
  }
}

.mian {
  margin: 0 auto;
  background-color: transparent;
  overflow: auto;

  .mian-data {
    margin-top: 7.5rem;
    width: 100%;
    // height: 20.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: transparent;
    transition: width 1s height 1s;

    .data-left {
      flex: 1;
      text-align: center;

      .left-title {
        font-size: 4.6rem;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        transition: all 0.36s;
      }

      .left-text {
        font-size: 0.875rem;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #b2b2b2;
        margin-top: 1.1875rem;
        transition: all 0.36s;
      }

      .xian {
        width: 0;
        height: 0.125rem;
        background-color: #fff;
        margin-left: 0;
        margin: 2.375rem 0;
        transition: width 0.36s ease;
      }

      .left-more {
        display: flex;
        width: 100px;
        height: 30px;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #ffffff;
        margin-top: 10px;
        padding: 0 8px;
        transition: all 0.36s;
        background-color: #4d4d4d;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;

        img {
          height: 60%;
        }
      }
    }

    .data-right {
      width: 96rem;
      height: 54rem;
      // background: #4d4d4d;
      transition: all 0.36s;
      position: relative;
    }
  }

  .mian-data:hover .xian {
    width: 38.75rem;
  }

  .mian-data:hover .data-right {
    // transform: scale(0.9);
    // background: #4d4d4d;
  }

  .mian-data:hover .left-title {
    transform: translateY(0.3125rem);
  }

  .mian-data:hover .left-text {
    transform: translateY(-0.3125rem);
  }

  .mian-data:hover .left-more {
    transform: translateY(0.9375rem);
  }
}

.mian-data2 {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.25rem;
  align-items: center;

  .video_wrapper-two {
    margin-left: 5rem;
    margin-top: 3.125rem;
  }
}

.bottom {
  margin: auto;
  margin-top: 7.5rem;
  margin-left: 1rem;
  width: 78.125rem;
}

.video_wrapper {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // width: 3.9125rem;
  // height: 2.2625rem;
  width: 100%;
  height: 100%;

  // background: #0a3e6d;
  .play_video {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

/deep/ .number {
  width: 10rem;
  height: 10rem;
  line-height: 10rem;
  border-radius: 0;
  background-color: #333333;
}

::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #333333; // 进行修改未选中背景和字体
    border-radius: 0;
    // color: #fff;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4d4d4d; // 进行修改选中项背景和字体
    color: #fff;
  }
}
</style>
<script>
import Page1 from "@/components/Main/Page1.vue";
import Card from "@/components/base/Card.vue";
import animateMix from "@/mixin/animateMix.js";
import request from "@/util/request";
import KtVideo from "../../components/KtVideo.vue";
export default {
  name: "Cases",
  mixins: [animateMix],
  components: {
    Page1,
    Card,
    KtVideo,
  },
  data() {
    return {
      navlist: ["经典案例", "更多"],
      isdata: true,
      isPlay: false,
      mianlist: [],
      mianlist2: [],
      navli: 0,
      videoElement: [], // 创建视频数组
      currentPage4: 1,
      currentPage: 1, // 当前页码
      // total: 20, // 总条数
      pageSize: 4, // 每页的数据条数
      pageSize2: 20, // 每页的数据条数
    };
  },
  created() {
    // this.handlenav(this.navli);
    this.getdemolist();
  },
  mounted() {
    this.videoElement = document.getElementsByTagName("video"); // 获取页面上所有的video对象

    console.log(this.mianlist2);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  methods: {
    handlePlay(index) {
      const videoElement = this.videoElement;
      if (videoElement && videoElement.length > 0) {
        for (let i = 0; i < videoElement.length; i++) {
          if (i === index) {
            this.videoElement[i].play();
          } else {
            this.videoElement[i].pause();
          }
        }
      }
    },

    handlenav(index) {
      this.navli = index;
      if (index == 1) {
        this.isdata = false;
      } else {
        this.isdata = true;
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleSizeChange2(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize2 = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    getdemolist() {
      Promise.all([
        request.get({
          url: "/getDyal",
        }),
        request.get({
          url: "/getQtal",
        }),
      ]).then(([data1, data2]) => {
        this.mianlist = data1.data.data;
        this.mianlist2 = data2.data.data;
      });
    },
  },
};
</script>
