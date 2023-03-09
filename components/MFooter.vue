<template>
  <div>
    <div>
      <footer>
        <a href="tel:15826089334">
          <div>
            <div class="text-10xl co-tit"><span>C</span>ontact</div>
            <div class="flex justify-between">
              <div>
                <div class="coll">联 系 我 们</div>
                <div class="mian">
                  <div class="mian-left">
                    <div class="mian-conter">
                      电话：023-86154556<br />
                      手机(微信同号)：152 2372 0158
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div class="qr-code">
          <div class="code-right">
            <div class="code-img">
              <img src="@/assets/images/main/xl.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div class="beian">
        重庆瞰图科技有限公司 © 版权所有 kantu3d.com
        <span class="ml-10"> All Rights Reserved </span>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener noreferrer"
        >
          工信部备案：渝ICP 备 2021009290 号</a
        >
      </div>
    </div>
    <div class="footer-fixed">
      <a href="tel:15826089334">
        <div class="flex justify-around pt-4 pb-4">
          <span style="font-size: 5rem">联系我们</span>
          <span style="font-size: 5rem">手机(微信同号)：152 2372 0158</span>
        </div>
      </a>
    </div>
  </div>
</template>
<style lang="less" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9rem 10rem 9rem 10rem;
  background: #1a1a1a;
  border-top: 0.125rem solid #262626;
  border-bottom: 0.125rem solid #262626;
  .co-tit {
    font-family: Mypang;
  }
  .coll {
    font-size: 3rem;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #666666;
    margin: 1.8125rem auto 0;
  }
  .mian {
    margin: 1.9rem auto 0;
    padding-bottom: 2.5rem;
    // background-color: skyblue;
    display: flex;
    justify-content: space-between;
    .mian-left {
      .left-title {
        font-size: 1.25rem;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #d9d9d9;
        line-height: 1.4375rem;
      }
    }
    .mian-conter {
      font-size: 3rem;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #999999;
      // line-height: 1.875rem;
    }
    .mian-right {
      width: 41.875rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // background-color: springgreen;
    }
  }
  .qr-code {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding-top: 2rem;
    .code-img {
      width: 19rem;
      // background: #4d4d4d;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.beian {
  width: 100%;
  // height: 6.25rem;
  padding: 2rem 5% 10rem 5%;
  text-align: center;
  line-height: 6.25rem;
  font-size: 0.875rem;
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
  box-shadow: 0rem 0rem 1.1875rem 0.0625rem rgba(255, 255, 255, 0.38);
  border-radius: 0.625rem;
  font-size: 0.875rem;
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
  margin-right: 0.625rem;
  float: left;
}
/deep/.el-input__inner {
  width: 13.125rem;
  background-color: transparent;
  border-radius: 0;
  border: transparent;
  border-bottom: 0.0625rem solid #262626;
}
.footer-fixed {
  padding: 0 5rem;
  position: fixed;
  bottom: 0rem;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(252, 127, 21);
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
  animation: shining 2s infinite;
  & > span {
    font-size: 4rem;
  }
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
  props: {
    fixed: {
      typeo: Boolean,
      default: false,
    },
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
