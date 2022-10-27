import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: () => import("@/views/WelcomePage"),
  },
  {
    path: "/DIYPage",
    name: "DIYPage",
    component: () => import("@/views/diy/index"),
  },{
    path: "/StylePage",
    name: "StylePage",
    component: () => import("@/views/diy/StylePage"),
  },
  {
    path: "/ClassicStyle",
    name: "ClassicStyle",
    component: () => import("@/views/diy/ClassicStyle"),
  },
  {
    path: "/TrendyStyle",
    name: "TrendyStyle",
    component: () => import("@/views/diy/TrendyStyle"),
  },
  {
    path: "/databasePreview",
    name: "databasePreview",
    component: () => import("@/views/databasePreview/index"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
