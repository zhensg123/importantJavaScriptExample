<template>
  <div>
    <showCode :title="title" :isExecute="false" :code.sync="code"></showCode>
    <!-- <DropdownMenu slot="list">
      <DropdownItem @click.native="theme('iview')">默认</DropdownItem>
      <DropdownItem @click.native="theme('light')">浅色</DropdownItem>
      <DropdownItem @click.native="theme('dark')">深色</DropdownItem>
    </DropdownMenu> -->
    <el-button  @click.native="theme('iview')">默认</el-button>
     <el-button  @click.native="theme('light')">浅色</el-button>
      <el-button  @click.native="theme('dark')">深色</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'css的[atrribute]使用',
      code: 'div[class="test"] {color: red;}'
    }
  },
  methods: {
    theme (type) {
      this.$store.commit('upDate', { themeType: type })
      window.document.documentElement.setAttribute('data-theme', type)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./scss/_handle.scss";
.common-util {
  font-size: 18px;
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");
}
</style>
