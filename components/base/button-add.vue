<template>
  <div>
    <v-row>
      <v-tooltip top v-if="refresh && refresh != 'false'">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" small icon @click="fetch()">
            <v-icon v-if="isLoading">mdi-spin mdi-refresh</v-icon>
            <v-icon v-else>mdi-refresh</v-icon>
          </v-btn>
        </template>
        <span>Refresh Data</span>
      </v-tooltip>
      <v-tooltip top v-if="add && add != 'false'">
        <template v-slot:activator="{ on }">
          <v-btn
            small
            v-on="on"
            icon
            @click="whenAdd == 'false' ? setDialogModel() : pushTo()"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Tambah Data</span>
      </v-tooltip>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    store: {},
    url: {},
    id: {
      type: String,
      default: ''
    },
    isFetch: {
      type: Boolean,
      default: true
    },
    whenAdd: { type: String, default: 'false' },
    add: { type: Boolean, default: true },
    refresh: { type: Boolean, default: true }
  },
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    if (this.isFetch) {
      this.fetch()
    }
  },
  methods: {
    setDialogModel() {
      this.$emit('switch', true)
    },
    pushTo() {
      window.open(this.whenAdd, '_blank')
    },
    fetch() {
      setTimeout(() => {
        this.isLoading = true
        this.$emit('loading', true)
        return new Promise((resolve, reject) => {
          var result = this.$store.dispatch('global/getData', {
            nama: this.url,
            id: this.id
          })

          result.finally(() => {
            this.isLoading = false
          })
        })
        this.$emit('loading', false)
        this.isLoading = false
      }, 200)
    }
  },
  watch: {
    isSuccessShortcut(newValue, oldValue) {
      if (newValue) {
        this.fetch()
      }
    }
  },
  computed: {
    ...mapState({
      isSuccessShortcut: state => state.isSuccessShortcut
    })
  }
}
</script>
