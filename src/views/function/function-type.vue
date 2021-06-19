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
      // 匿名函数
    function anonymous () {
      return function () {

      }
    }

    // 函数表达式
    const test = function () {
      console.log(222)
    }

    // 普通函数
    function usual () {

    }
    // 立即执行函数
    const atonce = (function () {
      return 22
    })()

    // 箭头函数

    const obj = {
      aa: () => {

      }
    }
    `,
      title: 'JavaScript有哪种函数？'
    }
  },
  mounted () {
    // 匿名函数
    function anonymous () {
      return function () {

      }
    }

    // 函数表达式
    const test = function () {
      console.log(222)
    }

    // 普通函数
    function usual () {

    }
    // 立即执行函数
    const atonce = (function () {
      return 22
    })()

    // 箭头函数

    const obj = {
      aa: () => {

      }
    }
  }
}
</script>
