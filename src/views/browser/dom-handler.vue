
<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
    <div id="test"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
      // 所谓的CRUD，代表create，read，update，del；也就是创建，读取，更新和删除。dom提供了api用于创建节点常用有
    // create
    var div = document.createElement('div')
    var p = document.createElement('p')
    div.innerHTML = '这是插入内容'
    var text = document.createTextNode('这是文本内容')
    var img = new Image()

    // read

    // 直接选择器
    var dom1 = document.getElementById('dom1')
    var dom1 = document.querySelector('#dom1')
    var matches = document.querySelectorAll('div.note, div.alert')
    var div = document.getElementsByClassName('.div')
    var div = document.getElementsByTagName('div')

    dom1.appendChild(div)
    dom1.insertBefore(div, dom1.querySelector('p'))
    function inertAfter (newElement, targetElement) {
      var parent = targetElement.parentNode
      if (parent.lastChild === targetElement) {
        parent.appendChild(newElement)
      } else {
        parent.inertBefore(newElement, targetElement.nestSibling)
      }
    }
    document.getElementById('id名称').preappend(div)// 直接插入到父元素第一个位置
    document.getElementById('id名称').append(div)// 直接插入到父元素最后位置
    // 还有另一个api
    dom1.insertAdjacentHTML('afterBegin', '<h1> 在文本前容器内插入内容1</h1>')
    dom1.insertAdjacentHTML('beforeEnd', '<h2> 在文本后容器内插入内容2</h2>')
    dom1.insertAdjacentHTML('beforeBegin', '<h4> 在文本前容器外插入内容4</h1>')
    dom1.insertAdjacentHTML('afterEnd', '<h5> 在文本后容器外插入内容5</h2>')
    // 节点关系选择器
    var divC = div.innerHTML// 内部
    var divC = div.outerHTML// 整个节点
    var divS = div.children// 子节点集合
    var divS = div.firstChild// 第一个子节点，如果有空格返回#text
    var divS = div.lastChild// 最后一个子节点，如果有空格返回#text
    var divS = div.nextSibling// 下一个节点，如果有空格返回#text
    var divS = div.prvSibling// 前一个节点，如果有空格返回#text
    var divS = div.parentNode// 父节点
    // 节点集合
    var form = document.forms[0]// 表单集合
    var img = document.images[0]// 图片集合
    var img = document.links[0]// 所有带连接的a节点
    //  update
    parent.replaceChild(div, dom1.querySelector('p'))
    dom1.innerHTML = 'hhh'
    dom1.innerText = '999'
    // del
    parent.removeChild(dom1.querySelector('p'))
    dom1.innerHTML = ''
    dom1.innerText = ''
     `,
      title: '原生js操作dom节点'
    }
  },
  mounted () {
    // 所谓的CRUD，代表create，read，update，del；也就是创建，读取，更新和删除。dom提供了api用于创建节点常用有
    // create
    var div = document.createElement('div')
    var p = document.createElement('p')
    div.innerHTML = '这是插入内容'
    var text = document.createTextNode('这是文本内容')
    var img = new Image()

    // read

    // 直接选择器
    var dom1 = document.getElementById('dom1')
    var dom1 = document.querySelector('#dom1')
    var matches = document.querySelectorAll('div.note, div.alert')
    var div = document.getElementsByClassName('.div')
    var div = document.getElementsByTagName('div')

    dom1.appendChild(div)
    dom1.insertBefore(div, dom1.querySelector('p'))
    function inertAfter (newElement, targetElement) {
      var parent = targetElement.parentNode
      if (parent.lastChild === targetElement) {
        parent.appendChild(newElement)
      } else {
        parent.inertBefore(newElement, targetElement.nestSibling)
      }
    }
    document.getElementById('id名称').preappend(div)// 直接插入到父元素第一个位置
    document.getElementById('id名称').append(div)// 直接插入到父元素最后位置
    // 还有另一个api
    dom1.insertAdjacentHTML('afterBegin', '<h1> 在文本前容器内插入内容1</h1>')
    dom1.insertAdjacentHTML('beforeEnd', '<h2> 在文本后容器内插入内容2</h2>')
    dom1.insertAdjacentHTML('beforeBegin', '<h4> 在文本前容器外插入内容4</h1>')
    dom1.insertAdjacentHTML('afterEnd', '<h5> 在文本后容器外插入内容5</h2>')
    // 节点关系选择器
    var divC = div.innerHTML// 内部
    var divC = div.outerHTML// 整个节点
    var divS = div.children// 子节点集合
    var divS = div.firstChild// 第一个子节点，如果有空格返回#text
    var divS = div.lastChild// 最后一个子节点，如果有空格返回#text
    var divS = div.nextSibling// 下一个节点，如果有空格返回#text
    var divS = div.prvSibling// 前一个节点，如果有空格返回#text
    var divS = div.parentNode// 父节点
    // 节点集合
    var form = document.forms[0]// 表单集合
    var img = document.images[0]// 图片集合
    var img = document.links[0]// 所有带连接的a节点
    //  update
    parent.replaceChild(div, dom1.querySelector('p'))
    dom1.innerHTML = 'hhh'
    dom1.innerText = '999'
    // del
    parent.removeChild(dom1.querySelector('p'))
    dom1.innerHTML = ''
    dom1.innerText = ''
  }
}
</script>
