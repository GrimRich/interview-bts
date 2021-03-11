export const state = () => ({
    model: false,
    loading: false
  })
  
  export const mutations = {
    setLoading(state, payload) {
      state.loading = payload
    },
    setModel(state, payload) {
      state.model = payload
    }
  }
  