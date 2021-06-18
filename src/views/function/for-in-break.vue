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
     const obj = {
      aa: 1,
      bb: 2,
      cc: 3
    }
    for (const key in obj) {
      if (obj[key] === 2) {
        break
      }
      console.log(key, 222)
    }

    for (const item of [1, 2, 3]) {
      if (item === 2) {
        break
      }
      console.log(item, 'ddd')
    }`,
      title: 'for in或者for of中断'
    }
  },
  mounted () {
    const obj = {
      aa: 1,
      bb: 2,
      cc: 3
    }
    for (const key in obj) {
      if (obj[key] === 2) {
        break
      }
      console.log(key, 222)
    }

    for (const item of [1, 2, 3]) {
      if (item === 2) {
        break
      }
      console.log(item, 'ddd')
    }
  }
}
</script>
