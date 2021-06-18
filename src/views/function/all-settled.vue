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
    // allSettled是即使错误了也都返回一步的promise
    // 思路是让 Promise.all 入参中的所有 promise 都映射为新的最终状态为 fulfilled 的 promise
    // 也可以通过逐个遍历的方式实现
    Promise.allSettled = function (promises) {
      return Promise.all(
        promises.map(p =>
          Promise.resolve(p).then(
            res => {
              return { status: 'fulfilled', value: res }
            },
            error => {
              return { status: 'rejected', reason: error }
            }
          )
        )
      )
    }`,
      title: '实现一个allSettled'
    }
  },
  mounted () {
    // allSettled是即使错误了也都返回一步的promise
    // 思路是让 Promise.all 入参中的所有 promise 都映射为新的最终状态为 fulfilled 的 promise
    // 也可以通过逐个遍历的方式实现
    Promise.allSettled = function (promises) {
      return Promise.all(
        promises.map((p) =>
          Promise.resolve(p).then(
            (res) => {
              return {
                status: 'fulfilled',
                value: res
              }
            },
            (error) => {
              return {
                status: 'rejected',
                reason: error
              }
            }
          )
        )
      )
    }
  }
}
</script>
