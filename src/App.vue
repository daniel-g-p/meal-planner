<template>
  <main class="section">
    <base-header></base-header>
    <div class="columns">
      <user-form></user-form>
      <nutrient-requirements></nutrient-requirements>
    </div>
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
};
</script>

<style lang="scss">
svg {
  fill: currentColor;
}
</style>
