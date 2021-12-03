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
        // 这种深拷贝的写法有bug的
    const deep = function (obj) {
      // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
      // 进行深拷贝的不能为空，并且是对象或者是
      if (obj && typeof obj === 'object') {
        const objClone = Array.isArray(obj) ? [] : {}
        for (const key in obj) {
          if (obj[key] && typeof obj[key] === 'object') {
            if (obj[key] === null) {
              objClone[key] = null
            } else if (obj[key] instanceof RegExp) {
              objClone[key] = obj[key]
            } else {
              objClone[key] = deep(obj[key])
            }
          } else {
            objClone[key] = obj[key]
          }
        }
        return objClone
      }
      return obj
    }
    `,
      title: '手动写一个深拷贝'
    }
  },
  mounted () {
    
    // 这种深拷贝的写法有bug的
    const deep = function (obj) {
      // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
      // 进行深拷贝的不能为空，并且是对象或者是
      if (obj && typeof obj === 'object') {
        const objClone = Array.isArray(obj) ? [] : {}
        for (const key in obj) {
          if (obj[key] && typeof obj[key] === 'object') {
            if (obj[key] === null) {
              objClone[key] = null
            } else if (obj[key] instanceof RegExp) {
              objClone[key] = obj[key]
            } else {
              objClone[key] = deep(obj[key])
            }
          } else {
            objClone[key] = obj[key]
          }
        }
        return objClone
      }
      return obj
    }
    console.log(deep({ a: 1, dd: null, reg: /\d/, ff: () => {}, b: { a: 1 } }))
  }
}
</script>
