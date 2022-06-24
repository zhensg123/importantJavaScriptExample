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
}, {
  path: '/component/scope-slot',
  name: 'component',
  title: '作用域插槽',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/scope-slot.vue')
}, {
  path: '/component/hoc',
  name: 'component',
  title: '高阶组件',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/hoc.vue')
}, {
  path: '/component/render1',
  name: 'component',
  title: 'render练习1',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/render1.vue')
}, {
  path: '/component/function-component',
  name: 'component',
  title: '函数式组件应用',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/function-component.vue')
}, {
  path: '/component/virtual-list',
  name: 'component',
  title: '虚拟列表渲染',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/virtual-list.vue')
}, {
  path: '/component/comthis',
  name: 'component',
  title: '组件this',
  icon: '',
  component: () => import(/* webpackChunkName: "component" */ '@/views/components/comthis.vue')
}]
// virtual-list
// carousel table-warp  hoc render1 function-component
