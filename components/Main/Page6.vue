<template>
  <Card class="flex items-center">
    <div class="flex justify-between" style="flex: 1;">
      <div class="fadeInUp">
        <div class="text-3xl">合作伙伴</div>
        <div
          class="color-subtext  line-height-1-5"
          style="
            margin-top: 3.0625rem;
            font-size: 1rem;
            color: #b3b3b3;
            text-align: left;
          "
        >
          <div class="tit">100+</div>
          <div>累计已为100余个项目提供“数字孪生”技术服务!</div>
          <div style="margin-top: 3.5rem">
            重庆瞰图科技有限公司正与多家大型企业商合作数据对接，业务往来；与南京航天航空大学、BYD（比亚迪）、川仪厂、绵阳高新区、小米科技有限责任公司、中国商用飞机有限责任公司、武钢股份合作开发。
          </div>
          <div class="tit">
            小米科技
          </div>
          <div>
            专注于对接智能硬件和电子产品互联网开发，同时对接硬件数据于前端展示。
          </div>
          <div class="tit">
            武钢股份
          </div>
          <div>
            武钢股份拥有当今世界先进水平的炼铁、炼钢、轧钢等完整的钢铁生产工艺流程，钢材产品共计7大类、500多个品种。与我司合作了武钢铁产线、武钢热轧产厂等项目。
          </div>
          <!-- <el-button class="btn-normal" style="margin-top:3.5rem"><i class="el-icon-d-arrow-right mr-6"></i>联系我们获取案例</el-button> -->
          <div class="button" @click="handlemore">
            <i class="el-icon-d-arrow-left mr-6"></i>联系我们获取案例
          </div>
        </div>
      </div>
      <!-- <div class="canvas"></div> -->
      <div class="imgs">
        <div class="imgs-top fadeInUp">
          <div class="images" v-for="(item, index) in imgs" :key="index">
            <img :src="item" alt="" />
          </div>
          <!-- <img src="@/assets/images/main/西安电子科技.png" alt="" />
          <img src="@/assets/images/main/小米.png" alt="" />
          <img src="@/assets/images/main/中国南飞.png" alt="" />
          <img src="@/assets/images/main/硅湖.png" alt="" style="margin-top:1.25rem"/>
          <img src="@/assets/images/main/武汉钢铁.png" alt="" style="margin-top:1.25rem"/>
          <img src="@/assets/images/main/中船重工.png" alt="" style="margin-top:1.25rem"/> -->
        </div>
        <div class="imgs-bottom fadeInUp2">
          <div class="images" v-for="(item, index) in imgs2" :key="index">
            <img :src="item" alt="" />
          </div>
          <!-- <img src="@/assets/images/main/中电.png" alt="" />
          <img src="@/assets/images/main/长江证券.png" alt="" />
          <img src="@/assets/images/main/本溪钢铁.png" alt="" />
          <img src="@/assets/images/main/京东方.png" alt="" style="margin-top:1.25rem"/>
          <img src="@/assets/images/main/江苏.png" alt="" style="margin-top:1.25rem"/>
          <img src="@/assets/images/main/中冶赛迪.png" alt="" style="margin-top:1.25rem"/> -->
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="less">
.flex {
  align-items: center;
}
.tit {
font-size: 1.25rem; 
color: #ccc; 
margin-top: 4.375rem;
font-weight: bold;
}
.button {
  width: 13.125rem;
  height: 3.125rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
  box-shadow: 0rem 0rem 1.1875rem .0625rem rgba(255, 255, 255, 0.38);
  border-radius: .625rem;
  font-size: .875rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.36s;
  margin-top: 4rem;
}
.button:hover {
  background-color: #fff;
  color: #1a1a1a;
  /* box-shadow:none; */
  transform: translateY(-0.3125rem);
}
.imgs {
  margin-left: 10.625rem;
}
.imgs-top {
  width: 47.25rem;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  .images {
    height: 5.625rem;
    width: 13.75rem;
    background-color: rgba(77, 77, 77, 0.1);
    border-radius: .625rem;
    border: .0625rem solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      vertical-align: middle;
    }
  }
  .images:hover{
    background-color: rgba(77, 77, 77, 0.3);
  }
}
.imgs-bottom {
  margin-top: 9.125rem;
  width: 47.25rem;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  .images {
    height: 5.625rem;
    width: 13.75rem;
    background-color: rgba(77, 77, 77, 0.1);
    border-radius: .625rem;
    border: .0625rem solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      vertical-align: middle;
    }

  }
    .images:hover{
    background-color: rgba(77, 77, 77, 0.3);
  }
}
</style>
<script>
import Card from "@/components/base/Card.vue";
export default {
  name: "Page6",

  data() {
    return {
      imgs: [
        require("@/assets/images/main/1.png"),
        require("@/assets/images/main/2.png"),
        require("@/assets/images/main/3.png"),
        require("@/assets/images/main/4.png"),
        require("@/assets/images/main/5.png"),
        require("@/assets/images/main/6.png"),
      ],
      imgs2: [
        require("@/assets/images/main/7.png"),
        require("@/assets/images/main/8.png"),
        require("@/assets/images/main/9.png"),
        require("@/assets/images/main/10.png"),
        require("@/assets/images/main/11.png"),
        require("@/assets/images/main/12.png"),
      ],
    };
  },
  components: {
    Card,
  },
  mounted() {},
  methods: {
    handlemore() {
      document.documentElement.scrollTop = document.body.clientHeight;
    },
  },
};
</script>