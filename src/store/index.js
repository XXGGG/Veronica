import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)




const store = new Vuex.Store({
    state:{
        search_area: 'search_area_1' || JSON.parse(localStorage.getItem('user-defined')).search_area,

        search_engine: 'baidu' || JSON.parse(localStorage.getItem('user-defined')).search_engine,

        shortcut_area: 'open' || JSON.parse(localStorage.getItem('user-defined')).shortcut_area,

        shortcut_name: 'open' || JSON.parse(localStorage.getItem('user-defined')).shortcut_name,

    },
    mutations:{
        C_search_area(state,style){
            state.search_area = style
        },
        C_search_engine(state,engine){
            state.search_engine = engine
        },
        C_shortcut_area(state,boole){
            state.shortcut_area = boole
        },
        C_shortcut_name(state,boole){
            state.shortcut_name = boole
        },
    }
})

export default store