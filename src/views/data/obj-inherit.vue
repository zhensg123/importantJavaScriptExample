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
        // 只是继承原型上的属性
    function ObjectTest () {

    }
    ObjectTest.prototype.test = 111

    function SubObjTest () {

    }
    SubObjTest.prototype = new ObjectTest()
        SubObjTest.prototype.constructor = SubObjTest

    const testObj = new SubObjTest()
    console.log(testObj.test, '22222')
       `,
      title: '对象的继承'
    }
  },
  mounted () {
    // 只是继承原型上的属性
    function ObjectTest () {
      this.isex = '男'
    }
    ObjectTest.prototype.test = 111

    function SubObjTest () {

    }
    console.log(SubObjTest.prototype.constructor, 'SubObjTest.prototype.countructor')
    SubObjTest.prototype = new ObjectTest()
        console.log(SubObjTest.prototype.constructor, 'SubObjTest.prototype.countructor')

    SubObjTest.prototype.constructor = SubObjTest
    const testObj = new SubObjTest()
    console.log(testObj.test, '22222', this.isex)

    // 只是继承实例本身的属性
    function Parent (age) {
      this.name = '测试'
      this.age = age
    }
    function Son (age) {
      Parent.call(this, age) // 这个需要用call而不是apply
    }

    const son1 = new Son(123)
    console.log(son1.name, son1.age, '222222')
  }
}
</script>
