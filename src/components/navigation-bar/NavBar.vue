<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/"> 
        <div v-if="this.$route.path!='/'" to="/" class="btn btn-info">
        Back
        </div>
       </b-navbar-brand>
     
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/toggle-buttons" class="">Settings</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
