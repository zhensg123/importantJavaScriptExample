<template>
    <div>
        检测props传递的是函数时，检测函数里的this是什么
    </div>
</template>
<script>
export default {
  props: ['comthis'],
  created () {
    // 在comthis里面的this指的是父组件的
    console.log(this.comthis(), 'comthis')
  }
}
</script>
