
<template>
  <div>
    <h1>虚拟滚动</h1>
    <p>数据条数：100,000</p>
    <p>渲染耗时：<span class="js-perf-v"></span></p>
    <div class="container">
      <!-- <div class="border"></div> -->
    </div>
  </div>
</template>

<script >
import VirtualScroll from './class/virtualScroll.js'
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    var $el = document.querySelector('.container')
    var $el2 = document.querySelector('.container2')
    var $list = document.querySelector('.list-wp')
    var $perfV = document.querySelector('.js-perf-v')
    var $perfNC = document.querySelector('.js-perf-nc')

    var list = []
    for (let i = 0; i < 100; i++) {
      list.push(i)
    }

    const tV = Date.now()
    window.vs = new VirtualScroll(
      $el,
      list,
      (item) => {
        const $item = document.createElement('div')
        $item.classList.add('item')
        $item.innerHTML = item.raw

        return $item
      },
      {
        cacheCount: 4
      }
    )
    $perfV.innerHTML = Date.now() - tV + 'ms'

    // console.time("Fragment")
    // render($el, list)
    // console.timeEnd("Fragment")

    // console.time("NoFragment")
    // renderWithoutFragment($el2, list)
    // console.timeEnd("NoFragment")

    function render ($container, list) {
      const fragment = document.createDocumentFragment()

      for (let i = 0; i < list.length; i++) {
        const element = list[i]

        const $item = document.createElement('div')
        $item.classList.add('item')
        $item.innerHTML = element
        fragment.appendChild($item)
      }

      $container.appendChild(fragment)
    }

    function renderWithoutFragment ($container, list) {
      for (let i = 0; i < list.length; i++) {
        const element = list[i]

        const $item = document.createElement('div')
        $item.classList.add('item')
        $item.innerHTML = element
        $container.appendChild($item)
      }
    }
  }
}
</script>
    <style >
.container,
.container2 {
  position: relative;
  height: 200px;
  overflow: scroll;
  border: thin solid #ccc;
}
.item {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border-bottom: thin solid #eee;
  box-sizing: border-box;
}
/* .border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  outline: 2px solid #12464c;
  background-color: #00bcd47a;
  z-index: 1;
} */
.vs__scroll {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  background-color: #333;
  z-index: 2;
}
.vs__scrollbar {
  width: 100%;
  min-height: 20px;
  background-color: azure;
  cursor: pointer;
}
</style>
