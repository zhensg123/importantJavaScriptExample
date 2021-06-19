<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: '暂时没有代码',
      title: '实现一个jsonp'
    }
  },
  mounted () {
    // jsonp是需要后端配合才能使用的 需要返回一个函数
    const jsonp = function (url, data) {
      return new Promise((resolve, reject) => {
        // 初始化url
        const dataString = url.indexOf('?') === -1 ? '?' : ''
        const callbackName = `jsonpCB_${Date.now()}`
        url += `${dataString}callback=${callbackName}`
        if (data) {
          // 有请求参数，依次添加到url
          for (const k in data) {
            url += `&${k}=${data[k]}`
          }
        }
        const jsNode = document.createElement('script')
        jsNode.src = url
        // 触发callback，触发后删除js标签和绑定在window上的callback
        window[callbackName] = (result) => {
          delete window[callbackName]
          document.body.removeChild(jsNode)
          if (result) {
            resolve(result)
          } else {
            reject('没有返回数据')
          }
        }
        // js加载异常的情况
        jsNode.addEventListener(
          'error',
          () => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            reject('JavaScript资源加载失败')
          },
          false
        )
        // 添加js节点到document上时，开始请求
        document.body.appendChild(jsNode)
      })
    }
  }
}
</script>
