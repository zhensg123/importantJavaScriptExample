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
      // 发布订阅模式
    const observe = {
      cache: {},
      listen (key, fn) {
        if (!this.cache[key]) {
          this.cache[key] = []
        }
        this.cache[key].push(fn)
      },
      trigger (key) {
        const len = this.cache[key].length
        for (let i = 0; i < len; i++) {
          this.cache[key][i]()
        }
      }
    }
    `,
      title: '发布订阅模式'
    }
  },
  mounted () {
    // 发布订阅模式
    const observe = {
      cache: {},
      listen (key, fn) {
        if (!this.cache[key]) {
          this.cache[key] = []
        }
        this.cache[key].push(fn)
      },
      trigger (key) {
        const len = this.cache[key].length
        for (let i = 0; i < len; i++) {
          this.cache[key][i]()
        }
      }
    }
  }
}
</script>
