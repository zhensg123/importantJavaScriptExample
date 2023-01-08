import {
  debounce as _debounce
} from 'lodash'
import {
  lineNumbersBlock
} from './highlight-number'

const DEFAULT_TIME = 3000

export const debounce = {
  bind (el, {
    arg,
    modifiers,
    value
  }, vnode) {
    const isComponent = !!vnode.child
    const duration = Number(Object.keys(modifiers)[0]) || DEFAULT_TIME

    if (isComponent) {
      vnode.child.$on(arg, _debounce(value, duration))
    } else {
      el.addEventListener(arg, _debounce(value, duration))
    }
  }
}

export const highlight = {
  bind (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      console.log(block, 'block')
      console.log(block.innerHTML)
      // if (block.getAttribute("highlighted") == "true") {
      //   return
      // }
      // 防止已经高亮处理过的block再次被处理
      block.setAttribute('highlighted', 'true')
      // 高亮
      // block.innerHTML="<div><div style='padding: 5px 0px 10px 20px'><span style='margin-right: 10px;padding: 5px;border: rgba(16, 125, 237,0.5) solid 1px;color:#107ded;border-radius: 5px'>"+ "<button class='el-button el-button--default el-button--mini' style='border-radius: 5px'>复制</button></div>"+block.innerHTML+"</div>"

      hljs.highlightBlock(block)
      console.log(block.innerHTML.split(/\n/))

      // 添加行号
      lineNumbersBlock2(block, block.innerHTML.split(/\n/))
    })
  }
}

function lineNumbersBlock2 (block, element) {
  const before = '<ol>'
  const after = '</ol>'
  let html = ''
  element.forEach((ele) => {
    if (ele.length > 0) {
      html = html + `<li>${ele}</li>`
    }
  })

  block.innerHTML = `${before}${html}${after}`
}
