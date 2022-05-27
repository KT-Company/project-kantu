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
      <div :class="['mian', isdata ? '' : 'main']" ref="mian">
        <div
          class="mian-data"
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
            <a
              :href="item.projectAddress"
              target="_blank"
              rel="noopener noreferrer"
              class="left-more"
            >
              <img src="@/assets/images/main/连接.png" alt="" />查看项目</a
            >
          </div>
          <div class="data-right">
            <div class="video_wrapper">
              <video
                class="video"
                ref="video"
                controls
                :src="item.spurl"
                @play="handlePlay(index)"
                style="width: 100%; height: 100%; object-fit: fill"
              ></video>
            </div>
          </div>
        </div>
        <div class="bottom">
          <el-pagination
            v-show="isdata"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="pageSize"
            layout="pager"
            :total="mianlist2.length"
            style="margin-left: -18px"
          >
          </el-pagination>
        </div>
        <div
          class="main-data"
          v-show="!isdata"
          v-for="(item, index) in mianlist3.slice(
            (currentPage - 1) * pageSize2,
            currentPage * pageSize2
          )"
          :key="index"
        >
          <div class="video_wrapper-two">
            <video
              class="video-two"
              ref="video-two"
              controls
              :src="item.spurl"
              @play="handlePlay(index)"
              style="width: 100%; height: 100%; object-fit: fill"
            ></video>
          </div>
          <div class="title-two">{{ item.title }}</div>
        </div>
        <div class="bottom">
          <el-pagination
            v-show="!isdata"
            background
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="pageSize2"
            layout="pager"
            :total="mianlist3.length"
            style="margin-left: -18px"
          >
          </el-pagination>
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
  margin: auto;
  margin-top: 7.625rem;
  background-color: transparent;
  overflow: auto;

  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
  .main-data {
    display: inline-block;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    margin-right: 17px;
    margin-bottom: 17px;
    .video_wrapper-two {
      width: 300px;
      height: 168px;
    }
    .title-two {
      line-height: 32px;
      padding-left: 6px;
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .main-data:nth-child(5n) {
    margin-right: 0;
  }
  // &::after {
  //   content: "";
  //   width: 300px; /*伪元素的宽度与子元素的宽度一致*/
  // }
}
.mian {
  width: 1251px;
  margin: auto;
  margin-top: 7.625rem;
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
    // background: #4d4d4d;
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
      mianlist3: [],
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
      this.mianlist2 = [];
      this.mianlist3 = [];
      if (index == 0) {
        this.isdata = true;
        this.mianlist.forEach((item) => {
          if (item.type == 1) {
            this.mianlist2.push(item);
          }
        });
      } else if (index == 1) {
        this.isdata = false;
        this.mianlist.forEach((item) => {
          if (item.type == 6) {
            this.mianlist3.push(item);
          }
        });
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
    async getdemolist() {
      let data = await request.get({
        url: "/getDyal",
      });
      // console.log(data.data.data);
      data.data.data.forEach((item) => {
        if (item.type == 1) {
          this.mianlist2.push(item);
        }
      });
      console.log(this.mianlist2);
      this.mianlist = data.data.data;
    },
  },
};
</script>
