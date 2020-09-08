<template>
  <div class="background">

      <!-- search 模块 -->
        <!-- 标题跟logo -->
      <div :class="$store.state.search_area" >
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
      <transition name = "short_g">
        <div class="shortcut_area" v-if="shortcut_switch == 'open'">
            <a :href="item.link" class="s_item" v-for="item in shortcut_list" :key="item.name" :target="shortcut_target">
              <div class="s_square"><img :src="item.img" alt="图片"></div>
              <div class="s_text" v-if="shortcut_name == 'open'">{{item.name}}</div>
            </a>
        </div>
      </transition>
      
      

      <!-- set设置头像 -->
      <div>
        <div>
            <!-- 设置按钮 -->
            <div class="set"  @click="open_set"></div>

            <div class="mask" v-if="set_show" @click="close_set"></div>
            <!-- 设置面板 -->
            <transition name = "set_g">
                <div class="set_box" v-if="set_show">

                    <div class="set_area">
                        <div class="select_box">
                            <div class="select_item" :class="$store.state.search_area == 'search_area_1'  ? 'now' : ''" @click="change_search_style('search_area_1')">waw</div>

                            <div class="select_item" :class="$store.state.search_area == 'search_area_2'  ? 'now' : ''" @click="change_search_style('search_area_2')">o_o</div>
                        </div>

                        <div class="select_box">
                            <div class="select_item" :class="$store.state.search_engine == 'baidu'  ? 'now' : ''" @click="C_engine('baidu')">百度</div>
                            <div class="select_item" :class="$store.state.search_engine == 'google' ? 'now' : ''" @click="C_engine('google')">谷歌</div>
                            <div class="select_item" :class="$store.state.search_engine == 'shougou'? 'now' : ''" @click="C_engine('shougou')">搜狗</div>
                        </div>
                        <div class="set_item">
                            <span>快捷网址</span>
                            <el-switch  class="switch_item"
                                        v-model="shortcut_switch"      
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                        active-value="open"
                                        inactive-value="close"
                                        @change="shortcut_switch_btn()">
                            </el-switch>
                        </div>
                        <div class="set_item">
                            <span>网址名称</span>
                            <el-switch  class="switch_item"
                                        v-model="shortcut_name"      
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                        active-value="open"
                                        inactive-value="close"
                                        @change="shortcut_name_btn()">
                            </el-switch>
                        </div>
                        <div class="set_item">
                            <span>在新页面打开</span>
                            <el-switch  class="switch_item"
                                        v-model="shortcut_target"      
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                        active-value="_blank"
                                        inactive-value="_self"
                                        @change="shortcut_target_btn()">
                            </el-switch>
                        </div>


                        <a class="aboutME" href="https://xxggg.gitee.io" target="_blank">AUTHOR</a>
                        <a class="aboutME" href="https://xxggg.gitee.io/vue2-demo" target="_blank">OTHER-DEMO</a>
                    
                    </div>

                    <div class="chassis">
                      <div class="clear" @click="close_set()">❌</div>
                    </div>
                    

                </div>
            </transition>
        </div>
      </div>



  </div>
</template>

<script>
export default {
  name: 'Home',
  components:{
  },
  data () {
    return {
      search_value:'',
      set_show:false,
      shortcut_switch:this.$store.state.shortcut_area,
      shortcut_name:this.$store.state.shortcut_name,
      userData:{},//用户自定义数据
      engine: [
        { value: 'baidu',  label: '百度'},
        { value: 'google', label: '谷歌'}, 
        { value: 'shougou',label: '搜狗'},
      ],
      engine_value:'baidu',
      shortcut_list:[
        { img:require('@/assets/shortcut_img/bilibili.jpg'),link:'https://www.bilibili.com/',name:'哔哩哔哩'},
        { img:require('@/assets/shortcut_img/zhihu.jpg'),link:'https://www.zhihu.com/',name:'知乎'},
        { img:require('@/assets/shortcut_img/itzj.jpg'),link:'https://www.ithome.com/',name:'IT之家'},
        { img:require('@/assets/shortcut_img/weibo.jpg'),link:'https://weibo.com/',name:'微博'},
        { img:require('@/assets/shortcut_img/youku.jpg'),link:'https://www.youku.com/',name:'优酷'},
        { img:require('@/assets/shortcut_img/taobao.jpg'),link:'https://www.taobao.com/',name:'淘宝'},
        { img:require('@/assets/shortcut_img/github.jpg'),link:'https://github.com/',name:'GitHub'},
        { img:require('@/assets/shortcut_img/mayun.jpg'),link:'https://gitee.com/',name:'码云'},
        { img:require('@/assets/shortcut_img/mgtv.jpg'),link:'https://www.mgtv.com/',name:'芒果TV'},
      ],
      shortcut_target:this.$store.state.shortcut_target
    }
  },
  mounted(){
    this.inspect();
    this.test();
  },
  methods:{
    test(){
      console.log(this.$data)
      console.log(this)
      console.log(this.$data)
    },
     // 当打开网页要先进行检查 拿到用户数据
    inspect(){
      if(localStorage.getItem('user-defined')){
        this.userData = JSON.parse(localStorage.getItem('user-defined'))
        this.$store.commit('C_search_area',this.userData.search_area)
        this.$store.commit('C_search_engine',this.userData.search_engine)
        this.$store.commit('C_shortcut_area',this.userData.shortcut_area)
        this.$store.commit('C_shortcut_name',this.userData.shortcut_name)
        this.$store.commit('C_shortcut_target',this.userData.shortcut_target)
      }else{
        // 初始化用户数据
          let data ={
              'search_area':'search_area_1',
              'search_engine':'baidu',
              'shortcut_area':'open',
              'shortcut_name':'open',
              'shortcut_target':'_blank',
          }
          localStorage.setItem('user-defined',JSON.stringify(data))
          this.userData = JSON.parse(localStorage.getItem('user-defined'))
      }

    },
    //清空输入框
    handleSubmit(event){
      this.search_value = '';
    },
    //打开设置
    open_set(){
        this.set_show = true
    },
    //关闭设置
    close_set(){
        this.set_show = false
    },
    
    //改变搜索栏处的样式
    change_search_style(style){
        this.$store.commit('C_search_area',style)
        this.userData.search_area = style 
        this.updateUserData()
    },
    // 改变搜索引擎
    C_engine(engine){
        this.$store.commit('C_search_engine',engine)
        this.userData.search_engine = engine 
        this.updateUserData()
    },
    //快捷键
    shortcut_switch_btn(data){
        this.$store.commit('C_shortcut_area',this.shortcut_switch)
        this.userData.shortcut_area = this.shortcut_switch 
        this.updateUserData()
    },
    //快捷图标名字
    shortcut_name_btn(data){
        this.$store.commit('C_shortcut_name',this.shortcut_name)
        this.userData.shortcut_name = this.shortcut_name 
        this.updateUserData()
    },
    //快捷 - 在新页面打开
    shortcut_target_btn(data){
      this.$store.commit('C_shortcut_target',this.shortcut_target)
      this.userData.shortcut_target = this.shortcut_target 
      this.updateUserData()
    },
    //更新用户数据
    updateUserData(){
      localStorage.setItem('user-defined',JSON.stringify(this.userData))
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
  /* min-width: 400px; */
  min-height: 100vh;
  background-color: #222;
  font-family: Comic Sans MS;

  display: flex;
  /* 主轴的方向： */
  flex-direction: row;
  /* 允许多行排列 */
  flex-wrap: wrap;
  /* 主轴上对其方式 */
  justify-content: center;
  /* 行中对齐方式 */
  align-items: center;
  /* 交叉轴方向的对齐方式 */
  align-content: center;
}


/* 搜索模块——1 */
.search_area_1{
  max-width: 960px;
  width: 100%;
  height: 150px;
  margin:0px auto;
  overflow: hidden;
  transition: all .2s;
  position: relative;
}
.search_area_1 .search_logo{
  display: none;
  width: 260px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  margin:0 auto;
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
  transition: all .3s;
}
.search_area_1 .search{
  display: block;
  width: 80%;
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
  width: 98vw;
  height: 50px;
  margin: auto;
  padding: 20px 0;
  overflow: hidden;
  transition: all .2s;
  position: absolute;
  top:1vw;
  border-radius: 10px;
  /* background-color: #36363686; */
}
.search_area_2 .search_logo{
  display: none;
  width: 50px;
  height: 50px;
  user-select: none;
  overflow: hidden;
  position: absolute;
  top:20px;
  left: 20px;
  transition: all .1s;
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
  transition: all .2s;
}

.search_area_2 .search_box{
  width: 100%;
  position: absolute;
  top:20px;
  transition: all .2s;
}
.search_area_2 .search{
  display: block;
  width: 70vw;
  height: 40px;
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
.search:hover{
  box-shadow: 0px 0px 2px 0px rgb(88, 211, 233);
}



/* 快捷网址 */
.shortcut_area{
    max-width: 1200px;
    width: 90%;
    min-height: 100px;
    /* max-height: calc(100vh - 180px); */
    max-height: calc(100vh - 400px);
    margin: 10px auto 0;
    border-radius: 6px;
    /* background-color: #34343470; */
    transition: all .2s;
    overflow: auto;

    /* flex布局 */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.s_item{
  max-width: 80px;
  width: 10vw;
  min-width: 50px;

  /* background-color: cornflowerblue; */
  border-radius: 4px;
  margin: 14px;
  float: left;
}
.s_item:hover{
  transform: scale(1.2);
}
.s_item:hover .s_square{
  border: 1px solid #27eff6;
  box-shadow: 1px 1px 20px 0px #27eff6;
}
.s_square{
  max-width: 80px;
  width: 10vw;
  min-width: 50px;

  max-height: 80px;
  height: 10vw;
  min-height: 50px;
  overflow: hidden;
  border-radius: 6px;
  /* background-color: cornflowerblue; */
  border: 1px solid #000000;
}
.s_square img{
  width: 100%;
  height: 100%;
}
.s_text{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  /* font-size: 1vw; */
  /* background-color: brown; */
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


/* 渐渐消失的动画 */
.short_g-enter-active {
    transition: all .1s;
    transform: translateY(200px);
    opacity: 0;
}
.short_g-leave-active {
    transition: all .1s;
    transform: translateY(200px);
    opacity: 0;
}
.short_g-enter, .short_g-leave-to {
    transition: all .2s;
}


.set{
    width: 90%;
    height: 50px;
    background-color: #333;
    border-radius: 10px;
    position: fixed;
    /* left: 5%; */
    right: 5%;
    
    bottom: 10px;
    box-shadow: 2px 2px 10px -5px rgb(0, 0, 0);
    cursor: pointer;
    z-index: 10;
}
.set:hover{
  box-shadow: 0px 0px 10px 0px rgba(69, 210, 235, 0.767);
}
.mask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
}

.set_box{
    width: 100%;
    /* max-width: 400px; */
    background-color: #333;
    position: fixed;
    right: 0px;
    top:0px;
    bottom: 0px;
    box-shadow: 5px 5px 20px -5px #000;
    z-index: 11;

    overflow: hidden;
}

.set_g-enter-active, .set_g-leave-active {
    transition: all .2s
}
.set_g-enter, .set_g-leave-to {
    transform: translateX(500px);
}



.set_area{
    /* width: 400px; */
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    padding: 10px;
    /* background-color: brown; */
    
    overflow: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: flex-start;
}

.set_item{
    color: azure;
    user-select: none;
    margin-bottom: 10px;
    width: 98%;
    min-height:40px ;
    line-height: 40px;
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #222;

    box-sizing: border-box;
}
.switch_item{
    float: right;
    margin: 10px auto;
}

.select_box{
    color: azure;
    user-select: none;
    width: 98%;
    min-height:30px ;
    margin: 10px auto;
    border-radius: 5px;
    /* background-color: #111; */

    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    justify-content: space-between;
}
.select_item{
    /* width: 98px; */
    width: 30%;
    min-width: 40px;
    height: 58px;
    border-radius: 5px;
    background-color: #222;
    color: azure;
    text-align: center;
    font-size: 18px;
    line-height: 58px;
    float: left;
    cursor: pointer;
    box-shadow: 2px 2px 10px -3px #111;
    border: 1px solid #222;
}
.now{
    border: 1px solid rgb(58, 58, 58);
    color: rgb(110, 230, 251);
}

.aboutME{
    display: block;
    width: 98%;
    height: 58px;
    border-radius: 5px;
    margin: 10px 0;
    background-color: #222;
    color: azure;
    text-align: center;
    font-size: 18px;
    line-height: 58px;
    cursor: pointer;
    box-shadow: 2px 2px 10px -3px #111;
    text-decoration: none; 

    float: left;
    user-select: none;
}
.chassis{
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.clear{
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: rgba(37, 37, 37, 0.637);
  margin: auto;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
} 
</style>

<style scoped>
/* 前面去写移动端的，这里写web端 */
@media screen and (min-width:720px){
  .search {width:1000px;}
  .search_area_1 .search_logo{
    display: block;
  }
  .search_area_2 .search_logo{
    display: block;
  }
  .search_area_2 .search{
    width: 500px;
    height: 50px;
  }
  .s_item{
    width: 80px;
    border-radius: 16px;
  }
  .s_square{
    width: 80px;
    height: 80px;
    border-radius: 16px;
  }
  .set{
    width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 10px;
    position: fixed;
    right: calc(1vw + 20px);
    top:calc(1vw + 20px);
    box-shadow: 2px 2px 10px -5px rgb(0, 0, 0);
    cursor: pointer;
    z-index: 10;
  }
  .set_box{
    width: 100%;
    max-width: 400px;
    background-color: #333;
    position: fixed;
    right: 20px;
    top:20px;
    bottom: 20px;
    border-radius: 10px;

    overflow: hidden;
}
}
/* 响应式搜索框 */

</style>