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
// 十进制转为二进制

var num = 100;
console.log(num.toString(2));

// 二进制转为十进制

var num = 1100100;
console.log(parseInt(num, 2));`,
      title: '怎么将十进制转为二进制，怎么将二进制转为十进制？'
    }
  }
}
</script>
