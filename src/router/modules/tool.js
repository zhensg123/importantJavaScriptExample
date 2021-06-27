
export default [{
    path: '/tool/async',
    name: 'tool',
    title: 'async使用',
    icon: '',
    component: () => import(/* webpackChunkName: "css" */ '@/views/tool/async.vue')
  }]