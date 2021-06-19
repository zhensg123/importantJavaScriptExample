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
    // 这个需要好好研究一下
    function myNew (fn, ...rest) {
      const obj = Object.create(fn.prototype)
      const result = fn.apply(obj, rest)
      return (typeof result === 'object' && result !== null) ? result : obj
    }`,
      title: '自定义一个new'
    }
  },
  mounted () {
    // eslint-disable-next-line no-extend-native
    // 这个需要好好研究一下
    function myNew (fn, ...rest) {
      const obj = Object.create(fn.prototype)
      const result = fn.apply(obj, rest)
      return (typeof result === 'object' && result !== null) ? result : obj
    }
  }
}
</script>
