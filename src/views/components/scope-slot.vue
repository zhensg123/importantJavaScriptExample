<template>
  <div class="box">
    <current-user>
       <el-button>测试阶段</el-button> 
       <template slot-scope="user">{{user}}</template>
    </current-user>
  </div>
</template>

<script>
import currentUser from "./parts/current-user";
export default {
  components: {
    currentUser,
  },
  data() {
    return {
      left: 0
    };
  },
  methods: {
    move() {},
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-left: 400px;
}
</style>
