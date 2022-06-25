<template>
    <div>
       <concomthis :comthis="seethis"></concomthis>
    </div>
</template>
<script>
import concomthis from './parts/concomthis.vue'
export default {
  components: {
    concomthis
  },
  data () {
    return {
      test: '测试数据'
    }
  },
  methods: {
    seethis () {
    
      console.log(this.test, 'e3')
    }
  }
}
</script>
