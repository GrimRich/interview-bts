<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="isi"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="isi"
        :label="label"
        readonly
        v-bind="attrs"
        v-on="on"
        clearable
        outlined
        dense
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu2"
      v-model="isi"
      use-seconds
      :range="range"
      format="24hr"
      full-width
      @click:second="$refs.menu.save(isi)"
    ></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    menu: {},
    label: {},
    range: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      time: null,
      menu2: false,
      modal2: false
    }
  },
  computed: {
    isi: {
      get() {
        return this.$attrs.value
      },
      set(model) {
        this.$emit('input', model)
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
