<template>
  <section class="column">
    <form
      class="box is-flex is-flex-direction-column"
      v-on:submit.prevent="submit"
    >
      <h2 class="title has-text-primary">About You</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal pt-0">
          <label class="label">Gender</label>
        </div>
        <div class="field-body">
          <div class="field is-flex is-align-items-center">
            <div class="control">
              <label class="radio">
                <input type="radio" name="gender" />
                Female
              </label>
              <label class="radio">
                <input type="radio" name="gender" />
                Male
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Age</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-primary" type="number" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Height</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-primary" type="number" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Weight</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-primary" type="number" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal pt-0">
          <label class="label">Level of Activity</label>
        </div>
        <div class="field-body">
          <div class="field is-flex is-align-items-center">
            <div class="control">
              <label class="radio">
                <input type="radio" name="activity" />
                None
              </label>
              <label class="radio">
                <input type="radio" name="activity" />
                Light
              </label>
              <label class="radio">
                <input type="radio" name="activity" />
                Moderate
              </label>
              <label class="radio">
                <input type="radio" name="activity" />
                Active
              </label>
              <label class="radio">
                <input type="radio" name="activity" />
                Intense
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal pt-0">
          <label class="label">Weight Goal</label>
        </div>
        <div class="field-body">
          <div class="field is-flex is-align-items-center">
            <div class="control">
              <label class="radio">
                <input type="radio" name="goal" />
                Lose Weight
              </label>
              <label class="radio">
                <input type="radio" name="goal" />
                Maintain Weight
              </label>
              <label class="radio">
                <input type="radio" name="goal" />
                Gain Weight
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="button is-primary is-uppercase has-text-weight-bold">
        Set
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gender: "male",
      age: 19,
      height: 186,
      weight: 75,
      activity: "active",
      goal: "maintain",
    };
  },
  methods: {
    submit() {
      let basalMetabolicRate;
      switch (this.gender) {
        case "female":
          basalMetabolicRate =
            655.1 + 9.563 * this.weight + 1.85 * this.height + 4.676 * this.age;
          break;
        case "male":
          basalMetabolicRate =
            66.47 +
            13.75 * this.weight +
            5.003 * this.height +
            6.755 * this.age;
          break;
        default:
          basalMetabolicRate = undefined;
          break;
      }
      let activeMetabolicRate;
      switch (this.activity) {
        case "none":
          activeMetabolicRate = basalMetabolicRate * 1.2;
          break;
        case "light":
          activeMetabolicRate = basalMetabolicRate * 1.375;
          break;
        case "moderate":
          activeMetabolicRate = basalMetabolicRate * 1.55;
          break;
        case "active":
          activeMetabolicRate = basalMetabolicRate * 1.725;
          break;
        case "intense":
          activeMetabolicRate = basalMetabolicRate * 1.9;
          break;
        default:
          activeMetabolicRate = undefined;
          break;
      }
      let caloricIntake;
      switch (this.goal) {
        case "lose":
          caloricIntake = activeMetabolicRate * 0.9;
          break;
        case "maintain":
          caloricIntake = activeMetabolicRate * 1;
          break;
        case "gain":
          caloricIntake = activeMetabolicRate * 1.1;
          break;
        default:
          caloricIntake = undefined;
          break;
      }
      console.log(caloricIntake);
    },
  },
};
</script>
