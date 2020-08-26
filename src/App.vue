<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
   
  },
   methods:{
    
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
