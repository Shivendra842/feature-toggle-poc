import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Toggle from "@/views/toggle-buttons/Toggle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/toggle-buttons",
    name: "ToggleButtons",
    component: Toggle
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
