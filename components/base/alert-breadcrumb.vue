<template>
  <div>
    <!-- <v-col cols="12">
    <v-alert
    class="pa-4"
    v-model="alert"
    icon="mdi-bell"
    dense
    border="left"
    dismissible
    elevation="1"
  >
    {{ sub ? sub : path(0) }}
    <strong> {{ title ? title : path(1) }}</strong>
  </v-alert>
  </v-col> -->
  </div>
</template>
<script>
export default {
  props: {
    sub: {},
    title: {}
  },
  data() {
    return {
      alert: true
    }
  },
  methods: {
    path(type) {
      if (type == 0) {
        return _.upperFirst(
          _.join(
            _.compact(_.initial(_.split(this.$route.fullPath, '/'))),
            ' / '
          ) + ' / '
        )
      } else if (type == 1) {
        return _.startCase(
          _.upperFirst(_.last(_.split(this.$route.fullPath, '/')))
        )
      }
    }
  }
}
</script>
