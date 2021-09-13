<template>
  <div class="block is-flex is-flex-wrap-wrap">
    <div class="is-flex mr-4 is-align-items-center">
      <div class="p-2 mr-1 has-background-danger my-circle"></div>
      <span class="has-text-danger has-text-weight-bold">Inappropriate</span>
    </div>
    <div class="is-flex mr-4 is-align-items-center">
      <div class="p-2 mr-1 has-background-warning my-circle"></div>
      <span class="has-text-warning has-text-weight-bold">Acceptable</span>
    </div>
    <div class="is-flex is-align-items-center">
      <div class="p-2 mr-1 has-background-primary my-circle"></div>
      <span class="has-text-primary has-text-weight-bold">Ideal</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-circle {
  border-radius: 50%;
}
</style>
