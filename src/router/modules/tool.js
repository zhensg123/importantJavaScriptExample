
export default [{
    path: '/tool/async',
    name: 'tool',
    title: 'async使用',
    icon: '',
    component: () => import(/* webpackChunkName: "css" */ '@/views/tool/async.vue')
  },{
    path: '/tool/flow',
    name: 'tool',
    title: '工作流程',
    icon: '',
    component: () => import(/* webpackChunkName: "css" */ '@/views/tool/flow.vue')
  }]