
export default [{
    path: '/practice/virtuallist',
    name: 'practice',
    title: '虚拟列表',
    icon: '',
    component: () => import(/* webpackChunkName: "css" */ '@/views/practice/VirtualList.vue')
  }]