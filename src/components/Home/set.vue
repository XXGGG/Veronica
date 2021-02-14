<template>
<div @click.self="close()">
    <!-- 设置面板 -->
    <div class="set_box" >
        <div class="set_area">
            <div class="set_left">
                <div class="avatar" @click="set_selects('default')">
                    <img src="img/avatar.jpg" alt="">
                </div>
                <div class="name">Veronica</div>
                <div class="options">
                    <div class="item" @click="set_selects('set')">设置</div>
                    <div class="item" @click="set_selects('shortcut')">快捷网址</div>
                    <div class="item" @click="set_to_home_page()">设为首页</div>
                    <div class="item" @click="set_selects('about')">关于</div>
                </div>
            </div>

            <div class="set_right">
                <!-- 默认 -->
                <div v-if="set_select=='default'">
                    <div class='readme'>
                        <h1>本网页仅作为学习使用</h1>
                        <p>由于手机端上首页作用太小且没必要,所以暂无适配。</p>
                        <p>“Veronica”名词来源《钢铁侠》中的马克44号。</p>
                        <p>更多功能未来会持续更新~ 敬请期待！</p>
                        <p>Github项目地址：<a href="https://github.com/XXGGG/Veronica">[Mark-Veronica]</a> </p>
                    </div>
                </div>
                <!-- 设置 -->
                <div v-if="set_select=='set'">
                    <!-- 选择搜索引擎 -->
                    <div class="set_item">
                        <span>搜索引擎</span>
                        <el-select  v-model="search_engine_value"   
                                    @change="set_custom('searchEngine')"
                                    size="mini">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                        </el-select>
                    </div>
                    <!-- 是否开启快捷网址 -->
                    <div class="set_item">
                        <span>快捷网址</span>
                        <el-switch  v-model="shortcut_area_value"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value=true
                                    inactive-value=false
                                    @change="set_custom('shortcutArea')">
                        </el-switch>
                    </div>
                    <div class="set_item">
                        <span>在新页面打开</span>
                        <el-switch  v-model="shortcut_target_value"      
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value="_blank"
                                    inactive-value="_self"
                                    @change="set_custom('shortcutTarget')">
                        </el-switch>
                    </div>
                    <div class="set_item">
                        <span>必应每日一图</span>
                        <el-switch  v-model="bg_picture_value"      
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value="true"
                                    inactive-value="false"
                                    @change="set_custom('bgPicture')">
                        </el-switch>
                    </div>
                    <div class="set_item">
                        <span>首页清新~</span>
                        <el-switch  v-model="home_clean_value"      
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value="true"
                                    inactive-value="false"
                                    @change="set_custom('homeClean')">
                        </el-switch>
                    </div>
                </div>

                <!-- 快捷 -->
                <div v-if="set_select=='shortcut'">
                    <div class="title">已选择的快捷网址：（{{shortcut_list.length}}/20）</div>
                    <div class="shortcut_select">
                        <div class="select_item select_item_remove_fear" v-for="i in shortcut_list" :key="i.id">
                            <img class="remove_fear" :src="i.img" @click="remove_shortcut(i.id)"/>
                            <div class="i_name">{{i.name}}</div>
                            <div class="i_icon" @click="remove_shortcut(i.id)">❌</div>
                        </div>
                    </div>
                    <div class="title">可选的快捷网址：</div>
                    <div class="shortcut_select">
                        <div class="select_item select_item_add_happy" v-for="i in shortcut_all_list" :key="i.id" v-show="!filter_shortcut(i.id)">
                            <img class="add_happy" :src="i.img" @click="add_shortcut(i.id)"/>
                            <div class="i_name">{{i.name}}</div>
                            <div class="i_icon" @click="add_shortcut(i.id)">➕</div>
                        </div>
                    </div>
                </div>

                <!-- 关于 -->
                <div v-if="set_select=='about'">
                    <a class="aboutME" href="https://xxggg.gitee.io" target="_blank">博客(gitee pages)</a>
                    <a class="aboutME" href="https://xxggg.github.io" target="_blank">博客(github pages)</a>
                    <a class="aboutME" href="https://github.com/XXGGG" target="_blank">Github</a>
                    <a class="aboutME" href="https://xxggg.gitee.io/vue2-demo" target="_blank">其他作品</a>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'
export default {
    name:'set',
    data(){
        return {
            set_show:true,//打开设置
            set_select:'set',
            options:[{
                        value: 'baidu',
                        label: '百度'
                    }, {
                        value: 'google',
                        label: '谷歌'
                    }, {
                        value: 'shougou',
                        label: '搜狗'
                    }],
            search_engine_value:'',
            shortcut_area_value:'',
            shortcut_target_value:'',
            bg_picture_value:'',
            home_clean_value:'',
            shortcut_all_list:[],
            shortcut_list:[],
            shortcut_id:[],
        }
    },
    props:{
        bgImg:{
            type:String
        }
    },
    computed:{
        ...mapState([
            'search_engine',
            'shortcut_area',
            'shortcut_target',
            'bg_picture',
            'home_clean',
            'shortcutList'
        ]),
        
    },
    watch:{
        shortcut_id(){
            this.verify()
        }
    },
    created(){
        this.search_engine_value = this.search_engine
        this.shortcut_area_value = this.shortcut_area
        this.shortcut_target_value = this.shortcut_target
        this.bg_picture_value = this.bg_picture
        this.home_clean_value = this.home_clean
        this.get_shortcut_all_list();//得到列表
    },
    methods:{
        close(){
            this.$emit('close_set');
        },
        ...mapMutations([
            'Change_search_engine',
            'Change_shortcut_area',
            'Change_shortcut_target',
            'Change_bg_picture',
            'Change_home_clean',
            'Change_url_list'
        ]),
        // 选择类目
        set_selects(e){
            this.set_select = e
        },
        //
        set_custom(xxg){
            switch(xxg){
                case "searchEngine":{
                    this.Change_search_engine(this.search_engine_value)
                    break;
                }
                case "shortcutArea":{
                    this.Change_shortcut_area(this.shortcut_area_value);
                    break;
                }
                case "shortcutTarget":{
                    this.Change_shortcut_target(this.shortcut_target_value);
                    break;
                }
                case "bgPicture":{
                    this.Change_bg_picture(this.bg_picture_value);
                    break;
                }
                case "homeClean":{
                    this.Change_home_clean(this.home_clean_value);
                    // location.reload(); //刷新当前页面
                    this.$forceUpdate()
                    break;
                }
            }
        },
        
        get_shortcut_all_list(){
           this.axios.get('mock/url.json').then(res=>{
               if(res.status == 200){
                   this.shortcut_all_list = res.data.data.shortcut_all_list
                   this.get_url_id();
               }
           }).catch(err=>{
               console.log(err)
           })
       },
       get_url_id(){
            this.shortcut_id = []
            this.shortcutList.forEach(element =>{
                this.shortcut_id.push(element.id)
            })
        },
       //核查是否已选择的了
        verify(){
            this.shortcut_list = []
            this.shortcut_id.forEach(id => {
                this.shortcut_all_list.forEach(element => {
                    if(element.id == id){
                        this.shortcut_list.push(element)
                    }
                });
            });
            this.Change_url_list(this.shortcut_list)
        },
        add_shortcut(id){
            if(this.shortcut_list.length >= 20){
                return
            }
            if(JSON.stringify(this.shortcut_id).includes(id)){
                return
            }else{
                this.shortcut_id.push(Number(id))
            }
        },
        remove_shortcut(id){
            if(JSON.stringify(this.shortcut_id).includes(id)){
                this.shortcut_id = this.shortcut_id.filter((i)=>{
                    return i != id
                });
            }
        },
        filter_shortcut(id){
            return JSON.stringify(this.shortcut_id).includes(id)
        },
        set_to_home_page(){
            alert('无法设置为首页，请在浏览器设置中设置！')
        }
    }
}
</script>

<style lang="scss" scoped>
.set_box{
    /* width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    overflow: hidden;
    
    display: flex;
    justify-content: center;
    align-items: center; */
    z-index: 100;
    box-shadow: 6px 6px 10px -6px rgb(0, 0, 0);
    .set_area{
        width: 1200px;
        height: 700px;
        background-color: rgba(34, 34, 34, 0.96);
        border-radius: 16px;
        margin: auto;
        display: flex;
        box-shadow: 6px 6px 10px -6px rgb(0, 0, 0);
        .set_left{
            width: 40%;
            height: 100%;
            /* background-color: aqua; */
            box-sizing: border-box;
            border-right: 1px solid rgb(59, 59, 59);
            .avatar{
                width: 160px;
                height: 160px;
                margin: 40px auto 0px;
                border-radius: 50%;
                border:5px solid rgb(140, 218, 95);
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                width: 100%;
                height: 60px;
                padding: 0 50px;
                box-sizing: border-box;
                line-height: 60px;
                text-align: center;
                font-size: 30px;
                color: rgb(221, 221, 221);
                box-shadow: 4px 4px 10px -8px rgb(0, 0, 0);
                user-select: none;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .options{
                width: 100%;
                height:calc(700px - 270px);
                .item{
                    width:90%;
                    margin:14px auto;
                    border-radius: 10px;
                    height: 60px;
                    background-color: #161616;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: rgb(221, 221, 221);
                    user-select: none;
                    cursor: pointer;
                }
            }
        }
        .set_right{
            width: 60%;
            height: 100%;
            box-sizing: border-box;
            padding: 10px 0;
            /* background-color: rgb(214, 223, 86); */
            .readme{
                width: 90%;
                margin: 40px auto;
                height: 100%;
                padding: 20px;
                box-sizing: border-box;
                font-size: 24px;
                color:rgb(236, 236, 236);
                line-height: 50px;
                border-radius: 10px;
                background-color: #333;
            }
            .set_item{
                color: azure;
                user-select: none;
                width: 90%;
                margin: 10px auto;
                padding: 14px;
                border-radius: 10px;
                /* background-color: #222; */
                background-color: #161616;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .title{
                padding: 10px;
                color:azure;
                font-size: 20px;
            }
            .shortcut_select{
                width: 100%;
                min-height: 100px;
                /* background: rgb(255, 60, 0); */
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                user-select: none;
                .select_item{
                    width: 80px;
                    height: 90px;
                    margin: 10px;
                    padding: 10px;
                    cursor: pointer;
                    position: relative;
                    /* background-color: chartreuse; */
                    transition: all 1s;
                    overflow: hidden;
                    img{
                        width: 60px;
                        height: 60px;
                        border-radius: 10px;
                        margin: auto;
                        display: block;
                    }
                    .i_name{
                        height: 30px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: azure;
                        font-size: 14px;
                    }
                }
                .i_icon{
                    width: 80px;
                    height: 60px;
                    line-height: 60px;
                    position: absolute;
                    /* background-color: aqua; */
                    top: 10px;
                    left:10px;
                    font-size: 20px;
                    text-align: center;
                    display: none;
                }
                .select_item_remove_fear:hover .remove_fear{
                    animation: fear 1.4s infinite;
                }
                .select_item_add_happy:hover .add_happy{
                    animation: happy 1.4s infinite;
                }
                .select_item:hover .i_icon{
                    display: block;
                }
                @keyframes fear {
                    0%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                    10%{transform: rotate(-4deg) translateX(0px) translateY(0px);}
                    20%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                    30%{transform: rotate(-4deg) translateX(0px) translateY(0px);}
                    40%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                    50%{transform: rotate(-4deg) translateX(0px) translateY(0px);}
                    60%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                    70%{transform: rotate(-4deg) translateX(0px) translateY(0px);}
                    80%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                    90%{transform: rotate(-4deg) translateX(0px) translateY(0px);}
                    100%{transform: rotate(4deg) translateX(0px) translateY(-2px);}
                }
                @keyframes happy {
                    0%{
                        transform: scale(1);
                    }
                    50%{
                        transform: scale(1.1);
                    }
                    100%{
                        transform: scale(1);
                    }
                }
            }
            .aboutME{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                height: 60px;
                border-radius: 10px;
                margin: 14px auto;
                background-color: #161616;
                color: azure;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                box-shadow: 2px 2px 10px -3px #111;
                text-decoration: none; 
                user-select: none;
            }
        }
    }
}



</style>