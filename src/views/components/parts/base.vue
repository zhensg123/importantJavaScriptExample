<template>
  <div>
    <span @click="handleClick">props: {{test}}</span>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'Base',
  props: {
    test: Number
  },
  methods: {
    handleClick () {
      this.$emit('Base-click', {
        msg: '子组件emit'
      })
    }
  }
}
</script>
