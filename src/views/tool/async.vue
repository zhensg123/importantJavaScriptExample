<template>
  <div>
    <showCode :title="title" :isExecute="false" :code.sync="code"></showCode>
    <div class="test">测试数据</div>
  </div>
</template>
<script>
import async from "async";
export default {
  data() {
    return {
      title: "async使用",
      code: 'div[class="test"] {color: red;}',
    };
  },
  methods: {
    waterfall() {
      // waterfall Test 1
      // 参数： task数组、task全部完成后的最终函数.
      //   将数组中的task按顺序执行，没有调用callback的话不会执行下一个task
      //   callback 第一个参数是error，第二个以后的参数传递给下一个task
      // 适合职责链模式
      async.waterfall(
        [
          function (callback) {
            console.log("---------- task 1 ----------");
            callback(null, "111", "222");
          },
          function (arg1, arg2, callback) {
            console.log("---------- task 2 ----------");
            console.log("arg1=" + arg1 + " arg2=" + arg2);
            callback(null, "333");
          },
          function (arg3, callback) {
            console.log("---------- task 3 ----------");
            console.log("arg3=" + arg3);
            callback(null, "444");
          },
        ],
        function (err, result) {
          if (err) {
            console.log("something is wrong");
          } else {
            console.log("all the functions have completed");
          }
          console.log("err=" + err);
          console.log("result=" + result);
        }
      );
    },
    series() {
      // series
      // http://caolan.github.io/async/docs.html#series
      // 和watarfall相同，也是按顺序执行数组里的task，没有调用到callback不会执行下一个task
      // 不同的是：所有的task只有一个参数callback。所有往下传递的参数都会被放入最终函数的数组results里
      // 没有callback也就不会有下一个函数以及最终的回调函数执行
      async.series(
        [
          function (callback) {
            console.log("---------- task 1 ----------");
            setTimeout(function () {
              console.log("task 1 done");
              callback(null, "111", "222");
            }, 100);
          },
          function (callback) {
            console.log("---------- task 2 ----------");
            setTimeout(function () {
              console.log("task 2 done");
              callback(null, "333");
            }, 50);
          },
          function (callback) {
            console.log("---------- task 3 ----------");
            setTimeout(function () {
              console.log("task 3 done");
              callback(null, "444");
            }, 10);
          },
        ],
        function (err, results) {
          console.log("---------- all done ----------");
          console.log("err=" + err);
          console.log(results);
        }
      );
    },
    parallel() {
      // parallel
      // http://caolan.github.io/async/docs.html#parallel
      // 和series/waterfall不同，task是并列执行的，callback不是执行下一个task。
      //  和series一样，参数都会被放入最终函数的数组results里
      async.parallel(
        [
          function (callback) {
            console.log("---------- task 1 ----------");
            setTimeout(function () {
              console.log("task 1 done");
              callback(null, "111", "222");
            }, 100);
          },
          function (callback) {
            console.log("---------- task 2 ----------");
            setTimeout(function () {
              console.log("task 2 done");
              callback(null, "333");
            }, 50);
          },
          function (callback) {
            console.log("---------- task 3 ----------");
            setTimeout(function () {
              console.log("task 3 done");
              callback(null, "444");
            }, 10);
          },
        ],
        function (err, results) {
          console.log("---------- all done ----------");
          console.log("err=" + err);
          console.log(results);
        }
      );
    }
  },
  mounted() {
    // waterfall Test 1
    // 参数： task数组、task全部完成后的最终函数.
    //   将数组中的task按顺序执行，没有调用callback的话不会执行下一个task
    //   callback 第一个参数是error，第二个以后的参数传递给下一个task
    // this.waterfall();
    // this.series();
    this.parallel()
    async.parallelLimit([
    function(callback){
        setTimeout(()=>{
             callback(null, '111');
        }, 200)
    },
    function(callback){
         setTimeout(()=>{
             callback(null, '222');
        }, 400)
    }
],
1,
function(err, results){
  console.log(results, 'ree')
});
  },
};
</script>
<style scoped>
div[class="test"] {
  color: red;
}
</style>
