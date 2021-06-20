export default [{
  path: '/browser/browser-type',
  name: 'browser',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/browser-type.vue')
},{
  path: '/browser/dom-empty',
  name: 'browser',
  component: () => import(/* webpackChunkName: "browser" */ '@/views/browser/dom-empty.vue')
}]

// create-obj  judge-data-isfinite  obj-inherit  dom-empty
