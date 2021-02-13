<template>
    <div class="shortcut_area">
        <div class="shortcut" >
            <a :href="item.link" class="shortcut_item" v-for="item in shortcutList" :key="item.name" :target="shortcut_target">
              <div class="shortcut_square"><img :src="item.img" alt="图片"></div>
              <!-- <div class="shortcut_text" v-if="shortcut_name == 'open'">{{item.name}}</div> -->
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'shortcut',
    data(){
        return {
        //    shortcut_list:[]
        }
    },
    computed:{
        ...mapState([
            'shortcut_target',
            'shortcut_name',
            'shortcutList'
        ]),
    },
    created(){
        // this.get_shortcut_list();
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.shortcut_area{
    width: 100%;
    height: 120px;
    /* background-color: #333; */
    position: fixed;
    bottom: 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    justify-content: center;
    z-index: 3;
}
/* 快捷网址 */
.shortcut{
    min-width: 80px;
    max-width: 90vw;
    height: 70px;
    border-radius: 30px;
    background-color: rgba(51, 51, 51, 0.8);
    box-shadow: 2px 2px 16px -6px rgb(0, 0, 0);
    padding: 10px 10px;
    transition: all .2s;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    .shortcut_item{
        width: 60px;
        /* background-color: cornflowerblue; */
        border-radius: 10px;
        float: left;
        margin: 10px 10px;
        transition: all .2s ease-in-out;
        &:hover{
            transform: scale(1.2);
        }
        &:hover .s_square{
            box-shadow: 0px 0px 14px -3px #0bf7ff;
        }
        .shortcut_square{
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 10px;
            margin: auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shortcut_text{
            width: 100%;
            /* height: 40px; */
            /* line-height: 40px; */
            font-size: 14px;
            text-align: center;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>