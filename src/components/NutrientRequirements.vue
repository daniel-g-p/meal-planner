<template>
  <section class="column">
    <div class="box">
      <h2 class="title has-text-primary">Your Requirements</h2>
      <div class="container">
        <progress-bar
          nutrientName="Calories"
          v-bind:nutrientPercentage="caloriePercentage"
        ></progress-bar>
      </div>
      <div class="container pt-1 my-5 has-background-light"></div>
      <progress-bar
        v-for="nutrient in macronutrients"
        v-bind:key="nutrient.name"
        v-bind:nutrientName="nutrient.name"
        v-bind:nutrientPercentage="nutrient.percentage"
      ></progress-bar>
      <nutrient-legend></nutrient-legend>
    </div>
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
  data() {
    return {
      macronutrients: [
        { name: "Carbohydrates", percentage: 0 },
        { name: "Fats", percentage: 0 },
        { name: "Proteins", percentage: 0 },
      ],
      caloriePercentage: 59,
    };
  },
};
</script>
