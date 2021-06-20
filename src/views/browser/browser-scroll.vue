<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
    <div id="test"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
 console.log(document.documentElement.scrollTop)
`,
      title: '获取滚动条滚动高度？'
    }
  },
  mounted () {
  }
}
</script>
