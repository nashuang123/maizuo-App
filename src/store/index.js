import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cityName: "北京"
    },
    mutations: {
        setCity(state, cityName) {
            state.cityName = cityName;
        }
    }

})
export default store;