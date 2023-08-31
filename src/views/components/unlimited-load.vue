<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
    <div class="parent-div">
      <ol class="list-box">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '实现一个无限加载的效果',
      code: ` class NoLimitLoad {
      constructor () {
        this.pagesize = 10
        this.wrapper = document.querySelector('.parent-div')
        this.listBox = this.wrapper.querySelector('.list-box')
      }

      generateFragment () {
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < this.pagesize; i++) {
          const li = document.createElement('li')
          li.innerHTML = 'apple' + i
          fragment.appendChild(li)
        }
        return fragment
      }

      addScrollEvent () {
        this.wrapper.addEventListener('scroll', (e) => {
          const boxHeight = this.wrapper.clientHeight
          const { scrollTop } = e.target
          const listHeight = this.listBox.clientHeight
          if (boxHeight + scrollTop + 10 >= listHeight) {
            this.listBox.appendChild(this.generateFragment())
          }
        })
      }

      init () {
        this.addScrollEvent()
      }
    }

    const load = new NoLimitLoad()
    load.init()`
    }
  },
  methods: {},
  mounted () {
    class NoLimitLoad {
      constructor () {
        this.pagesize = 10
        this.wrapper = document.querySelector('.parent-div')
        this.listBox = this.wrapper.querySelector('.list-box')
      }

      generateFragment () {
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < this.pagesize; i++) {
          const li = document.createElement('li')
          li.innerHTML = 'apple' + i
          fragment.appendChild(li)
        }
        return fragment
      }

      addScrollEvent () {
        this.wrapper.addEventListener('scroll', (e) => {
          const boxHeight = this.wrapper.clientHeight
          const { scrollTop } = e.target
          const listHeight = this.listBox.clientHeight
          if (boxHeight + scrollTop + 10 >= listHeight) {
            this.listBox.appendChild(this.generateFragment())
          }
        })
      }

      init () {
        this.addScrollEvent()
      }
    }

    const load = new NoLimitLoad()
    load.init()
  }
}
</script>
<style lang="scss" scoped>
.parent-div {
  height: 300px;
  width: 200px;
  border: 1px solid red;
  overflow: auto;
  padding: 0;
}

.parent-div ol {
  margin: 0;
}

.parent-div ol li {
  height: 50px;
}
</style>
