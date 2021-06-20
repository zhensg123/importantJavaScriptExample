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
            // 数字
    const num = 1
    const num1 = num.toString()
    console.log(num1, '数字')
    // 布尔
    const b1 = true
    console.log(b1.toString(), '布尔')
    // 对象
    const o1 = {}
    const o2 = []
    const o3 = function () {

    }
    const o4 = /\d/
    const o5 = new Date()
    const o6 = new Boolean('11')
    console.log(o1.toString(), o2.toString(), String(o3), String(o4), String(o5), o6.toString(), '对象')

    const s1 = Symbol()
    console.log(String(s1))
       `,
      title: '各种数据转为化字符串'
    }
  },
  mounted () {
    // 数字
    const num = 1
    const num1 = num.toString()
    console.log(num1, '数字')
    // 布尔
    const b1 = true
    console.log(b1.toString(), '布尔')
    // 对象
    const o1 = {}
    const o2 = []
    const o3 = function () {

    }
    const o4 = /\d/
    const o5 = new Date()
    const o6 = new Boolean('11')
    console.log(o1.toString(), o2.toString(), String(o3), String(o4), String(o5), o6.toString(), '对象')

    const s1 = Symbol()
    console.log(String(s1))
  }
}
</script>
