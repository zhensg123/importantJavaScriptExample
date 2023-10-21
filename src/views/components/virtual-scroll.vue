<template>
  <div id="vs-container" ref="container">
    <div id="vs-content" :style="{ transform: contentTransform }">
      <p :key="num" v-for="num in list">{{ num }}</p>
    </div>
    <div id="vs-slider" ref="slider">
      <div
        id="vs-handle"
        :style="{ transform: handleTransform, height: handleStyleHeight }"
        ref="handle"
      ></div>
    </div>
  </div>
</template>
<script>
const HandleMixHeight = 20
export default {
  data () {
    return {
      list: 1000,
      contentOffset: 0,
      handleOffset: 0,
      handleHeight: HandleMixHeight
    }
  },
  computed: {
    contentTransform () {
      return `translate3d(0,${this.contentOffset}px,0)`
    },
    handleTransform () {
      return `translate3d(0,${this.handleOffset}px,0)`
    },
    handleStyleHeight () {
      return `${this.handleHeight}px`
    }
  },
  methods: {
    transformOffset (to = 'handle') {
      const { $container, $slider } = this.$element
      const contentSpace = $container.scrollHeight - $container.offsetHeight
      const handleSpace = $slider.offsetHeight - this.handleHeight
      const assistRatio = handleSpace / contentSpace // 小于1
      const _this = this
      const computedOffset = {
        handle () {
          return -_this.contentOffset * assistRatio
        },
        content () {
          return -_this.handleOffset / assistRatio
        }
      }
      return computedOffset[to]()
    },
    bindContainerEvent () {
      const { $container } = this.$element
      const contentSpace = $container.scrollHeight - $container.offsetHeight

      const bindContainerOffset = (event) => {
        event.preventDefault()
        this.contentOffset += event.wheelDelta
        if (this.contentOffset < 0) {
          this.contentOffset = Math.max(this.contentOffset, -contentSpace)
        } else {
          this.contentOffset = 0
        }
      }
      const updateHandleOffset = () => {
        this.handleOffset = this.transformOffset()
      }
      $container.addEventListener('mousewheel', bindContainerOffset)
      $container.addEventListener('mousewheel', updateHandleOffset)
    },
    bindHandleEvent () {
      const { $slider, $handle } = this.$element
      const handleSpace = $slider.offsetHeight - this.handleHeight
      $handle.onmousedown = (e) => {
        const startY = e.clientY
        const startTop = this.handleOffset
        window.onmousemove = (e) => {
          const deltaX = e.clientY - startY
          this.handleOffset =
            startTop + deltaX < 0
              ? 0
              : Math.min(startTop + deltaX, handleSpace)
          this.contentOffset = this.transformOffset('content')
        }

        window.onmouseup = function () {
          window.onmousemove = null
          window.onmouseup = null
        }
      }
    },
    saveHtmlElementById () {
      const { container, slider, handle } = this.$refs
      this.$element = {
        $container: container,
        $slider: slider,
        $handle: handle
      }
      this.initHandleHeight()
      this.bindContainerEvent()
      this.bindHandleEvent()
    },
    initHandleHeight () {
      const { $container, $slider } = this.$element
      this.handleHeight =
        ($slider.offsetHeight * $container.offsetHeight) /
        $container.scrollHeight

      // 最小值为HandleMixHeight
      if (this.handleHeight < HandleMixHeight) {
        this.handleHeight = HandleMixHeight
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.saveHtmlElementById()
    })
  }
}
</script>
<style lang="scss" scoped>
#vs-container {
  margin-top: 200px;
  margin-left: 20px;
  height: 200px;
  border: 1px solid #333;
  overflow: hidden;
  width: 500px;
  position: relative;
  box-sizing: border-box;

  #vs-slider {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 10px;
    box-sizing: border-box;
    // border-radius: 10px;
    background-color: #6b6b6b;
    -webkit-user-select: none; /* Safari/Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Standard */
    #vs-handle {
      background-color: #f1f2f3;
      cursor: pointer;
      border-radius: 10px;
      -webkit-user-select: none; /* Safari/Chrome */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Standard */
    }
  }
}

// .doc-list[data-v-28dfa14f]::-webkit-scrollbar {
//     width: 10px;
// }

// .doc-list[data-v-28dfa14f]::-webkit-scrollbar {
//     width: 10px;
// }

// .doc-list[data-v-28dfa14f]::-webkit-scrollbar-thumb {
//     -webkit-box-shadow: inset 0 0 5px #6b6b6b;
//     background: #6b6b6b;
//     border-radius: 10px;
// }
</style>
