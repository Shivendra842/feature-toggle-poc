import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    switchA:false,
    switchB:false,
    switchC:false,
    switchD:false,
    switchE:false,
    switchF:false,
  
  },
  mutations: {
    SET_SWITCH_A:(state,value) =>{
      state.switchA=value;
    },
    SET_SWITCH_B:(state,value) =>{
      state.switchB=value;
    },
    SET_SWITCH_C:(state,value) =>{
      state.switchC=value;
    },
    SET_SWITCH_D:(state,value) =>{
      state.switchD=value;
    },
    SET_SWITCH_E:(state,value) =>{
      state.switchE=value;
    },
    SET_SWITCH_F:(state,value) =>{
      state.switchF=value;
    }
  },
  actions: {
    setSwitchA({commit},value){
      commit('SET_SWITCH_A',value);
    },
    setSwitchB({commit},value){
      commit('SET_SWITCH_B',value);
    },
    setSwitchC({commit},value){
      commit('SET_SWITCH_C',value);
    },
    setSwitchD({commit},value){
      commit('SET_SWITCH_D',value);
    },
    setSwitchE({commit},value){
      commit('SET_SWITCH_E',value);
    },
    setSwitchF({commit},value){
      commit('SET_SWITCH_F',value);
    },
  },
  modules: {},
  getters:{
    getSwitchA:(state)=>state.switchA,
    getSwitchB:(state)=>state.switchB,
    getSwitchC:(state)=>state.switchC,
    getSwitchD:(state)=>state.switchD,
    getSwitchE:(state)=>state.switchE,
    getSwitchF:(state)=>state.switchF,
  }
});
