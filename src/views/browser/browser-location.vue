<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
    <div id="test">
        <el-button @click="goto">跳转</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
       location.href = 'http://baidu.com'
     `,
      title: '使用BOM接口实现浏览器访问url变化'
    }
  },
  methods: {
    goto () {
      location.href = 'http://baidu.com'
    }
  },
  mounted () {

  }
}
</script>
