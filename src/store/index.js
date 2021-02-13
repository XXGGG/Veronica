import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// detectionUserData(){ //这一步要在这里设置 设置用户自定义的数据为空
if(!localStorage.getItem('user-defined')){
  let data = {}
  localStorage.setItem('user-defined',JSON.stringify(data))
}
// }

function parse(key){
   return JSON.parse(localStorage.getItem(key))
}
function updata(){
  localStorage.setItem('user-defined',JSON.stringify(data))
}
let data = parse('user-defined') 
let url_List = parse('url_list')

const url_List_defined = [
  { "id":"1", "img":"img/shortcut_img/bilibili.jpg","link":"https://www.bilibili.com/","name":"哔哩哔哩"},
  { "id":"2", "img":"img/shortcut_img/zhihu.jpg","link":"https://www.zhihu.com/","name":"知乎"},
  { "id":"4", "img":"img/shortcut_img/weibo.jpg","link":"https://weibo.com/","name":"微博"},
  { "id":"7", "img":"img/shortcut_img/github.jpg","link":"https://github.com/","name":"GitHub"},
]
const store = new Vuex.Store({
  state:{
    search_engine: data && data.search_engine ? data.search_engine : 'baidu' ,

    shortcut_area: data && data.shortcut_area ? data.shortcut_area : 'true' ,

    shortcut_target:data && data.shortcut_target ? data.shortcut_target : '_blank' ,

    bg_picture:data && data.bg_picture ? data.bg_picture : 'true',

    home_clean:data && data.home_clean ? data.home_clean : 'false',

    shortcutList:url_List ? url_List : url_List_defined
  },
  mutations:{
    Change_search_engine(state,engine){
        state.search_engine = engine
        data.search_engine = engine
        updata()
    },
    Change_shortcut_area(state,boole){
        state.shortcut_area = boole
        data.shortcut_area = boole
        updata()
    },
    Change_shortcut_target(state,boole){
        state.shortcut_target = boole
        data.shortcut_target = boole
        updata()
    },
    Change_bg_picture(state,url){
        state.bg_picture = url
        data.bg_picture = url
        updata()
    },
    Change_home_clean(state,boole){
        state.home_clean = boole
        data.home_clean = boole
        updata()
    },
    Change_url_list(state,xxg){
      state.shortcutList = xxg
      localStorage.setItem('url_list',JSON.stringify(xxg))
    }
  }
})

export default store