<template>
  <div class="box">
    <div class="parent" :style="{ left: left + 'px' }">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: 0
    }
  },
  methods: {
    move () {
      setTimeout(() => {
        if (this.left === -200) {
          this.left = 0
        } else {
          this.left = this.left - 100
        }
        this.move()
      }, 1000)
    }
  },
  mounted () {
    this.move()
  }
}
</script>

<style lang='scss' scoped>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-left: 400px;
}
.parent {
  position: absolute;
  display: flex;
  > div {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
  > div:nth-child(1) {
    background: url("../../assets/img/1.jpg") no-repeat center center;
    background-size: contain;
  }
  > div:nth-child(2) {
    background: url("../../assets/img/2.jpg") no-repeat center center;
    background-size: contain;
  }
  > div:nth-child(3) {
    background: url("../../assets/img/3.jpg") no-repeat center center;
    background-size: contain;
  }
}
</style>
