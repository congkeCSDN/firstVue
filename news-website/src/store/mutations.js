import getters from './getters'

const state = {
    header:true,
    loading:true
}
const mutations = {
    showHeader: (state) =>{
        state.header = true
    },
    hideHeader: (state) =>{
        state.header = false
    },
    showLoading: (state) => {
        state.loading = true
    },
    hideLoading: (state) => {
        state.loading = false
    }
}
export default {
    getters,
    state,
    mutations
}