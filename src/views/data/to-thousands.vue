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
       // 只是适合没有小数点的
    function toThousands (num) {
      var result = []
      num = (num || 0).toString().split('')
      for (var i = num.length - 1; i >= 0; i--) {
        result.unshift(num[i])
        if (!(i % 3) && i) {
          result.unshift(',')
        }
      }
      return result.join('')
    }

    // 使用正则表达式
    function toThousands1 (num) {
      const numstr = num.toString()
      return numstr.includes('.') ? numstr.replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : numstr.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
    console.log(toThousands1(12344.2), 3333)
       `,
      title: '将数值转为逗号分隔'
    }
  },
  mounted () {
    // 只是适合没有小数点的
    function toThousands (num) {
      var result = []
      num = (num || 0).toString().split('')
      for (var i = num.length - 1; i >= 0; i--) {
        result.unshift(num[i])
        if (!(i % 3) && i) {
          result.unshift(',')
        }
      }
      return result.join('')
    }

    // 使用正则表达式
    function toThousands1 (num) {
      const numstr = num.toString()
      return numstr.includes('.') ? numstr.replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : numstr.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
    console.log(toThousands1(12344.2), 3333)
  }
}
</script>
