<template>
  <div class="background" :style="`background-image:url(${BgPicture})`">
      <!-- 搜索模块 -->
      <search />

      <!-- 快捷网址 -->
      <transition name = "down">
        <shortcut v-if="shortcut_area == 'true'" />
      </transition>

      <!-- set设置 -->
      <div class="set"  @click="set_show = !set_show">
        <img src="img/avatar.jpg" alt="">
      </div>
      <transition name="fade">
        <div class="mask" v-if="set_show" ></div>
      </transition>
      <transition name="emerge" >
          <set class="set_fixed" :bgImg="BgPicture" v-if="set_show" @close_set="close_set_btn()"/>
      </transition>

      <!-- 微博热搜 -->
      <weibo :TopSearch="topSearch_list"/>

  </div>
</template>

<script>
import search from '@/components/Home/search'
import shortcut from '@/components/Home/shortcut'
import set from '@/components/Home/set'
import weibo from '@/components/Home/weibo'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'Home',
  components:{
    search,
    shortcut,
    set,
    weibo
  },
  data () {
    return {
      set_show:false,
      userData:{},//用户自定义数据
      BgPicture:'', //背景图片
      topSearch_list:''
    }
  },
  computed:{
    ...mapState([
      'shortcut_area',
      'bg_picture'
    ])
  },
  watch:{
    bg_picture(){
      this.load_bg();
    }
  },
  mounted(){
    this.load_bg(); //加载背景图片
    this.getTopSearch(); //加载微博热搜
  },
  methods:{
    // 加载背景
    load_bg(){
      if(this.bg_picture == 'true'){
        this.axios.get('https://api.xygeng.cn/Bing/url/')
        .then(res => {
          this.BgPicture = res.data.data
        })
      }else{
        this.BgPicture = ''
      }
    },
    getTopSearch(){
      this.axios.get('/weibo/').then(res=>{
        this.topSearch_list = res.data.data
      })
    },
    close_set_btn(){
      this.set_show = false
    }
  }
}
</script>

<style lang='scss' scoped>
.background{
  width: 100%;
  min-height: 100vh;
  background-color: #222;
  background-size: cover;
  background-position: center center;
  font-family: Comic Sans MS;
  position: absolute;
  top: 0;
  left: 0;
}
.set{
    width: 60px;
    height: 60px;
    background-color: #333;
    border-radius: 50%;
    border: 2px solid rgb(52, 238, 238);
    position: fixed;
    right:16px;
    top:16px;
    box-shadow: 2px 2px 10px -5px rgb(0, 0, 0);
    cursor: pointer;
    z-index: 10;
    img{
        width: 100%;
        height: 100%;
    }
}
.mask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    background-size: cover;
    background-position:center;
}
.set_fixed{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}




/* 褪色动画 */
.fade-enter-active, .fade-enter-active{
  opacity: 1;
  transition: all .4s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
/* 缩放动画 */
.emerge-enter-active, .emerge-leave-active {
    opacity: 1;
    transition: all .4s;
}
.emerge-enter, .emerge-leave-to {
    transform: scale(0.2);
    opacity: 0;
}
/* 往下的动画 */
.down-enter-active, .down-leave-active{
    transition: all .4s;
    opacity: 1;
}
.down-enter, .down-leave-to {
    transform: translateY(200px);
    opacity: 0;
}
</style>

