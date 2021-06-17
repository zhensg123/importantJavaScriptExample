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
      title: '写一个对象深拷贝'
    }
  },
  mounted () {
      // 这种深拷贝的写法有bug
      // 不应用于正则表达式、null的继承
    function deepClone (obj) {
      const init = Array.isArray(obj) ? [] : {}
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          init[key] = deepClone(obj[key])
        } else {
          init[key] = obj[key]
        }
      }
      return init
    }
    console.log(deepClone({ a: 1,dd: null, reg: /\d/ ,function:()=>{}, b: { a: 1 } }))
  }
}
</script>
