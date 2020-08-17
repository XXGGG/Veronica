<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.inspect();
  },
   methods:{
    // 当打开网页要先进行检查
    inspect(){
      if(!localStorage.getItem('user-defined')){
        this.init_user_data();
      }
    },
    // 初始化用户数据
    init_user_data(){
      let data ={
            'search_area':'search_area_1',
            'search_engine':'baidu',
            'shortcut_area':false,
        }
        localStorage.setItem('user-defined',JSON.stringify(data))
    },
   }
}
</script>

<style>
#app{
  background-color: #222;
  overflow:none;
  color: #f5f5f5;
}
a{
  text-decoration: none;
  color:#f5f5f5;
}
*::-webkit-scrollbar{ 
  background-color: #333;
	display: none;
}
*::-webkit-scrollbar-thumb{ 
  background-color: #555;
	display: none;
}
*::-webkit-scrollbar-corner{ 
  background-color: #111;
	display: none;
}
*{
  overflow-x: hidden;
}
</style>
