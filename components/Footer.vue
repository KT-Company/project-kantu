<template>
  <div>
    <footer>
      <div class="text-5xl">contact</div>
      <div class="coll">联 系 我 们</div>
      <div class="mian">
        <div class="mian-left">
          <div class="left-title">重庆瞰图科技有限公司</div>
          <div class="qr-code">
            <div class="code-left">
              <div class="code-img">
                <img src="@/assets/images/main/二维码.png" alt="" />
              </div>
              <div class="code-title">工程师帮助</div>
            </div>
            <div class="code-right">
              <div class="code-img">
                <img src="@/assets/images/main/二维码.png" alt="" />
              </div>
              <div class="code-title">微信咨询</div>
            </div>
          </div>
        </div>
        <div class="mian-conter">
          地址：重庆市九龙坡区石桥铺科园一路73号<br />微信：158 2608
          9334<br />电话：158 2628 9334
        </div>
        <div class="mian-right">
          <el-form
            :inline="true"
            :model="user"
            :rules="rules"
            ref="ruleForm"
            class="demo-form-inline"
          >
            <el-form-item prop="name">
              <el-input v-model="user.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="user.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="user.phone" placeholder="电话"></el-input>
            </el-form-item>
          </el-form>
          <div class="button" @click="submitForm('ruleForm')">提交</div>
          <div class="button button-two" @click="resetForm('ruleForm')">
            重置
          </div>
        </div>
      </div>
    </footer>
    <div class="beian">
      重庆瞰图科技有限公司 © 版权所有 kantu3d.com All Rights Reserved
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">
        工信部备案：渝ICP 备 2021009290 号</a
      >
    </div>
  </div>
</template>
<style lang="less" scoped>
footer {
  // width: 1920px;
  width: 100%;
  height: 30.625rem;
  padding: 4.875rem 9.375rem 0 9.375rem;
  background: #1a1a1a;
  border-top: 2px solid #262626;
  border-bottom: 2px solid #262626;
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
          // background: #4d4d4d;
          img {
            width: 100%;
            height: 100%;
          }
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // background-color: springgreen;
    }
  }
}
.beian {
  width: 100%;
  height: 6.25rem;
  text-align: center;
  line-height: 6.25rem;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 300;
  color: #cccccc;
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
  cursor: pointer;
}
.button-two {
  margin-right: 14rem;
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
import request from "@/util/request";
export default {
  name: "Header",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [
          { required: true, message: "电话不能为空" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号码格式不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .post({
              url: "/addPeople ",
              data: this.user,
            })
            .then((res) => {
              console.log(res.data.code);
              if (res.data.code == 500) {
                this.$notify({
                  title: "警告",
                  message: "已提交,待反馈，请忽反复提交",
                  type: "warning",
                });
              } else if (res.data.code == 200) {
                this.$notify({
                  title: "成功",
                  message: "提交成功,等待反馈",
                  type: "success",
                });
                this.user = {};
              }
            });
        } else {
          this.$notify.error({
            title: "错误",
            message: "输入有误",
          });
          return false;
        }
      });
      console.log(this.user);
    },
    resetForm(formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
        this.$refs[formName].clearValidate();
      });
    },
  },
};
</script>
