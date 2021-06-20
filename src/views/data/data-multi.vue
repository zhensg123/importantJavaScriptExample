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
      // 核心是逻辑是数字才能相乘，非数字先转为数字
    // 字符串与数字
    console.log(1 * '22', '数字与字符串')
    // 数字与对象
    console.log(1 * {}, '数字与对象')
    // 数字与布尔
    console.log(1 * false, '数字与布尔')
       `,
      title: '各种数据相乘'
    }
  },
  mounted () {
    // 核心是逻辑是数字才能相乘，非数字先转为数字
    // 字符串与数字
    console.log(1 * '22', '数字与字符串')
    // 数字与对象
    console.log(1 * {}, '数字与对象')
    // 数字与布尔
    console.log(1 * false, '数字与布尔')
  }
}
</script>
