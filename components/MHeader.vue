<template>
  <header>
    <div class="flex justify-around" v-if="fixed" style="padding: 8rem">
      <div class="text-2xl p-4">
        <img src="~/assets/images/logo.png" alt="" srcset="" />
      </div>
    </div>
    <div class="flex justify-between">
      <nav class="nav flex-1 flex justify-between">
        <el-menu
          class="flex-1 flex justify-around"
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          active-text-color="#fff"
          text-color="#808080"
        >
          <el-menu-item index="1">
            <nuxt-link to="/"><div class="link">首页</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link to="/mhome/more"><div class="link">产品业务</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="3">
            <nuxt-link to="/mhome/cases"><div class="link">多元案例</div></nuxt-link>
          </el-menu-item>
          <!-- <el-menu-item index="4">
            <nuxt-link to="/home/news"><div class="link">瞰图资讯</div></nuxt-link>
          </el-menu-item> -->
          <el-menu-item index="5">
            <nuxt-link to="/mhome/about"><div class="link">了解瞰图</div></nuxt-link>
          </el-menu-item>
          <!-- <div class="demo">
            <a href="/demos" target="_blank" rel="noopener noreferrer"
              ><img src="@/assets/images/main/demo.png" alt=""
            /></a>
          </div> -->
        </el-menu>
        <div class="line"></div>
      </nav>
    </div>
  </header>
</template>
<style lang="less" scoped>
.demo {
  // padding-top: 22px;
  margin-left: 15px;
}
.nav {
  align-items: center;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #fff !important;
  background-color: transparent !important;
}
.el-menu-item {
  border-bottom: none !important;
}
.el-menu-item.is-active {
  color: #000 !important;
  background: #fff !important;
  border-bottom: none !important;
}
.el-menu::after,
.el-menu::before {
  content: none;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
.nav {
  padding: 0 5rem;
  // margin-right: 150px;
}
.el-menu-item {
  padding: 0;
  line-height: 1;
  height: auto;
}
.link {
  padding: 1.2rem 2.5rem;
  text-align: center;
  border-radius: 0.5rem;
  line-height: 1;
  box-shadow: 0 0 5px #fff;
}
.header {
  margin-bottom: 1rem;
}
/deep/ el-menu-item:hover {
  background-color: transparent;
  color: #fff;
}
</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
    };
  },
  props: {
    fixed: {
      typeo: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.$route);
    switch (this.$route.path) {
      case "/mhome/main":
        this.activeIndex = "1";
        break;
      case "/mhome/more":
        this.activeIndex = "2";
        break;
      case "/mhome/cases":
        this.activeIndex = "3";
        break;
      case "/mhome/news":
        this.activeIndex = "4";
        break;
      case "/mhome/about":
        this.activeIndex = "5";
        break;
    }
  },
  methods: {
    handleSelect(key, keyPath) {},
  },
  mounted() {
    // console.log(window.scrollY)
  },
};
</script>
