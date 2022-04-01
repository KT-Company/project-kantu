<template>
  <div>
    <!-- <Header />
    <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Card from "../components/base/Card.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      
    };
  },
  component: {
    Header,
    Footer,
    Card
  },
  mounted() {
    this.$router.push({
      path: `home/main`,
    });
  },
};
</script>
