import { login } from "@/api/login"
import { setToken, setUserName, removeToken, getUserName, removeUserName } from "@/utils/app.js"
const state = {
    isCollapse: false,
    to_ken: '',
    username: getUserName() || ''
}
const getters = {
    isCollapse: state => state.isCollapse
}
const mutations = { //同步
    SET_COLLAPSE(state, value) {
        return state.isCollapse = !state.isCollapse
    },
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    }

}
const actions = { //异步
    setMenuStatus({ commit }, repuestData) {
        return new Promise((resolve, reject) => {
                login(repuestData).then((response) => {
                    let data = response.data.data
                    commit('SET_TOKEN', data.token)
                    commit('SET_USERNAME', data.userName)
                    setToken(data.token)
                    setUserName(data.userName)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })

            })
            // commit('SET_COLLAPSE')
    },
    exit({ commit }) { //注销
        return new Promise((resolve, reject) => {
            removeToken()
            removeUserName()
            commit('SET_TOKEN', '')
            commit('SET_USERNAME', '')
            resolve()
        })

    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};