<template>
  <div class="background">


      <!-- search 模块 -->
        <!-- 标题跟logo -->
      <div :class="$store.state.search_area">
        <div class="search_logo">
          <img src="../../assets/veronica2.png" class="logo_img">
          <p class="logo_title">Veronica</p>
        </div>

        <div class="search_box">
          <form action="http://www.baidu.com/baidu" target="_blank" method="get" v-if="$store.state.search_engine == 'baidu'">
            <input placeholder="百度搜索" class="search" type=text name=word    @keydown.enter="handleSubmit()">
          </form>

          <form action="http://www.google.com/search" target="_blank" method="get" v-if="$store.state.search_engine == 'google'">
            <input placeholder="Google搜索" class="search" type=text name=q    @keydown.enter="handleSubmit()">
          </form>

          <form action="http://www.sogou.com/web" target="_blank" method="get" v-if="$store.state.search_engine == 'shougou'">
            <input placeholder="搜狗搜索" class="search" type=text name=query  @keydown.enter="handleSubmit()">
          </form>
        </div>
      </div>

      <!-- 快捷网址 -->
      <transition name = "gradually">
        <shortcut v-if="$store.state.shortcut_area"></shortcut>
      </transition>

      
      <!-- 新闻 -->
      <transition name = "gradually">
        <news></news>
      </transition>

      <!-- set设置头像 -->
      <set></set>

      <!-- <router-link to="/TreasureBag" class="treasureBag"></router-link> -->

      <!-- 天气模块 -->
      <!-- <weather></weather> -->

  </div>
</template>

<script>
import shortcut from "./shortcut"
import news from "./news"
import set from "./set"
import weather from "./weather"
export default {
  name: 'Home',
  components:{
    shortcut,
    news,
    set,
    weather,
  },
  data () {
    return {
      search_value:'',
    }
  },
  mounted(){
    this.inspect();
  },
  methods:{
     // 当打开网页要先进行检查
    inspect(){
      if(localStorage.getItem('user-defined')){
        let userData = JSON.parse(localStorage.getItem('user-defined'))
          this.$store.commit('C_search_area',userData.search_area)
          this.$store.commit('C_search_engine',userData.search_engine)
          this.$store.commit('C_shortcut_area',userData.shortcut_area)
      }
      
    },
    handleSubmit(event){
      this.search_value = '';
    }
    
  }
}
</script>

<style scoped>
*{
  transition: all .2s;
  overflow-x:visible;
}
.background{
  width: 100%;
  min-width: 950px;
  min-height: 100vh;
  background-color: #222;
  font-family: Comic Sans MS;
  position: absolute;
}
/* 搜索模块——1 */
.search_area_1{
  width: 960px;
  height: 350px;
  margin:0px auto 0;
  overflow: hidden;
  transition: all .3s;
  position: relative;
}
.search_area_1 .search_logo{
  width: 260px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  position: absolute;
  left: calc(480px - 130px);
  margin:200px auto 0px;
  overflow: hidden;
  user-select: none;
  transition: all .6s;
}
.search_area_1 .logo_img{
  width: 50px;
  height: 50px;
  margin: 5px;
  float: left;
  /* 不能拖动图片 */
  -webkit-user-drag: none;
}
.search_area_1 .logo_title{
  width: 180px;
  height: 50px;
  padding: 0 10px;
  float: left;
  font-size: 46px;
  color: #F5F5F5;
  text-shadow: 1px 1px 14px  rgb(90, 90, 90);
  transition: all .6s;
}


.search_area_1 .search_box{
  width: 100%;
  position: absolute;
  top:260px;
  transition: all .3s;
}
.search_area_1 .search{
  display: block;
  max-width: 800px;
  min-width: 60%;
  height: 50px;
  background-color: rgba(78, 78, 78, 0.404);
  margin:20px auto 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px -1px #111;
  color: #F5F5F5;
  padding: 0 20px;
  font-size: 20px;
  border:none;
  /* 去掉点击发光 */
  outline: none;
  user-select: none;
  transition: all .3s;
}
/* 搜索模块——2 */
.search_area_2{
  width: 960px;
  height: 50px;
  margin: auto;
  padding: 20px 0;
  overflow: hidden;
  transition: all .6s;
  position: relative;
}
.search_area_2 .search_logo{
  width: 260px;
  height: 50px;
  user-select: none;
  overflow: hidden;
  position: absolute;
  top:20px;
  left: 20px;
  transition: all .4s;
}
.search_area_2 .logo_img{
  width: 50px;
  height: 50px;
  float: left;
  /* 不能拖动图片 */
  -webkit-user-drag: none;
}
.search_area_2 .logo_title{
  width: 0px;
  height: 50px;
  padding: 0px;
  overflow: hidden;
  float: left;
  font-size: 0px;
  color: #F5F5F5;
  text-shadow: 1px 1px 14px  rgb(90, 90, 90);
  transition: all .3s;
}

.search_area_2 .search_box{
  width: 100%;
  position: absolute;
  top:20px;
  transition: all .6s;
}
.search_area_2 .search{
  display: block;
  width: 600px;
  height: 50px;
  background-color: rgba(78, 78, 78, 0.404);
  margin:0px auto 0;
  border-radius: 5px;
  box-shadow: 2px 2px 10px -1px #111;
  color: #F5F5F5;
  padding: 0 20px;
  font-size: 20px;
  border:none;
  /* 去掉点击发光 */
  outline: none;
  user-select: none;
  transition: all .6s;
}


/* .treasureBag{
    width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 10px;
    position: fixed;
    right: 20px;
    top: 90px;
    box-shadow: 2px 2px 10px -5px rgb(0, 0, 0);
    cursor: pointer;
    z-index: 0;
} */




/* 响应式搜索框 */
/* PC */
@media only screen and (min-width: 960px) {
    .search {width:800px;}
}
/* 横放平板 */
@media only screen and (min-width: 768px) and (max-width: 959px) {
    .search {width:600px;}
}
/* 横放手机/竖放平板 */
@media only screen and (min-width: 480px) and (max-width: 767px) {
    .search {width:70%;}
}

</style>
<style  scoped>

/* 渐渐消失的动画 */
.gradually-enter-active {
    transition: all 1s;
    transform: translateY(-200px);
    opacity: 0;
}
.gradually-leave-active {
    transition: all 1s;
    transform: translateY(-200px);
    opacity: 0;
}
.gradually-enter, .gradually-leave-to {
    transition: all .5s;
}

</style>