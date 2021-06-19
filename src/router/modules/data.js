export default [{
  path: '/data/transfer',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/transfer.vue')
}, {
  path: '/data/judge-data-type',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-type.vue')
}, {
  path: '/data/judge-obj-empty',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-obj-empty.vue')
}, {
  path: '/data/judge-data-nan',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-nan.vue')
}, {
  path: '/data/object-prevent-extension',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/object-prevent-extension.vue')
},{
  path: '/data/create-obj',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/create-obj.vue')
}, {
  path: '/data/judge-data-isfinite',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-isfinite.vue')
}]

// create-obj  judge-data-isfinite