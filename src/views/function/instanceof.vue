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
     function closure () {
      const test = 123456
      return () => {
        return test
      }
    }
    console.log(closure()(), 'ddddddd')`,
      title: '手动实现一个instanceof'
    }
  },
  mounted () {
    function closure () {
      const test = 123456
      return () => {
        return test
      }
    }
    console.log(closure()(), 'ddddddd')
  }
}
</script>
