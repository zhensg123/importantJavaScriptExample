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
    // 这种深拷贝的写法有bug
    function deepClone (obj) {
      const init = Array.isArray(obj) ? [] : {}
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          // eslint-disable-next-line valid-typeof
          if (obj[key] === null) {
            init[key] = null
          } else if (obj[key] instanceof RegExp) {
            init[key] = obj[key]
          } else {
            init[key] = deepClone(obj[key])
          }
        } else {
          init[key] = obj[key]
        }
      }
      return init
    }`,
      title: '手动写一个深拷贝'
    }
  },
  mounted () {
    // 这种深拷贝的写法有bug的
    function deepClone (obj) {
      const init = Array.isArray(obj) ? [] : {}
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          // eslint-disable-next-line valid-typeof
          if (obj[key] === null) {
            init[key] = null
          } else if (obj[key] instanceof RegExp) {
            init[key] = obj[key]
          } else {
            init[key] = deepClone(obj[key])
          }
        } else {
          init[key] = obj[key]
        }
      }
      return init
    }
    console.log(deepClone({ a: 1, dd: null, reg: /\d/, function: () => {}, b: { a: 1 } }))
  }
}
</script>
