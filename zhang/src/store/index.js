import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapse: false,

    },
    getters: {
        isCollapse: state => state.isCollapse
    },
    mutations: {
        SET_COLLAPSE(state, value) {
            state.isCollapse = !state.isCollapse
            console.log(state.isCollapse)
        }
        // SEt_count(state, value) {
        //     console.log(state, value)
        // }
    },
    actions: {},
    modules: {}
});