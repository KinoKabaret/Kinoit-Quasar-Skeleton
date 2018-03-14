
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/Landing') },
      { path: '/About', component: () => import('pages/About') },
      { path: '/Personae', component: () => import('pages/Personae') },
      { path: '/Watch', component: () => import('pages/Watch') },
      { path: '/Downloads', component: () => import('pages/Downloads') },
      { path: '/Contact', component: () => import('pages/Contact') },
      { path: '/Legal', component: () => import('pages/Legal') },
      { path: '/Settings', component: () => import('pages/Settings') },
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
