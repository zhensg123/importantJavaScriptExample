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
      const num = 22
    if (isFinite(num)) {
      alert(333)
    }`,
      title: '判断数据是否是有穷的？'
    }
  },
  mounted () {
  }
}
</script>
