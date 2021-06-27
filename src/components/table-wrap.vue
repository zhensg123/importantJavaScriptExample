<template>
  <div class="table-wrap">

    <div class="table-wrap__header box-header" v-if="$slots['table-header']">
      <slot name="table-header"></slot>
    </div>

    <div class="table-wrap__header box-header" v-else-if="table.total||table.columnFilter||$slots['header']||$slots['tools']">
      <div class="box-header__left">

        <el-dropdown v-if="table.columnFilter" style="margin-right:5px;" trigger="click" :hide-on-click="false" placement="bottom-start">
          <el-button size="mini">筛选列<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown" style="max-height: 350px;overflow-y: auto;">
            <el-dropdown-item v-for="(column,i) in columns" :key="column.prop">
              <el-checkbox v-model="column.enabled" @change="$set(columns, i, column)" style="width:100%;">{{column.label}}</el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <slot name="header"></slot>
      </div>
      <div class="box-header__right" v-if="table.total&&!table.footerDisabled" >
        <el-pagination  layout="total" :total="pagination.total"></el-pagination>
        <slot name="tools"></slot>
      </div>
    </div>

    <el-table ref="table" v-loading="loading"
              :data="data"
              :height='table.height'
              :border="table.border" :stripe="table.stripe" :size="table.size" :max-height="table.maxHeight"
              :row-key="table.key" :tree-props="tree" :row-class-name="rowClassName"
              :highlight-current-row="table.highlight"
              :header-cell-class-name="headerClassName"
              :default-sort="sort"
              :span-method="spanMethod"
              :show-summary="showSummary||!!summaryMethod"
              :summary-method="summaryMethod"
              :cell-style="cellStyle"
              @header-click="$emit('header-click', $event)"
              @row-click="handleRowClick"
              @sort-change="$emit('sort', $event)"
              @current-change="$emit('current-change', $event)"
              @selection-change="$emit('select', $event)">
      <el-table-column v-if="table.selectable" type="selection" width="40" :selectable="selectEvent" align="center"></el-table-column>
      <el-table-column v-if="table.expand" type="expand">
        <template slot-scope="scope">
          <slot name="expand" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <!-- 自定义每一行数据 -->
      <template v-for="column in columns">
        <table-column v-if="column.enabled" :key="column.prop" :column="column" :tableSlots="$scopedSlots"></table-column>
      </template>
    </el-table>

    <slot name="table-footer"></slot>
    <div class="table-wrap__footer" v-if="!table.footerDisabled">
      <el-pagination :small='psmall' @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="pagination.sizes" :page-size="pagination.size" :current-page="pagination.page" :total="pagination.total" background :layout="table.footerLayout"></el-pagination>
    </div>
  </div>
</template>

<script>
import TableColumn from './table-wrap/table-column'
import { getObjValue } from '@/util/data-transition'

const defaultColumn = {
  enabled: true, sortable: false, editable: false, align: 'left', minWidth: 100
}

export default {
  name: 'table-wrap',
  components: { TableColumn },
  props: {
    loading: { type: Boolean, default: false },
    props: {
      type: Object,
      default () {
        return {}
      }
    },
    psmall: { type: Boolean, default: false },
    tree: {
      type: Object,
      default: () => {
        return { children: 'children', hasChildren: 'hasChildren' }
      }
    },
    sort: { type: Object },
    showSummary: { type: Boolean, default: false },
    summaryMethod: { type: Function },
    cellStyle: { type: Function },
    spanMethod: { type: Function },
    headerClassName: { type: Function },
    rowClassName: [String, Function],
    rowClickExclude: { type: Array },
    pagination: {
      type: Object,
      default: () => {
        return { sizes: [10, 20, 50, 100], size: 10, page: 1, total: 0 }
      }
    },
    columns: { type: Array, required: true },
    outerSelectEvent: { type: Function, default: () => true },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    columns (value) {
      this.initColumns()
    }
  },
  provide () {
    return {
      table: this
    }
  },
  mounted () {
    this.initColumns()
  },
  computed: {
    table () {
      return Object.assign(this.defaultProps, this.props)
    },
    rowClickExcludeList () {
      let list = ['operate']
      if (this.rowClickExclude) list = list.concat(this.rowClickExclude)
      return list
    }
  },
  data () {
    return {
      defaultProps: {
        footerDisabled: false,
        selectable: false,
        footerLayout: 'total,prev,pager,next,sizes,jumper',
        columnFilter: false,
        stripe: true,
        border: true,
        size: 'small',
        key: 'id',
        total: true,
        small: false
      }
    }
  },
  methods: {
    initColumns () {
      // 为每一行添加一个enable
      this.columns.forEach(column => {
        for (const key in defaultColumn) {
          if (!column.hasOwnProperty(key)) column[key] = defaultColumn[key]
        }
      })
    },
    selectEvent (row, index) {
      console.log(this.outerSelectEvent(row, index))
      return this.outerSelectEvent(row, index)
    },
    handleClick (type, row) {
      switch (type) {
        case 'edit':
          const obj = {}
          this.columns.forEach(colume => {
            const { editable, prop } = colume
            if (editable) obj[prop] = getObjValue(row, prop)
          })
          this.$set(row, '__edit', obj)
          this.$set(row, '__editing', false)
          break
        case 'cancel':
          this.$delete(row, '__edit')
          this.$delete(row, '__editing')
          break
        case 'save':
          this.$set(row, '__editing', true)
          this.$emit('save', {
            row,
            edit: row.__edit,
            finish: s => {
              if (s) {
                for (const prop in row.__edit) {
                  this.$set(row, prop, row.__edit[prop])
                }
              }
              this.handleClick('cancel', row)
            }
          })
          break
      }
    },
    setCurrentRow (row) {
      this.$refs.table.setCurrentRow(row)
    },
    clearSelection () {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection (row) {
      this.$refs.table.toggleRowSelection(row)
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded)
    },
    handleRowClick (row, column, event) {
      if (column && !this.rowClickExcludeList.includes(column.property)) this.$emit('row-click', row, column, event)
    },
    handleSizeChange (value) {
      this.pagination.size = value
      this.$emit('change', this.pagination)
    },
    handleCurrentChange (value) {
      this.pagination.page = value
      this.$emit('change', this.pagination)
    }
  }
}
</script>
