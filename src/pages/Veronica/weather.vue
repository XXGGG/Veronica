<template>
    <div class="weather_box" v-if="wdata != ''">
        {{wdata.basic.admin_area}}省{{wdata.basic.location}}市
        {{wdata.now.cond_txt}}

        <div class="weather_number">{{wdata.now.fl}}°</div>
        
    </div>
</template>

<script>
export default {
  name: 'weather',
  data () {
    return {
        key:'506444a4ad0a4ceb8c07dbead9fe9f10',
        city:'guangzhou',
        wdata:'',
    }
  },
  mounted(){
      this.loading_weather();
  },
  methods:{
      loading_weather(){
          let data = {
                        "province": "安徽",
                        "city": "合肥",
                        "county": "蜀山区"
                    }
          this.axios.get("https://free-api.heweather.net/s6/weather/now?location="+ this.city+"&key="+ this.key).then(res=>{
              this.wdata = res.data.HeWeather6[0]
              console.log(res)
          })
      },
  }
}
</script>

<style scoped>
.weather_box{
    width: 160px;
    height: 80px;
    border-radius: 10px;
    padding: 20px;
    background-color: rgba(197, 197, 197, 0.87);
    position: fixed;
    top:0
}
.weather_number{
    font-size: 30px;
}
</style>
