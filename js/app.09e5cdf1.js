(function(t){function e(e){for(var a,n,r=e[0],o=e[1],u=e[2],h=0,_=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&_.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(_.length)_.shift()();return c.push.apply(c,u||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==s[o]&&(a=!1)}a&&(c.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={app:0},c=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=o;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"21c3":function(t,e,i){"use strict";i("7729")},"3db4":function(t,e,i){},"4ec3":function(t,e,i){i("2b19");var a=Object.is("production","production");console.log("是否【线上环境】："+a),t.exports={baseUrl:a?"":"api/"}},5415:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},c=[],n={name:"App",data:function(){return{}},created:function(){},methods:{}},r=n,o=(i("5c0b"),i("2877")),u=Object(o["a"])(r,s,c,!1,null,null,null),l=u.exports,h=i("8c4f"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background",style:"background-image:url("+t.BgPicture+")"},[i("search"),i("transition",{attrs:{name:"down"}},["true"==t.shortcut_area?i("shortcut"):t._e()],1),i("div",{staticClass:"set",on:{click:function(e){t.set_show=!t.set_show}}},[i("img",{attrs:{src:"img/avatar.jpg",alt:""}})]),i("transition",{attrs:{name:"fade"}},[t.set_show?i("div",{staticClass:"mask"}):t._e()]),i("transition",{attrs:{name:"emerge"}},[t.set_show?i("set",{staticClass:"set_fixed",attrs:{bgImg:t.BgPicture},on:{close_set:function(e){return t.close_set_btn()}}}):t._e()],1),i("box")],1)},g=[],m=i("5530"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{attrs:{action:t.url,target:"_blank",method:"get"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],staticClass:"search",attrs:{placeholder:t.url_placeholeder,name:t.url_name,type:"text"},domProps:{value:t.search_value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit()},input:function(e){e.target.composing||(t.search_value=e.target.value)}}})])])},p=[],f=i("2f62"),v={name:"search",data:function(){return{url:"http://www.baidu.com/baidu",url_name:"word",url_placeholeder:"百度搜索",search_value:""}},computed:Object(m["a"])({},Object(f["c"])(["search_engine"])),created:function(){this.change_search_engine()},watch:{search_engine:function(){this.change_search_engine()}},methods:{handleSubmit:function(t){var e=this;setTimeout((function(){e.search_value=""}),1e3)},change_search_engine:function(){switch(this.search_engine){case"baidu":return this.url="http://www.baidu.com/baidu",this.url_name="word",void(this.url_placeholeder="百度搜索");case"google":return this.url="http://www.google.com/search",this.url_name="q",void(this.url_placeholeder="Google搜索");case"shougou":return this.url="http://www.sogou.com/web",this.url_name="query",void(this.url_placeholeder="搜狗搜索")}}}},b=v,w=(i("ca28"),Object(o["a"])(b,d,p,!1,null,"3d1f3b54",null)),y=w.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shortcut_area"},[i("div",{staticClass:"shortcut"},t._l(t.shortcutList,(function(e){return i("a",{key:e.name,staticClass:"shortcut_item",attrs:{href:e.link,target:t.shortcut_target}},[i("div",{staticClass:"shortcut_square"},[i("img",{attrs:{src:e.img,alt:"图片"}})])])})),0)])},C=[],x={name:"shortcut",data:function(){return{}},computed:Object(m["a"])({},Object(f["c"])(["shortcut_target","shortcut_name","shortcutList"])),created:function(){},methods:{}},j=x,O=(i("8c37"),Object(o["a"])(j,k,C,!1,null,"716f589d",null)),T=O.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{click:function(e){return e.target!==e.currentTarget?null:t.close()}}},[i("div",{staticClass:"set_box"},[i("div",{staticClass:"set_area"},[i("div",{staticClass:"set_left"},[i("div",{staticClass:"avatar",on:{click:function(e){return t.set_selects("default")}}},[i("img",{attrs:{src:"img/avatar.jpg",alt:""}})]),i("div",{staticClass:"name"},[t._v("Veronica")]),i("div",{staticClass:"options"},[i("div",{staticClass:"item",on:{click:function(e){return t.set_selects("set")}}},[t._v("设置")]),i("div",{staticClass:"item",on:{click:function(e){return t.set_selects("shortcut")}}},[t._v("快捷网址")]),i("div",{staticClass:"item",on:{click:function(e){return t.set_selects("about")}}},[t._v("关于")])])]),i("div",{staticClass:"set_right"},["default"==t.set_select?i("div"):t._e(),"set"==t.set_select?i("div",[i("div",{staticClass:"set_item"},[i("span",[t._v("搜索引擎")]),i("el-select",{attrs:{size:"mini"},on:{change:function(e){return t.set_custom("searchEngine")}},model:{value:t.search_engine_value,callback:function(e){t.search_engine_value=e},expression:"search_engine_value"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"set_item"},[i("span",[t._v("快捷网址")]),i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},on:{change:function(e){return t.set_custom("shortcutArea")}},model:{value:t.shortcut_area_value,callback:function(e){t.shortcut_area_value=e},expression:"shortcut_area_value"}})],1),i("div",{staticClass:"set_item"},[i("span",[t._v("在新页面打开")]),i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"_blank","inactive-value":"_self"},on:{change:function(e){return t.set_custom("shortcutTarget")}},model:{value:t.shortcut_target_value,callback:function(e){t.shortcut_target_value=e},expression:"shortcut_target_value"}})],1),i("div",{staticClass:"set_item"},[i("span",[t._v("必应每日一图")]),i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},on:{change:function(e){return t.set_custom("bgPicture")}},model:{value:t.bg_picture_value,callback:function(e){t.bg_picture_value=e},expression:"bg_picture_value"}})],1),i("div",{staticClass:"set_item"},[i("span",[t._v("首页清新~")]),i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},on:{change:function(e){return t.set_custom("homeClean")}},model:{value:t.home_clean_value,callback:function(e){t.home_clean_value=e},expression:"home_clean_value"}})],1)]):t._e(),"shortcut"==t.set_select?i("div",[i("div",{staticClass:"title"},[t._v("已选择的快捷网址：（"+t._s(t.shortcut_list.length)+"/20）")]),i("div",{staticClass:"shortcut_select"},t._l(t.shortcut_list,(function(e){return i("div",{key:e.id,staticClass:"select_item select_item_remove_fear"},[i("img",{staticClass:"remove_fear",attrs:{src:e.img},on:{click:function(i){return t.remove_shortcut(e.id)}}}),i("div",{staticClass:"i_name"},[t._v(t._s(e.name))]),i("div",{staticClass:"i_icon",on:{click:function(i){return t.remove_shortcut(e.id)}}},[t._v("❌")])])})),0),i("div",{staticClass:"title"},[t._v("可选的快捷网址：")]),i("div",{staticClass:"shortcut_select"},t._l(t.shortcut_all_list,(function(e){return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.filter_shortcut(e.id),expression:"!filter_shortcut(i.id)"}],key:e.id,staticClass:"select_item select_item_add_happy"},[i("img",{staticClass:"add_happy",attrs:{src:e.img},on:{click:function(i){return t.add_shortcut(e.id)}}}),i("div",{staticClass:"i_name"},[t._v(t._s(e.name))]),i("div",{staticClass:"i_icon",on:{click:function(i){return t.add_shortcut(e.id)}}},[t._v("➕")])])})),0)]):t._e(),"about"==t.set_select?i("div",[i("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.gitee.io",target:"_blank"}},[t._v("博客(gitee pages)")]),i("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.github.io",target:"_blank"}},[t._v("博客(github pages)")]),i("a",{staticClass:"aboutME",attrs:{href:"https://github.com/XXGGG",target:"_blank"}},[t._v("Github")]),i("a",{staticClass:"aboutME",attrs:{href:"https://xxggg.gitee.io/vue2-demo",target:"_blank"}},[t._v("其他作品")])]):t._e()])])])])},E=[],P=(i("4de4"),i("4160"),i("caad"),i("a9e3"),i("2532"),i("159b"),{name:"set",data:function(){return{set_show:!0,set_select:"default",options:[{value:"baidu",label:"百度"},{value:"google",label:"谷歌"},{value:"shougou",label:"搜狗"}],search_engine_value:"",shortcut_area_value:"",shortcut_target_value:"",bg_picture_value:"",home_clean_value:"",shortcut_all_list:[],shortcut_list:[],shortcut_id:[]}},props:{bgImg:{type:String}},computed:Object(m["a"])({},Object(f["c"])(["search_engine","shortcut_area","shortcut_target","bg_picture","home_clean","shortcutList"])),watch:{shortcut_id:function(){this.verify()}},created:function(){this.search_engine_value=this.search_engine,this.shortcut_area_value=this.shortcut_area,this.shortcut_target_value=this.shortcut_target,this.bg_picture_value=this.bg_picture,this.home_clean_value=this.home_clean,this.get_shortcut_all_list()},methods:Object(m["a"])(Object(m["a"])({close:function(){this.$emit("close_set")}},Object(f["b"])(["Change_search_engine","Change_shortcut_area","Change_shortcut_target","Change_bg_picture","Change_home_clean","Change_url_list"])),{},{set_selects:function(t){this.set_select=t},set_custom:function(t){switch(t){case"searchEngine":this.Change_search_engine(this.search_engine_value);break;case"shortcutArea":this.Change_shortcut_area(this.shortcut_area_value);break;case"shortcutTarget":this.Change_shortcut_target(this.shortcut_target_value);break;case"bgPicture":this.Change_bg_picture(this.bg_picture_value);break;case"homeClean":this.Change_home_clean(this.home_clean_value),this.$forceUpdate();break}},get_shortcut_all_list:function(){var t=this;this.axios.get("../../mock/url.json").then((function(e){200==e.status&&(t.shortcut_all_list=e.data.data.shortcut_all_list,t.get_url_id())})).catch((function(t){console.log(t)}))},get_url_id:function(){var t=this;this.shortcut_id=[],this.shortcutList.forEach((function(e){t.shortcut_id.push(e.id)}))},verify:function(){var t=this;this.shortcut_list=[],this.shortcut_id.forEach((function(e){t.shortcut_all_list.forEach((function(i){i.id==e&&t.shortcut_list.push(i)}))})),this.Change_url_list(this.shortcut_list)},add_shortcut:function(t){this.shortcut_list.length>=20||JSON.stringify(this.shortcut_id).includes(t)||this.shortcut_id.push(Number(t))},remove_shortcut:function(t){JSON.stringify(this.shortcut_id).includes(t)&&(this.shortcut_id=this.shortcut_id.filter((function(e){return e!=t})))},filter_shortcut:function(t){return JSON.stringify(this.shortcut_id).includes(t)}})}),z=P,L=(i("21c3"),Object(o["a"])(z,S,E,!1,null,"5f138574",null)),N=L.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.update?i("div",{staticClass:"box"},[i("el-carousel",{attrs:{height:"700px",autoplay:!1,loop:!1,trigger:"click","indicator-position":"none"}},["true"==t.home_clean?i("el-carousel-item"):t._e(),t._e(),i("el-carousel-item",[i("div",{staticClass:"box_item tool"},[i("h1",[t._v("Mark-工具箱")]),i("div",{staticClass:"tool_select"},[i("el-button",{attrs:{size:"mini",type:"all"==t.urlType?"primary":""},on:{click:function(e){t.urlType="all"}}},[t._v("全部资源")]),i("el-button",{attrs:{size:"mini",type:"img"==t.urlType?"primary":""},on:{click:function(e){t.urlType="img"}}},[t._v("照片")]),i("el-button",{attrs:{size:"mini",type:"code"==t.urlType?"primary":""},on:{click:function(e){t.urlType="code"}}},[t._v("编程")]),i("el-button",{attrs:{size:"mini",type:"design"==t.urlType?"primary":""},on:{click:function(e){t.urlType="design"}}},[t._v("设计")]),i("el-button",{attrs:{size:"mini",type:"music"==t.urlType?"primary":""},on:{click:function(e){t.urlType="music"}}},[t._v("音乐")]),i("el-button",{attrs:{size:"mini",type:"drawing"==t.urlType?"primary":""},on:{click:function(e){t.urlType="drawing"}}},[t._v("绘画")]),i("el-button",{attrs:{size:"mini",type:"movie"==t.urlType?"primary":""},on:{click:function(e){t.urlType="movie"}}},[t._v("电影")]),i("el-button",{attrs:{size:"mini",type:"mark"==t.urlType?"primary":""},on:{click:function(e){t.urlType="mark"}}},[t._v("Mark")])],1),i("div",{staticClass:"tool_box"},t._l(t.urlList.all,(function(e,a){return i("span",{key:a},[t.urlType==e.type||"all"==t.urlType?i("a",{staticClass:"tool_item",attrs:{href:e.url,target:"_blank"}},[i("img",{attrs:{src:e.img}}),i("div",{staticClass:"tool_name"},[t._v(t._s(e.name))]),i("div",{staticClass:"tool_details"},[t._v(t._s(e.details))])]):t._e()])})),0)])])],1)],1):t._e()},$=[],J={urlList:{all:[{img:"https://coding-pages-bucket-3501976-8144565-8415-426016-1304571732.cos.ap-beijing.myqcloud.com/tools-logo/tuya.jpg",url:"https://tuya.xinxiao.tech/",name:"图压",details:"国内的免费图片压缩工具",type:"img"},{img:"https://s.pinimg.com/webapp/favicon-54a5b2af.png",url:"https://www.pinterest.co.uk/",name:"pinterest",details:"国外花瓣网（需要翻墙）",type:"img"},{img:"https://coding-pages-bucket-3501976-8144565-8415-426016-1304571732.cos.ap-beijing.myqcloud.com/tools-logo/Freellustrations.jpg",url:"https://coolbackgrounds.io/",name:"Cool Background",details:"生产很棒的背景图片",type:"img"},{img:"https://coding-pages-bucket-3501976-8144565-8415-426016-1304571732.cos.ap-beijing.myqcloud.com/tools-logo/coolbackgrounds.jpg",url:"https://freellustrations.com/",name:"Freellustrations",details:"插画风背景图片",type:"img"},{img:"https://www.runoob.com/favicon.ico",url:"https://www.runoob.com/",name:"菜鸟教程",details:"学习编程基础的网站",type:"code"},{img:"https://www.imooc.com/favicon.ico",url:"https://www.imooc.com/",name:"慕课网",details:"学习编程基础的网站",type:"code"},{img:"https://element.eleme.cn/favicon.ico",url:"https://element.eleme.cn/#/zh-CN",name:"Element-ui",details:"Vue的UI库",type:"code"},{img:"https://www.iconfont.cn/favicon.ico",url:"https://www.iconfont.cn/",name:"iconfont",details:"阿里巴巴提供的免费icon图标",type:"code"},{img:"https://g.csdnimg.cn/static/logo/favicon32.ico",url:"https://www.csdn.net/",name:"csdn",details:"程序员社区",type:"code"},{img:"https://juejin.cn/favicon.ico",url:"https://juejin.cn/",name:"掘金",details:"程序员社区",type:"code"},{img:"https://gitee.com/favicon.ico",url:"https://gitee.com/",name:"码云",details:"国产github，代码管理平台",type:"code"},{img:"https://carbon.now.sh/favicon.ico",url:"https://carbon.now.sh/",name:"carbon",details:"把“代码块”拍成张照片",type:"code"},{img:"http://www.doyoudo.com/favicon.ico",url:"http://www.doyoudo.com/",name:"doyoudo",details:"学习ps,pr的有趣网站",type:"design"},{img:"https://huaban.com/favicon.ico",url:"https://huaban.com/",name:"花瓣网",details:"很多设计的图片",type:"design"},{img:"http://www.tan8.com/favicon.ico",url:"http://www.tan8.com/",name:"弹琴吧",details:"钢琴谱等...",type:"music"},{img:"https://www.artstation.com/favicon.ico",url:"https://www.artstation.com/",name:"Artstation",details:"A站，各种大神的画！（需要翻墙）",type:"drawing"},{img:"https://www.pixiv.net/favicon.ico",url:"https://www.pixiv.net/",name:"Pixiv",details:"2号P站（需要翻墙）",type:"drawing"},{img:"https://www.80s.tw/favicon.ico",url:"https://www.80s.tw/",name:"80s",details:"各种盗版电影",type:"movie"},{img:"https://xxggg.gitee.io//favicon.ico",url:"https://xxggg.gitee.io/",name:"谢夏戈的博客",details:"谢夏戈的gitee博客",type:"mark"},{img:"https://xxggg.github.io//favicon.ico",url:"https://xxggg.github.io/",name:"谢夏戈的博客",details:"谢夏戈的github博客",type:"mark"}]}},I={name:"box",data:function(){return{urlList:J.urlList,urlType:"all",update:"true"}},computed:Object(m["a"])({},Object(f["c"])(["home_clean"])),watch:{home_clean:function(){var t=this;this.update=!1,this.$nextTick((function(){t.update=!0}))}},created:function(){},methods:{}},B=I,q=(i("af0d"),Object(o["a"])(B,M,$,!1,null,"a4e2dd7e",null)),G=q.exports,A={name:"Home",components:{search:y,shortcut:T,set:N,box:G},data:function(){return{set_show:!1,userData:{},BgPicture:"",topSearch_list:""}},computed:Object(m["a"])({},Object(f["c"])(["shortcut_area","bg_picture"])),watch:{bg_picture:function(){this.load_bg()}},mounted:function(){this.load_bg(),this.getTopSearch()},methods:{load_bg:function(){var t=this;"true"==this.bg_picture?this.axios.get("https://api.xygeng.cn/Bing/url/").then((function(e){t.BgPicture=e.data.data})):this.BgPicture=""},getTopSearch:function(){},close_set_btn:function(){this.set_show=!1}}},U=A,H=(i("e7fd"),Object(o["a"])(U,_,g,!1,null,"08519980",null)),F=H.exports;a["default"].use(h["a"]);var V=[{path:"/",name:"Home",component:F}],X=new h["a"]({mode:"hash",base:"",routes:V}),D=X;if(a["default"].use(f["a"]),!localStorage.getItem("user-defined")){var R={};localStorage.setItem("user-defined",JSON.stringify(R))}function K(t){return JSON.parse(localStorage.getItem(t))}function Q(){localStorage.setItem("user-defined",JSON.stringify(W))}var W=K("user-defined"),Y=K("url_list"),Z=[{id:"1",img:"img/shortcut_img/bilibili.jpg",link:"https://www.bilibili.com/",name:"哔哩哔哩"},{id:"2",img:"img/shortcut_img/zhihu.jpg",link:"https://www.zhihu.com/",name:"知乎"},{id:"4",img:"img/shortcut_img/weibo.jpg",link:"https://weibo.com/",name:"微博"},{id:"7",img:"img/shortcut_img/github.jpg",link:"https://github.com/",name:"GitHub"}],tt=new f["a"].Store({state:{search_engine:W&&W.search_engine?W.search_engine:"baidu",shortcut_area:W&&W.shortcut_area?W.shortcut_area:"true",shortcut_target:W&&W.shortcut_target?W.shortcut_target:"_blank",bg_picture:W&&W.bg_picture?W.bg_picture:"true",home_clean:W&&W.home_clean?W.home_clean:"false",shortcutList:Y||Z},mutations:{Change_search_engine:function(t,e){t.search_engine=e,W.search_engine=e,Q()},Change_shortcut_area:function(t,e){t.shortcut_area=e,W.shortcut_area=e,Q()},Change_shortcut_target:function(t,e){t.shortcut_target=e,W.shortcut_target=e,Q()},Change_bg_picture:function(t,e){t.bg_picture=e,W.bg_picture=e,Q()},Change_home_clean:function(t,e){t.home_clean=e,W.home_clean=e,Q()},Change_url_list:function(t,e){t.shortcutList=e,localStorage.setItem("url_list",JSON.stringify(e))}}}),et=tt,it=i("bc3a"),at=i.n(it),st=(i("3db4"),i("5c96")),ct=i.n(st),nt=(i("0fae"),i("4ec3")),rt=i.n(nt);a["default"].config.productionTip=!1,a["default"].use(ct.a),at.a.defaults.baseURL=rt.a.baseUrl,a["default"].prototype.axios=at.a,new a["default"]({router:D,store:et,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"630e":function(t,e,i){},7729:function(t,e,i){},"8c37":function(t,e,i){"use strict";i("ae28")},"98f0":function(t,e,i){},"9c0c":function(t,e,i){},ae28:function(t,e,i){},af0d:function(t,e,i){"use strict";i("5415")},ca28:function(t,e,i){"use strict";i("630e")},e7fd:function(t,e,i){"use strict";i("98f0")}});
//# sourceMappingURL=app.09e5cdf1.js.map