<script>
import { isFunction } from '@/util/types'
import { format, getObjValue } from '@/util/data-transition'
import CellButtons from './table-cell-buttons'
import CellTags from './table-cell-tags'
import CellLink from './table-cell-link'

const components = {
  'cell-buttons': CellButtons,
  'cell-tags': CellTags,
  'cell-link': CellLink
}
// 自定义组件
export default {
  name: 'table-column',
  props: ['column', 'tableSlots'],
  components,
  render (createElement) {
    const props = this.column
    const { slot, format, config, editable } = props
    return createElement('el-table-column', {
      props,
      scopedSlots: {
        default: scope => {
          const { row, $index } = scope
          // 编辑模式
          if (row.__edit && (editable || props.prop === 'operate')) {
            scope.edit = row.__edit
            scope.disabled = row.__editing
            if (props.prop === 'operate') {
              const column = {
                label: '操作',
                prop: 'operate',
                config: {
                  type: 'buttons',
                  value: [
                    { label: '取消', click: 'cancel', disabled: row => row.__editing },
                    { label: '保存', click: 'save', disabled: row => row.__editing }
                  ]
                }
              }
              return createElement(components['cell-buttons'], { props: { key: 'edit', index: $index, row, column } })
            } else {
              return this.tableSlots['edit.' + props.prop](scope)
            }
          }
          // 自定义列  用slot 为true开启
          else if (slot) return this.tableSlots[props.prop](scope)
          // 模板列 一般是最后一列
          else if (config) return createElement(components['cell-' + config.type], { props: { key: 'operate', index: $index, row, column: props } })
          // 格式化
          else if (format) return this.toFormat(row, props.prop, format)
          // 默认列
          else return getObjValue(row, props.prop)
        }
      }
    })
  },
  methods: {
    toFormat (row, prop, func) {
      const value = row[prop]
      if (isFunction(func)) return func(value, row)
      return format(func, value)
    }
  }
}
</script>
