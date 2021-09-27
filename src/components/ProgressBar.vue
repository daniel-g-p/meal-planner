<template>
  <div class="block">
    <span class="icon-text pb-2">
      <help-icon v-on:show-help="showInfo"></help-icon>
      <span class="has-text-weight-bold"
        >{{ nutrientName }}: {{ progressBarLabel }}</span
      >
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
    nutrientRequired: Number,
    nutrientActual: Number,
    nutrientUnit: String,
  },
  emits: ["show-nutrient-info"],
  computed: {
    progressBarValue() {
      if (!this.nutrientRequired) {
        return 0;
      }
      const proportion = Math.round(
        (100 * this.nutrientActual) / this.nutrientRequired
      );
      return proportion > 10 ? proportion / 2 : 5;
    },
    progressBarLabel() {
      return this.nutrientRequired
        ? `${this.nutrientActual} / ${this.nutrientRequired}${this.nutrientUnit}`
        : "?";
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
  methods: {
    showInfo() {
      this.$emit("show-nutrient-info", this.nutrientName);
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
    background-color: #4a4a4a;
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
    color: #b5b5b5;
    cursor: pointer;
  }
}
</style>
