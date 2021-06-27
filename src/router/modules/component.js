import  tableWarp from '@/views/components/table-warp.vue'
export default [{
  path: '/component/drag-component',
  name: 'component',
  title: '拖动组件',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/drag-component.vue')
}, {
  path: '/component/unlimited-load',
  name: 'component',
  title: '无限加载',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/unlimited-load.vue')
}, {
  path: '/component/lazy-load',
  name: 'component',
  title: '图片懒加载',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/lazy-load.vue')
}, {
  path: '/component/carousel',
  name: 'component',
  title: '无缝轮播',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/carousel.vue')
}, {
  path: '/component/table-warp',
  name: 'component',
  title: 'table组件',
  icon: '',
  component: tableWarp
}]

// carousel table-warp
