<template>
    <div>使用throw</div>
</template>
<script>
export default {
  data () {
    return {
      testArr: [1, 2, 3, 4]
    }
  },
  methods: {
    mymap () {
      this.testArr.forEach((item) => {
        try {
          if (item === 2) {
            throw new Error('错误了')
          }
        } catch (err) {
          console.log(err, 'eerrr')
        }
        console.log(item, 'item')
      })
    }
  },
  created () {
    this.mymap()
  }
}
</script>
