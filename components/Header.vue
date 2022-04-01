<template>
  <header>
    <div class="flex justify-between">
      <div class="text-2xl p-4">
        <img src="~/assets/images/logo.png" alt="" srcset="" />
      </div>
      <nav class>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          active-text-color="#fff"
          text-color="#808080"
        >
          <el-menu-item index="1">
            <nuxt-link to="/home/main">首页 </nuxt-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品与业务</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <nuxt-link to="/home/cases">多元案例 </nuxt-link>
          </el-menu-item>
          <el-menu-item index="4">
            <nuxt-link to="/home/news">瞰图资讯 </nuxt-link>
          </el-menu-item>
          <el-menu-item index="5">
            <nuxt-link to="/home/about">了解瞰图 </nuxt-link>
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
<style>
.el-menu::after,
.el-menu::before {
  content: none;
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
};
</script>
