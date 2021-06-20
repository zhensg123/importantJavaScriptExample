export default [{
  path: '/dpattern/single',
  name: 'dpattern',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/single.vue')
},{
  path: '/dpattern/observer',
  name: 'dpattern',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/observer.vue')
},{
  path: '/dpattern/publish-subscribe',
  name: 'dpattern',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/publish-subscribe.vue')
},{
  path: '/dpattern/object-oriented',
  name: 'dpattern',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/object-oriented.vue')
}]

// carousel  object-oriented
