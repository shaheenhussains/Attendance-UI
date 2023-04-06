
const routes = [
  {
    path: '/ddf',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/Scanner.vue')
  },
  // {
  //   path: '/',
  //   component: () => import('pages/login.vue')
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
