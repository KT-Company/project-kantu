<template>
<div class="box">
  <Card>
    
    <div style="color: #808080; font-size: 13px; margin-top: 116px">
      你的位置：首页 > <span style="color: #fff">瞰图资讯</span>
    </div>
    <div class="mian fadeInUp">
      <div
        class="mian-mian"
        v-for="(item, index) in mainlist.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )"
        :key="index"
      >
        <div class="mian-data">
          <div class="mian-title">
            {{item.title}}
          </div>
          <div class="mian-text">
            {{item.content}}
          </div>
          <img :src="item.imgurl" alt="" />
          <div class="data-time">{{item.ctime}}</div>
        </div>
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
        :total="mainlist.length"
        style="margin-left: -18px"
      >
      </el-pagination>
    </div>
    
  </Card>
  </div>
</template>
<style lang="less" scoped>
@font-face {
  font-family: Mypang;
  src: url(@/assets/style/font/庞门正道标题体2.0增强版_0.TTF);
}
.box{
  background: url("@/assets/images/main/背景.png") 100% no-repeat;
}
.mian {
  width: 78.125rem;
  // height: 68.75rem;
  // background-color: azure;
  margin: auto;
  margin-top: 7.4375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // align-items: flex-end;
  //  align-self: flex-end;
}
.mian-mian {
  width: 35.9375rem;
  height: 18.75rem;
  // transition: all 0.36s;
}
.mian-data {
  width: 35.9375rem;
  height: 18.75rem;
  border: 1px solid #999999;
  padding: 29px 24px;
  position: relative;
  overflow: hidden;
  transition: all ease 0.6s;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
      transition: all ease 0.6s;
    z-index: -1;
  }
}
.mian-mian:hover .mian-data {
  border: 0;
  // background-color: coral;
  transform: scale(0.9);
  // background: url("~/assets/images/main/微信图片png.png") no-repeat;
}
.mian-mian:hover img {
  opacity: 1;
}
.mian-title {
  font-size: 1rem;
  transition: all ease 0.6s;
}
.mian-data:hover .mian-title {
  transform: translateY(12.5rem);
}
.mian-text {
  font-size: 14px;
  color: #808080;
  margin-top: 27px;
  transition: all ease 0.5s;
}
.mian-data:hover .mian-text {
  transform: translateY(14rem);
  display: none;
}
.data-time {
  width: 494px;
  height: 28px;
  font-size: 40px;
  font-family: Mypang;
  font-weight: 400;
  color: #ffffff;
  text-align: right;
  margin-top: 7.125rem;
  transition: all ease 0.6s;
}
.mian-data:hover .data-time {
  transform: translateY(-12.5rem);
  // margin-top:-12.5rem;
  display: none;
}
// /deep/ .btn-next{
//   display: none;
// }
// /deep/.btn-prev{
//   display: none;
// }
.bottom {
  margin: auto;
  margin-top: 7.5rem;
  width: 78.125rem;
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
import Card from "@/components/base/Card.vue";
import animateMix from "@/mixin/animateMix.js";
import request from "@/util/request";
export default {
  name: "News",
  mixins: [animateMix],
  data() {
    return {
      mainlist: [],
      currentPage4: 1,
      currentPage: 1, // 当前页码
      // total: 20, // 总条数
      pageSize: 6, // 每页的数据条数
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.getzxlist();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  methods: {
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
    async getzxlist() {
      let data = await request.get({
        url: "/getZx ",
      });
      this.mainlist = data.data.data;
      console.log(data.data.data);
    },
  },
};
</script>
