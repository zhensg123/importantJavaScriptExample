export default [{
  path: '/component/drag-component',
  name: 'component',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/drag-component.vue')
}, {
  path: '/component/unlimited-load',
  name: 'component',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/unlimited-load.vue')
}, {
  path: '/component/lazy-load',
  name: 'component',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/lazy-load.vue')
}, {
// lazy-load
  path: '/component/carousel',
  name: 'component',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/carousel.vue')
}]

// carousel
