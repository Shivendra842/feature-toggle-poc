<template>
  <div class="home">
    <NavBar/>
    <Toggle/>
  </div>
</template>

<script>
import Toggle from "@/components/toggle-buttons/Toggle.vue"
import NavBar from"@/components/navigation-bar/NavBar.vue";
export default {
  name: "Home",
  components:{
    Toggle,
    NavBar
  }
};
</script>
