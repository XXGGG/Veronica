<template>
    <div>
      
        <!-- 设置按钮 -->
        <div class="set"  @click="open_set"></div>

        <div class="mask" v-if="set_show" @click="close_set"></div>
        <!-- 设置面板 -->
        <transition name = "gradually">
            <div class="set_box" v-if="set_show">
                <!-- <div class="close_menu">
                    <i class="close" @click="close_set">❌</i>
                </div> -->

                <div class="set_area">
                    <div>
                        <i @click="change_search_style('search_area_1')">
                            <div class="waw">waw</div>
                        </i>
                        <i @click="change_search_style('search_area_2')">
                            <div class="o_o">o_o</div>
                        </i>
                    </div>

                    <div class="select_box">
                        <div class="select_item" :class="$store.state.search_engine == 'baidu'  ? 'now_engine' : ''" @click="C_engine('baidu')">百度</div>
                        <div class="select_item" :class="$store.state.search_engine == 'google' ? 'now_engine' : ''" @click="C_engine('google')">谷歌</div>
                        <div class="select_item" :class="$store.state.search_engine == 'shougou'? 'now_engine' : ''" @click="C_engine('shougou')">搜狗</div>
                    </div>
                    <div class="set_item">
                        <span>快捷网址</span>
                        <el-switch  class="switch_item"
                                    v-model="shortcut_switch"      
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    @change="switch_btn()">
                        </el-switch>
                    </div>
                </div>

                <!-- <router-link to="/AboutMe" class="aboutME" target="_blank">关于我</router-link> -->

            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'set',
  data () {
    return {
        set_show:false,
        shortcut_switch:this.$store.state.shortcut_area,

        userData:{},//用户自定义数据

        engine: [
                    { value: 'baidu',  label: '百度'},
                    { value: 'google', label: '谷歌'}, 
                    { value: 'shougou',label: '搜狗'},
                ],
        engine_value:'baidu'
    }
  },
  mounted(){
      this.state_init();
  },
  methods:{
    
    open_set(){
        this.set_show = true
    },
    close_set(){
        this.set_show = false
    },

    //拿到用户自定义的数据
    state_init(){
        this.userData = JSON.parse(localStorage.getItem('user-defined'))
    },
    
    //改变搜索栏处的样式
    change_search_style(style){
        this.$store.commit('C_search_area',style)

        this.userData.search_area = style 
        localStorage.setItem('user-defined',JSON.stringify(this.userData))
    },
    // 改变搜索引擎
    C_engine(engine){
        this.$store.commit('C_search_engine',engine)
        this.userData.search_engine = engine 
        localStorage.setItem('user-defined',JSON.stringify(this.userData))
    },
    //快捷键
    switch_btn(data){
        this.$store.commit('C_shortcut_area',this.shortcut_switch)

        this.userData.shortcut_area = this.shortcut_switch 
        localStorage.setItem('user-defined',JSON.stringify(this.userData))

    },
  }
}
</script>

<style scoped>
.set{
    width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 10px;
    position: fixed;
    right: 20px;
    top: 20px;
    box-shadow: 2px 2px 10px -5px rgb(0, 0, 0);
    cursor: pointer;
    z-index: 10;
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
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    background-color: #333;
    position: fixed;
    right: 20px;
    top: 20px;
    bottom: 20px;
    box-shadow: 5px 5px 20px -5px #000;
    z-index: 11;
}
.close_menu{
    width: 100%;
    height: 44px;
    overflow: hidden;
    background-color: rgb(37, 37, 37);
}
.close{
    display: block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin: 10px;
    font-size: 10px;
    background-color: rgb(251, 76, 76);
    border-radius: 50%;
    cursor: pointer;
    float:right;
    box-shadow: 2px 2px 10px -5px rgb(2, 2, 2);
}

.gradually-enter-active, .gradually-leave-active {
    transition: all .2s
}
.gradually-enter, .gradually-leave-to {
    transform: translateX(500px);
}



.set_area{
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    
}


.waw{
    color: azure;
    width: 100px;
    height: 100px;
    line-height: 100px;
    float: left;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(41, 41, 41);
    cursor: pointer;
}
.o_o{
    color: azure;
    width: 100px;
    height: 100px;
    line-height: 100px;
    float: right;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(41, 41, 41);
    cursor: pointer;
}

.set_item{
    color: azure;
    user-select: none;
    margin-bottom: 10px;
    width: 320px;
    min-height:40px ;
    line-height: 40px;
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #222;
}
.switch_item{
    float: right;
    margin: 10px auto;
}

.select_box{
    color: azure;
    user-select: none;
    width: 360px;
    min-height:30px ;
    margin: 10px auto;
    border-radius: 5px;
    /* background-color: #111; */

    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.select_item{
    width: 98px;
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
.now_engine{
    background-color: #dbdbdb;
    border: 1px solid rgb(58, 58, 58);
    color: #000;
}

/* .aboutME{
    display: block;
    width: 360px;
    height: 58px;
    margin: auto;
    border-radius: 5px;
    background-color: #222;
    color: azure;
    text-align: center;
    font-size: 18px;
    line-height: 58px;
    cursor: pointer;
    box-shadow: 2px 2px 10px -3px #111;
    border: 1px solid #222;
    text-decoration: none; 
} */

</style>
