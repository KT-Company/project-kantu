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
          id="nav-bar"
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
          <el-submenu index="2">
            <template slot="title">案例展示</template>
            <el-menu-item index="3">
              <nuxt-link to="/mhome/cases"><div class="link">多元案例</div></nuxt-link>
            </el-menu-item>
            <el-menu-item index="4">
              <nuxt-link to="/mhome/morecases">
                <div class="link">更多案例</div>
              </nuxt-link>
            </el-menu-item>
          </el-submenu>
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
.el-menu-item,
.el-submenu {
  height: 8rem;
  line-height: 6rem;
  padding: 1.2rem 2.5rem;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #fff;
}
/deep/ .el-submenu {
  padding: 0;
  & > .el-submenu__title {
    height: 100%;
    line-height: 8rem;
    border: none !important;
    // background: transparent !important;
  }
}
.link {
  // padding: 1.2rem 2.5rem;
  // text-align: center;
  // border-radius: 0.5rem;
  // line-height: 1;
  // box-shadow: 0 0 5px #fff;
}
.header {
  margin-bottom: 1rem;
}
/deep/ el-menu-item:hover {
  background-color: transparent;
  color: #fff;
}
</style>
<style>
.el-menu {
  min-width: 36rem;
  background: rgb(26, 26, 26) !important;
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
      case "/mhome/morecases":
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
    handleSelect(key, keyPath) {
      // 移动端选择后不会自动关闭下拉框的问题
    },
  },
  mounted() {
    // console.log(window.scrollY)
  },
};
</script>
