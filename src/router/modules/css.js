
export default [{
  path: '/css/css-attribute',
  name: 'css',
  title: 'css属性使用',
  icon: '',
  component: () => import(/* webpackChunkName: "css" */ '@/views/css/css-attribute.vue')
},{
  path: '/css/css-theme',
  name: 'css',
  title: 'css主题',
  icon: '',
  component: () => import(/* webpackChunkName: "css" */ '@/views/css/css-theme.vue')
}]