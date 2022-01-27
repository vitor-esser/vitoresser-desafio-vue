import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Transactions from "@/modules/transactions/views/Transactions.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Transactions",
    component: Transactions,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
