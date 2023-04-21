import { createRouter, createWebHistory } from "vue-router";
import HomeSection from "@/components/HomeSection.vue";
import LoginSection from "@/components/LoginSection.vue";

const routes = [
  {
    path: "/",
    component: HomeSection,
    name: "home",
  },
  {
    path: "/login",
    component: LoginSection,
    name: "login",
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  mode: "history",
  routes, // short for `routes: routes`,
 
});

export default router;
