<template>
  <Card>
    <div class="box">
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
        <div style="color: #808080; font-size: 13px">
          你的位置：首页 > <span style="color: #fff">多元案例</span>
        </div>
        <ul>
          <li
            v-for="(item, index) in navlist"
            :key="index"
            :class="navli === index ? 'active' : ''"
            @click="handlenav(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div :class="['mian','fadeInUp2',isdata?'':'main']" ref="mian">
        <div
          class="mian-data fadeInUp2"
          v-show="isdata"
          v-for="(item, index) in mianlist2.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="index"
        >
          <div class="data-left">
            <div class="left-title">{{ item.title }}</div>
            <div class="left-text">
              {{ item.content }}
            </div>
            <div class="xian"></div>
            <!-- <div class="left-more">MORE</div> -->
            <a :href="item.porjectAddress" class="left-more">MORE</a>
          </div>
          <div class="data-right">
            <div class="video_wrapper">
              <!-- <img
              v-if="!isPlay"
              class="play_video"
              @click="playVideo"
              src="@/assets/images/main/播放.png"
              alt=""
            /> -->
              <video
                class="video"
                ref="video"
                controls
                :src="item.spurl"
              ></video>
            </div>
          </div>
        </div>
        <div
          class="main-data"
          v-show="!isdata"
          v-for="(item,index) in mianlist2.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="index"
        >
          <div class="video_wrapper-two">
            <video
              class="video-two"
              ref="video-two"
              controls
              :src="item.spurl"
            ></video>
          </div>
          <div class="title-two">{{ item.title }}</div>
        </div>
      </div>
      <div class="bottom">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="pageSize"
          layout="pager"
          :total="mianlist.length"
          style="margin-left: -18px"
        >
        </el-pagination>
      </div>
    </div>
  </Card>
</template>
<style lang="less" scoped>
.box {
  background: url("@/assets/images/main/背景.png");
}
.top {
  width: 78.125rem;
  height: 12.5rem;
  background-color: #1a1a1a;
  margin: auto;
  margin-top: 7.25rem;
  // border: 1px solid #cccccc;
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .top1 {
    width: 94px;
    // height: 81px;
    text-align: center;
    position: relative;
  }
  .top2 {
    width: 1px;
    height: 70px;
    background: #4d4d4d;
  }
  .top3 {
    width: 165px;
    text-align: center;
    // height: 81px;
    position: relative;
  }
  .top5 {
    width: 94px;
    text-align: center;
    // height: 81px;
    position: relative;
  }
}
.top-num {
  font-size: 50px;
  font-family: Source Han Sans SC;
  font-weight: 800;
  color: #ffffff;
}
.top-text {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #b3b3b3;
}
.topjia {
  width: 16px;
  height: 16px;
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: -0.625rem;
  right: 0;
}
.topjia2 {
  width: 16px;
  height: 16px;
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: -0.625rem;
  right: 1.0625rem;
}
.nav {
  width: 1251px;
  height: 15px;
  margin: auto;
  margin-top: 9.25rem;
  display: flex;
  justify-content: space-between;
  ul {
    width: 120px;
    height: 14px;
    font-size: 13px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #808080;
    line-height: 23px;
    display: flex;
    justify-content: space-between;
    // justify-content: flex-end;
    cursor: pointer;
    .active {
      color: #fff;
    }
  }
}
.main {
  width: 1251px;
  // height: 1698px;
  margin: auto;
  margin-top: 7.625rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  background-color: transparent;
  overflow: auto;
  display: flex;
  justify-content: space-between;
}
.mian {
  width: 1251px;
  // height: 1698px;
  margin: auto;
  margin-top: 7.625rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  background-color: transparent;
  overflow: auto;
  .mian-data {
    margin-top: 120px;
    width: 1251px;
    height: 335px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: width 1s height 1s;
    .data-left {
      width: 383px;
      height: 241px;
      text-align: left;
      .left-title {
        font-size: 30px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        transition: all 0.36s;
      }
      .left-text {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #b2b2b2;
        margin-top: 19px;
        transition: all 0.36s;
      }
      .xian {
        width: 0px;
        height: 0.125rem;
        background-color: #fff;
        margin-left: 0;
        margin-top: 2.375rem;
        transition: width 0.36s ease;
      }
      .left-more {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #ffffff;
        margin-top: 10px;
        transition: all 0.36s;
      }
    }
    .data-right {
      width: 600px;
      height: 335px;
      // background: #4d4d4d;
      transition: all 0.36s;
      position: relative;
    }
  }
  .mian-data:hover .xian {
    width: 38.75rem;
  }
  .mian-data:hover .data-right {
    width: 561px;
    height: 313px;
    background: #4d4d4d;
  }
  .mian-data:hover .left-title {
    transform: translateY(5px);
  }
  .mian-data:hover .left-text {
    transform: translateY(-5px);
  }
  .mian-data:hover .left-more {
    transform: translateY(15px);
  }
  .main-data {
    width: 600px;
    height: 388px;
    .video_wrapper-two {
      width: 600px;
      height: 338px;
      .video-two {
        width: 100%;
        height: 100%;
      }
    }
    .title-two {
      margin-top: 20px;
      line-height: 28px;
      font-size: 30px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
.bottom {
  margin: auto;
  margin-top: 7.5rem;
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
  .video {
    width: 100%;
    height: 100%;
  }
  .play_video {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 2;
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
export default {
  name: "Cases",
  mixins: [animateMix],
  components: {
    Page1,
    Card,
  },
  data() {
    return {
      navlist: ["经典案例", "更多"],
      isdata: true,
      isPlay: false,
      mianlist: [],
      mianlist2: [],
      navli: 0,
      currentPage4: 1,
      currentPage: 1, // 当前页码
      // total: 20, // 总条数
      pageSize: 4, // 每页的数据条数
    };
  },
  created() {
    // this.handlenav(this.navli);
  },
  mounted() {
    this.getdemolist();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // this.handlenav(this.navli)
    // this.$nextTick(() => {
    //   this.$refs.video.onpause = () => {
    //     this.isPlay = false;
    //   };
    //   this.$refs.video.onplay = () => {
    //     this.isPlay = true;
    //   };
    // });
  },
  methods: {
    // playVideo() {
    //   this.$refs.video.play();
    // },
    handlenav(index) {
      this.navli = index;
      if (index == 0) {
        this.isdata = true;
        this.mianlist.forEach((item) => {
          if (item.type == 1) {
            this.mianlist2 = [];
            this.mianlist2.push(item);
          }
        });
      } else if (index == 1) {
        this.isdata = false;
        this.mianlist.forEach((item) => {
          if (item.type == 6) {
            this.mianlist2 = [];
            this.mianlist2.push(item);
          }
        });
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    async getdemolist() {
      let data = await request.get({
        url: "/getDyal",
      });
      console.log(data.data.data);
      data.data.data.forEach((item) => {
        if (item.type == 1) {
          this.mianlist2 = [];
          this.mianlist2.push(item);
        }
      });
      this.mianlist = data.data.data;
    },
  },
};
</script>
