import Vuex from 'vuex'
import Vue from 'vue'
import service from '../services/service'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        result: null
    },
    actions: {
        loadResult(state, identifier) {
            return service.get(`result/${identifier}/response`)
                .then(r => store.commit('newResult', r.body))
                .catch(e => alert('We were not able to load your result. Please try again later.'))
        }
    },
    mutations: {
        newResult (state, newResult) {
            state.result = newResult
        }
    }
})

export default store