<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchA"
            :labels="true"
            v-model="switchA"
            class="button"
             :sync="true"
          />
        </div>
        <div class="col-8 col-sm-9">
        Location
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchB"
            :labels="true"
            v-model="switchB"
             :sync="true"
          />
        </div>
        <div class="col-8 col-sm-9">
          Bluetooth
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchC"
            :labels="true"
            v-model="switchC"
            class="button"
            :sync="true"
          />
        </div>
        <div class="col-8 col-sm-9">
          Wi-fi
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchD"
            :labels="true"
            v-model="switchD"
            class="button"
           :sync="true"
          />
        </div>
        <div class="col-8 col-sm-9">
          Aeroplane mode
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchE"
            :labels="true"
            v-model="switchE"
            class="button"
          />
        </div>
        <div class="col-8 col-sm-9">
          Mute
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4 col-sm-3">
          <toggle-button
            :value="switchF"
            :labels="true"
            v-model="switchF"
            class="button"
             :sync="true"
          />
        </div>
        <div class="col-8 col-sm-9">
          Hotspot
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      switchA: false,
      switchB: false,
      switchC: false,
      switchD: false,
      switchE: false,
      switchF: false,
    };
  },
  created(){
   this.getswitchStatus();
  },
  watch:{
    switchA:function(){
      this.$store.dispatch('setSwitchA',this.switchA);
    },
     switchB:function(){
      this.$store.dispatch('setSwitchB',this.switchB);
    },
     switchC:function(){
      this.$store.dispatch('setSwitchC',this.switchC);
    },
     switchD:function(){
      this.$store.dispatch('setSwitchD',this.switchD);
    },
     switchE:function(){
      this.$store.dispatch('setSwitchE',this.switchE);
    },
     switchF:function(){
      this.$store.dispatch('setSwitchF',this.switchF);
    },
  },
   computed:{
      ...mapGetters(['getSwitchA','getSwitchB','getSwitchC','getSwitchD','getSwitchE','getSwitchF',]),
    },
    methods:{
      getswitchStatus(){
       this.switchA=this.getSwitchA;
       this.switchB=this.getSwitchB;
       this.switchC=this.getSwitchC;
       this.switchD=this.getSwitchD;
       this.switchE=this.getSwitchE;
       this.switchF=this.getSwitchF;
    },
    }
   
};
</script>

<style scoped></style>
