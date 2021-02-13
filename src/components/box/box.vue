<template>
    <div class="box" v-if="update">
        <el-carousel height="700px" :autoplay='false' :loop='false' trigger="click" indicator-position="none">
            <el-carousel-item v-if="home_clean == 'true'">
            </el-carousel-item>
            <el-carousel-item  v-if="false">
                <div class="box_item">
                    <div class="hotSearch weibo">
                        <h1>微博热搜</h1> 
                    </div>
                    <div class="hotSearch zihu">
                        <h1>知乎热搜</h1>
                    </div>
                    <div class="hotSearch bili">
                        <h1>b站话题</h1>
                    </div>
                    <div class="hotSearch txxw">
                        <h1>腾讯新闻</h1>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item > 
                <div class="box_item tool">
                    <h1>Mark-工具箱</h1>
                    <div class="tool_select">
                        <el-button size="mini" @click="urlType='all'" :type="urlType == 'all' ? 'primary' : ''">全部资源</el-button>
                        <el-button size="mini" @click="urlType='img'" :type="urlType == 'img' ? 'primary' : ''">照片</el-button>
                        <el-button size="mini" @click="urlType='code'" :type="urlType == 'code' ? 'primary' : ''">编程</el-button>
                        <el-button size="mini" @click="urlType='design'" :type="urlType == 'design' ? 'primary' : ''">设计</el-button>
                        <el-button size="mini" @click="urlType='music'" :type="urlType == 'music' ? 'primary' : ''">音乐</el-button>
                        <el-button size="mini" @click="urlType='drawing'" :type="urlType == 'drawing' ? 'primary' : ''">绘画</el-button>
                        <el-button size="mini" @click="urlType='movie'" :type="urlType == 'movie' ? 'primary' : ''">电影</el-button>
                        <el-button size="mini" @click="urlType='mark'" :type="urlType == 'mark' ? 'primary' : ''">Mark</el-button>
                    </div>

                    <div class="tool_box">
                        <span   v-for="(i,index) in urlList.all" :key=index>
                            <a class="tool_item" :href="i.url" target="_blank" v-if="urlType == i.type || urlType == 'all'" >
                                <img :src="i.img">
                                <div class="tool_name">{{i.name}}</div>
                                <div class="tool_details">{{i.details}}</div>
                            </a>
                        </span>
                    </div>

                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import url from '../../resource/url.js'
export default {
    name:'box',
    data(){
        return {
            urlList:url.urlList,
            urlType:'all',
            update:'true'
        }
    },
    computed:{
        ...mapState([
            'home_clean',
        ]),
    },
    watch:{
        home_clean(){
            // 移除组件
            this.update = false
            // 在组件移除后，重新渲染组件
            // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
            this.$nextTick(() => {
                this.update = true
            })
        }
    },
    created(){
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 1320px;
    /* height: calc(100vh - 90px - 130px); */
    height: 700px;
    margin: 20px auto 0;
    /* background-color: rgba(0, 255, 255, 0.637); */
    user-select: none;
}
.box_item{
    width: 1200px;
    height: 100%;
    border-radius: 10px;
    padding: 0 60px;
    h1{ margin:  10px 0;}
    .hotSearch{
        width: 23%;
        margin: 0 1%;
        height: 700px;
        float: left;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.4);
        h1{ font-size: 24px;}
    }
    .weibo{color: rgb(255, 52, 52);}
    .zihu{color: rgb(71, 135, 255);}
    .bili{color: rgb(248, 117, 178);}
    .txxw{color: rgb(93, 255, 107);}

    h1{
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        /* box-shadow: 1px 1px 10px -4px #333; */
    }
}
.tool{
    /* background-color: rgb(255, 255, 255); */
    .tool_select{
        padding: 0 10px;
    }
    .tool_box{
        width: 100%;
        height: 520px;
        background-color: rgba(192, 192, 192, 0.4);
        margin: 20px 0;
        box-sizing: border-box;
        border-radius: 10px;
        .tool_item{
            display: block;
            width: 280px;
            height: 110px;
            background-color: #fff;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 14px;
            margin: 10px ; 
            color: #333;
            float: left;
            box-shadow: 2px 2px 10px -8px rgb(0, 0, 0);
            overflow: hidden;
            cursor: pointer;
            &:hover{
                box-shadow: 2px 2px 10px -4px rgb(0, 0, 0);
                transform: translate(0,-1px);
                transition: all .5s;
            }
            img{
                width: 32px;
                height: 32px;
                margin: 9px;
                /* border-radius: 50%; */
                border-radius: 5px;
                float: left;
            }
            .tool_name{
                float: left;
                height: 50px;
                width: 172px;
                display: flex;
                align-items: center;
                padding: 0 10px;
                font-weight: bold;
            }
            .tool_details{
                float: left;
                width: 100%;
                height: 36px;
                line-height: 36px;
                overflow: hidden;
                box-sizing: border-box;
                font-size: 14px;
                padding: 0 10px;
            }
        }
    }
}
</style>