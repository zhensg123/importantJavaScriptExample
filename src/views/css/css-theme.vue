<template>
   <div>
        <showCode :title="title" :isExecute='false' :code.sync='code'></showCode>
                <div class="test">测试数据</div>

   </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'css的[atrribute]使用',
      code: 'div[class="test"] {color: red;}'
    }
  }
}
</script>
<style scoped>
div[class="test"] {color: red;}
</style>
