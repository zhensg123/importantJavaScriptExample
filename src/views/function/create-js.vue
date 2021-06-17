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
     function createjs () {
      const script = document.createElement('script')
      script.src = '/test.js'
      script.async = true
      document.body.appendChild(script)
    }
    createjs()`,
      title: '动态添加js'
    }
  },
  mounted () {
    function createjs () {
      const script = document.createElement('script')
      script.src = '/test.js'
      script.async = true
      document.body.appendChild(script)
    }
    createjs()
  }
}
</script>
