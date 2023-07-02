import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "main",
    path: "/",
    component: () => import("../pages/main/index.vue"),
  },

  {
    name: "addCourses",
    path: "/addCourses",
    component: () => import("../pages/addCourses/index.vue"),
  },
  {
    name: "addCourses-id",
    path: "/addCourses/:id",
    component: () => import("../pages/addCourses/id.vue"),
  },
  {
    name: "education",
    path: "/education",
    component: () => import("../pages/education/index.vue"),
  },
  {
    name: "electronicAccept",
    path: "/electronicAccept",
    component: () => import("../pages/electronicAccept/index.vue"),
  },
  {
    name: "profession",
    path: "/profession",
    component: () => import("../pages/profession/index.vue"),
  },
  {
    name: "news",
    path: "/news",
    component: () => import("../pages/news/index.vue"),
  },
  {
    name: "news-id",
    path: "/news/:id",
    component: () => import("../pages/news/id.vue"),
  },
  {
    name: "ourPride",
    path: "/ourPride",
    component: () => import("../pages/ourPride/index.vue"),
  },
  {
    name: "ourPride",
    path: "/ourPride",
    component: () => import("../pages/ourPride/index.vue"),
  },
  {
    name: "ourPride-id",
    path: "/ourPride/:id",
    component: () => import("../pages/ourPride/id.vue"),
  },
  {
    name: "achievements",
    path: "/achievements",
    component: () => import("../pages/achievements/index.vue"),
  },
  {
    name: "achievements-id",
    path: "/achievements/:id",
    component: () => import("../pages/achievements/id.vue"),
  },
  {
    name: "history",
    path: "/history",
    component: () => import("../pages/history/index.vue"),
  },
  {
    name: "parents",
    path: "/parents",
    component: () => import("../pages/parents/index.vue"),
  },
  {
    name: "parents-id",
    path: "/parents/:id",
    component: () => import("../pages/parents/id.vue"),
  },

  {
    name: "stakeholder",
    path: "/stakeholder",
    component: () => import("../pages/stakeholder/index.vue"),
  },
  {
    name: "director",
    path: "/director",
    component: () => import("../pages/director/index.vue"),
  },
  {
    name: "stakeholder-id",
    path: "/stakeholder/:id",
    component: () => import("../pages/stakeholder/id.vue"),
  },
  {
    name: "team",
    path: "/team",
    component: () => import("../pages/team/index.vue"),
  },
  {
    name: "team-id",
    path: "/team/:id",
    component: () => import("../pages/team/id.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 1 };
  },
});

export default router;
