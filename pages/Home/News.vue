<template>
  <div class="box">
    <Card>
      <div style="color: #808080; font-size: 13px; margin-top: 116px">
        你的位置：首页 > <span style="color: #fff">瞰图资讯</span>
      </div>
      <div class="mian fadeInUp">
        <div class="mian-mian" v-for="(item, index) in mainlist.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )" :key="index">
          <div class="mian-data">
            <div class="mian-title">
              {{ item.title }}
            </div>
            <div class="mian-text">
              {{ item.content }}
            </div>
            <el-image class="img" style="width: 100%; height: 100%;" :src="item.imgurl" lazy>
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <!-- <template #placeholder>
                <div class="image-slot">加载中<span class="dot">...</span></div>
              </template> -->
            </el-image>
            <div>
              <span class="data-time">{{ item.ctime }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="pager"
          :total="mainlist.length" style="margin-left: -18px">
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

.box {
  background: url("@/assets/images/main/背景.png") 100% no-repeat;
}

.mian {
  width: 1250px;
  // height: 1100px;
  // background-color: azure;
  margin: auto;
  margin-top: 119px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // align-items: flex-end;
  //  align-self: flex-end;
}

.mian-mian {
  width: 575px;
  height: 300px;
  margin-bottom: 2rem;
  // transition: all 0.36s;
}

.mian-data {
  width: 575px;
  height: 300px;
  padding: 29px 24px;
  position: relative;
  overflow: hidden;
  transition: all ease 0.3s;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all ease 0.3s;
    z-index: -1;

    .image-slot {
      padding-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #000000;
      color: #ffffff;
      font-size: 14px;
    }

    .dot {
      animation: dot 2s infinite steps(3, start);
      overflow: hidden;
    }
  }
}

.mian-mian:hover .mian-data {
  border: 0;
  // background-color: coral;
  // background: url("~/assets/images/main/微信图片png.jpg") no-repeat;
}

.mian-mian:hover {
  background: rgba(0, 0, 0, 0.5);
}

.mian-mian:hover img {
  opacity: 0;
}

.mian-title {
  font-size: 16px;
  transition: all ease 0.4s;
  font-weight: bold;
  transform: translateY(232px);
  position: relative;
  z-index: 11111111;
}

.mian-data:hover .mian-title {
  transform: translateY(0);
}

.mian-text {
  font-size: 14px;
  color: #808080;
  margin-top: 27px;
  transition: all ease 0.6s;
  opacity: 0;
  transform: translateY(224px);
  height: 145px;
  overflow: scroll;
}

.mian-data:hover .mian-text {
  transform: translateY(0);
  opacity: 1;
}

.mian-data:hover .data-time {
  background-color: transparent;
}

.data-time {
  width: 575px;
  font-size: 40px;
  font-family: Mypang;
  font-weight: 400;
  color: #ffffff;
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 20px;
  background-color: #b7b9b96b;
}

// /deep/ .btn-next{
//   display: none;
// }
// /deep/.btn-prev{
//   display: none;
// }
.bottom {
  margin: auto;
  margin-top: 120px;
  width: 1250px;
}

/deep/ .number {
  width: 50px;
  height: 50px;
  line-height: 50px;
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
      pageSize: 10, // 每页的数据条数
    };
  },
  components: {
    Card,
  },
  created() {
    this.getzxlist();
  },
  mounted() {
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
      /*
            //异步执行
            this.mainlist.forEach((item) => {
              let that = this;
              let image = new Image();
              image.crossOrigin = "Anonymous";
              console.log(item.imgurl);
              image.src = item.imgurl;
              console.log(image.src);
      
              console.log("image--------------/////////************************");
              image.onload = function () {
                let base64 = that.getBase64Image(image);
                console.log(base64);
              };
      
              // var image = new Image();
              // image.setAttribute("crossOrigin", "anonymous"); //解决跨域
              // image.crossOrigin = "";
              // image.src = item.imgurl; //此处自己替换本地图片的地址
              // // image.crossOrigin = "anonymous";
              // image.onload = function () {
              //   var data = this.getBase64Image(image);
              //   item.imgurl = data;
              // };
            });
       
            console.log(data.data.data);
            */
    },
    getBase64Image(img) {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      let dataURL = canvas.toDataURL("image/" + ext);
      return dataURL;
    },
  },
};
</script>
