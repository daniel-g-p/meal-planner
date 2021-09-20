<template>
  <section class="box" ref="myNutrientRequirements" id="myNutrientRequirements">
    <h2 class="title has-text-primary">Your Daily Intake</h2>
    <div class="container">
      <progress-bar
        nutrient-name="Calories"
        v-bind:nutrient-required="caloriesRequired"
        v-bind:nutrient-actual="caloriesActual"
        nutrient-unit="cal"
      ></progress-bar>
    </div>
    <div class="container pt-1 my-5 has-background-light"></div>
    <progress-bar
      v-for="nutrient in macronutrients"
      v-bind:key="nutrient.name"
      v-bind:nutrient-name="nutrient.name"
      v-bind:nutrient-required="nutrient.required"
      v-bind:nutrient-actual="nutrient.actual"
      v-bind:nutrient-unit="nutrient.unit"
    ></progress-bar>
    <nutrient-legend></nutrient-legend>
  </section>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import NutrientLegend from "./NutrientLegend.vue";

export default {
  components: {
    "progress-bar": ProgressBar,
    "nutrient-legend": NutrientLegend,
  },
  props: {
    caloriesRequired: Number,
    caloriesActual: Number,
  },
  data() {
    return {
      macronutrients: [
        { name: "Carbohydrates", required: 0, actual: 0, unit: "g" },
        { name: "Fats", required: 0, actual: 0, unit: "g" },
        { name: "Proteins", required: 0, actual: 0, unit: "g" },
      ],
    };
  },
  methods: {
    setNutrientRequirements(nutrientName, proportion) {
      const nutrient = this.macronutrients.find(
        (nutrient) => nutrient.name === nutrientName
      );
      nutrient.required = Math.round(this.caloriesRequired * proportion);
    },
  },
  watch: {
    caloriesRequired() {
      this.$refs.myNutrientRequirements.scrollIntoView({ behavior: "smooth" });
      this.setNutrientRequirements("Carbohydrates", 0.55);
      this.setNutrientRequirements("Fats", 0.25);
      this.setNutrientRequirements("Proteins", 0.2);
    },
  },
};
</script>

<style lang="scss" scoped>
#myNutrientRequirements {
  scroll-margin-top: 1rem;
}
</style>
