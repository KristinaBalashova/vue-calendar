import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/HomeVue.vue";
import CalendarVue from "../views/CalendarVue.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
