<template>
  <div>
    <footer>
      <div class="text-5xl co-tit"><span>C</span>ontact</div>
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
          地址：重庆市九龙坡区石桥铺渝高大厦F座17楼1706-1707<br />电话(微信同号)：158 2628 9334
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
  // width: 120rem;
  width: 100%;
  padding-top: 4.875rem;
  background: #1a1a1a;
  border-top: .125rem solid #262626;
  border-bottom: .125rem solid #262626;
  .co-tit {
    width: 101.375rem;
    margin: 0 auto;
    font-family: Mypang;
  }
  .coll {
    width: 101.375rem;
    font-size: 1.875rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #666666;
    margin: 1.8125rem auto 0;
  }
  .mian {
    width: 101.375rem;
    margin: 3.75rem auto 0;
    padding-bottom: 2.5rem;
    // background-color: skyblue;
    display: flex;
    justify-content: space-between;
    .mian-left {
      width: 12.5rem;
      .left-title {
        font-size: 1.25rem;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #d9d9d9;
        line-height: 1.4375rem;
      }
      .qr-code {
        width: 12.5rem;
        margin-top: 2.5rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        .code-img {
          width: 5rem;
          height: 5rem;
          // background: #4d4d4d;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .code-title {
          font-size: 1rem;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #999999;
          line-height: 1.875rem;
          margin-top: .9375rem;
        }
      }
    }
    .mian-conter {
      width: 30rem;
      font-size: 1rem;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #999999;
      line-height: 1.875rem;
    }
    .mian-right {
      width: 41.875rem;
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
  font-size: .875rem;
  font-family: Source Han Sans SC;
  font-weight: 300;
  color: #cccccc;
}
.button {
  width: 13.125rem;
  height: 3.125rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
  box-shadow: 0rem 0rem 1.1875rem .0625rem rgba(255, 255, 255, 0.38);
  border-radius: .625rem;
  font-size: .875rem;
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
/deep/ .el-form--inline .el-form-item {
  margin-right: .625rem;
  float: left;
}
/deep/.el-input__inner {
  width: 13.125rem;
  background-color: transparent;
  border-radius: 0;
  border: transparent;
  border-bottom: .0625rem solid #262626;
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
