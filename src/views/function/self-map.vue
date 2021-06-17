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
        // eslint-disable-next-line no-extend-native
    Array.prototype.map = Array.prototype.map || function (fn) {
      var result = []
      for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i))
      }
      return result
    }`,
      title: '自定义一个map'
    }
  },
  mounted () {
    // eslint-disable-next-line no-extend-native
    Array.prototype.map = Array.prototype.map || function (fn) {
      var result = []
      for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i))
      }
      return result
    }
  }
}
</script>
