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
      title: '自定义一个new'
    }
  },
  mounted () {
    // eslint-disable-next-line no-extend-native
    // 这个需要好好研究一下
    function myNew (fn, ...rest) {
      const obj = {}
      obj.__proto__ = fn.prototype
      const result = fn.apply(obj, rest)
      return typeof result === 'object' ? result : obj
    }

    function test (name) {
      this.test = '11'
      this.name = name
    }
    console.log(myNew(test, 2222), 3434)
  }
}
</script>
