export default [{
  path: '/dpattern/single',
  name: 'dpattern',
  title: '单例设计模式',
  icon: '',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/single.vue')
},{
  path: '/dpattern/observer',
  name: 'dpattern',
  title: '观察者模式',
  icon: '',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/observer.vue')
},{
  path: '/dpattern/publish-subscribe',
  name: 'dpattern',
  title: '发布订阅模式',
  icon: '',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/publish-subscribe.vue')
},{
  path: '/dpattern/object-oriented',
  name: 'dpattern',
  title: '面向对象编程和面向过程编程',
  icon: '',
  component: () => import(/* webpackChunkName: "dpattern" */ '@/views/dpattern/object-oriented.vue')
}]

// carousel  object-oriented
