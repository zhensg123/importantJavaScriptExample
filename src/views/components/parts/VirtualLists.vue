<template>
  <div ref="list" class="render-list-container" @scroll="scrollEvent($event)">
    <div
      class="render-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="render-list" :style="{ transform: getTransform }">
      <template v-for="item in visibleData">
        <slot :value="item.type"></slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualLists',
  props: {
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // 列表总高度
    listHeight () {
      return this.listData.reduce((acc, curVal) => {
        return acc.height + curVal
      }, 0)
    },
    // 可显示的列表项数
    visibleCount () {
      let accHeight = 0
      let count = 0
      for (let i = 0; i < this.listData.length; i++) {
        accHeight += this.listData[i].height
        count++
        if (accHeight >= this.screenHeight) {
          break
        }
      }
      return count
    },
    // 偏移量对应的style
    getTransform () {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    // 获取真实显示列表数据
    visibleData () {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      )
    }
  },
  mounted () {
    this.screenHeight = this.$el.clientHeight
    this.end = this.start + this.visibleCount
  },
  data () {
    return {
      // 可视区域高度
      screenHeight: 0,
      // 偏移量
      startOffset: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: null
    }
  },
  methods: {
    getStart (scrollTop) {
      var height = 0
      var start = 0
      var i = 0
      while (true) {
        const currentItem = childrenHeight[i]
        if (currentItem) {
          height += currentItem
          if (height >= scrollTop) {
            start = i
            break
          }
        } else {
          break
        }
        i++
      }

      return start
    },
    scrollEvent () {
      // 当前滚动位置
      const scrollTop = this.$refs.list.scrollTop
      // 此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize)
      // 此时的结束索引
      this.end = this.start + this.visibleCount
      // 此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
    }
  }
}
</script>

  <style scoped>
.render-list-container {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 200px;
}

.render-list-phantom {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
}

.render-list {
  text-align: center;
}
</style>
