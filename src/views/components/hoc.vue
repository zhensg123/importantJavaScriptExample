<template>
  <div>
    <wrapBase @Base-click="click1" :test="100">
      <p>default slot</p>
    </wrapBase>
  </div>
</template>
<script>
// Parent.vue
import Base from './parts/base.vue'
// 使用hoc替代minxin
import HOC from './parts/console' // 这里可以是template版本也可以是render版本
const wrapBase = HOC(Base)

export default {
  components: {
    wrapBase
  },
  methods: {
    click1 (msg) {
      console.log(msg, 'msg')
    }
  }
  // ...
}
</script>
