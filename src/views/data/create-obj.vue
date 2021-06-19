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
       const obj1 = new Object()
    const obj2 = {}

    const obj3 = Object.create(null)
    function CreateObjType (name) {
      this.name = name
    }
    const obj4 = new CreateObjType('nan')
    console.log(obj1, obj2, obj3, obj4, 'ddd')
       `,
      title: '创建对象数据的几种方式'
    }
  },
  mounted () {
    const obj1 = new Object()
    const obj2 = {}

    const obj3 = Object.create(null)
    function CreateObjType (name) {
      this.name = name
    }
    const obj4 = new CreateObjType('nan')
    console.log(obj1, obj2, obj3, obj4, 'ddd')
  }
}
</script>
