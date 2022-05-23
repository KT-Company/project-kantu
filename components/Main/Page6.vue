<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <div class="fadeInUp" style="width: 60vh; height: 80vh">
          <div class="text-3xl">合作伙伴</div>
          <div
            class="color-subtext h-20 fadeInUp2"
            style="
              margin-top: 49px;
              font-size: 16px;
              color: #cccccc;
              text-align: left;
            "
          >
            <div style="font-size: 20px; color: #fff">100+</div>
            <div>累计已为100余个项目提供“数字孪生”技术服务!</div>
            <div style="margin-top: 56px">
              重庆瞰图科技有限公司正与多家大型企业商合作数据对接，业务往来；与南京航天航空大学、BYD（比亚迪）、川仪厂、绵阳高新区、小米科技有限责任公司、中国商用飞机有限责任公司、武钢股份合作开发。
            </div>
            <div style="font-size: 20px; color: #fff; margin-top: 70px">
              小米科技
            </div>
            <div>
              专注于对接智能硬件和电子产品互联网开发，同时对接硬件数据于前端展示。
            </div>
            <div style="font-size: 20px; color: #fff; margin-top: 70px">
              武钢股份
            </div>
            <div>
              武钢股份拥有当今世界先进水平的炼铁、炼钢、轧钢等完整的钢铁生产工艺流程，钢材产品共计7大类、500多个品种。与我司合作了武钢铁产线、武钢热轧产厂等项目。
            </div>
            <!-- <el-button class="btn-normal" style="margin-top:56px"><i class="el-icon-d-arrow-right mr-6"></i>联系我们获取案例</el-button> -->
            <div class="button" @click="handlemore">
              <i class="el-icon-d-arrow-left mr-6"></i>联系我们获取案例
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="canvas"></div> -->
      <div class="imgs">
        <div class="imgs-top fadeInUp">
          <img src="@/assets/images/main/西安电子科技.png" alt="" />
          <img src="@/assets/images/main/小米.png" alt="" />
          <img src="@/assets/images/main/中国南飞.png" alt="" />
          <img src="@/assets/images/main/硅湖.png" alt="" style="margin-top:20px"/>
          <img src="@/assets/images/main/武汉钢铁.png" alt="" style="margin-top:20px"/>
          <img src="@/assets/images/main/中船重工.png" alt="" style="margin-top:20px"/>
        </div>
        <div class="imgs-bottom fadeInUp2">
            <img src="@/assets/images/main/中电.png" alt="" />
          <img src="@/assets/images/main/长江证券.png" alt="" />
          <img src="@/assets/images/main/本溪钢铁.png" alt="" />
          <img src="@/assets/images/main/京东方.png" alt="" style="margin-top:20px"/>
          <img src="@/assets/images/main/江苏.png" alt="" style="margin-top:20px"/>
          <img src="@/assets/images/main/中冶赛迪.png" alt="" style="margin-top:20px"/>
        </div>
      </div>
    </div>
  </Card>
</template>
<style lang="less">
.flex{
  align-items: center;
}
.button {
  width: 210px;
  height: 50px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.38);
  border-radius: 10px;
  font-size: 14px;
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
.imgs-top {
  width: 47.25rem;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  img {
    height: 90px;
    width: 220px;
  }
}
.imgs-bottom{
  margin-top: 146px;
  width: 47.25rem;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  img {
    height: 90px;
    width: 220px;
  }
}
</style>
<script>
import Card from "@/components/base/Card.vue";
export default {
  name: "Page6",

  data() {
    return {};
  },
  components: {
    Card,
  },
  mounted() {},
  methods: {
    handlemore(){
      document.documentElement.scrollTop =document.body.clientHeight
    }
  },
};
</script>