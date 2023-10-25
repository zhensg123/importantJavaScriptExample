<template>
    <div class="render-show">
      <div>
        <unknow-height-virtual-list  :listData="data">
           <template slot-scope="{item, height}">
            <!-- <span class="unit">{{index}}.{{ item.data }}</span> -->
            <codemirror class="unit" :style="{height:height }" v-model="item.data" :options="cmOptions"></codemirror>
           </template>
        </unknow-height-virtual-list>
      </div>
    </div>
    </template>

<script>
import unknowHeightVirtualList from './parts/unknow-height-virtual-list'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/monokai.css'
function generateRandomNumber () {
  const min = 100
  const max = 1000
  // 生成随机整数
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}
function getRandomLetter () {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomIndex = Math.floor(Math.random() * letters.length)
  const randomLetter = letters.charAt(randomIndex)
  return randomLetter
}
function generateString (length) {
  const minLength = 100
  const maxLength = 1000

  // 确保长度在最小和最大范围内
  if (length < minLength) {
    length = minLength
  } else if (length > maxLength) {
    length = maxLength
  }

  // 生成字符串
  const string = getRandomLetter().repeat(length)

  return string
}
const d = []
for (let i = 0; i < 500; i++) {
  const length = generateRandomNumber()
  d.push({
    data: generateString(length),
    index: i,
    height: 100
  })
}
export default {
  name: 'unknowHeightVirtualList-test',
  data () {
    return {
      data: d,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
        lineWrapping: true // 是否应滚动或换行以显示长行
      }
    }
  },
  components: {
    unknowHeightVirtualList
  },
  methods: {
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
    appendData () {
      const d = []
      for (let i = 0; i < 10; i++) {
        const type = i % 3 === 0 ? i % 2 === 0 ? 'Height30' : 'Height50' : 'Height20'
        d.push({ id: i, value: i, type: type, height: type === 'Height30' ? 30 : type === 'Height20' ? 20 : 50 })
      }
      this.data.concat(d)
    }
  }
}
</script>

    <style>

    .render-show {
      justify-content: center;
      height: 100%;
    }
    .render-show > div{
      width:800px;
      margin-top:120px;
      height: 100%;
      height: 400px;
    }

    .render-list-item {
      color: #555;
      box-sizing: border-box;
      border-bottom: 1px solid #999;
      box-sizing: border-box;

    }
    .unit {
        word-break: break-all;
        padding: 0 20px;
        background-color: #fff;

    }
    .unit + .unit {
        margin-top:20px;
    }
    </style>
