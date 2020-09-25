<template>
  <div class="home">
    <h3>
     Toggle Dashboard
    </h3>
    <div>
      <Features/>
    </div>
  </div>
</template>

<script>
import Features from '@/views/features/Feature.vue'
export default {
  name: "Home",
  components:{
    Features
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  
}
</style>
