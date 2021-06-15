const obj = {}
obj.install = function (Vue) {
  Vue.prototype.$judgeDataType = function (data) {
    return Object.prototype.toString.call(data)
  }
}

export default obj
