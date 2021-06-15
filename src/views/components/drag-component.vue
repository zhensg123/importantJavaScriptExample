<template>
  <div>
    <showCode :title="title" :code.sync="code" :isExecute='isExecute'></showCode>
    <div class="drag-component">
      <div id="box"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '实现一个拖动组件',
      isExecute: false,
      code: ` 
      // 主要代码
      class DragDropDom {
        constructor (id) {
          this.mouseDownX = 0
          this.mouseDownY = 0
          this.initX = 0
          this.initY = 0
          this.flag = false // 标记是否滑动
          this.obj = document.getElementById(id)
        }

        createMoveBox () {
          this.addEvent()
        }

        addEvent () {
          this.obj.onmousedown = (e) => {
            // 鼠标按下时的鼠标所在的X，Y坐标
            this.mouseDownX = e.pageX
            this.mouseDownY = e.pageY

            // 初始位置的X，Y 坐标
            const { offsetLeft, offsetTop } = this.obj
            this.initX = offsetLeft
            this.initY = offsetTop

            // 表示鼠标已按下
            this.flag = true
          }
          window.onmousemove = (e) => {
            this.resetDefaultEvent(e)
            // 确保鼠标已按下
            if (this.flag) {
              const { pageX, pageY } = e
              const left =
                parseInt(pageX) -
                parseInt(this.mouseDownX) +
                parseInt(this.initX) +
                'px'
              const top =
                parseInt(pageY) -
                parseInt(this.mouseDownY) +
                parseInt(this.initY) +
                'px'
              this.obj.style.cssText = "left:"+left + "top:" + top
            }
          }
          window.onmouseup = (e) => {
            this.resetDefaultEvent(e)
            // 标识已松开鼠标
            this.flag = false
          }
        }

        resetDefaultEvent (e) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
      const inst = new DragDropDom('box')
      inst.createMoveBox()`
    }
  },
  methods: {
    dragCom () {
      class DragDropDom {
        constructor (id) {
          this.mouseDownX = 0
          this.mouseDownY = 0
          this.initX = 0
          this.initY = 0
          this.flag = false // 标记是否滑动
          this.obj = document.getElementById(id)
        }

        createMoveBox () {
          this.addEvent()
        }

        addEvent () {
          this.obj.onmousedown = (e) => {
            // 鼠标按下时的鼠标所在的X，Y坐标
            this.mouseDownX = e.pageX
            this.mouseDownY = e.pageY

            // 初始位置的X，Y 坐标
            const { offsetLeft, offsetTop } = this.obj
            this.initX = offsetLeft
            this.initY = offsetTop

            // 表示鼠标已按下
            this.flag = true
          }
          window.onmousemove = (e) => {
            this.resetDefaultEvent(e)
            // 确保鼠标已按下
            if (this.flag) {
              const { pageX, pageY } = e
              const left =
                parseInt(pageX) -
                parseInt(this.mouseDownX) +
                parseInt(this.initX) +
                'px'
              const top =
                parseInt(pageY) -
                parseInt(this.mouseDownY) +
                parseInt(this.initY) +
                'px'
              this.obj.style.cssText = `left:${left};top:${top}`
            }
          }
          window.onmouseup = (e) => {
            this.resetDefaultEvent(e)
            // 标识已松开鼠标
            this.flag = false
          }
        }

        resetDefaultEvent (e) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
      const inst = new DragDropDom('box')
      inst.createMoveBox()
    }
  },
  mounted () {
    this.dragCom()
  }
}
</script>
<style lang="scss" scoped>
#box {
  height: 100px;
  width: 100px;
  background: red;
  position: absolute;
  z-index: 100;
}
.drag-component {
  position: relative;
  height: 100%;
}
</style>
