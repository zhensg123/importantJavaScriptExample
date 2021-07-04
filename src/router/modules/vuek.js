
export default [{
  path: '/vuek/',
  name: 'vuek',
  title: 'vue路由',
  icon: '',
  redirect: '/vuek/test',
  component: () => import(/* webpackChunkName: "vuek" */ '@/views/vuek/vue-router.vue'),
  children: [{
    path: 'test',
    component: () => import(/* webpackChunkName: "vuek" */ '@/views/vuek/components/test.vue')
  },{
    path: 'test2',
    component: () => import(/* webpackChunkName: "vuek" */ '@/views/vuek/components/test2.vue')
  }]
}]
