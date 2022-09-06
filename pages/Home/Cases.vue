<template>
  <div class="box">
    <Card>
      <div class="top fadeInUp">
        <div class="top1">
          <div class="top-num">50</div>
          <div class="top-text">名企合作中</div>
          <div class="topjia">+</div>
        </div>
        <div class="top2"></div>
        <div class="top3">
          <div class="top-num">100</div>
          <div class="top-text">已提供专业解决方案</div>
          <div class="topjia2">+</div>
        </div>
        <div class="top2"></div>
        <div class="top5">
          <div class="top-num">30</div>
          <div class="top-text">涉及领域</div>
          <div class="topjia">+</div>
        </div>
      </div>
      <div class="nav">
        <div style="color: #808080; font-size: 0.8125rem">
          你的位置：首页 > <span style="color: #fff">多元案例</span>
        </div>
        <ul>
          <li v-for="(item, index) in navlist" :key="item.title" :class="navli === index ? 'active' : ''"
            @click="handlenav(index)">
            {{ item }}
          </li>
        </ul>
      </div>
      <div :class="['mian', isClassic ? '' : 'main']" ref="mian">
        <div v-show="isClassic">
          <div class="mian-data" v-for="item in mianlist.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )" :key="item.id">
            <div class="data-left">
              <div class="left-title">{{ item.title }}</div>
              <div class="left-text line-height-1-5">
                {{ item.content }}
              </div>
              <div class="xian"></div>
              <!-- <div class="left-more">MORE</div> -->
              <a :href="item.projectAddress" v-if="item.projectAddress" target="_blank" rel="noopener noreferrer"
                class="left-more">
                <img src="@/assets/images/main/连接.png" alt="" />查看项目</a>
            </div>
            <div class="data-right">
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
            </div>
          </div>
          <div class="bottom">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="pager"
              :total="mianlist.length" style="margin-left: -1.125rem">
            </el-pagination>
          </div>
        </div>
        <div v-show="!isClassic">
          <div class="mian-data2" style="margin-left: -5rem">
            <kt-video class="video_wrapper-two" v-for="(item, index) in videoList"
              :isFirst="index == 0 && currentPage2 == 1" :key="item.id" :data="item"></kt-video>
          </div>
          <div class="bottom">
            <el-pagination background @size-change="handleSizeChange2" @current-change="handleCurrentChange2"
              :current-page="currentPage2" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize2" layout="pager"
              :total="mianlist2.length" style="margin-left: -1.125rem">
            </el-pagination>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: 100vw;
  background: url("@/assets/images/main/背景.png") 100%;
}

.top {
  width: 78.125rem;
  height: 12.5rem;
  background-color: #1a1a1a;
  margin: auto;
  margin-top: 7.25rem;
  // border: .0625rem solid #cccccc;
  box-shadow: 0rem 0rem 1.1875rem 0.0625rem rgba(255, 255, 255, 0.38);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .top1 {
    width: 5.875rem;
    // height: 5.0625rem;
    text-align: center;
    position: relative;
  }

  .top2 {
    width: 0.0625rem;
    height: 4.375rem;
    background: #4d4d4d;
  }

  .top3 {
    width: 10.3125rem;
    text-align: center;
    // height: 5.0625rem;
    position: relative;
  }

  .top5 {
    width: 5.875rem;
    text-align: center;
    // height: 5.0625rem;
    position: relative;
  }
}

.top-num {
  font-size: 3.125rem;
  font-family: Source Han Sans SC;
  font-weight: 800;
  color: #ffffff;
}

.top-text {
  font-size: 1.125rem;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #b3b3b3;
}

.topjia {
  width: 1rem;
  height: 1rem;
  font-size: 1.875rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: -0.625rem;
  right: 0;
}

.topjia2 {
  width: 1rem;
  height: 1rem;
  font-size: 1.875rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: -0.625rem;
  right: 1.0625rem;
}

.nav {
  width: 78.1875rem;
  height: 0.9375rem;
  margin: auto;
  margin-top: 9.25rem;
  display: flex;
  justify-content: space-between;

  ul {
    // width: 7.5rem;
    height: 2rem;
    font-size: 0.8125rem;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #808080;
    // line-height: 1.4375rem;
    display: flex;
    justify-content: space-between;

    // justify-content: flex-end;
    li {
      cursor: pointer;
      // width: 7.5rem;
      display: inline-block;
      background-color: rgb(252, 127, 21);
      // background: #1a1a1a;
      color: #fff;
      text-align: center;
      padding: 0.5rem 2rem;
      margin: 0 0.5rem;
      box-shadow: 0rem 0rem 0.4rem 0.0625rem rgba(255, 255, 255, 0.38);

      &:hover:not(.active) {
        background: #fff;
        color: #1a1a1a;
        transition: all 0.5s ease-in;
      }
    }

    .active {
      color: #808080;
      cursor: default;
      background-color: #1a1a1a;
    }
  }
}

.mian {
  width: 78.1875rem;
  margin: 0 auto;
  background-color: transparent;
  overflow: auto;

  .mian-data {
    margin-top: 7.5rem;
    width: 100%;
    height: 20.9375rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: transparent;
    transition: width 1s height 1s;

    .data-left {
      flex: 1;
      margin-right: 8rem;
      width: 23.9375rem;
      text-align: left;

      .left-title {
        font-size: 1.875rem;
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
        margin-top: 2.375rem;
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
      width: 37.5rem;
      height: 20.9375rem;
      // background: #4d4d4d;
      transition: all 0.36s;
      position: relative;
    }
  }

  .mian-data:hover .xian {
    width: 38.75rem;
  }

  .mian-data:hover .data-right {
    transform: scale(0.9);
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
  width: 3.125rem;
  height: 3.125rem;
  line-height: 3.125rem;
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
      navlist: ["经典案例", "更多案例"],
      isClassic: true, //是否为经典案例
      isPlay: false,
      mianlist: [],
      mianlist2: [],
      navli: 0,
      videoElement: [], // 创建视频数组
      currentPage: 1, // 当前页码
      currentPage2: 1,
      // total: 20, // 总条数
      pageSize: 4, // 每页的数据条数
      pageSize2: 20, // 每页的数据条数
    };
  },
  computed: {
    videoList() {
      let list = this.mianlist2.slice(
        (this.currentPage2 - 1) * this.pageSize2,
        this.currentPage2 * this.pageSize2
      );
      return list;
    },
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
        this.isClassic = false;
      } else {
        this.isClassic = true;
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
    handleCurrentChange2(val) {
      console.log(`当前页: ${val}`);
      this.currentPage2 = val;
    },
    getdemolist() {
      Promise.all([
        request.get({
          url: "/getDyal",
        }),
      ]).then(([data1]) => {
        this.mianlist = data1.data.data;
      });

      setTimeout(() => {
        Promise.all([
          request.get({
            url: "/getQtal",
          }),
        ]).then(([data2]) => {
          this.mianlist2 = data2.data.data;
        });
      }, 1000);
    },
  },
};
</script>
