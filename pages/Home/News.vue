<template>
  <Card>
    <div style="color: #808080; font-size: 13px; margin-top: 116px">
      你的位置：首页 > <span style="color: #fff">瞰图资讯</span>
    </div>
    <div class="mian fadeInUp">
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
      <div class="mian-mian">
        <div class="mian-data">
          <div class="mian-title">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="mian-text">
            Ares Capital Corporation和我们将高级直接贷款计划扩大至64亿美元
          </div>
          <div class="data-time">03-01</div>
        </div>
      </div>
    </div>
    <!-- <div class="bottom">
      <el-pagination
        background
        layout="pager"
        :total="30"
        style="margin-left: -18px"
      >
      </el-pagination>
    </div> -->
  </Card>
</template>
<style lang="less" scoped>
@font-face {
  font-family: Mypang;
  src: url(@/assets/style/font/庞门正道标题体2.0增强版_0.TTF);
}
.mian {
  width: 78.125rem;
  height: 68.75rem;
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
  // position: relative;
  overflow: hidden;
  transition: all ease 0.6s;
}
.mian-mian:hover .mian-data {
  border: 0;
  background-color: coral;
  transform: scale(0.9);
  background: url("~/assets/images/main/微信图片png.png") no-repeat;
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
export default {
  name: "News",
  mixins: [animateMix],
  components: {
    Card,
  },
};
</script>
