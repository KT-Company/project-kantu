<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <slot />
  </div>
</template>
<style lang="less" scoped>
.card {
  padding: 7rem;
  background: url("@/assets/images/background.png") no-repeat;
  background-position: top -20rem center;
  background-size: 100% auto;
  &>.title {
    text-align: center;
    font-size: 4.5rem;
    font-family: Source Han Sans SC;
    font-weight: 500;
    margin-bottom: 4rem;
    &::after ,&::before {
      content: "";
      display: inline-block;
      width: 8.9rem;
      height: 0.3rem;
      vertical-align: middle;
      margin: 0 3rem;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
    &::after {
      background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    }
  }
}
</style>
<script>
export default {
  name: "mCard",
  props: {
    title: {
      type: String,
    },
  },
};
</script>
