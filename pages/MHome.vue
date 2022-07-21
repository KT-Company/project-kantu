<template>
  <div class="mian">
    <MHeader
      :class="['header', ba === false ? '' : 'hdactive']"
      :fixed="ba ? false : true"
    />
    <div>
      <nuxt-child keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
    </div>
    <MFooter
      
      :fixed="footerFixed ? true : false"
    />
  </div>
</template>
<style scoped>
.mian {
  overflow: hidden;
  /* background: url("@/assets/images/main/背景.png") 100% no-repeat;  */
}

.header {
  position: relative;
  width: 100%;
  z-index: 9;
}

.hdactive {
  position: fixed;
  background-color: #1a1a1a;
  box-shadow: 0px 0px 19px 1px rgba(235,209,87, 0.38);
}
@keyframes shining{
  0% {
    /* opacity: 0.75; */
    box-shadow: 0px 0px 10px 1px rgba(235,209,87, 0.38);
  }
  50%{
    /* opacity: 1; */
    box-shadow: 0px 0px 19px 1px rgba(235,209,87, 0.38);
  }
  100% {
    /* opacity: 0.75; */
    box-shadow: 0px 0px 10px 1px rgba(235,209,87, 0.38);
  }
}
/* .ftactive {
  position: fixed;
  bottom: 0rem;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(252,127,21);
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
  animation: shining 2s infinite;
} */

* {
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {
      showHeader: true,
      ba: false,
      footerFixed: true,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.rollingheight, true);
  },
  methods: {
    rollingheight(e) {
      // console.log(window.pageYOffset+"px");
      if (window.pageYOffset > 80) {
        this.ba = true;
      } else if (window.pageYOffset < 80) {
        this.ba = false;
      }
      // if (window.innerHeight + window.pageYOffset + 300 > document.body.scrollHeight) {
      //   this.footerFixed = false;
      // } else {
      //   this.footerFixed = true;
      // }
    },
  },
};
</script>
