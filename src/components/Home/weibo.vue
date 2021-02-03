<template>
    <div class="weibo">
        <div class="title">微博热搜</div>
        <div class="box">
            <div v-for="(item,i) in TopSearch"  :key="item.url">
                <a :href="item.url" class="search_url" target="_blank">
                    <div>{{i}} {{item.title}}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'weibo',
    data(){
        return {
        }
    },
    props:['TopSearch'],
    computed:{
        ...mapState([
        ]),
    },
    created(){
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.weibo{
    width: 400px;
    height: calc(100vh - 240px) ;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    position: absolute;
    top:100px;
    left: 200px;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    user-select: none;
    .title{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: brown;
        font-size: 24px;
        overflow: hidden;
        user-select: none;
        margin-bottom:10px ;
        /* background-color: chartreuse; */
    }
    .box{
        width: 100%;
        height: calc(100% - 40px);
        /* background-color: coral; */
        .search_url{
            display: block;
            height: 30px;
            line-height: 30px;
            /* background-color: brown; */
            margin: 5px 0;
        }
    }
    
}

</style>