import Vue from "vue";
import VueRouter from "vue-router";
import RateDogs from "../components/rate-dogs.vue";

Vue.use(VueRouter);

const routes = [{ path: "/rate-doggos", component: RateDogs }];
// const routes = [{ path: "/view-doggos", component: RateDogs }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
