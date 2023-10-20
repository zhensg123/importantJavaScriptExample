<template>
    <div ref="wrapper" class="wrapper">
      <ul>
        <li v-for="(item, index) in visibleData" :key="index" :style="{transform: `translateY(${index * itemHeight}px)`}">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>

<script>
import BScroll from '@better-scroll/core'

export default {
  data () {
    return {
      data: Array.from({ length: 10000 }, (v, i) => `item ${i}`), // 假设有10000条数据
      visibleCount: 10, // 可视区域内的数据数量
      itemHeight: 30, // 每条数据的高度
      startIndex: 0, // 可视区域内第一条数据的索引
      scroll: null // better-scroll 实例
    }
  },
  computed: {
    visibleData () {
      // 计算可视区域内的数据
      return this.data.slice(this.startIndex, this.startIndex + this.visibleCount)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3, // 监听滚动事件
      scrollbar: true // 显示滚动条
    })
    this.scroll.on('scroll', (position) => {
      // 计算 startIndex
      this.startIndex = Math.floor(Math.abs(position.y) / this.itemHeight)
    })
    // 设置滚动内容的高度
    this.scroll.scroller.scrollBehaviorY.contentSize = this.data.length * this.itemHeight
  }
}
</script>

  <style scoped>
  .wrapper {
    width: 100%;
    height: 300px; /* 可视区域的高度 */
    overflow: hidden;
  }
  </style>
