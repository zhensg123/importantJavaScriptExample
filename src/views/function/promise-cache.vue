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
    const userPromisesCache = new Map()
    const request = {
      get () {
        return 1
      }
    }
    const getUserById = function (userId) {
      if (!userPromisesCache.has(userId)) {
        const userPromise = request.get('https://users-service/v1/' + userId)
        userPromisesCache.set(userId, userPromise)
      }
      return userPromisesCache.get(userId)
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
        const userPromise = request.get('https://users-service/v1/' + userId)
        userPromisesCache.set(userId, userPromise)
      }
      return userPromisesCache.get(userId)
    }
  }
}
</script>
