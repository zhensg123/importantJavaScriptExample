<template>
    <div ref="list" class="render-list-container" @scroll="scrollEvent($event)">
      <div
        class="render-list-phantom"
        :style="{ height: listHeight + 'px' }"
      ></div>
      <div class="render-list" :style="{ transform: getTransform }">
        <template v-for="item in visibleData">
          <slot :value="item.data" :index="item.index"></slot>
        </template>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'unknow-height-virtual-list',
  props: {
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    // 缓冲区比例
    bufferScale: {
      type: Number,
      default: 1
    }
  },
  updated () {
    this.$nextTick(function () {
      // if (!this.$refs.items || !this.$refs.items.length) {
      //   return
      // }
      // 获取真实元素大小，修改对应的尺寸缓存
      this.updateItemsSize()
      // 更新列表总高度
      const height = this.positions[this.positions.length - 1].bottom
      this.$refs.phantom.style.height = height + 'px'
      // 更新真实偏移量
      this.setStartOffset()
    })
  },
  computed: {
    _listData () {
      return this.listData.reduce((init, cur, index) => {
        if (index % this.column === 0) {
          init.push({
            // _转换后的索引_第一项在原列表中的索引_本行包含几列
            _key: `_${index / this.column}_${index}_${this.column}`,
            value: [cur]
          })
        } else {
          init[init.length - 1].value.push(cur)
        }
        return init
      }, [])
    },
    visibleCount () {
      return Math.ceil(this.screenHeight / this.estimatedItemSize)
    },
    aboveCount () {
      return Math.min(this.start, this.bufferScale * this.visibleCount)
    },
    belowCount () {
      return Math.min(this.listData.length - this.end, this.bufferScale * this.visibleCount)
    },
    // 列表总高度
    listHeight () {
      return this.listData.reduce((acc, curVal) => {
        return acc + curVal.height
      }, 0)
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
    // this.screenHeight = this.$el.clientHeight
    // this.end = this.start + this.visibleCount

    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
    this.setStartOffset()
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
      end: 0
    }
  },
  methods: {
    // 更新偏移量
    setStartOffset () {
      let startOffset
      if (this.start >= 1) {
        const size = this.positions[this.start].top - (this.positions[this.start - this.aboveCount] ? this.positions[this.start - this.aboveCount].top : 0)
        startOffset = this.positions[this.start - 1].bottom - size
      } else {
        startOffset = 0
      }
      this.startOffset = startOffset
      this.$refs.content.style.transform = `translate3d(0,${startOffset}px,0)`
    },
    // 获取列表项的当前尺寸
    updateItemsSize () {
      const nodes = this.$refs.items
      nodes.forEach((node) => {
        // 获取元素自身的属性
        const rect = node.getBoundingClientRect()
        const height = rect.height
        const index = +node.id.replace(/^_(\d+).*/, '$1')
        const oldHeight = this.positions[index].height
        const dValue = oldHeight - height
        // 存在差值
        if (dValue) {
          this.positions[index].bottom = this.positions[index].bottom - dValue
          this.positions[index].height = height
          this.positions[index].over = true // TODO

          for (let k = index + 1; k < this.positions.length; k++) {
            this.positions[k].top = this.positions[k - 1].bottom
            this.positions[k].bottom = this.positions[k].bottom - dValue
          }
        }
      })
    },
    getStart (scrollTop) {
      let height = 0
      let i = 0
      while (true) {
        const currentItem = this.listData[i].height
        height += currentItem
        if (height >= scrollTop) {
          ++i
          break
        }
        i++
      }

      return i
    },
    // 获取列表起始索引
    getStartIndex (scrollTop = 0) {
      // 二分法查找
      return this.binarySearch(this.positions, scrollTop)
    },
    // 二分法查找 用于查找开始索引
    binarySearch (list, value) {
      let start = 0
      let end = list.length - 1
      let tempIndex = null

      while (start <= end) {
        const midIndex = parseInt((start + end) / 2)
        const midValue = list[midIndex].bottom
        if (midValue === value) {
          return midIndex + 1
        } else if (midValue < value) {
          start = midIndex + 1
        } else if (midValue > value) {
          if (tempIndex === null || tempIndex > midIndex) {
            tempIndex = midIndex
          }
          end = end - 1
        }
      }
      return tempIndex
    },
    // 初始化缓存
    initPositions () {
      this.positions = this._listData.map((d, index) => ({
        index,
        height: this.estimatedItemSize,
        top: index * this.estimatedItemSize,
        bottom: (index + 1) * this.estimatedItemSize
      })
      )
    },
    scrollEvent () {
      // // 当前滚动位置
      // const scrollTop = this.$refs.list.scrollTop
      // // 此时的开始索引
      // this.start = this.getStart(scrollTop)
      // // 此时的结束索引
      // this.end = this.start + this.visibleCount
      // const offsetHeight = scrollTop - (this.visibleData.reduce((acc, curVal) => acc + curVal.height, 0) - this.screenHeight)
      // // 此时的偏移量
      // this.startOffset = offsetHeight < 0 ? 0 : offsetHeight

      // 当前滚动位置
      const scrollTop = this.$refs.list.scrollTop
      // 更新滚动状态
      this.setScrollState(true)
      // 排除不需要计算的情况
      if (scrollTop > this.anchorPoint.bottom || scrollTop < this.anchorPoint.top) {
        // 此时的开始索引
        this.start = this.getStartIndex(scrollTop)
        // 此时的结束索引
        this.end = this.start + this.visibleCount
        // 更新偏移量
        this.setStartOffset()
      }
      // // 触发外部滚动事件
      // this.scrollingEvent(event, {
      //   start: this.start * this.column,
      //   end: Math.min(this.end * this.column, this.listData.length - 1),
      //   startOffset: this.startOffset,
      //   scrollTop
      // }
      // )
      // // 防抖处理滚动结束
      // this.scrollEnd(event, {
      //   start: this.start * this.column,
      //   end: Math.min(this.end * this.column, this.listData.length - 1),
      //   startOffset: this.startOffset,
      //   scrollTop
      // }
      // )
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
