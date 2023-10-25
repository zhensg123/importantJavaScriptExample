<template>
  <div ref="parent">
  <div ref="list" :style="{height}" class="infinite-list-container"
    @scroll="scrollEvent($event)"
  >
    <div ref="phantom" class="infinite-list-phantom"></div>

    <div ref="content" class="infinite-list">
      <div ref="items" class="infinite-list-item-container" :id="row._key" :key="row._key" v-for="row in visibleData">
        <template>
          <div class="infinite-item">
            <slot name="default" :item="row.value"></slot>
          </div>
        </template>
      </div>

      <!-- 瀑布流 -->
    </div>
  </div>
  </div>

</template>

<script>
// 参考：http://mint-ui.github.io/docs/#/
// TODO kebab-case
// 删除滚轮事件
import _ from './util'
export default {
  name: 'VirtualList',
  props: {
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    // 列表列数
    column: {
      type: Number,
      default: 1
    },
    // 是否开启下拉刷新
    topLoadMore: {
      type: Boolean,
      default: false
    },
    // 超过阈值的回调
    topMethod: {
      type: Function,
      default: function () {
        return function () {}
      }
    },
    topTextColor: {
      type: String,
      default: '#000000'
    },
    topPullText: {
      type: String,
      default: '上拉刷新'
    },
    topDropText: {
      type: String,
      default: '释放更新'
    },
    topLoadingText: {
      type: String,
      default: '加载中...'
    },
    // 最大滑动距离
    maxDistance: {
      type: Number,
      default: 0
    },
    // 滑动距离与真实距离比值
    distanceScale: {
      type: Number,
      default: 2
    },
    // 滑动距离阈值，超过阈值回调
    topDistance: {
      type: Number,
      default: 70
    },
    onScroll: {
      type: Function
    },
    onScrollEnd: {
      type: Function
    },
    // 预估高度
    estimatedItemSize: {
      type: Number,
      required: true
    },
    // 缓冲区比例
    bufferScale: {
      type: Number,
      default: 1
    },
    // 容器高度 100px or 50vh
    height: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      // 拖拽状态
      // pull 开始拖拽，距离未达到topDistance
      // drop 距离达到 topDistance 释放触发 topMethod
      // loading 已被释放，topMethod 已经执行
      // none 拖拽完成或未触发
      dargState: 'none',
      // 当前下拉距离
      touchDistance: 0,
      // 是否正在滚动
      scrolling: false,
      // 可视区域高度
      screenHeight: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: 0
    }
  },
  computed: {
    _listData () {
      return this.listData.reduce((init, cur, index) => {
        // if (index % this.column === 0) {
        //   init.push({
        //     // _转换后的索引_第一项在原列表中的索引_本行包含几列
        //     _key: `_${index / this.column}_${index}_${this.column}`,
        //     value: cur
        //   })
        // } else {
        //   init[init.length - 1].value.push(cur)
        // }
        init.push({
          // _转换后的索引_第一项在原列表中的索引_本行包含几列
          _key: `_${index}`,
          value: cur
        })
        return init
      }, [])
    },
    anchorPoint () {
      return this.positions.length ? this.positions[this.start] : null
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
    visibleData () {
      const start = this.start - this.aboveCount
      const end = this.end + this.belowCount
      return this._listData.slice(start, end)
    }
  },
  watch: {
    // scrolling(cur,pre){
    //   //滚动结束
    //   if(!cur && pre){

    //   }
    // }
  },
  created () {
    this.initPositions()
    // window.vm = this;
  },
  mounted () {
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
    this.setStartOffset()
  },
  updated () {
    // 列表数据长度不等于缓存长度
    if (this._listData.length !== this.positions.length) {
      this.initPositions()
    }
    this.$nextTick(function () {
      if (!this.$refs.items || !this.$refs.items.length) {
        return
      }
      // 获取真实元素大小，修改对应的尺寸缓存
      this.updateItemsSize()
      // 更新列表总高度
      const height = this.positions[this.positions.length - 1].bottom
      this.$refs.phantom.style.height = height + 'px'
      // 更新真实偏移量
      this.setStartOffset()
    })
  },
  methods: {
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
    // 滚动事件
    scrollEvent (event) {
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
      // 触发外部滚动事件
      this.scrollingEvent(event, {
        start: this.start * this.column,
        end: Math.min(this.end * this.column, this.listData.length - 1),
        startOffset: this.startOffset,
        scrollTop
      }
      )
      // 防抖处理滚动结束
      this.scrollEnd(event, {
        start: this.start * this.column,
        end: Math.min(this.end * this.column, this.listData.length - 1),
        startOffset: this.startOffset,
        scrollTop
      }
      )
    },
    // Start
    touchStartEvent (event) {
      if (!this.topLoadMore) {
        return
      }
      // 记录当前起始Y坐标
      this._startPos = event.touches[0].pageY
      this._prevPos = event.touches[0].pageY
    },
    // Move
    touchMoveEvent (event) {
      if (!this.topLoadMore) {
        return
      }
      // 暂时这样处理 loading 中不可滚动
      if (this.dargState === 'loading') {
        event.preventDefault()
        return
      }
      // 当前Y坐标
      const curPos = event.touches[0].pageY
      // 下拉 且 不在顶部
      if (curPos > this._prevPos && this.$refs.list.scrollTop !== 0) {
        return
      }
      // 下拉 且 在顶部
      if (curPos > this._prevPos && this.$refs.list.scrollTop === 0) {
        // event.preventDefault();
        this.touchDistance = Math.max(this.touchDistance + curPos - this._prevPos, 0)

        const distance = ~~(this.touchDistance / this.distanceScale)

        // 未达到阈值
        if (distance < this.topDistance) {
          this.dargState = 'pull'
          this.$emit('top-status-change', this.dargState, distance)
        }
        // 已达到阈值
        if (distance >= this.topDistance) {
          this.dargState = 'drop'
          this.$emit('top-status-change', this.dargState, distance)
        }
        // 设定偏移距离
        if (distance <= this.maxDistance || !this.maxDistance) {
          const d = this.maxDistance ? Math.min(distance, this.maxDistance) : distance
          setTimeout(() => {
            this.$refs.content.style.transform = `translate3d(0,${d}px,0)`
            this.$refs.top.style.height = `${d}px`
          }, 0)
        }
      }
      // 上划 且 没有拖拽距离
      if (curPos < this._prevPos && !this.touchDistance) {
        return
      }
      // 上划 且 有拖拽距离
      if (curPos < this._prevPos && this.touchDistance) {
        this.touchDistance = Math.max(this.touchDistance + curPos - this._prevPos, 0)
        const distance = ~~(this.touchDistance / this.distanceScale)
        // 未达到阈值
        if (distance < this.topDistance) {
          this.dargState = 'pull'
          this.$emit('top-status-change', this.dargState, distance)
        }
        // 已达到阈值
        if (distance >= this.topDistance) {
          this.dargState = 'drop'
          this.$emit('top-status-change', this.dargState, distance)
        }
        // 设定偏移距离
        if (distance <= this.maxDistance || !this.maxDistance) {
          const d = this.maxDistance ? Math.min(distance, this.maxDistance) : distance
          setTimeout(() => {
            this.$refs.content.style.transform = `translate3d(0,${d}px,0)`
            this.$refs.top.style.height = `${d}px`
          }, 0)
        }
        event.preventDefault()
      }
      this._prevPos = curPos
    },
    // End
    touchEndEvent () {
      if (!this.topLoadMore) {
        return
      }
      if (this.dargState !== 'pull' && this.dargState !== 'drop') {
        return
      }
      if (this.dargState === 'pull') {
        setTimeout(() => {
          this.dargState = 'none'
        }, 300)
        this.touchDistance = 0
      }
      if (this.dargState === 'drop') {
        setTimeout(() => {
          this.dargState = 'loading'
        }, 300)
        // 将距离变更为阈值点 - 20
        this.touchDistance = (this.topDistance - 20) * this.distanceScale
        this.topMethod && this.topMethod()
      }

      this.$emit('top-status-change', this.dargState, ~~(this.touchDistance / this.distanceScale))
      this.$refs.content.style.transition = 'transform 0.3s'
      this.$refs.content.style.transform = `translate3d(0,${~~(this.touchDistance / this.distanceScale)}px,0)`
      this.$refs.top.style.transition = 'height 0.3s'
      this.$refs.top.style.height = `${~~(this.touchDistance / this.distanceScale)}px`
      setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.$refs.top.style.transition = ''
      }, 350)
    },
    onBottomLoaded () {
      this.touchDistance = 0
      this.$emit('top-status-change', this.dargState, ~~(this.touchDistance / this.distanceScale))
      this.$refs.content.style.transition = 'transform 0.2s'
      this.$refs.content.style.transform = `translate3d(0,${~~(this.touchDistance / this.distanceScale)}px,0)`
      this.$refs.top.style.transition = 'height 0.2s'
      this.$refs.top.style.height = '0px'
      this.dargState = 'none'
      setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.$refs.top.style.transition = ''
      }, 250)
    }
  }
}
</script>

<style scoped>

.infinite-top-content{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.infinite-top-content-icon{
  display: flex;
  align-items: center;
  transition:transform 0.2s;

}
.icon-arrow{
  transform:rotate(180deg);
}
.icon-arrow.icon-reverse{
  transform:rotate(360deg);
}

.icon-revolve{
  animation:revolve 1.2s linear infinite;
}

@keyframes revolve
{
  from {transform:rotate(0);}
  to {transform:rotate(360deg);}
}

.infinite-top-content-title{
  font-size: 14px;
}

.infinite-top-container{
  transform:translateZ(0);
  position: relative;
  z-index: 2;
}

.infinite-list-container {
  overflow-x:hidden;
  width: 100%;
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  z-index:1;
  position: absolute;
}

.infinite-list-item-container {
  display: flex;
}

.infinite-item{
  flex:1
}

</style>
