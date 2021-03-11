export const state = () => ({
  model: false,
  errors: {},
  isErrors: '',
  loading: false
})

export const mutations = {
  setClearForm(state) {
    state.form = {
      id: '',
      title: '',
      title_en: '',
      url: '',
      target: '_blank',
      ishide: 0,
      reorder: '',
      page_id: '',
      has_child: 1,
      tipe_link: 0
    }
    state.loading = false
  },
  setErrors(state, payload) {
    state.errors = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setForm(state, payload) {
    state.form = payload
  },
  setIsErrors(state, payload) {
    state.isErrors = payload
  },
  setModel(state, payload) {
    state.model = payload
  }
}
export const actions = {
  storeData({ dispatch, commit, state, rootState }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/menu/update-or-create', payload)
        .then(response => {
          commit('setSnackbar', true, { root: true })

          if (payload.isEdit) {
            commit('setText', 'Data berhasil diperbaharui', { root: true })
          } else {
            commit('setText', 200, { root: true })
          }
          commit('setIsErrors', false)
          commit('setErrors', [])
          resolve()
        })
        .catch(error => {
          if (error.response.status == 422) {
            commit('setErrors', error.response.data.errors)
          }
          commit('setIsErrors', true)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  }
}
