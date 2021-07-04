
<script>
export default {
  functional: true,
  methods: {
    test () {
      return 23333333
    }
  },
  render (h, {a, b}) {
    console.log(a, b, '2222')
    return h('p', 'No items found.')
  }
}
</script>
