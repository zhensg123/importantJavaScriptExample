export default [{
  path: '/function/pure-function',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/pure-function.vue')
}, {
  path: '/function/self-map',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/self-map.vue')
}, {
  path: '/function/self-new',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/self-new.vue')
}, {
  path: '/function/create-js',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/create-js.vue')
}, {
  path: '/function/closure',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/closure.vue')
}, {
  path: '/function/instanceof',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/instanceof.vue')
}, {
  path: '/function/time-chunk',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/time-chunk.vue')
}, {
  path: '/function/all-settled',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/all-settled.vue')
}, {
  path: '/function/promise-chunk',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/promise-chunk.vue')
}]

// self-new  create-js  closure  instanceof  promise-chunk
