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
      // js动态添加样式：
    var d = document.createElement('style')
    d.setAttribute('type', 'text/css')
    d.innerHTML = 'p { color: red }'
    document.getElementsByTagName('head')[0].appendChild(d)

    // 动态创建动画animation 可以使用create-keyframe-animation
     `,
      title: '动态创建dom样式'
    }
  },
  mounted () {
    // js动态添加样式：
    var d = document.createElement('style')
    d.setAttribute('type', 'text/css')
    d.innerHTML = 'p { color: red }'
    document.getElementsByTagName('head')[0].appendChild(d)
    
    // 使用import引入js
    import('./add').then((res)=>{
      const {add} = res
      console.log(add(2,111), 'rererer')
    })

    // 动态创建动画animation 可以使用create-keyframe-animation
  }
}
</script>
