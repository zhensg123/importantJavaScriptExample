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
     // 实际考察的是对原型链的理解
    // __proto__是原型链连接，而rightVaule.prototype是这个连接上的节点
    function new_instance_of (leftVaule, rightVaule) {
      const rightProto = rightVaule.prototype // 取右表达式的 prototype 值
      leftVaule = leftVaule.__proto__ // 取左表达式的__proto__值
      while (true) {
        if (leftVaule === null) {
          return false
        }
        if (leftVaule === rightProto) {
          return true
        }
        leftVaule = leftVaule.__proto__
      }
    }`,
      title: '手动实现一个instanceof'
    }
  },
  mounted () {
    // 实际考察的是对原型链的理解
    // __proto__是原型链连接，而rightVaule.prototype是这个连接上的节点
    function new_instance_of (leftVaule, rightVaule) {
      const rightProto = rightVaule.prototype // 取右表达式的 prototype 值
      leftVaule = leftVaule.__proto__ // 取左表达式的__proto__值
      while (true) {
        if (leftVaule === null) {
          return false
        }
        if (leftVaule === rightProto) {
          return true
        }
        leftVaule = leftVaule.__proto__
      }
    }
  }
}
</script>
