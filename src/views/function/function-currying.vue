<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
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
    function binCurrying1 (fn) {
      return function curried (...args) {
        if (args.length === 0) {
          return fn.apply(this, args)
        } else {
          return function (...args2) {
            return curried.apply(this, [...args, ...args2]) // 参数未满时
          }
        }
      }
    }

    var cost = (function () {
      var money = 0
      return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
          money += arguments[i]
        }
        return money
      }
    })()

    var cost1 = currying(cost)
    cost1(2)
    cost1(2)

    cost1(2)
    alert(cost1())
    // 定义一个普通函数
    function add (a, b, c) {
      return a + b + c
    }

    // 将add函数进行柯里化的操作
    const res = binCurrying(add)
    console.log(res(1)(2)(3)) // 6
    res(2)(3)

    function binCurrying (fn) {
      return function curried (...args) {
        if (args.length >= fn.length) {
          return fn.apply(this, args) // 参数已满时
        } else {
          return function (...args2) {
            return curried.apply(this, [...args, ...args2]) // 参数未满时
          }
        }
      }
    }
    function currying (fn) {
      const args = []
      return function curried (...arg) {
        if (arg.length === 0) {
          return fn.apply(this, args)
        } else {
          [].push.apply(args, arg)
          return curried
        }
      }
    }
  }
}
</script>
