<template>
  <div ref="container" class="render-list-container" @scroll="scrollEvent($event)">
    <div class="render-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="render-list">
      <div
        class="render-list-item"
        v-for="(item, index) in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px', top: startOffset + index * itemSize + 'px'}"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    // 每项高度
    itemSize: {
      type: Number,
      default: 200
    }
  },
  computed: {
    // 列表总高度
    listHeight () {
      return this.listData.length * this.itemSize
    },
    // 可显示的列表项数
    visibleCount () {
      return Math.ceil(this.visibleHeight / this.itemSize)
    },
    // 偏移量对应的style
    getTransform () {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    // 获取真实显示列表数据
    visibleData () {
      // console.log(this.end, this.listData.length, this.listData.slice(this.start, Math.min(this.end, this.listData.length)), 'this.listData.slice(this.start, Math.min(this.end, this.listData.length))')
      return this.listData.slice(this.start, Math.min(this.end, this.listData.length))
    }
  },
  mounted () {
    this.visibleHeight = this.$refs.container.clientHeight
    this.end = this.start + this.visibleCount
  },
  data () {
    return {
      // 可视区域高度
      visibleHeight: 0,
      // 偏移量
      startOffset: 0,
      // 起始索引
      start: 0,
      // 结束索引
      end: null
    }
  },
  methods: {
    scrollEvent () {
      // 当前滚动位置
      const scrollTop = this.$refs.container.scrollTop
      // 此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize)
      // 此时的结束索引
      this.end = this.start + this.visibleCount
      // 此时的偏移量
      this.startOffset = scrollTop
    }
  }
}
</script>
<style lang="scss" scoped>
.render-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 300px;
  width: 500px;
  margin-top:200px;
}

.render-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.render-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.render-list-item {
  position: absolute;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}

</style>
