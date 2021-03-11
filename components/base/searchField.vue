<template></template>

<script>
export default {
  props: {
    select: {},
    row: {},
    field: {},
    get: {}
  },
  methods: {
    name() {
      return this.select.find(f => {
        return f.value == this.row[this.field]
      })
        ? this.select.find(f => {
            return f.value == this.row[this.field]
          })[this.get]
        : ' - '
    }
  },
  watch: {
    select(newValue, oldValue) {
      this.name()
    },
    row(newValue, oldValue) {
      this.name()
    },
    field(newValue, oldValue) {
      this.name()
    },
    get(newValue, oldValue) {
      this.name()
    }
  }
}
</script>

<style lang="stylus" scoped></style>
