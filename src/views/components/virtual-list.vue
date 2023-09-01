<template>
<div class="render-show">
  <div>
    <VirtualLists :listData="data">
       <template slot-scope="{value}">
        {{ value }}
          <!-- <div class="render-list-item" :style="{height: height}">{{value}}</div> -->
          <!-- <component :is="value"></component> -->
       </template>
    </VirtualLists>
  </div>
</div>
</template>

<script>
import VirtualList from './parts/VirtualList'
import VirtualLists from './parts/VirtualLists'

import Height20 from './parts/Height20'
import Height30 from './parts/Height30'
import Height50 from './parts/Height50'

const d = []
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i, height: 18 })
}
const dd = []

for (let i = 0; i < 1000; i++) {
  const type = i % 3 === 0 ? i % 2 === 0 ? 'Height30' : 'Height50' : 'Height20'
  dd.push({ id: i, value: i, type: type })
}
export default {
  name: 'App',
  data () {
    return {
      data: dd
    }
  },
  components: {
    VirtualList,
    Height20,
    Height30,
    Height50,
    VirtualLists
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
.render-show {
  display: flex;
  justify-content: center;
}
.render-show > div{
  width:500px;
  margin-top:40px;
}
.render-list-item {
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
}
</style>
