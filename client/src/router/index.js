import { createRouter, createWebHistory } from "vue-router";
import HomeSection from "@/components/HomeSection.vue";
import LoginSection from "@/components/LoginSection.vue";
import RegisterSection from "@/components/RegisterSection.vue";

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
  {
    path: "/register",
    component: RegisterSection,
    name: "register",
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  mode: "history",
  routes, // short for `routes: routes`,
});

export default router;
