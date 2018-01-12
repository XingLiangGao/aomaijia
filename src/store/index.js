import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showtype : true,
    user_info:{}
}

const mutations = {
    changeUserInFo(state,user_info){
        state.user_info = user_info
        localStorage.user_info = JSON.stringify(user_info)
    },
    exit(state){
        state.user_info = {}
        localStorage.removeItem('user_info')
    }
}
export default new Vuex.Store({
    state,mutations
})