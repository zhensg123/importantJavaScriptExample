export default [{
  path: '/data/transfer',
  name: 'data',
  title: '转换不同进制的数据',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/transfer.vue')
}, {
  path: '/data/judge-data-type',
  name: 'data',
  title: '判断数据类型',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-type.vue')
}, {
  path: '/data/judge-obj-empty',
  name: 'data',
  title: '判断对象是否为空',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-obj-empty.vue')
}, {
  path: '/data/judge-data-nan',
  name: 'data',
  title: '判断数据是否为NaN',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-nan.vue')
}, {
  path: '/data/object-prevent-extension',
  name: 'data',
  title: '对象数据不可以扩展',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/object-prevent-extension.vue')
},{
  path: '/data/create-obj',
  name: 'data',
  title: '创建对象',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/create-obj.vue')
}, {
  path: '/data/judge-data-isfinite',
  name: 'data',
  title: '判断数据是否是有穷',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/judge-data-isfinite.vue')
}, {
  path: '/data/obj-inherit',
  name: 'data',
  title: '对象的继承',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/obj-inherit.vue')
}, {
  path: '/data/to-thousands',
  name: 'data',
  title: '小数转为千分位',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/to-thousands.vue')
}, {
  path: '/data/ergodic-arr-obj',
  name: 'data',
  title: '遍历数组和对象',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/ergodic-arr-obj.vue')
}, {
  path: '/data/bom-center',
  name: 'data',
  title: 'bom的核心',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/bom-center.vue')
},{
  path: '/data/data-to-string',
  name: 'data',
  title: '数据转为字符串',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/data-to-string.vue')
},{
  path: '/data/data-multi',
  name: 'data',
  title: '不同数据相乘',
  icon: '',
  component: () => import(/* webpackChunkName: "data" */ '@/views/data/data-multi.vue')
}]

// create-obj  judge-data-isfinite  obj-inherit  to-thousands  ergodic-arr-obj  data-to-string  data-multi