<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal pt-0">
      <label class="label">{{ fieldName }}</label>
    </div>
    <div class="field-body">
      <div class="field is-flex is-align-items-center">
        <div class="control">
          <label
            v-for="option in fieldOptions"
            v-bind:key="option"
            class="radio"
          >
            <input
              type="radio"
              name="gender"
              v-bind:value="option"
              v-model="value"
            />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: String,
    fieldOptions: Array,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  & + .radio {
    margin-left: 0;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
