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
      // 这题主要是对对象数据的理解，尤其当对象数据的属性不可遍历时候有些方法是失效的
    // 1，比如这种定义下
    const obj1 = {}
    function judgeObjIsEmpty1 (obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return false
      }
      return Object.keys(obj).length === 0
    }
    console.log(judgeObjIsEmpty1(obj1), 'dddddd')

    // 2，但是如果是下面这样定义的
    const obj2 = {}
    Object.defineProperty(obj2, 'key', {
      value: '',
      enumerable: false
    })

    // 这个时候你在用上面的方法就会失败
    // 这是因为不可遍历的属性是不能被三个方法遍历的
    // 不能被for in，不能被Object.keys, 不能正常JSON.stringify
    // 3,正确的方案是使用 Object.getOwnPropertyNames()或者Reflect.ownKeys()
    function judgeObjIsEmpty2 (obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return false
      }
      return Object.getOwnPropertyNames(obj).length === 0
    }
    console.log(judgeObjIsEmpty2(obj2), 'dddddd')`,
      title: '判断对象数据是否为{}？'
    }
  },
  mounted () {
    // 这题主要是对对象数据的理解，尤其当对象数据的属性不可遍历时候有些方法是失效的
    // 1，比如这种定义下
    const obj1 = {}
    function judgeObjIsEmpty1 (obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return false
      }
      return Object.keys(obj).length === 0
    }
    console.log(judgeObjIsEmpty1(obj1), 'dddddd')

    // 2，但是如果是下面这样定义的
    const obj2 = {}
    Object.defineProperty(obj2, 'key', {
      value: '',
      enumerable: false
    })

    // 这个时候你在用上面的方法就会失败
    // 这是因为不可遍历的属性是不能被三个方法遍历的
    // 不能被for in，不能被Object.keys, 不能正常JSON.stringify
    // 3,正确的方案是使用 Object.getOwnPropertyNames()或者Reflect.ownKeys()
    function judgeObjIsEmpty2 (obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return false
      }
      return Object.getOwnPropertyNames(obj).length === 0
    }
    console.log(judgeObjIsEmpty2(obj2), 'dddddd')
  }
}
</script>
