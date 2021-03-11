export const state = () => ({
  items: {
    reference: {
      bank: [],
      jenisPic: [],
      kontak: [],
      legalitas: []
    },
    master: {
      layananIp: [],
      layananInternet: [],
      layananInternetDetail: [],
      layananDetail: [],
      vendor: [],
      user: [],
      userInternet: [],
      salesPerorangan: [],
      salesKorporasi: []
    },
    transaction: {},
    history: {
      kartuPiutang: []
    },
    setup: {
      salesPeroranganKontak: [],
      salesPeroranganLegalitas: [],
      salesKorporasiKontak: [],
      salesKorporasiLegalitas: [],
      salesKorporasiPic: [],
      salesKorporasiPicKontak: [],
      salesKorporasiPicLegalitas: [],
      vendorKontak: [],
      vendorLegalitas: [],
      vendorPic: [],
      vendorPicKontak: [],
      vendorPicLegalitas: [],
      registrasiKontak: [],
      registrasiLegalitas: [],
      registrasiPicKontak: [],
      registrasiPicLegalitas: [],
      registrasiPic: [],
      keteranganTambahan: [],
      minatKontak: [],
      minatLegalitas: [],
      prospekKontak: [],
      prospekLegalitas: [],

      alasan: []
    },

    provinsi: [],
    kabupaten: [],
    kecamatan: [],
    kelurahan: []
  }
})

export const mutations = {
  setItems(state, payload) {
    let type = payload.nama.split('/')

    if (type.length > 1) {
      if (state.items.hasOwnProperty(type[0])) {
        Vue.set(state.items[type[0]], [_.camelCase(type[1])], payload.data)
      } else {
        Vue.set(state.items, [_.camelCase(type[1])], payload.data)
      }
    } else {
      Vue.set(state.items, [_.camelCase(type[0])], payload.data)
    }
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setLoadingId(state, payload) {
    state.loadingId = payload
  }
}

export const actions = {
  getData({ commit, rootState }, payload) {
    commit('setLoading', true)
    if (payload.param) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('/api/' + payload.nama + (!payload.notUsingGet ? '/get' : ''), {
            params: payload.param
          })
          .then(response => {
            commit('setItems', {
              nama: payload.nama,
              data: response.data.data
            })

            resolve(response)
          })
          .catch(error => {
            commit('setSnackbar', true, {
              root: true
            })
            commit('setText', error.response.status, {
              root: true
            })

            resolve(false)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        this.$axios
          .get('/api/' + payload.nama + (!payload.notUsingGet ? '/get' : ''), {
            params: { id: payload.id }
          })
          .then(response => {
            commit('setItems', {
              nama: payload.nama,
              data: response.data.data
            })

            resolve(response)
          })
          .catch(error => {
            commit('setSnackbar', true, {
              root: true
            })
            commit('setText', error.response.status, {
              root: true
            })

            resolve(false)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    }
  },
  getDataId({ commit, rootState }, payload) {
    commit('setLoadingId', true)
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/' + payload.nama + '/get-id', {
          id: payload.id
        })
        .then(response => {
          commit('setItems', {
            nama: payload.nama,
            data: response.data.data
          })

          resolve()
        })
        .catch(error => {
          commit('setSnackbar', true, {
            root: true
          })
          commit('setText', error.response.status, {
            root: true
          })

          resolve()
        })
        .finally(() => {
          commit('setLoadingId', false)
        })
    })
  }
}
