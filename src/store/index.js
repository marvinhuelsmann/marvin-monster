import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: localStorage.getItem("user") != null ? localStorage.getItem("user") : null
    },
    mutations: {
        SET_USERNAME(state, username) {
            localStorage.setItem("user", username)
        },
        REMOVE_USERNAME() {
            localStorage.removeItem("user")
        }
    }
})