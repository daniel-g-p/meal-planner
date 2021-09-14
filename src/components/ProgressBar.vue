<template>
  <div class="block">
    <span class="icon-text pb-2">
      <span class="icon my-help-icon">
        <svg viewBox="0 0 16 16">
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
          />
        </svg>
      </span>
      <span class="has-text-weight-bold">{{ nutrientName }}</span>
    </span>
    <div class="my-progress-bar">
      <progress
        class="progress"
        v-bind:class="progressBarClass"
        v-bind:value="progressBarValue"
        max="100"
      ></progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nutrientName: String,
    nutrientPercentage: Number,
  },
  computed: {
    progressBarValue() {
      let value = this.nutrientPercentage / 2;
      return value > 5 ? value : 5;
    },
    progressBarClass() {
      const difference = Math.abs(this.progressBarValue - 50);
      if (difference < 10) {
        return { "is-primary": true };
      } else if (difference < 25) {
        return { "is-warning": true };
      } else {
        return { "is-danger": true };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.my-progress-bar {
  position: relative;
  &::after {
    content: "";
    display: block;
    background-color: black;
    width: 4px;
    height: calc(100% + 8px);
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.my-help-icon {
  &:hover {
    color: #00d1b2;
    cursor: pointer;
  }
}
</style>
