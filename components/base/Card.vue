<template>
  <div class="card">
    <slot />
  </div>
</template>
<style>
.card {
  width: 104rem;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
<script>
export default {
  name: "Card",
};
</script>
