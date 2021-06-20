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
}]

// create-obj  judge-data-isfinite  obj-inherit  dom-empty
