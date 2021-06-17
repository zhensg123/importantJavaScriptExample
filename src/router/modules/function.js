export default [{
  path: '/function/pure-function',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/pure-function.vue')
}, {
  path: '/function/pure-function',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/pure-function.vue')
}, {
  path: '/function/deep-clone',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/deep-clone.vue')
}]

// deep-clone
