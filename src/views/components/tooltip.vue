<template>
    <el-tooltip v-if="isOverflow" content="Tooltip text" placement="top">
      <div  class="content">
        Tooltip textTooltip textTooltip text
      </div>
    </el-tooltip>
    <div v-else ref="content" class="content">
        Tooltip textTooltip textTooltip text

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOverflow: false
      };
    },
    mounted() {
        console.log(this.$refs.content.scrollWidth, this.$refs.content.offsetWidth)
      this.isOverflow = this.$refs.content.scrollWidth > this.$refs.content.offsetWidth;
    }
    // 再加一个事件就完美了  加一个resize事件
  };
  </script>
  
  <style scoped>
  .content {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>