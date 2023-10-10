import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-recipe-view",
    name: "create-recipe-view",
    component: () => import("../views/CreateRecipeView.vue"),
  },
  {
    path: "/recipe-view",
    name: "recipe-view",
    component: () => import("../views/RecipeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
