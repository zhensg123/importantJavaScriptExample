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
        // 使用while(true)
    function selfSetInterVal1 (fn, time) {
      let start = +new Date()
      return function () {
        while (true) {
          if (+new Date() - start >= time) {
            fn()
            start = +new Date()
          }
        }
      }
    }

    function selfSetInterVal2 (fn, time) {
      function inner () {
        fn()
        setTimeout(inner, time)
      }
      inner()
    }`,
      title: '自定义循环或者setInterVal'
    }
  },
  mounted () {
    // 使用while(true)
    function selfSetInterVal1 (fn, time) {
      let start = +new Date()
      return function () {
        while (true) {
          if (+new Date() - start >= time) {
            fn()
            start = +new Date()
          }
        }
      }
    }

    function selfSetInterVal2 (fn, time) {
      function inner () {
        fn()
        setTimeout(inner, time)
      }
      inner()
    }
  }
}
</script>
