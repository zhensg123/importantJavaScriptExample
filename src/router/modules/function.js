export default [{
  path: '/function/pure-function',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/pure-function.vue')
},{
  path: '/function/self-map',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/self-map.vue')
},{
  path: '/function/self-new',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/self-new.vue')
},{
  path: '/function/create-js',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/create-js.vue')
},{
  path: '/function/closure',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/closure.vue')
},{
  path: '/function/instanceof',
  name: 'function',
  component: () => import(/* webpackChunkName: "function" */ '@/views/function/instanceof.vue')
}]

// self-new  create-js  closure  instanceof