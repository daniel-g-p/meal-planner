<template>
  <div class="notification">
    <button class="delete" v-on:click="closeNotification"></button>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeNotification() {
      this.$emit("close-notification");
    },
  },
};
</script>
