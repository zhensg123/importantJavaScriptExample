<template>
  <div class="box">
           <showCode :title="title" :code.sync="code"></showCode>
      <functionCom :test='1212'></functionCom>
  </div>
</template>

<script>
import functionCom from './parts/function-com'
export default {
  components: {
    functionCom
  },
  data () {
    return {
      title: '测试函数值组件',
      code: ''
    }
  },
  methods: {
  },
  mounted () {}
}
</script>

<style lang='scss' scoped>

</style>
