
const routes = [
  {
    path: "/",
    meta: {
      requiresAuth: false,
    },
    component: () => import("layouts/SplashLayout.vue"),
    children: [{ path: "", component: () => import("pages/SplashPage.vue") }],
  },
  {
    path: "/app/",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "/app/dashboard", component: () => import("pages/DashboardPage.vue") },
    ],
  },
  {
    path: "/user/",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "/user/profile", component: () => import("pages/user/ProfilePage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes
