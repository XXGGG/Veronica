import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function xxg(key){
   return JSON.parse(localStorage.getItem(key))
}


const store = new Vuex.Store({
    state:{
        search_area: xxg('user-defined') ? xxg('user-defined').search_area : 'search_area_1' ,

        search_engine: xxg('user-defined') ? xxg('user-defined').search_engine : 'baidu' ,

        shortcut_area: xxg('user-defined') ? xxg('user-defined').shortcut_area : 'open' ,

        shortcut_name: xxg('user-defined') ? xxg('user-defined').shortcut_name : 'open' ,

        shortcut_target:xxg('user-defined') ? xxg('user-defined').shortcut_target : '_blank' ,
        // shortcut_target:JSON.parse(localStorage.getItem('user-defined')) ? JSON.parse(localStorage.getItem('user-defined')).shortcut_target : '_blank' ,

        bg_picture:xxg('user-defined') ? xxg('user-defined').bg_picture : 'open',
        
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
        C_shortcut_target(state,boole){
            state.shortcut_target = boole
        },
        C_bg_picture(state,boole){
            state.bg_picture = boole
        },
    }
})

export default store