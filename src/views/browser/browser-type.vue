<template>
  <div>
    <showCode :title="title" :code.sync='code'></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: `
         var u = navigator.userAgent
    var browser = {
      versions: (function () {
        return {
          trident: u.indexOf('Trident') > -1, // IE内核
          presto: u.indexOf('Presto') > -1, // opera内核
          webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, // 是否iPad
          webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
          qq: u.indexOf('QQBrowser') > -1, // 判断是qq浏览
          uc: u.indexOf('UCBrowser') > -1, // 判断uc浏览器
          opera: u.indexOf('Opera') > -1, // 判断是否Opera浏览器
          ff: u.indexOf('Firefox') > -1, // 判断是否Firefox浏览器
          chromes: u.indexOf('Chrome') > -1 && u.indexOf('Safari') > -1, // 判断Chrome浏览器
          safari: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1, // 判断是否Safari浏览器
          isIE: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1 && !browser.versions.opera, // 判断是否IE浏览器
          isEdge: u.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !browser.versions.isIE // 判断是否IE的Edge浏览器
        }
      }())
       `,
      title: '如何检测当前浏览器环境？是什么浏览器？'
    }
  },
  mounted () {
    var u = navigator.userAgent
    var browser = {
      versions: (function () {
        return {
          trident: u.indexOf('Trident') > -1, // IE内核
          presto: u.indexOf('Presto') > -1, // opera内核
          webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, // 是否iPad
          webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
          qq: u.indexOf('QQBrowser') > -1, // 判断是qq浏览
          uc: u.indexOf('UCBrowser') > -1, // 判断uc浏览器
          opera: u.indexOf('Opera') > -1, // 判断是否Opera浏览器
          ff: u.indexOf('Firefox') > -1, // 判断是否Firefox浏览器
          chromes: u.indexOf('Chrome') > -1 && u.indexOf('Safari') > -1, // 判断Chrome浏览器
          safari: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1, // 判断是否Safari浏览器
          isIE: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1 && !browser.versions.opera, // 判断是否IE浏览器
          isEdge: u.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !browser.versions.isIE // 判断是否IE的Edge浏览器
        }
      }())
    }
  }
}
</script>
