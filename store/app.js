export const state = () => ({
  app: '',
  //jika lang inggris memakai array contoh : ['id','lang'], jika indonesia saja maka : id
  lang: 'id',
  isBreak: false,
  layout: 'default'
})

export const mutations = {
  setApp(state, payload) {
    state.app = payload
  }
}
