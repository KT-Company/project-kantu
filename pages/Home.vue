<template>
  <div class="mian">
    <Header
      v-if="showHeader"
      :class="['header', ba === false ? '' : 'hdactive']"
    />
    <nuxt-child />
    <Footer v-if="showHeader" />
  </div>
</template>
<style>
.mian {
  overflow: hidden;
}
.header {
  position: fixed;
  width: 100%;
  z-index: 9;
  /* background-color: #fff; */
}
.hdactive {
  background-color: #1a1a1a;
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
}
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
    };
  },
  created() {
    this.$router.push("/home/main")
  },
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
    },
  },
};
</script>
