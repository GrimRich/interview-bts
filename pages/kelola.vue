<template>
  <wizard :loading="isLoading"></wizard>
</template>

<script>
import wizard from '~/components/kelola/wizard'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  middleware: 'authenticated',
  async fetch({ store }) {
    await Promise.all([store.commit('setUrl', 'kelola')])

    return
  },
  mounted() {
    this.$store.commit('kelola/setClearForm')
    this.fetch()
  },
  data() {
    return {
      isLoading: false,
      employee: []
    }
  },
  components: {
    wizard
  },
  watch: {},
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions('global', ['getDataId']),
    fetch() {
      this.isLoading = true
      this.$axios
        .get('/api/employee/detail', {
          params: {
            id: this.$auth.user.id
          }
        })

        .then(response => {
          this.employee = response.data.data
          this.editItem()
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    editItem() {
      let self = this
      this.$store.commit('kelola/setStep', 1)
      Object.keys(this.form).forEach(function(key) {
        self.$store.commit('kelola/setForm', {
          field: 'first',
          value: true
        })
      })
      this.$store.commit('kelola/setClearForm')

      Object.keys(this.form).forEach(function(key) {
        if (self.employee[key] != null) {
          self.$store.commit('kelola/setForm', {
            field: key,
            value: self.employee[key]
          })
        }
      })

      this.$store.commit('kelola/setForm', {
        field: 'shift',
        value:
          this.employee['employee_schedule'] == null
            ? {
                employee_id: '',
                shift_id: '',
                status: ''
              }
            : this.employee['employee_schedule']
      })

      this.$store.commit('kelola/setForm', {
        field: 'phone_num',
        value: JSON.parse(JSON.stringify(this.employee['phonenum']))
      })
      this.$store.commit('kelola/setForm', {
        field: 'bank',
        value: JSON.parse(JSON.stringify(this.employee['bank']))
      })
      this.$store.commit('kelola/setForm', {
        field: 'id_employee',
        value: this.employee['id_employee']
      })
      this.$store.commit('kelola/setForm', {
        field: 'id_employee',
        value: this.employee['id_employee']
      })
      this.$store.commit('kelola/setForm', {
        field: 'att_enumber',
        value: this.employee['att_enumber']
      })
      this.$store.commit('kelola/setForm', {
        field: 'id',
        value: this.employee['id']
      })
      this.$store.commit('kelola/setForm', {
        field: 'email',
        value: this.employee['email']
      })
      this.$store.commit('kelola/setForm', {
        field: 'current_address',
        subfield: 'provinsi_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan
              ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                    .provinsi
                  ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                      .provinsi.id
                  : ''
                : ''
              : ''
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'current_address',
        subfield: 'kabupaten_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan
              ? this.employee.identity_address.kelurahan.kecamatan.kabupaten.id
              : ''
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'current_address',
        subfield: 'kecamatan_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan.id
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'current_address',
        subfield: 'kelurahan_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan.id
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'identity_address',
        subfield: 'provinsi_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan
              ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                    .provinsi
                  ? this.employee.identity_address.kelurahan.kecamatan.kabupaten
                      .provinsi.id
                  : ''
                : ''
              : ''
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'identity_address',
        subfield: 'kabupaten_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan
              ? this.employee.identity_address.kelurahan.kecamatan.kabupaten.id
              : ''
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'identity_address',
        subfield: 'kecamatan_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan
            ? this.employee.identity_address.kelurahan.kecamatan.id
            : ''
          : ''
      })
      this.$store.commit('kelola/setForm', {
        field: 'identity_address',
        subfield: 'kelurahan_id',
        value: this.employee.identity_address
          ? this.employee.identity_address.kelurahan.id
          : ''
      })
      Object.keys(this.form).forEach(function(key) {
        self.$store.commit('kelola/setForm', {
          field: 'first',
          value: true
        })
      })
    }
  },
  computed: {
    ...mapState({
      kelola: state => state.global.items.kelola,
      form: state => state.kelola.form
    }),
    konten: {
      get() {
        this.$store.state.uploads.value
      },
      set(value) {
        this.$store.commit('upload/setValue', value)
      }
    }
  }
}
</script>
