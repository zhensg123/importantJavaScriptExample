<template>
  <div>
    <showCode :title="title" :code.sync="code"></showCode>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: `
    function add(a ,b){
   //取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f == 1){
      sum = "1" + sum;
   }
   return sum;
}`,
      title: '实现大数相加'
    }
  },
  mounted () {
    function bigNumAdd (num1, num2) {
    // 首先检查传来的大数是否是字符串类型，如果传Number类型的大数，在传入的时候已经丢失精度了，
    // 就如 如果传入11111111111111111，处理的时候已经是丢失精度的11111111111111112了，则需要传入
    // 字符串类型的数字 '11111111111111111'
      const checkNum = num => typeof num === 'string' && !isNaN(Number(num))
      if (checkNum(num1) && checkNum(num2)) {
        // 将传入的数据进行反转，从前向后依次加和，模拟个，十，百依次向上加和
        const tmp1 = num1.split('').reverse()
        const tmp2 = num2.split('').reverse()
        const result = []
        // 格式化函数，主要针对两个大数长度不一致时，超长的数字的格式化为0
        const format = val => {
          if (typeof val === 'number') return val
          if (!isNaN(Number(val))) return Number(val)
          return 0
        }
        let temp = 0
        // 以较长的数字为基准进行从前往后逐个加和，为避免两个数相加最高位进位后，导
        // 致结果长度大于两个数字中的长度，for循环加和长度为最长数字长度加一
        for (let i = 0; i <= Math.max(tmp1.length, tmp2.length); i++) {
          const addTmp = format(tmp1[i]) + format(tmp2[i]) + temp
          // 当加和的数字大于10的情况下，进行进位操作，将要进位的数字赋值给temp，在下一轮使用
          result[i] = addTmp % 10
          temp = addTmp > 9 ? 1 : 0
        }
        // 计算完成，反转回来
        result.reverse()
        // 将数组for中多加的一位进行处理，如果最高位没有进位则结果第一个数位0，
        // 结果第一个数位1，则发生了进位。 如99+3，最大数字长度位2,结果数长度位3
        // 此时结果的第一位为1，发生了进位，第一位保留，如果是2+94，第一位为0，则不保留第一位
        const resultNum = result[0] > 0
          ? result.join('')
          : result.join('').slice(1)
        console.log('result', resultNum)
      } else {
        return 'big number type error'
      }
    }

    // allSettled是即使错误了也都返回一步的promise
    // 思路是让 Promise.all 入参中的所有 promise 都映射为新的最终状态为 fulfilled 的 promise
    // 也可以通过逐个遍历的方式实现
    function add (a, b) {
      // 取两个数字的最大长度
      const maxLength = Math.max(a.length, b.length)
      // 用0去补齐长度
      a = a.padStart(maxLength, 0)// "0009007199254740991"
      b = b.padStart(maxLength, 0)// "1234567899999999999"
      // 定义加法过程中需要用到的变量
      let t = 0
      let f = 0 // "进位"
      let sum = ''
      for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f
        f = Math.floor(t / 10)
        sum = t % 10 + sum
      }
      if (f === 1) {
        sum = '1' + sum
      }
      return sum
    }
    const a = '4546565611111111'
    const b = '2323234343345455454'
    console.log(add(a, b), 'addd')
  }
}
</script>
