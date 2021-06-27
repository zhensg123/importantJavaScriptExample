<template>
<div>
    <!--表格-->
    <table-wrap
      ref="table"
      class="wrap-view"
      :loading="loading"
      :data="list"
      :columns="columns"
      @change="updateList"
    >
      <el-button
        slot="header"
        size="mini"
        type="primary"
        @click="handleAdd"
        :disabled="false"
        >新增套餐</el-button
      >
    </table-wrap>
</div>
</template>

<script>
export default {
  data () {
    return {
        left: 0,
      query: { name: '' },
      list: [{
        virtualType: '11'
      }],
      loading: false,
      columns: [
        { label: 'ID', prop: 'id', width: 80 },
        { label: '套餐名称', prop: 'packageName' },
        { label: '虚机形式', prop: 'virtualType' },
        { label: '机房信息', prop: 'virtualRoomName' },
        { label: '虚机模板', prop: 'virtualImageName' },
        { label: '主节点数', prop: 'redisNodes' },
        { label: '单节点内存数', prop: 'redisMemory' },
        { label: '从节点数', prop: 'redisCopies' },
        { label: 'redis版本', prop: 'redisVersion' },
        { label: '用途', prop: 'memo' },
        {
          label: '操作',
          prop: 'operate',
          width: '100%',
          config: {
            type: 'buttons',
            value: [
              // { label: '编辑', click: this.handleEdit, disabled: () => this.false },
              {
                label: '删除',
                click: this.handleDelete,
                disabled: () => this.false
              }
            ]
          }
        }
      ]
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
    },
    updateList(){

    },
    handleAdd(){

    }

  },
  mounted () {
    this.move()
    this.loading = true
    setTimeout(()=>{
      this.loading = false
    }, 500)
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
