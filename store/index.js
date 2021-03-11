export const state = () => ({
  admin: [],
  lists: {
    data: []
  },
  total: 0,
  options: {},
  url: '',
  item: [],
  errors: {},
  snackbar: false,
  text: '',
  id: '',
  sni_id: '',
  src: '',
  type: '',
  slug: '',
  status: '',
  select: '',
  select2: '',
  select3: '',
  isErrors: '',
  isClick: false,
  isClickEdit: false,
  itemEdit: false,
  isClickNew: false,
  isClickCancel: false,
  isSuccess: false,
  isSuccessNew: false,
  isSuccessShortcut: false,
  showDialogDestroy: false,
  showDialogDestroys: false,
  isLoadingStore: false,
  isLoadingDestroy: false,
  isLoadingDestroys: false,
  modelDialogItem: false,
  tableItems: [],
  create: false,
  delete: false,
  parent_id: '',
  date: [],
  customDelete: {
    custom: '',
    params: ''
  },
  footerProps: {
    showFirstLastPage: true,
    firstIcon: 'mdi-arrow-left-circle',
    lastIcon: 'mdi-arrow-right-circle',
    prevIcon: 'mdi-arrow-left-circle-outline',
    nextIcon: 'mdi-arrow-right-circle-outline',
    itemsPerPageOptions: [5, 10, 25, 50, 100]
  },
  child: false
})

export const mutations = {
  setStoreDefault(state) {
    state.isErrors = false
    state.isClick = false
    state.isClickEdit = false
    state.itemEdit = false
    state.isClickNew = false
    state.isClickCancel = false
    state.isSuccess = false
    state.isSuccessNew = false
    state.showDialogDestroy = false
    state.showDialogDestroys = false
    state.isLoadingDestroy = false
    state.isLoadingDestroys = false
    state.tableItems = []
    state.modelDialogItem = false
    state.upload.value = ''
    state.types = ''
    state.date = []
    state.status = ''
    state.select = ''
    state.select2 = ''
    state.errors = {}
  },
  setIsSuccessShortcut(state, payload) {
    state.isSuccessShortcut = payload
  },
  setPermission(state, payload) {
    state.delete = payload.delete
    state.create = payload.create
  },
  setListData(state, payload) {
    state.lists = []
    state.lists = payload
  },
  setOptions(state, payload) {
    state.options = payload
  },
  setStatus(state, payload) {
    state.status = payload
  },
  setParentId(state, payload) {
    state.parent_id = payload
  },
  setAdmin(state, payload) {
    state.admin = payload
  },
  setModelDialogItem(state, payload) {
    state.modelDialogItem = payload
  },
  setSrc(state, payload) {
    state.src = payload
  },
  setType(state, payload) {
    state.types = payload
  },
  setTableItems(state, payload) {
    state.tableItems = payload
  },

  setUrl(state, payload) {
    state.url = payload
  },

  setSlug(state, payload) {
    state.slug = payload
  },

  setTotal(state, payload) {
    state.total = payload
  },

  setErrors(state, payload) {
    state.errors = payload
  },

  setIsErrors(state, payload) {
    state.isErrors = payload
  },

  setSnackbar(state, payload) {
    state.snackbar = payload
  },

  setText(state, payload) {
    state.text = ''

    if (payload == 200) {
      state.text = 'Data berhasil disimpan'
    } else if (payload == 404) {
      state.text = 'Tidak ditemukan'
    } else if (payload == 500) {
      state.text = 'Internal server error'
    } else {
      state.text = payload
    }
  },
  setIsLoadingStore(state, payload) {
    state.isLoadingStore = payload
  },
  setIsClick(state, payload) {
    state.isClick = payload
  },

  setIsClickEdit(state, payload) {
    state.itemEdit = payload.item
    state.isClickEdit = payload.status
  },

  setIsClickNew(state, payload) {
    state.isClickNew = payload
  },
  setSelect(state, payload) {
    state.select = payload
  },
  setDate(state, payload) {
    state.date = payload
  },
  setSelect2(state, payload) {
    state.select2 = payload
  },
  setSelect3(state, payload) {
    state.select3 = payload
  },

  setIsClickCancel(state, payload) {
    state.isClickCancel = payload
  },

  setIsSuccess(state, payload) {
    state.isSuccess = payload
  },

  setIsSuccessNew(state, payload) {
    state.isSuccessNew = payload
  },
  setTypes(state, payload) {
    state.types = payload
  },

  setDialogDestroy(state, payload) {
    if (payload == false) {
      state.id = ''
      state.sni_id = ''
      state.child = false
      state.showDialogDestroy = payload
    } else {
      state.id = payload.id
      state.sni_id = payload.sni_id
      state.child = payload.child === null ? false : payload.child
      state.showDialogDestroy = payload.status
      state.customDelete = {
        custom: payload.custom,
        params: payload.params
      }
    }
  },
  setDialogDestroys(state, payload) {
    if (payload == false) {
      state.item = ''
      ;(state.showDialogDestroys = payload), (state.child = '')
    } else {
      state.item = payload.item
      ;(state.showDialogDestroys = payload.status),
        (state.child = payload.child === null ? false : payload.child)
    }
  },
  setIsLoadingDestroys(state, payload) {
    state.isLoadingDestroys = payload
  },

  setIsLoadingDestroy(state, payload) {
    state.isLoadingDestroy = payload
  }
}

export const actions = {
  callArr({}, payload) {
    try {
      return payload
    } catch (e) {
      return ' - '
    }
  },
  getPermission({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      if (
        state.auth.user.all_permissions.includes('create-' + payload) &&
        state.auth.user.all_permissions.includes('delete-' + payload)
      ) {
        commit('setPermission', {
          delete: true,
          create: true
        })
      } else if (
        !state.auth.user.all_permissions.includes('create-' + payload) &&
        state.auth.user.all_permissions.includes('delete-' + payload)
      ) {
        commit('setPermission', {
          delete: true,
          create: false
        })
      } else if (
        state.auth.user.all_permissions.includes('create-' + payload) &&
        !state.auth.user.all_permissions.includes('delete-' + payload)
      ) {
        commit('setPermission', {
          delete: false,
          create: true
        })
      } else {
        commit('setPermission', {
          delete: false,
          create: false
        })
      }
    })
  },
  getData({ commit, state }, payload) {
    commit('setListData', [])

    return new Promise((resolve, reject) => {
      this.$axios
        .get('/api/' + state.url, {
          params: {
            itemsPerPage: state.options.itemsPerPage,
            sortBy: state.options.sortBy,
            sortDesc: state.options.sortDesc,
            page: state.options.page,
            ...payload
          }
        })
        .then(response => {
          commit('setListData', response.data.data)
          commit('setTotal', response.data.data.total)
          resolve()
        })
        .catch(error => {
          resolve(false)
        })
    })
  },
  storeData({ dispatch, commit, state, rootState }, payload) {
    return new Promise((resolve, reject) => {
      commit('setIsLoadingStore', true)
      var param = {
        ...payload.items
      }
      this.$axios
        .post('/api/' + payload.url + '/store', param)
        .then(response => {
          commit('setSnackbar', true)
          if (payload.duplicate) {
            commit('setText', 'Data Berhasil di Duplikasi')
          } else if (payload.isEdit) {
            commit('setText', 'Data berhasil diperbaharui')
          } else {
            commit('setText', 200)
          }
          commit('setTableItems', [])
          if (!payload.isShortcut) {
            if (state.isClickNew == true) {
              commit('setIsSuccessNew', true)
            } else {
              commit('setIsSuccess', true)
            }

            setTimeout(() => {
              if (state.isClickNew == true) {
                commit('setIsSuccessNew', false)
              } else {
                commit('setIsSuccess', false)
              }
            }, 500)
            if (response.data.slug) {
              commit('setSlug', response.data.slug)
            }
            commit('setIsErrors', false)
            commit('setErrors', [])
            dispatch('getData')
            resolve(response)
          } else {
            commit('setIsSuccessShortcut', true)
            setTimeout(() => {
              commit('setIsSuccessShortcut', false)
            }, 500)
            resolve(true)
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            commit('setErrors', error.response.data.errors, {
              root: true
            })
          } else {
            commit('setSnackbar', true)
            commit('setText', error.response.status)
          }
          commit('setIsErrors', true)
        })
        .finally(() => {
          commit('setIsClickNew', false)
          commit('setIsClick', false)
          commit('setIsLoadingStore', false)
        })
    })
  },
  duplicateData({ dispatch, commit, state, rootState }, payload) {
    return new Promise((resolve, reject) => {
      commit('setIsLoadingStore', true)
      var param = {
        ...payload
      }
      this.$axios
        .post(
          payload.url
            ? '/api/' + payload.url + '/duplicate'
            : '/api/' + state.url + '/duplicate',
          param
        )
        .then(response => {
          commit('setSnackbar', true)
          if (payload.duplicate) {
            commit('setText', 'Data Berhasil di Duplikasi')
          } else if (payload.isEdit) {
            commit('setText', 'Data berhasil diperbaharui')
          } else {
            commit('setText', 200)
          }

          if (state.isClickNew == true) {
            commit('setIsClickNew', false)
          } else {
            commit('setIsSuccess', true)
          }

          setTimeout(() => {
            if (state.isClickNew == true) {
              commit('setIsClickNew', false)
            } else {
              commit('setIsSuccess', false)
            }
          }, 500)
          if (response.data.slug) {
            commit('setSlug', response.data.slug)
          }
          commit('setIsErrors', false)
          commit('setErrors', [])
          dispatch('getData')
          resolve()
        })
        .catch(error => {
          if (error.response.status == 422) {
            commit('setErrors', error.response.data.errors, {
              root: true
            })
          } else {
            commit('setSnackbar', true)
            commit('setText', error.response.status)
          }
          commit('setIsErrors', true)
        })
        .finally(() => {
          if (state.isClickNew == true) {
            commit('setIsClickNew', false)
          } else {
            commit('setIsClick', false)
          }
          commit('setIsLoadingStore', false)
        })
    })
  },
  reorder({ dispatch, commit, state }, item) {
    return new Promise((resolve, reject) => {
      var param = { ...item }
      this.$axios
        .post('/api/' + state.url + '/reorder', param)
        .then(response => {
          commit('setSnackbar', true)
          if (response.status) {
            commit('setText', 'Data berhasil di urutkan!')
          } else {
            commit('setText', response.status)
          }
          resolve()
        })
        .catch(error => {
          commit('setSnackbar', true)
          commit('setText', error.response.status)
          resolve()
        })
    })
  },
  ishide({ dispatch, commit, state }, id) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/' + state.url + '/ishide', {
          id
        })
        .then(response => {
          commit('setSnackbar', true)
          if (response.status) {
            if (response.data.hide == 0) {
              commit('setText', 'Data berhasil di Sembunyikan!')
            } else {
              commit('setText', 'Data berhasil di Munculkan!')
            }
            // dispatch('getData')
          } else {
            commit('setText', response.status)
          }
          resolve()
        })
        .catch(error => {
          commit('setSnackbar', true)
          commit('setText', error.response.status)
          resolve()
        })
    })
  },
  destroyData({ dispatch, commit, state }, payload) {
    commit('setIsLoadingDestroy', true)
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/' + state.url + '/destroy', {
          no_registrasi: state.customDelete.custom
            ? eval(state.customDelete.params)
            : undefined,
          sni_id: state.sni_id,
          child: state.child,
          ...state.id
        })
        .then(response => {
          commit('setSnackbar', true)
          if (response.data.status) {
            commit('setText', 'Data berhasil dihapus!')
            dispatch('getData')
          } else {
            commit(
              'setText',
              'Gagal menghapus! Data memiliki keterkaitan dengan tabel lain!'
            )
          }
          resolve()
        })
        .catch(error => {
          commit('setSnackbar', true)
          commit('setText', error.response.status)
        })
        .finally(() => {
          commit('setDialogDestroy', false)
          commit('setIsLoadingDestroy', false)
          resolve()
        })
    })
  },
  destroysData({ dispatch, commit, state }, payload) {
    commit('setIsLoadingDestroys', true)
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/api/' + state.url + '/destroys', {
          items: state.item,
          child: state.child
        })
        .then(response => {
          commit('setSnackbar', true)
          commit(
            'setText',
            'Data yang berhasil dihapus : ' +
              response.data.success +
              ' Gagal : ' +
              response.data.fail
          )
          dispatch('getData')
          commit('setTableItems', [])
          resolve()
        })
        .catch(error => {
          commit('setSnackbar', true)
          commit('setText', error.response.status)
        })
        .finally(() => {
          commit('setDialogDestroys', false)
          commit('setIsLoadingDestroys', false)
          resolve()
        })
    })
  }
}
