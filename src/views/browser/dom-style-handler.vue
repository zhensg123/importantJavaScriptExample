<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
    <div id="test" class="style1" style="height:100px;width:100px;background:red;"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
  // 先选中dom节点
    const dom = document.getElementById('test')

    // 直接通过style读取并且修改，有个限制这种方式只能修改行内样式而不能修改其他
    dom.style.height = 20 + 'px'
    // 使用className 修改
    dom.className = 'style2'
    // 使用cssText修改
    setTimeout(() => {
      dom.style.cssText = 'height:100px;width:100px;background:red;'
    }, 1000)

    // 通过getComeputerStyle 获取样式
    console.log(window.getComputedStyle(dom, null), '结果')
     `,
      title: '选中一个dom节点，判断这个dom节点是否为空'
    }
  },
  mounted () {
    // 先选中dom节点
    const dom = document.getElementById('test')

    // 直接通过style读取并且修改，有个限制这种方式只能修改行内样式而不能修改其他
    dom.style.height = 20 + 'px'
    // 使用className 修改
    dom.className = 'style2'
    // 使用cssText修改
    setTimeout(() => {
      dom.style.cssText = 'height:100px;width:100px;background:red;'
    }, 1000)

    // 通过getComeputerStyle 获取样式
    console.log(window.getComputedStyle(dom, null), '结果')
  }
}
</script>
<style scoped>
.style1 {
    border:2px solid black;
}
.style2 {
    border:5px solid black;
}

</style>
