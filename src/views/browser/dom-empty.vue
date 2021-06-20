<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
    <div id="test"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
      console.log(document.getElementById('test').childNodes.length, 'ddddddddddd')
     `,
      title: '选中一个dom节点，判断这个dom节点是否为空'
    }
  },
  mounted () {
    // 利用childNodes
    console.log(document.getElementById('test').childNodes.length, 'ddddddddddd')
  }
}
</script>
