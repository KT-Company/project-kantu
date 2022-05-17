<template>
  <footer>
    <div class="text-5xl">contact</div>
    <div class="coll">联 系 我 们</div>
    <div class="mian">
      <div class="mian-left">
        <div class="left-title">重庆瞰图科技有限公司</div>
        <div class="qr-code">
          <div class="code-left">
            <div class="code-img"></div>
            <div class="code-title">工程师帮助</div>
          </div>
          <div class="code-right">
            <div class="code-img"></div>
            <div class="code-title">微信咨询</div>
          </div>
        </div>
      </div>
      <div class="mian-conter">
        地址：重庆市渝中区中山三路161号广发大厦10楼<br />微信：158 2608 9334<br />电话：189
        8392 0157
      </div>
      <div class="mian-right">
        <el-form :inline="true" :model="user" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="user.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="user.emit" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="user.phone" placeholder="电话"></el-input>
          </el-form-item>
        </el-form>
        <div class="button" @click="onSubmit">
          提交
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="less" scoped>
footer {
  // width: 1920px;
  width: 100%;
  height: 30.625rem;
  padding: 4.875rem 9.375rem 0 9.375rem;
  background: #1a1a1a;
  border-top: 1px solid #cccc;
  .coll {
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #666666;
    line-height: 23px;
    margin-top: 1.8125rem;
  }
  .mian {
    width: 101.375rem;
    height: 14.5rem;
    // background-color: skyblue;
    margin-top: 3.75rem;
    display: flex;
    justify-content: space-between;
    .mian-left {
      width: 12.5rem;
      .left-title {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #d9d9d9;
        line-height: 23px;
      }
      .qr-code {
        width: 12.5rem;
        margin-top: 2.5rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        .code-img {
          width: 80px;
          height: 80px;
          background: #4d4d4d;
        }
        .code-title {
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #999999;
          line-height: 30px;
          margin-top: 0.9375rem;
        }
      }
    }
    .mian-conter {
      width: 22rem;
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #999999;
      line-height: 30px;
    }
    .mian-right {
      width: 41.875rem;
      height: 7.8125rem;
      // background-color: springgreen;
    }
  }
}
.button {
  width: 210px;
  height: 50px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
  border-radius: 10px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  transition: all 0.36s;
  margin-top: 1.25rem;
}
.button:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
/deep/.el-input__inner {
  width: 13.125rem;
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid #262626;
}
</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        name: "",
        emit: "",
        phone: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
};
</script>
