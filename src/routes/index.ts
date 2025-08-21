import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalendarView from "../views/CalendarView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
