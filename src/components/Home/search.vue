<template>
    <div>
        <form :action="url" target="_blank" method="get">
            <input  :placeholder="url_placeholeder" 
                    :name="url_name" 
                    class="search" 
                    type=text
                    v-model="search_value" 
                    @keydown.enter="handleSubmit()">
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'search',
    data(){
        return {
            url:'http://www.baidu.com/baidu',
            url_name:'word',
            url_placeholeder:'百度搜索',
            search_value:''
        }
    },
    computed:{
        ...mapState([
            'search_engine'
        ]),
    },
    created(){
        this.change_search_engine();
    },
    watch:{
        search_engine(){
            this.change_search_engine()
        }
    },
    methods:{
        //清空输入框
        handleSubmit(event){
            setTimeout(() => {
                this.search_value = '';
            }, 1000);
        },
        change_search_engine(){
            switch(this.search_engine){
                case 'baidu':{
                    this.url = 'http://www.baidu.com/baidu',
                    this.url_name = 'word',
                    this.url_placeholeder = '百度搜索'
                    return
                }
                case 'google':{
                    this.url = 'http://www.google.com/search',
                    this.url_name = 'q',
                    this.url_placeholeder = 'Google搜索'
                    return
                }
                case 'shougou':{
                    this.url = 'http://www.sogou.com/web',
                    this.url_name = 'query',
                    this.url_placeholeder = '搜狗搜索'
                    return
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.search{
    display: block;
    max-width: 600px;
    width: 76vw;
    height: 50px;
    background-color: rgba(19, 19, 19, 0.8);
    margin:20px auto 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 16px -6px #000;
    color: #F5F5F5;
    padding: 0 20px;
    font-size: 20px;
    border:none;
    /* 去掉点击发光 */
    outline: none;
}
</style>