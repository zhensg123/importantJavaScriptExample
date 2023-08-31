
<template>
  <div>测试</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  render (h) {
    return h('div',
      Array.apply(null, { length: 20 }).map(function () {
        return h('p', 'hi')
      })
    )
  }
}
</script>
