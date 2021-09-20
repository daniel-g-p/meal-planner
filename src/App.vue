<template>
  <main class="section container is-max-desktop">
    <base-header></base-header>
    <user-form v-on:set-values="setValues"></user-form>
    <nutrient-requirements
      v-bind:calories-required="caloriesRequired"
      v-bind:calories-actual="caloriesActual"
      ref="myNutrientRequirements"
    ></nutrient-requirements>
    <meal-list></meal-list>
  </main>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import UserForm from "./components/UserForm.vue";
import NutrientRequirements from "./components/NutrientRequirements.vue";
import MealList from "./components/MealList.vue";

export default {
  name: "App",
  components: {
    "base-header": BaseHeader,
    "user-form": UserForm,
    "nutrient-requirements": NutrientRequirements,
    "meal-list": MealList,
  },
  data() {
    return {
      caloriesRequired: 0,
      caloriesActual: 0,
    };
  },
  methods: {
    setValues(caloriesRequired) {
      this.caloriesRequired = Math.round(caloriesRequired);
    },
  },
};
</script>

<style lang="scss">
svg {
  fill: currentColor;
}
</style>
