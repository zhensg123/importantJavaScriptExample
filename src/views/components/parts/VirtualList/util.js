export default {
  debounce (func, wait = 50, immediate = false) {
    let timer = null
    let result
    const debounced = function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      if (immediate) {
        const callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, wait)
        if (callNow) {
          result = func.apply(this, args)
        }
      } else {
        timer = setTimeout(() => {
          func.apply(this, args)
        }, wait)
      }
      return result
    }
    debounced.cancel = function () {
      clearTimeout(timer)
      timer = null
    }
    return debounced
  }
}
