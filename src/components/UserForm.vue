<template>
  <section class="box" ref="myUserForm" id="myUserForm">
    <notification-box
      v-if="formError"
      v-on:close-notification="closeErrorMessage"
    >
      Please fill in all form fields
    </notification-box>
    <form class="is-flex is-flex-direction-column" v-on:submit.prevent="submit">
      <h2 class="title has-text-primary">About You</h2>
      <radio-field
        field-name="Gender"
        v-bind:field-options="['Female', 'Male']"
        v-model="gender"
      ></radio-field>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Age</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input"
                v-bind:class="ageClass"
                type="number"
                v-model="age"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Height</label>
        </div>
        <div class="field-body">
          <div class="field my-unit-input my-unit-input--height">
            <p class="control">
              <input
                class="input"
                v-bind:class="heightClass"
                type="number"
                v-model="height"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Weight</label>
        </div>
        <div class="field-body">
          <div class="field my-unit-input my-unit-input--weight">
            <p class="control">
              <input
                class="input"
                v-bind:class="weightClass"
                type="number"
                v-model="weight"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Physical Activity</label>
        </div>
        <div class="field-body">
          <div class="select my-select">
            <select v-model="activity">
              <option value="none">Sedentary (little to no exercise)</option>
              <option value="light"
                >Light (exercise 1 to 3 times a week)</option
              >
              <option value="moderate"
                >Moderate (exercise 4 to 5 times a week)</option
              >
              <option value="active"
                >Active (exercise 6 to 7 times a week)</option
              >
              <option value="intense"
                >Intense (physical job or intense exercise daily)</option
              >
            </select>
          </div>
        </div>
      </div>
      <radio-field
        field-name="Weight Goal"
        v-bind:field-options="['Lose', 'Maintain', 'Gain']"
        v-model="goal"
      ></radio-field>
      <button class="button is-primary is-uppercase has-text-weight-bold">
        Set
      </button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-values"],
  data() {
    return {
      gender: "",
      age: "",
      height: "",
      weight: "",
      activity: "",
      goal: "",
      initialized: {
        gender: false,
        age: false,
        height: false,
        weight: false,
        activity: false,
        goal: false,
      },
      formError: false,
    };
  },
  computed: {
    genderClass() {
      return this.initialized.gender && !this.gender ? "has-text-danger" : "";
    },
    ageClass() {
      return this.initialized.age && !this.age ? "is-danger" : "";
    },
    heightClass() {
      return this.initialized.height && !this.height ? "is-danger" : "";
    },
    weightClass() {
      return this.initialized.weight && !this.weight ? "is-danger" : "";
    },
    activityClass() {
      return this.initialized.activity && !this.activity
        ? "has-text-danger"
        : "";
    },
    goalClass() {
      return this.initialized.goal && !this.goal ? "has-text-danger" : "";
    },
  },
  methods: {
    submit() {
      console.log(this.goal);
      if (
        !this.gender ||
        !this.age ||
        !this.height ||
        !this.weight ||
        !this.activity ||
        !this.goal
      ) {
        this.formError = true;
        this.$refs.myUserForm.scrollIntoView({ behavior: "smooth" });
        return;
      }
      this.closeErrorMessage();
      const bmr = this.calculateBMR(this.gender);
      const amr = this.calculateAMR(bmr, this.activity);
      const caloricIntake = this.calculateCaloricIntake(amr, this.goal);
      this.$emit("set-values", caloricIntake);
    },
    closeErrorMessage() {
      this.formError = false;
    },
    calculateBMR(gender) {
      switch (gender) {
        case "female":
          return 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
        case "male":
          return 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
        default:
          return;
      }
    },
    calculateAMR(bmr, activityLevel) {
      switch (activityLevel) {
        case "none":
          return bmr * 1.2;
        case "light":
          return bmr * 1.375;
        case "moderate":
          return bmr * 1.55;
        case "active":
          return bmr * 1.725;
        case "intense":
          return bmr * 1.9;
        default:
          return;
      }
    },
    calculateCaloricIntake(amr, weightGoal) {
      switch (weightGoal) {
        case "maintain":
          return amr;
        case "lose":
          return amr * 0.9;
        case "gain":
          return amr * 1.1;
        default:
          return;
      }
    },
  },
  watch: {
    gender() {
      if (!this.initialized.gender) {
        this.initialized.gender = true;
      }
    },
    age() {
      if (!this.initialized.age) {
        this.initialized.age = true;
      }
    },
    height() {
      if (!this.initialized.height) {
        this.initialized.height = true;
      }
    },
    weight() {
      if (!this.initialized.weight) {
        this.initialized.weight = true;
      }
    },
    activity() {
      if (!this.initialized.activity) {
        this.initialized.activity = true;
      }
    },
    goal() {
      if (!this.initialized.goal) {
        this.initialized.goal = true;
      }
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
.my-unit-input {
  position: relative;
  input {
    padding-left: 2rem;
  }
  &::after {
    position: absolute;
    left: 0.5rem;
    top: 0.5em;
    color: #dbdbdb;
  }
  &--height::after {
    content: "cm";
  }
  &--weight::after {
    content: "kg";
  }
}

.my-select {
  width: 100%;
  select {
    width: 100%;
  }
}

#myUserForm {
  scroll-margin-top: 1rem;
}
</style>
