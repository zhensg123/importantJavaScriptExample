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
      },
      remove (key, fn) {
        const fns = this.cache[key]
        if (!fns) {
          return false
        }
        if (!fn) {
          fns && (fns.length = 0)
        } else {
          for (let l = fns.length - 1; l >= 0; l--) {
            const _fn = fns[l]
            if (_fn === fn) {
              fns.splice(l, 1)
            }
          }
        }
      }
    }
  }
}
</script>
