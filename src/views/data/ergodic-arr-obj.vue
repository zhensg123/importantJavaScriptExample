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
        // 使用for in 遍历对象
    // 使用for of遍历数组
    // 使用object.keys()遍历对象
    // 使用forEach map filter 等等遍历数组
       `,
      title: '遍历对象或者数组的基本方法'
    }
  },
  mounted () {
    // 使用for in 遍历对象
    // 使用for of遍历数组
    // 使用object.keys()遍历对象
    // 使用forEach map filter 等等遍历数组
  }
}
</script>
