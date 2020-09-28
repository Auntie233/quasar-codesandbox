
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'userList', component: () => import('pages/user/UserList.vue') },
      { path: 'roleList', component: () => import('pages/role/RoleList.vue') },
      { path: 'contestantList', component: () => import('pages/contestant/ContestantList.vue') },
      { path: 'eventList', component: () => import('pages/event/EventList.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
