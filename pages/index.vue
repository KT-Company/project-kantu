<template>
  <div>
    <!-- <Header />
    <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Card from "../components/base/Card.vue";
import Vue from "vue";
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  component: {
    Header,
    Footer,
    Card,
  },
  watch: {
    screenWidth(val) {
      this.component = val < 800 ? "Modile" : "Pc";
    },
  },
  created() {
    if (this._isMobile()) {
      this.$router.push({
        path: `mhome/main`,
      });
    } else {
      this.$router.push({
        path: `home/main`,
      });
    }
    const that = this;
    if (process.browser) {
      window.onresize = () => {
        return (() => {
          that.screenWidth = document.body.clientWidth;
        })();
      };
    }
  },
  methods: {
    _isMobile() {
      if (process.browser) {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        return flag;
      } else return false;
    },
  },
};
</script>
