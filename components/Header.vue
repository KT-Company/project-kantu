<template>
  <header>
    <div class="flex justify-between">
      <div class="text-2xl p-4">
        <img src="~/assets/images/logo.png" alt="" srcset="" />
      </div>
      <nav class="nav">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          active-text-color="#fff"
          text-color="#808080"
        >
          <el-menu-item index="1">
            <nuxt-link to="/home/main" ><div class="link">首页</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link to="/home/more"><div class="link">产品业务</div></nuxt-link>
            <!-- <template slot="title">产品与业务</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-menu-item>
          <el-menu-item index="3">
            <nuxt-link to="/home/cases"><div class="link">多元案例</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="4">
            <nuxt-link to="/home/news"><div class="link">瞰图咨询</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="5">
            <nuxt-link to="/home/about"><div class="link">了解瞰图</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="6">
            <nuxt-link to="/demos">
              <i class="el-icon-more"></i>
            </nuxt-link>
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
      </nav>
    </div>
  </header>
</template>
<style lang="less">
.el-menu::after,
.el-menu::before {
  content: none;
}
.el-menu.el-menu--horizontal{
  border: 0;
}
.p-4
.nav{
  margin-right:150px;
}
.link{
  width: 5.75rem;
  height:3.75rem;
  text-align: center;
  /* height: ; */
  /* color: red; */
}
.header{
  height: 3.75rem;
   padding: 0 6.375rem 0 6.375rem;
}
/deep/ el-menu-item:hover{
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
  methods: {
    handleSelect(key, keyPath) {},
  },
  mounted () {
    // console.log(window.scrollY)
  },
};
</script>
