export const strict = false
export const state = () => ({
  step: 1,
  loading: false,
  error: {},
  isErrors: '',
  id: '',
  progress: 0,
  overall: 13,
  form: {
    id_employee: '',
    att_enumber: '',
    email: '',
    date_in: new Date().toISOString().substr(0, 10),
    date_out: '',
    status: '1',
    image: '',
    name: '',
    birth_place: '',
    birth_date: '1990-01-01',
    gender: '',
    religion_id: '',
    description: '',
    first: false,

    current_address: {
      id: '',
      employee_id: '',
      provinsi_id: '',
      kabupaten_id: '',
      kecamatan_id: '',
      kelurahan_id: '',
      address: ''
    },
    identity_address: {
      id: '',
      employee_id: '',
      provinsi_id: '',
      kabupaten_id: '',
      kecamatan_id: '',
      kelurahan_id: '',
      address: ''
    },
    bank: [
      {
        id: '',
        employee_id: '',
        bank_id: '',
        status: '1',
        acc_num: ''
      }
    ],

    phone_num: [
      {
        id: '',
        employee_id: '',
        phone_num: ''
      }
    ],

    marital_status: {
      employee_id: '',
      marital_status_id: '',
      number_of_children: '0'
    }
  }
})

export const mutations = {
  setClearForm(state) {
    state.progress = 0
    state.form = {
      employee_id: '',
      image: '',
      name: '',
      birth_place: '',
      status: '1',
      birth_date: '1990-01-01',
      gender: '',
      religion_id: '',
      date_in: new Date().toISOString().substr(0, 10),
      date_out: '',
      description: '',

      current_address: {
        id: '',
        employee_id: '',
        address: '',
        provinsi_id: '',
        kabupaten_id: '',
        kecamatan_id: '',
        kelurahan_id: ''
      },

      identity_address: {
        id: '',
        employee_id: '',
        address: '',
        provinsi_id: '',
        kabupaten_id: '',
        kecamatan_id: '',
        kelurahan_id: ''
      },
      bank: [
        {
          id: '',
          employee_id: '',
          bank_id: '',
          acc_num: ''
        }
      ],
      phone_num: {
        id: '',
        employee_id: '',
        phone_num: ''
      },

      marital_status: {
        employee_id: '',
        marital_status_id: '',
        number_of_children: ''
      },
      first: false
    }
  },

  setId(state, payload) {
    state.id = payload
  },
  setProgress(state, payload) {
    state.progress = payload
  },
  setStep(state, payload) {
    state.step = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setClearError(state) {
    state.error = {}
  },
  setError(state, payload) {
    state.error = { ...state.error, ...payload }
  },
  setIsErrors(state, payload) {
    state.isErrors = payload
  },
  setForm(state, payload) {
    payload.hasOwnProperty('subfield')
      ? (state.form[payload.field][payload.subfield] = payload.value)
      : (state.form[payload.field] = payload.value)
  }
}

export const actions = {
  async storeData({ dispatch, commit, state, rootState }) {
    commit('setLoading', true)
    commit('setClearError')
    commit('setProgress', 0)

    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/admin/manage', state.form)
        .then(response => {
          commit('setSnackbar', true)
          commit('setText', 200)
          resolve(true)
        })
        .catch(error => {
          if (error.response.status == 422) {
            commit('setError', error.response.data.errors)
            resolve(1)
          } else {
            commit('setSnackbar', true, {
              root: true
            })
            commit('setText', error.response.status, {
              root: true
            })
            resolve(false)
          }
          commit('setIsErrors', true)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  }
}
