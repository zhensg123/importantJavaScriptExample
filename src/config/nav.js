export default [{
  menu: '数据',
  icon: 'icon-wodegongzuo',
  children: [{
    menu: '数据进制转换',
    path: '/data/transfer',
    children: []
  }, {
    menu: '判断数据类型',
    path: '/data/judge-data-type',
    children: []
  }, {
    menu: '判断对象是否为{}',
    path: '/data/judge-obj-empty',
    children: []
  },{
    menu: '判断数据是否是NaN',
    path: '/data/judge-data-nan',
    children: []
  },{
    menu: '停止对象数据扩展',
    path: '/data/object-prevent-extension',
    children: []
  }]
}, {
  menu: '函数',
  icon: 'icon-marketindex',
  children: [{
    menu: '纯函数',
    path: '/function/pure-function',
    children: []
  },{
    menu: '闭包',
    path: '/function/closure',
    children: []
  },{
    menu: '自定义map',
    path: '/function/self-map',
    children: []
  },{
    menu: '自定义new',
    path: '/function/self-new',
    children: []
  },{
    menu: '自定义instanceof',
    path: '/function/instanceof',
    children: []
  },{
    menu: '动态创建js',
    path: '/function/create-js',
    children: []
  }]
},{
  menu: '组件',
  icon: 'icon-marketindex',
  children: [{
    menu: '无缝轮播',
    path: '/component/carousel',
    children: []
  },{
    menu: '拖拽组件',
    path: '/component/drag-component',
    children: []
  },{
    menu: '懒加载',
    path: '/component/lazy-load',
    children: []
  },{
    menu: '无限加载',
    path: '/component/unlimited-load',
    children: []
  }]
}]
