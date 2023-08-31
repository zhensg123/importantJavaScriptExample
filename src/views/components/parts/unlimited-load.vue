<template>
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
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    class NoLimitLoad {
      constructor (parentDivClass, listDivClass) {
        this.pagesize = 10
        this.wrapper = document.querySelector(parentDivClass)
        this.listBox = this.wrapper.querySelector(listDivClass)
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

    const load = new NoLimitLoad('.parent-div', '.list-box')
    load.init()
  }
}
</script>
