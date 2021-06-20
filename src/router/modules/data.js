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
}, {
  path: '/data/obj-inherit',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/obj-inherit.vue')
}, {
  path: '/data/to-thousands',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/to-thousands.vue')
}, {
  path: '/data/ergodic-arr-obj',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/ergodic-arr-obj.vue')
}, {
  path: '/data/bom-center',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/bom-center.vue')
},{
  path: '/data/data-to-string',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/data-to-string.vue')
},{
  path: '/data/data-multi',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/data-multi.vue')
}]

// create-obj  judge-data-isfinite  obj-inherit  to-thousands  ergodic-arr-obj  data-to-string  data-multi