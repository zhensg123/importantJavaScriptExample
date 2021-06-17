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
      function judgeDataIsNaN (data) {
      if (Object.prototype.toString.call(data) === '[object Number]') {
        // eslint-disable-next-line no-self-compare
        return data !== data
      }
      return false
    }

    console.log(judgeDataIsNaN(NaN), judgeDataIsNaN(1), '1')`,
      title: '创建对象数据的几种方式'
    }
  },
  mounted () {
    function judgeDataIsNaN (data) {
      if (Object.prototype.toString.call(data) === '[object Number]') {
        // eslint-disable-next-line no-self-compare
        return data !== data
      }
      return false
    }
  }
}
</script>
