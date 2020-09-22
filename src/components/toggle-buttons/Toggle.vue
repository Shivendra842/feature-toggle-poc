<template>
  <div>
    <div>
      <toggle-button
        :value="switchA"
        color="green"
        :labels="true"
        v-model="switchA"
        class="button"
      />
      {{ switchA }}
    </div>
    <div>
      <toggle-button
        :value="switchB"
        color="red"
        :labels="true"
        v-model="switchB"
        class="button"
      />
      {{ switchB }}
      <span class="line"> This button is on by default</span>
    </div>
    <div>
      <toggle-button
        :value="switchC"
        color="green"
        :labels="true"
        v-model="switchC"
        class="button"
        :sync="true"
      />
      {{ switchC }} <span class="line"> Sync ON, changing state of button from script will change the button view also</span>
      <span><button class="btn btn-primary" @click="changeSwitchC">Toggle </button></span>
    </div>
    <div>
      <toggle-button
        :value="switchD"
        color="green"
        :labels="true"
        v-model="switchD"
        class="button"
        :sync="false"
      />
      {{ switchD }}<span class="line"> Sync OFF, changing state of button from script will change the button view also</span>
      <span><button class="btn btn-primary" @click="changeSwitchD">Toggle </button></span>
    </div>
    <div>
      <toggle-button
        :value="switchE"
        color="green"
        :labels="customLabel"
        v-model="switchE"
        class="button"
      />
      {{ switchE }}
      <span class="line"> This has custom label 'Yes' and 'No'</span>
    </div>
    <div>
      <toggle-button
        :value="switchF"
        color="green"
        :labels="true"
        v-model="switchF"
        class="button"
        :disabled="disable"
      />
      {{ switchF }}
      <span class="line"> The button is disabled</span>
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
      disable:true,
      customLabel:{checked: 'Yes', unchecked: 'No'},
    };
  },
  methods:{
      changeSwitchC(){
          this.switchC=!this.switchC;
      },
       changeSwitchD(){
          this.switchD=!this.switchD;
      }
  }
};
</script>

<style scoped>
.button {
  margin: 10px 90px 4px 10px;
}
.line{
    margin: 20px;
}
</style>
