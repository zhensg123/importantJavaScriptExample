

<script>
export default {
  data () {
    return {
      items: [1,3,4]
    }
  },
  methods: {

  },
  render (h) {
    return h('ul', this.items.map((item, index) => h('li', item, { key: index })))

    // return h('div',
    //   Array.apply(null, { length: 20 }).map(function () {
    //     return h('p', 'hi')
    //   })
    // )
  }
}
</script>
