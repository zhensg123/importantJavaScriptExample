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
       function curry1 (fn, currArgs) { // 这里的fn就是sum方法
      return function () {
        let args = [].slice.call(arguments)
        // 首次调用时未提供参数currArgs，因此不用进行拼接执行
        if (currArgs !== undefined) {
          args = args.concat(currArgs) // 这里的currArgs是上次递归传递进来的，也就是上次递归的args
        }
        // 递归调用
        if (args.length < fn.length) {
          return curry1(fn, args)
        }
        return fn.apply(null, args) // 这里调用了apply方法，将收集起来的args参数全都传入fn中
      }
    }
     `,
      title: '函数柯里化'
    }
  },
  mounted () {
    function curry1 (fn, currArgs) { // 这里的fn就是sum方法
      return function () {
        let args = [].slice.call(arguments)
        // 首次调用时未提供参数currArgs，因此不用进行拼接执行
        if (currArgs !== undefined) {
          args = args.concat(currArgs) // 这里的currArgs是上次递归传递进来的，也就是上次递归的args
        }
        // 递归调用
        if (args.length < fn.length) {
          return curry1(fn, args)
        }
        return fn.apply(null, args) // 这里调用了apply方法，将收集起来的args参数全都传入fn中
      }
    }
    // 其实上栗中的add方法，就是下面这个函数的柯里化函数，只不过我们并没有使用通用式来转化，而是自己封装
    function add (...args) {
      return args.reduce((a, b) => a + b)
    }

    console.log(add(1,2)(2), '22222222')
    // 函数柯里化
    function curry2 (fn, currArgs) {
      return function () {
        let args = Array.from(arguments)
        if (currArgs !== undefined) {
          args = args.concat(currArgs)
        }
        if (args.length < fn.length) {
          return curry2(fn, args)
        }
        return fn.apply(null, args)
      }
    }
  }
}
</script>
