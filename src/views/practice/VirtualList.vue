<template>
    <div id="app">
      <VirtualList :listData="data" :itemSize="20"/>
    </div>
    </template>

<script>
// 最理想的虚拟列表
// 渲染逻辑
// 滚动逻辑
import VirtualList from './components/VirtualList'
const d = []
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i })
}

export default {
  data () {
    return {
      data: d
    }
  },
  components: {
    VirtualList
  }
}
</script>

    <style>
    html{
      height: 100%;
    }
    body{
      height: 100%;
      margin:0;
    }
    #app{
      height:100%;
    }
    </style>
