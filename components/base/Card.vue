<template>
  <div class="card">
    <slot />
  </div>
</template>
<style>
.card {
  padding: 4rem 8rem;
}
</style>
<script>
export default {
  name: "Card",
};
</script>
