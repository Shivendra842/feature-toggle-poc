<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchA"
            :color="customColor"
            :labels="true"
            v-model="switchA"
            class="button"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchA }}
        </div>
        <div class="col-12 col-sm-9">
          custom color for ON and OFF
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchB"
            color="red"
            :labels="true"
            v-model="switchB"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchB }}
        </div>
        <div class="col-12 col-sm-9">
          This button is on by default
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchC"
            color="orange"
            :labels="true"
            v-model="switchC"
            class="button"
            :sync="true"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchC }}
        </div>
        <div class="col-8 col-sm-7">
          Sync ON, changing state of button from script will change the button
          view also
        </div>
        <div class="col-4 col-sm-2">
          <button class="btn btn-primary" @click="changeSwitchC">Toggle</button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchD"
            color="blue"
            :labels="true"
            v-model="switchD"
            class="button"
            :sync="false"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchD }}
        </div>
        <div class="col-8 col-sm-7">
          Sync OFF, changing state of button from script will not change the
          button view
        </div>
        <div class="col-4 col-sm-2">
          <button class="btn btn-primary" @click="changeSwitchD">Toggle</button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchE"
            color="green"
            :labels="customLabel"
            v-model="switchE"
            class="button"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchE }}
        </div>
        <div class="col-12 col-sm-9">
          This has custom label 'Yes' and 'No'
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6 col-sm-2">
          <toggle-button
            :value="switchF"
            color="yellow"
            :labels="true"
            v-model="switchF"
            class="button"
            :disabled="disable"
          />
        </div>
        <div class="col-6 col-sm-1">
          {{ switchF }}
        </div>
        <div class="col-12 col-sm-9">
          The button is disabled
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchA: false,
      switchB: true,
      switchC: false,
      switchD: false,
      switchE: false,
      switchF: true,
      disable: true,
      customLabel: { checked: "Yes", unchecked: "No" },
      customColor: { checked: "green", unchecked: "purple" }
    };
  },
  methods: {
    changeSwitchC() {
      this.switchC = !this.switchC;
    },
    changeSwitchD() {
      this.switchD = !this.switchD;
    }
  }
};
</script>

<style scoped></style>
