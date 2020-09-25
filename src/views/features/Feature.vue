<template>
    <div>
        <div class="contain">
        <div class="box row">
            <div class="card" :class="{'switch-on':getSwitchA}">
                  <span class="align">Location</span>
               <span v-if="getSwitchA">ON</span>
               <span v-else>OFF</span>
             
            </div>
            <div class="card" :class="{'switch-on':getSwitchB}">
                 <span class="align">Bluetooth</span>
                <span v-if="getSwitchB">ON</span>
               <span v-else>OFF</span>
            </div>
            <div class="card" :class="{'switch-on':getSwitchC}">
                <span class="align">Wi-fi</span>
               <span v-if="getSwitchC">ON</span>
               <span v-else>OFF</span>
            </div>
            <div class="card" :class="{'switch-on':getSwitchD}">
                <span class="align"> Aeroplane mode</span>
                <span v-if="getSwitchD">ON</span>
               <span v-else>OFF</span>
            </div>
            <div class="card" :class="{'switch-on':getSwitchE}">
                <span class="align">Mute</span>
               <span v-if="getSwitchE">ON</span>
               <span v-else>OFF</span>
            </div>
            <div class="card" :class="{'switch-on':getSwitchF}">
                <span class="align">Hotspot</span>
               <span v-if="getSwitchF">ON</span>
               <span v-else>OFF</span>
            </div>

        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:'features',
    computed:{
        ...mapGetters(['getSwitchA','getSwitchB','getSwitchC','getSwitchD','getSwitchE','getSwitchF',]),
    }
}
</script>

<style scoped>

.box{
    border: 0px;
    margin: 40px auto;
    width: 63%;
}
.card{
    border: 1px solid;
    background-color: grey;
    width: 150px;
    height: 100px;
    margin: 2px 2px;
}
.switch-on{
    background-color: green;
}
.align{
    text-align: center;
    font-size: x-large;
    
}
</style>