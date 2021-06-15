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
    // 主要考察的是纯函数的概念
    // 纯函数是函数式编程的基础
    // 纯函数的输出只依赖输入，且不产生副作用
    function pure (num) {
      let a = 1 // 虽然不影响输出但是有副作用 需要去掉
      return num + 1
    }`,
      title: '写一个纯函数'
    }
  },
  mounted () {
    // 主要考察的是纯函数的概念
    // 纯函数是函数式编程的基础
    // 纯函数的输出只依赖输入，且不产生副作用
    function pure (num) {
      let a = 1 // 虽然不影响输出但是有副作用 需要去掉
      return num + 1
    }
  }
}
</script>
