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
      let data = 11 // 可以修改此值
      function judge(data){
        return Object.prototype.toString.call(data)
      }
      console.log(judge(data))`,
      title: '判断数据类型？'
    }
  },
  mounted () {
    const data = 11
    function judge (data) {
      return Object.prototype.toString.call(data)
    }
    console.log(judge(data))
  }
}
</script>
