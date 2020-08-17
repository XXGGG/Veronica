<template>
  <div class="background">
    <div class="blackboard">
      <img class="myPhoto" src="../../assets/XIEXIAGE.jpg" alt="myPhoto">
      <div class="myName"> 谢夏戈</div>

      <div class="myInto">
        <img src="../../assets/github.png" alt="github" style="background:#f5f5f5;border-radius:5%"> GitHub：<a href="https://github.com/XXGGG">XXGGG</a> 
      </div>

      <div class="myInto">
        <img src="../../assets/bilibili.png" alt="bilibili"> Bilibili：<a href="https://space.bilibili.com/5276030">零加小鸡居</a>
      </div>

      <div class="myInto">
        <img src="../../assets/weibo.png" alt="weibo"> 微博：<a href="https://weibo.com/2472496944">谢夏戈戈戈</a>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  components:{
  },
  data () {
    return {
    }
  },
  mounted(){
  },
  methods:{
    
    
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
  min-width: 950px;
  min-height: 100vh;
  background-color: #222;
  font-family: Comic Sans MS;
  position: absolute;
  color:#f5f5f5
}

.blackboard{
  width:950px;
  min-height: 200px;
  margin: 50px auto;
  border-radius: 5px;
  padding: 20px;
  background-color: #111;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 20px -5px rgb(0, 0, 0);
}

.myPhoto{
  display: block;
  width: 200px;
  height: 200px;
  margin: 20px auto 0;
  border-radius: 50%;
  position: relative;
  border:6px  solid rgb(54, 54, 54);
  box-shadow: 3px 3px 20px -5px rgb(0, 0, 0);
}
.myName{
  text-align: center;
  font-size: 40px;
  padding: 10px;
}

.myInto{
  
  padding: 10px 40px;
  font-size: 30px;
  color: #68a5df;
}
.myInto a{
  color: rgb(250, 118, 140);
}
.myInto img{
  width: 30px;
  vertical-align: top;
}
</style>