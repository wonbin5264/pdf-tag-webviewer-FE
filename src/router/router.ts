import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "@/pages/Home.vue";
import Error404Vue from "@/pages/404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeVue },
    { path: "/:pathMatch(.*)", name: "404-not-found", component: Error404Vue },
  ],
});

export default router;
