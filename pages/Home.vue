<template>
  <div class="">
    <Header v-if="showHeader" class="header" />
    <nuxt-child />
    <Footer v-if="!showHeader" />
  </div>
</template>
<style>
.header{
  position: fixed;
  width: 100%;
  z-index: 9;
}
</style>
<script>
export default {
  data() {
    return {
      showHeader: true,
    };
  },
  created() {
 
  },
};
</script>
