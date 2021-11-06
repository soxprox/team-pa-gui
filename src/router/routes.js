
const routes = [
  {
    path: '/',
    component: () => import('layouts/SplashLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SplashPage.vue') }
    ]
  },
  {
    path: '/app/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
