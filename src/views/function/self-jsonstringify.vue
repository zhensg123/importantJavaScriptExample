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
  `,
      title: '自定义实现一个self-jsonstringify'
    }
  },
  mounted () {
    function getType (vari) {
      return Object.prototype.toString.call(vari).slice(8, -1)
    }
    function toStringify (obj) {
      let str = ''
      switch (getType(obj)) {
        case 'Object': // 对象类型需要遍历递归
          str += '{'
          Object.keys(obj).forEach((k) => {
            const res = toStringify(obj[k])
            if (res) {
              str += `"${k}":${res},`
            }
          })
          return str.slice(0, -1) + '}'
        case 'Array': // 数组类型需要遍历递归
          str = '['
          obj.forEach((k) => {
            const res = toStringify(k)
            if (res) {
              str += res + ','
            }
          })
          return str.slice(0, -1) + ']'
        case 'Date': // 日期类型需要toJSON转日期字符串
          return `"${obj.toJSON()}"`
        case 'String': // 字符串需要加引号
          return `"${obj}"`
        case 'Number': // 数字类型直接返回
          return `${obj}`
        case 'Boolean': // 布尔类型true和false转字符串
          if (obj === true) {
            return 'true'
          }
          return 'false'
        case 'RegExp': // 以下类型直接转空对象字符串
        case 'Set':
        case 'Map':
        case 'WeakMap':
        case 'WeakSet':
        case 'ArrayBuffer':
        case 'Blob':
        case 'Int32Array':
        case 'Int8Array':
        case 'Int16Array':
          return '{}'
        case 'Null': // null转字符串
          return 'null'
        case 'BigInt': // bigint类型报错
          throw Error('Do not know how to serialize a BigInt')
          return
        case 'Function': // 以下三个及其它类型返回空忽略
        case 'Undefined':
        case 'Symbol':
        default:
      }
    }
  }
}
</script>
