<template>
  <div id="app">
    <NavBar />
    <router-view> </router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navigation-bar/NavBar.vue";
export default {
  name: "main-app",
  components: {
    NavBar
  }
};
</script>
<style lang="scss"></style>
