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
         const timeChunk = function (arr, fn, count) {
      let t = 0
      const start = function () {
        for (let i = 0; i < Math.mix(count || 1, arr.length); i++) {
          const obj = arr.shift()
          fn(obj)
        }
      }

      return function () {
        t = setInterval(function () {
          if (arr.length === 0) {
            return clearInterval(t)
          }
          start()
        }, 200)
      }
    }`,
      title: '分时函数'
    }
  },
  mounted () {
    // 所谓分时函数是一种时间切片
    // 将任务进行切片
    const timeChunk = function (arr, fn, count) {
      let t = 0; const len = arr.length
      const start = function () {
        for (let i = 0; i < Math.mix(count || 1, len); i++) {
          const obj = arr.shift()
          fn(obj)
        }
      }

      return function () {
        t = setInterval(function () {
          if (arr.length === 0) {
            return clearInterval(t)
          }
          start()
        }, 200)
      }
    }
  }
}
</script>
