export default [{
  path: '/browser/browser-type',
  name: 'browser',
  title: '判断浏览器类型',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/browser-type.vue')
}, {
  path: '/browser/dom-empty',
  name: 'browser',
  title: 'dom是否为空',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/dom-empty.vue')
}, {
  path: '/browser/browser-location',
  name: 'browser',
  title: '浏览器bom接口跳转',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/browser-location.vue')
}, {
  path: '/browser/browser-bom',
  name: 'browser',
  title: '什么是浏览器的bom',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/browser-bom.vue')
}, {
  path: '/browser/browser-scroll',
  name: 'browser',
  title: '获取滚动条滚动高度？',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/browser-scroll.vue')
}, {
  path: '/browser/dom-handler',
  name: 'browser',
  title: '操作dom',
  icon: '',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/dom-handler.vue')
}]

// create-obj  judge-data-isfinite  obj-inherit  dom-empty  browser-location browser-bom  dom-handler
