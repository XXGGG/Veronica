<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    return {
      
    }
  },
  created(){
    // this.detectionUserData() //检测有没有默认用户数据
    // 把这一把移到 store （也就是vuex里先去操作） 要不然第一次会报错
  },
  methods:{
    // detectionUserData(){
    //   if(!localStorage.getItem('user-defined')){
    //     let data = '{}'
    //     localStorage.setItem('user-defined',JSON.stringify(data))
    //   }
    // }
  }
}
</script>
<style lang="scss">
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
