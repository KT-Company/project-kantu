<template>
  <header>
    <div class="flex justify-between main">
      <div class="text-2xl p-4">
        <img src="~/assets/images/logo.png" alt="" srcset="" />
      </div>
      <nav class="nav flex justify-between">
        <!-- <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="transparent"
          active-text-color="#ffd04b" text-color="#fff">
          <el-menu-item index="1">
            <nuxt-link to="/">
              <div class="link">首页</div>
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link to="/home/more">
              <div class="link">产品业务</div>
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="3">
            <nuxt-link to="/home/cases">
              <div class="link">多元案例</div>
            </nuxt-link>
          </el-menu-item>
      <el-menu-item index="4">
            <nuxt-link to="/home/news"><div class="link">瞰图资讯</div></nuxt-link>
          </el-menu-item>
          <el-menu-item index="5">
            <nuxt-link to="/home/about">
              <div class="link">了解瞰图</div>
            </nuxt-link>
          </el-menu-item> 
        </el-menu> -->

        <div class="wrap-btn">
          <div @click="changeDiv(1)" :class="wrapbtnID==1?'changeDiv':'noDiv'">
            <router-link to='/'>
              <div class="link">首页</div>
            </router-link>

          </div>
          <div @click="changeDiv(2)" :class="wrapbtnID == 2 ? 'changeDiv' : 'noDiv'">
            <router-link to="/home/more">
              <div class="link">产品业务</div>
            </router-link>
          </div>
          <div @click="changeDiv(3)" :class="wrapbtnID == 3 ? 'changeDiv' : 'noDivOrange'">
            <router-link to="/home/cases">
              <div class="link">多元案例</div>
            </router-link>
          </div>

          <div @click="changeDiv(4)" :class="wrapbtnID == 4 ? 'changeDiv' : 'noDiv'">
            <router-link to="/home/about">
              <div class="link">了解瞰图</div>
            </router-link>
          </div>
        </div>
        <div class="demo">
          <a href="/demos" target="_blank" rel="noopener noreferrer"><img src="@/assets/images/main/demo.png"
              alt="" /></a>
        </div>
        <div class="line"></div>
      </nav>
    </div>
  </header>
</template>
<style lang="less" scoped>
.wrap-btn {
  display: flex;

  .noDiv {
    border: 1px solid #fff;
    background-color: #fff;
    height: 4rem;
    width: 8rem;
    border-radius: .8rem;
    box-shadow: 0px 0px 7px 2px #fff;
    color: #000;
    line-height: 4rem;
    text-align: center;
    margin: 1.2rem;


  }

  .noDivOrange {
    border: 1px solid #fc7f15;
    background-color: #fc7f15;
    height: 4rem;
    width: 8rem;
    border-radius: .8rem;
    box-shadow: 0px 0px 7px 2px #fff;
    color: #fff;
    line-height: 4rem;
    text-align: center;
    margin: 1.2rem;


  }

  .changeDiv {
    border: 1px solid #1a1a1a;
    background-color: #1a1a1a;
    height: 4rem;
    width: 8rem;
    border-radius: .8rem;
    box-shadow: 0px 0px 5px 1px #fff;
    color: #fff;
    line-height: 4rem;
    text-align: center;
    margin: 1.2rem;
  }
}


.demo {
  // padding-top: 22px;
  margin-left: 15px;
}

.nav {
  align-items: center;
}

.el-menu-item {
  border-bottom: none !important;
  padding: 0;

  .link {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px #fff;
    margin: 10px;
    background: #fff;
    color: #1a1a1a;
  }
}

.el-menu-item:hover:not(.is-active) {
  outline: 0 !important;
  // color: #fff !important;
  background-color: transparent !important;

  .link {
    color: #1a1a1a;
    opacity: 0.75;
  }
}

.el-menu-item.is-active {
  // color: #fff !important;
  background: transparent !important;
  border-bottom: none !important;

  .link {
    cursor: default;
    background: #1a1a1a;
    color: #fff;
  }
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
      wrapbtnID: 1
    };
  },
  created() {
    console.log(this.$route);
    switch (this.$route.path) {
      case "/home/main":
        this.activeIndex = "1";
        break;
      case "/home/more":
        this.activeIndex = "2";
        break;
      case "/home/cases":
        this.activeIndex = "3";
        break;
      case "/home/news":
        this.activeIndex = "4";
        break;
      case "/home/about":
        this.activeIndex = "5";
        break;
    }
  },
  methods: {
    handleSelect(key, keyPath) { },
    changeDiv(id) {
      this.wrapbtnID = id
    }
  },
  mounted() {
    // console.log(window.scrollY)
  },
};
</script>
