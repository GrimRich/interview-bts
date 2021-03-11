<template>
  <v-row>
    <v-col :cols="refresh ? '10' : '12'" class="no-p">
      <v-autocomplete
        :label="label"
        :items="selectRegistrasi"
        v-model="value"
        :loading="isLoadingUser"
        :disabled="isLoadingUser || disabled"
        :error="error"
        :error-messages="errorMessages"
        :outlined="outlined"
        :hide-details="hideDetails"
        :clearable="clearable"
        dense
      >
        <template v-slot:item="data">
          <template>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.text"></v-list-item-title>
              <v-list-item-subtitle
                >{{ data.item.id_user }}
                -
                {{ data.item.kode_form }}
                -
                {{ data.item.no_registrasi }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
    </v-col>
    <v-col cols="2" class="no-p" v-if="refresh">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon @click="fetchKaryawan()">
            <v-icon v-if="isLoadingUser">mdi-spin mdi-refresh</v-icon>
            <v-icon v-else>mdi-refresh</v-icon>
          </v-btn>
        </template>
        <span>Refresh</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  props: {
    error: {},
    errorMessages: {},
    label: {},
    value: {},
    disabled: {
      default: false
    },
    first: {
      default: true
    },
    hideDetails: {
      type: Boolean,
      default: false
    },
    refresh: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      env: process.env.API_URL,
      isLoadingUser: false
    }
  },
  mounted() {
    this.first ? this.fetchKaryawan() : ''
  },
  methods: {
    fetchKaryawan() {
      this.isLoadingUser = true

      return new Promise((resolve, reject) => {
        var result = this.$store.dispatch('global/getData', {
          nama: 'master/user/internet',
          id: ''
        })

        result.finally(() => {
          this.isLoadingUser = false
        })
      })
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.$emit('input', newValue)
    }
  },
  computed: {
    ...mapState({
      selectRegistrasi: state => state.global.items.master.user
    })
  }
}
</script>

<style lang="stylus" scoped></style>
