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
      DOM 是 Document Object Model（文档对象模型）的缩写
     `,
      title: 'DOM是什么？'
    }
  },
  mounted () {
  }
}
</script>
