(function(t){function e(e){for(var a,c,n=e[0],u=e[1],o=e[2],h=0,_=[];h<n.length;h++)c=n[h],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&_.push(i[c][0]),i[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(_.length)_.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var u=s[n];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},r=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var l=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0552":function(t,e,s){"use strict";s("5e65")},"23a4":function(t,e,s){},"3db4":function(t,e,s){},"46d7":function(t,e,s){"use strict";s("dcce")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],c={name:"App",data:function(){return{}},created:function(){this.detectionUserData()},methods:{detectionUserData:function(){if(!localStorage.getItem("user-defined")){var t={};localStorage.setItem("user-defined",JSON.stringify(t))}}}},n=c,u=(s("5c0b"),s("2877")),o=Object(u["a"])(n,i,r,!1,null,null,null),l=o.exports,h=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background",style:"background-image:url("+t.BgPicture+")"},[s("search"),s("transition",{attrs:{name:"down"}},["true"==t.shortcut_area?s("shortcut"):t._e()],1),s("div",{staticClass:"set",on:{click:function(e){t.set_show=!t.set_show}}},[s("img",{attrs:{src:"img/avatar.jpg",alt:""}})]),s("transition",{attrs:{name:"fade"}},[t.set_show?s("div",{staticClass:"mask"}):t._e()]),s("transition",{attrs:{name:"emerge"}},[t.set_show?s("set",{staticClass:"set_fixed",attrs:{bgImg:t.BgPicture}}):t._e()],1)],1)},g=[],d=s("5530"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{action:t.url,target:"_blank",method:"get"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],staticClass:"search",attrs:{placeholder:t.url_placeholeder,name:t.url_name,type:"text"},domProps:{value:t.search_value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit()},input:function(e){e.target.composing||(t.search_value=e.target.value)}}})])])},v=[],m=s("2f62"),p={name:"search",data:function(){return{url:"http://www.baidu.com/baidu",url_name:"word",url_placeholeder:"百度搜索",search_value:""}},computed:Object(d["a"])({},Object(m["c"])(["search_engine"])),created:function(){this.change_search_engine()},watch:{search_engine:function(){this.change_search_engine()}},methods:{handleSubmit:function(t){var e=this;setTimeout((function(){e.search_value=""}),1e3)},change_search_engine:function(){switch(this.search_engine){case"baidu":return this.url="http://www.baidu.com/baidu",this.url_name="word",void(this.url_placeholeder="百度搜索");case"google":return this.url="http://www.google.com/search",this.url_name="q",void(this.url_placeholeder="Google搜索");case"shougou":return this.url="http://www.sogou.com/web",this.url_name="query",void(this.url_placeholeder="搜狗搜索")}}}},b=p,w=(s("fa0a"),Object(u["a"])(b,f,v,!1,null,"4436bd1a",null)),C=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shortcut_area"},[s("div",{staticClass:"shortcut"},t._l(t.shortcutList,(function(e){return s("a",{key:e.name,staticClass:"shortcut_item",attrs:{href:e.link,target:t.shortcut_target}},[s("div",{staticClass:"shortcut_square"},[s("img",{attrs:{src:e.img,alt:"图片"}})])])})),0)])},y=[],O={name:"shortcut",data:function(){return{}},computed:Object(d["a"])({},Object(m["c"])(["shortcut_target","shortcut_name","shortcutList"])),created:function(){},methods:{}},j=O,x=(s("46d7"),Object(u["a"])(j,k,y,!1,null,"72d49fdd",null)),S=x.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"set_box"},[s("div",{staticClass:"set_area"},[s("div",{staticClass:"set_left"},[s("div",{staticClass:"avatar",on:{click:function(e){return t.set_selects("default")}}},[s("img",{attrs:{src:"img/avatar.jpg",alt:""}})]),s("div",{staticClass:"name"},[t._v("Veronica")]),s("div",{staticClass:"options"},[s("div",{staticClass:"item",on:{click:function(e){return t.set_selects("set")}}},[t._v("设置")]),s("div",{staticClass:"item",on:{click:function(e){return t.set_selects("shortcut")}}},[t._v("快捷网址")]),s("div",{staticClass:"item",on:{click:function(e){return t.set_selects("about")}}},[t._v("关于")])])]),s("div",{staticClass:"set_right"},["default"==t.set_select?s("div"):t._e(),"set"==t.set_select?s("div",[s("div",{staticClass:"set_item"},[s("span",[t._v("搜索引擎")]),s("el-select",{attrs:{size:"mini"},on:{change:function(e){return t.set_custom("searchEngine")}},model:{value:t.search_engine_value,callback:function(e){t.search_engine_value=e},expression:"search_engine_value"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),s("div",{staticClass:"set_item"},[s("span",[t._v("快捷网址")]),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},on:{change:function(e){return t.set_custom("shortcutArea")}},model:{value:t.shortcut_area_value,callback:function(e){t.shortcut_area_value=e},expression:"shortcut_area_value"}})],1),s("div",{staticClass:"set_item"},[s("span",[t._v("在新页面打开")]),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"_blank","inactive-value":"_self"},on:{change:function(e){return t.set_custom("shortcutTarget")}},model:{value:t.shortcut_target_value,callback:function(e){t.shortcut_target_value=e},expression:"shortcut_target_value"}})],1),s("div",{staticClass:"set_item"},[s("span",[t._v("必应每日一图")]),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},on:{change:function(e){return t.set_custom("bgPicture")}},model:{value:t.bg_picture_value,callback:function(e){t.bg_picture_value=e},expression:"bg_picture_value"}})],1)]):t._e(),"shortcut"==t.set_select?s("div",[s("div",{staticClass:"title"},[t._v("已选择的快捷网址：")]),s("div",{staticClass:"shortcut_select"},t._l(t.shortcut_list,(function(e){return s("div",{key:e.id,staticClass:"select_item select_item_remove_fear"},[s("img",{staticClass:"remove_fear",attrs:{src:e.img},on:{click:function(s){return t.remove_shortcut(e.id)}}}),s("div",{staticClass:"i_name"},[t._v(t._s(e.name))]),s("div",{staticClass:"i_icon",on:{click:function(s){return t.remove_shortcut(e.id)}}},[t._v("❌")])])})),0),s("div",{staticClass:"title"},[t._v("可选的快捷网址：")]),s("div",{staticClass:"shortcut_select"},t._l(t.shortcut_all_list,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.filter_shortcut(e.id),expression:"!filter_shortcut(i.id)"}],key:e.id,staticClass:"select_item select_item_add_happy"},[s("img",{staticClass:"add_happy",attrs:{src:e.img},on:{click:function(s){return t.add_shortcut(e.id)}}}),s("div",{staticClass:"i_name"},[t._v(t._s(e.name))]),s("div",{staticClass:"i_icon",on:{click:function(s){return t.add_shortcut(e.id)}}},[t._v("➕")])])})),0)]):t._e(),"about"==t.set_select?s("div",[s("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.gitee.io",target:"_blank"}},[t._v("博客(gitee pages)")]),s("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.github.io",target:"_blank"}},[t._v("博客(github pages)")]),s("a",{staticClass:"aboutME",attrs:{href:"https://github.com/XXGGG",target:"_blank"}},[t._v("Github")]),s("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.gitee.io/vue2-demo",target:"_blank"}},[t._v("其他作品")])]):t._e()])])])])},P=[],N=(s("4de4"),s("4160"),s("caad"),s("a9e3"),s("2532"),s("159b"),{name:"set",data:function(){return{set_show:!0,set_select:"default",options:[{value:"baidu",label:"百度"},{value:"google",label:"谷歌"},{value:"shougou",label:"搜狗"}],search_engine_value:"",shortcut_area_value:"",shortcut_target_value:"",bg_picture_value:"",shortcut_all_list:[],shortcut_list:[],shortcut_id:[]}},props:{bgImg:{type:String}},computed:Object(d["a"])({},Object(m["c"])(["search_engine","shortcut_area","shortcut_target","bg_picture","shortcutList"])),watch:{shortcut_id:function(){this.verify()}},created:function(){this.search_engine_value=this.search_engine,this.shortcut_area_value=this.shortcut_area,this.shortcut_target_value=this.shortcut_target,this.bg_picture_value=this.bg_picture,this.get_shortcut_all_list()},methods:Object(d["a"])(Object(d["a"])({},Object(m["b"])(["Change_search_engine","Change_shortcut_area","Change_shortcut_target","Change_bg_picture","Change_url_list"])),{},{set_selects:function(t){this.set_select=t},set_custom:function(t){switch(t){case"searchEngine":this.Change_search_engine(this.search_engine_value);break;case"shortcutArea":this.Change_shortcut_area(this.shortcut_area_value);break;case"shortcutTarget":this.Change_shortcut_target(this.shortcut_target_value);break;case"bgPicture":this.Change_bg_picture(this.bg_picture_value);break}},get_shortcut_all_list:function(){var t=this;this.axios.get("mock/url.json").then((function(e){200==e.status&&(t.shortcut_all_list=e.data.data.shortcut_all_list,t.get_url_id())})).catch((function(t){console.log(t)}))},get_url_id:function(){var t=this;this.shortcut_id=[],this.shortcutList.forEach((function(e){t.shortcut_id.push(e.id)}))},verify:function(){var t=this;this.shortcut_list=[],this.shortcut_id.forEach((function(e){t.shortcut_all_list.forEach((function(s){s.id==e&&t.shortcut_list.push(s)}))})),this.Change_url_list(this.shortcut_list)},add_shortcut:function(t){JSON.stringify(this.shortcut_id).includes(t)||this.shortcut_id.push(Number(t))},remove_shortcut:function(t){JSON.stringify(this.shortcut_id).includes(t)&&(this.shortcut_id=this.shortcut_id.filter((function(e){return e!=t})))},filter_shortcut:function(t){return JSON.stringify(this.shortcut_id).includes(t)}})}),J=N,M=(s("0552"),Object(u["a"])(J,E,P,!1,null,"6adfa542",null)),I=M.exports,B={name:"Home",components:{search:C,shortcut:S,set:I},data:function(){return{set_show:!1,userData:{},BgPicture:""}},computed:Object(d["a"])({},Object(m["c"])(["shortcut_area","bg_picture"])),watch:{bg_picture:function(){this.load_bg()}},mounted:function(){this.load_bg()},methods:{load_bg:function(){var t=this;"true"==this.bg_picture?this.axios.get("https://api.xygeng.cn/Bing/url/").then((function(e){t.BgPicture=e.data.data})):this.BgPicture=""}}},G=B,L=(s("fd7e"),Object(u["a"])(G,_,g,!1,null,"0d818b80",null)),T=L.exports;a["default"].use(h["a"]);var $=[{path:"/",name:"Home",component:T}],q=new h["a"]({mode:"history",base:"/",routes:$}),z=q;function A(t){return JSON.parse(localStorage.getItem(t))}function D(){localStorage.setItem("user-defined",JSON.stringify(H))}a["default"].use(m["a"]);var H=A("user-defined"),U=A("url_list"),X=[{id:"1",img:"img/shortcut_img/bilibili.jpg",link:"https://www.bilibili.com/",name:"哔哩哔哩"},{id:"2",img:"img/shortcut_img/zhihu.jpg",link:"https://www.zhihu.com/",name:"知乎"},{id:"4",img:"img/shortcut_img/weibo.jpg",link:"https://weibo.com/",name:"微博"},{id:"7",img:"img/shortcut_img/github.jpg",link:"https://github.com/",name:"GitHub"}],V=new m["a"].Store({state:{search_engine:H&&H.search_engine?H.search_engine:"baidu",shortcut_area:H&&H.shortcut_area?H.shortcut_area:"true",shortcut_target:H&&H.shortcut_target?H.shortcut_target:"_blank",bg_picture:H&&H.bg_picture?H.bg_picture:"true",shortcutList:U||X},mutations:{Change_search_engine:function(t,e){t.search_engine=e,H.search_engine=e,D()},Change_shortcut_area:function(t,e){t.shortcut_area=e,H.shortcut_area=e,D()},Change_shortcut_target:function(t,e){t.shortcut_target=e,H.shortcut_target=e,D()},Change_bg_picture:function(t,e){t.bg_picture=e,H.bg_picture=e,D()},Change_url_list:function(t,e){t.shortcutList=e,localStorage.setItem("url_list",JSON.stringify(e))}}}),F=V,K=s("bc3a"),Q=s.n(K),R=(s("3db4"),s("5c96")),W=s.n(R);s("0fae");a["default"].config.productionTip=!1,a["default"].use(W.a),a["default"].prototype.axios=Q.a,new a["default"]({router:z,store:F,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5e65":function(t,e,s){},"93d1":function(t,e,s){},"9c0c":function(t,e,s){},dcce:function(t,e,s){},fa0a:function(t,e,s){"use strict";s("93d1")},fd7e:function(t,e,s){"use strict";s("23a4")}});
//# sourceMappingURL=app.96a0a977.js.map