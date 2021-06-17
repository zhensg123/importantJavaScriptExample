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
      var obj = {}
    Object.defineProperty(obj, 'test', {
      value: '1'
    })
    console.log(obj)
    // 需要注意的是不可扩展的对象的属性通常仍然可以被删除。
    // 尝试给一个不可扩展对象添加新属性的操作将会失败，不过可能是静默失败（默认情况），也可能会抛出 TypeError 异常（严格模式）。
    // 注意：Object.preventExtensions 只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性。
    Object.preventExtensions(obj)`,
      title: '禁止对象数据可扩展'
    }
  },
  mounted () {
    var obj = {}
    Object.defineProperty(obj, 'test', {
      value: '1'
    })
    console.log(obj)
    // 需要注意的是不可扩展的对象的属性通常仍然可以被删除。
    // 尝试给一个不可扩展对象添加新属性的操作将会失败，不过可能是静默失败（默认情况），也可能会抛出 TypeError 异常（严格模式）。
    // 注意：Object.preventExtensions 只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性。
    Object.preventExtensions(obj)
  }
}
</script>
