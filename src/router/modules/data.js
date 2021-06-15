export default [{
  path: '/data/transfer',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/transfer.vue')
}, {
  path: '/data/judge-data-type',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-type.vue')
},{
  path: '/data/judge-obj-empty',
  name: 'data',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-obj-empty.vue')
}]