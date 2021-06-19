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
        window
       `,
      title: 'BOM的核心是什么'
    }
  },
  mounted () {
    'BOM的核心是什么'
  }
}
</script>
