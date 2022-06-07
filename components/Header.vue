<template>
  <header>
    <div class="flex justify-between main">
      <div class="text-2xl p-4">
        <img src="~/assets/images/logo.png" alt="" srcset="" />
      </div>
      <nav class="nav flex justify-between">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          active-text-color="#fff"
          text-color="#808080"
        >
          <el-menu-item index="1">
            <nuxt-link to="/home/main"><div class="link">首页</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link to="/home/more"
              ><div class="link">产品业务</div></nuxt-link
            >
          </el-menu-item>
          <el-menu-item index="3">
            <nuxt-link to="/home/cases"
              ><div class="link">多元案例</div></nuxt-link
            >
          </el-menu-item>
          <el-menu-item index="4">
            <nuxt-link to="/home/news"
              ><div class="link">瞰图资讯</div></nuxt-link
            >
          </el-menu-item>
          <el-menu-item index="5">
            <nuxt-link to="/home/about"
              ><div class="link">了解瞰图</div></nuxt-link
            >
          </el-menu-item>
          <!-- <el-menu-item index="6"> -->

          <!-- </el-menu-item> -->
        </el-menu>
        <div class="demo">
          <a href="/demos" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/main/demo.png" alt="" /></a>
        </div>
        <div class="line"></div>
      </nav>
    </div>
  </header>
</template>
<style lang="less">
.demo {
  // padding-top: 22px;
  margin-left: 15px;
}
.nav{
  align-items: center;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #fff !important;
  background-color: transparent !important;
}
.el-menu-item{
  border-bottom: none !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background: transparent !important;
  border-bottom: none !important;
}
.el-menu::after,
.el-menu::before {
  content: none;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
.p-4 .nav {
  margin-right: 150px;
}
.el-menu-item {
  padding: 0;
}
.link {
  width: 92px;
  height: 60px;
  text-align: center;
  /* height: ; */
  /* color: red; */
}
.header {
  height: 60px;
  padding: 0 150px 0 102px;
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
  created() {
    console.log(this.$route)
    switch(this.$route.path) {
      case '/home/main':
        this.activeIndex = "1";
        break;
      case '/home/more':
        this.activeIndex = "2";
        break;
      case '/home/cases':
        this.activeIndex = "3";
        break;
      case '/home/news':
        this.activeIndex = "4";
        break;
      case '/home/about':
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
