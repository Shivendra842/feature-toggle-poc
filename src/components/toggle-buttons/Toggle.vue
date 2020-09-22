<template>
  <div>
          
            <div>
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchA"
              class="button"
            />
            {{switchA}}
            </div>
            <div> 
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchB"
              class="button"
            />
             {{switchB}}
            </div>
            <div>
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchC"
              class="button"
            />
             {{switchC}}
            </div>
            <div> 
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchD"
              class="button"
            />
             {{switchD}}
            </div>
            <div>
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchE"
              class="button"
            />
             {{switchE}}
            </div>
            <div> 
                <toggle-button
              :value="false"
              color="green"
              :labels="true"
              v-model="switchF"
              class="button"
            />
             {{switchF}}
            </div>
         
       
     
  </div>
</template>

<script>
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
};
</script>

<style scoped>


.button {
  margin: 10px 90px 4px 10px;
}
</style>
