<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
      // 单利模式本身是一个闭包
    function singlePattern (fn) {
      const result = null
      return function () {
        return result || fn.apply(this, arguments)
      }
    }`,
      title: '单例模式'
    }
  },
  mounted () {
    // 单利模式本身是一个闭包
    function singlePattern (fn) {
      const result = null
      return function () {
        return result || fn.apply(this, arguments)
      }
    }
  }
}
</script>
