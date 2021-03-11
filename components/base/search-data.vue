<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      hide-details
      light
      placeholder="Cari data ..."
      class="form-search"
    ></v-text-field>
  </div>
</template>

<script>
// import _ from lodash

export default {
  data() {
    return {
      search: this.$attrs.value,
      timeoutQuery: null
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.performSearch, 500)
  },
  watch: {
    search(query) {
      this.debouncedGetAnswer(query)
      // this.performSearch(query)
    }
  },
  methods: {
    performSearch(query) {
      this.$emit('search', query)
    }
    // performSearch: _.debounce(function(query) {
    //   this.$emit('search', query)
    // }, 500)
  }
}
</script>

<style lang="stylus" scoped></style>
