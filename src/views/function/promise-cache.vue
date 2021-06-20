<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
        // eslint-disable-next-line no-extend-native
    Array.prototype.map = Array.prototype.map || function (fn) {
      var result = []
      for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i))
      }
      return result
    }`,
      title: '自定义一个map'
    }
  },
  mounted () {
    const userPromisesCache = new Map()
    const request = {
      get () {
        return 1
      }
    }
    const getUserById = function (userId) {
      if (!userPromisesCache.has(userId)) {
        const userPromise = request.get(`https://users-service/v1/${userId}`)
        userPromisesCache.set(userId, userPromise)
      }
      return userPromisesCache.get(userId)
    }
  }
}
</script>
