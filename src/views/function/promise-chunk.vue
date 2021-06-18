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
         // 所谓分时函数是一种时间切片
    // 将任务进行切片
    class PromiseChunk {
      constructor () {
        this.maxCount = 3
        this.curCount = 0
        this.parr = []
      }

      addPromise (p) {
        this.parr.push(p)
      }

      start () {
        for (let i = 0; i < this.maxCount; i++) {
          this.executePromise(this.parr[i])
        }
      }

      executePromise () {
        if (this.curCount >= this.maxCount || this.parr.length === 0) {
          return false
        }
        this.curCount++
        const p = this.parr.shift()
        p.then((res) => {
          console.log(res, '33333333')
          this.curCount--
          this.executePromise()
        })
      }
    }
        `,
      title: '类似分时函数固定只能有几个promise或者异步请求'
    }
  },
  mounted () {
    // 所谓分时函数是一种时间切片
    // 将任务进行切片
    class PromiseChunk {
      constructor () {
        this.maxCount = 3
        this.curCount = 0
        this.parr = []
      }

      addPromise (p) {
        this.parr.push(p)
      }

      start () {
        for (let i = 0; i < this.maxCount; i++) {
          this.executePromise(this.parr[i])
        }
      }

      executePromise () {
        if (this.curCount >= this.maxCount || this.parr.length === 0) {
          return false
        }
        this.curCount++
        const p = this.parr.shift()
        p.then((res) => {
          console.log(res, '33333333')
          this.curCount--
          this.executePromise()
        })
      }
    }

    const pc = new PromiseChunk()
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    })
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3)
      }, 3000)
    })
    pc.addPromise(p1)
    pc.addPromise(p2)
    pc.addPromise(p3)
    pc.start()
  }
}
</script>
