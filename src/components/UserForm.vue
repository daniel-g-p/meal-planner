<template>
  <section class="column">
    <div class="box is-flex is-flex-direction-column">
      <h2 class="title has-text-primary">About You</h2>
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
      <button class="button is-primary is-uppercase has-text-weight-bold">
        Set
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>
