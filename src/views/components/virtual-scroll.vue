<template>
  <div id="vs-container" ref="container">
    <div id="vs-content" ref="content" :style="{ transform: contentTransform }">
      <p :key="num" v-for="num in list">{{ num }}</p>
    </div>
    <div id="vs-slider" ref="slider">
      <div id="vs-handle"  :style="{ transform: handleTransform, height: handleStyleHeight }" ref="handle"></div>
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
      return this.handleHeight > HandleMixHeight ? `${this.handleHeight}px` : `${HandleMixHeight}px`
    }
  },
  methods: {
    bindEvent () {
      const contentSpace = this.$content.offsetHeight - this.$container.offsetHeight
      const bindContainerOffset = (event) => {
        event.preventDefault()
        this.contentOffset += event.deltaY
        if (this.contentOffset < 0) {
          this.contentOffset = Math.max(this.contentOffset, -contentSpace)
        } else {
          this.contentOffset = 0
        }
      }
      const updateHandleOffset = () => {
        this.handleOffset = -this.$slider.offsetHeight * this.contentOffset / this.$container.scrollHeight
      }
      this.$container.addEventListener('wheel', bindContainerOffset)
      this.$container.addEventListener('wheel', updateHandleOffset)

      const handleSpace = this.$slider.offsetHeight - this.handleHeight
      this.$handle.onmousedown = (e) => {
        const startY = e.clientY
        const startTop = this.handleOffset
        window.onmousemove = (e) => {
          const deltaX = e.clientY - startY
          this.handleOffset = startTop + deltaX < 0 ? 0 : Math.min(startTop + deltaX, handleSpace)
          this.contentOffset = -this.handleOffset * this.$container.scrollHeight / this.$slider.offsetHeight
        }

        window.onmouseup = function () {
          window.onmousemove = null
          window.onmouseup = null
        }
      }
    },
    saveHtmlElementById () {
      const { container, content, slider, handle } = this.$refs
      this.$container = container // 容器
      this.$content = content // 内容
      this.$slider = slider // 滑道
      this.$handle = handle // 手柄或滑块

      this.initHandleHeight()
      this.bindEvent()
    },
    initHandleHeight () {
      this.handleHeight =
        (this.$slider.offsetHeight * this.$container.clientHeight) /
          this.$container.scrollHeight
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

  #vs-content {

  }
  #vs-slider {
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    width: 10px;
    box-sizing: border-box;
    // border-radius: 10px;
    background-color: #6b6b6b;
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
