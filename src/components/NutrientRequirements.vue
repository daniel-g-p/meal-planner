<template>
  <section class="box" ref="myNutrientRequirements" id="myNutrientRequirements">
    <h2 class="title has-text-primary">Your Daily Requirements</h2>
    <notification-box v-if="activeInfo" v-on:close-notification="closeInfo">
      {{ nutrientInfo }}
    </notification-box>
    <div class="container">
      <progress-bar
        nutrient-name="Calories"
        v-bind:nutrient-required="caloriesRequired"
        v-bind:nutrient-actual="caloriesActual"
        nutrient-unit="cal"
        v-on:show-nutrient-info="showInfo"
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
      v-on:show-nutrient-info="showInfo"
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
      activeInfo: "",
      calorieData: {
        info:
          "A calorie is quite literally a unit of energy, and your body extracts calories from the food you consume. Calories are found in the three primary macronutrients, those being carbohydrates, fats, and proteins. Think of it this way: If your body is a car, calories are the fuel, and macronutrients are the tank that will hold and deliver that fuel.",
        infoLink: "https://en.wikipedia.org/wiki/Calorie",
      },
      macronutrients: [
        {
          name: "Carbohydrates",
          required: 0,
          actual: 0,
          unit: "g",
          info:
            "Carbohydrates are the preferred source of energy for the human body. When consumed, carbohydrates are converted into sugars that will immediately enter your blood stream, thus providing the fuel that you need to operate at your best.",
          infoLink: "https://en.wikipedia.org/wiki/Protein",
        },
        {
          name: "Fats",
          required: 0,
          actual: 0,
          unit: "g",
          info:
            "Fats, although unfairly despised by many, are an essential component of every balanced diet. Unsaturated fats in particular play a key role in boosting brain function, strengthening your vital organs, and aiding the absorption of other important nutrients.",
          infoLink: "https://en.wikipedia.org/wiki/Fat",
        },
        {
          name: "Proteins",
          required: 0,
          actual: 0,
          unit: "g",
          info:
            "Proteins are the building blocks of your body, as they are in charge of building, repairing, and maintaining muscle tissue, skin, and hair among many other things. Proteins also serve as a transporter for other key nutrients, which makes them particularly important for athletes with high energy and nutrient requirements.",
          infoLink: "https://en.wikipedia.org/wiki/Fat",
        },
      ],
    };
  },
  computed: {
    nutrientInfo() {
      if (this.activeInfo !== "Calories") {
        const data = this.macronutrients.find(
          (nutrient) => nutrient.name === this.activeInfo
        );
        return data.info;
      } else {
        return this.calorieData.info;
      }
    },
  },
  methods: {
    setNutrientRequirements(nutrientName, proportion, caloriesPerGram) {
      const nutrient = this.macronutrients.find(
        (nutrient) => nutrient.name === nutrientName
      );
      nutrient.required = Math.round(
        (this.caloriesRequired * proportion) / caloriesPerGram
      );
    },
    showInfo(nutrientName) {
      if (nutrientName === "Calories") {
        this.activeInfo;
      }
      this.activeInfo = nutrientName;
      this.$refs.myNutrientRequirements.scrollIntoView({
        behavior: "smooth",
      });
    },
    closeInfo() {
      this.activeInfo = "";
    },
  },
  watch: {
    caloriesRequired() {
      this.setNutrientRequirements("Carbohydrates", 0.55, 4);
      this.setNutrientRequirements("Fats", 0.25, 9);
      this.setNutrientRequirements("Proteins", 0.2, 4);
      setTimeout(() => {
        this.$refs.myNutrientRequirements.scrollIntoView({
          behavior: "smooth",
        });
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-progress-bar {
  transition: width 1s ease;
}

#myNutrientRequirements {
  scroll-margin-top: 1rem;
}
</style>
