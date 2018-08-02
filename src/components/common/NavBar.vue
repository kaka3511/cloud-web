<template>
	<div class="header">
		<ul class="layui-nav">
        <li class="layui-nav-item">
          <label href="">天气<span class="layui-badge" style="white-space: nowrap;">{{wetherDesc}} | {{weatherTemp}}</span></label>
        </li>
        <li class="layui-nav-item" lay-unselect="" style="float:right;">
          <a href="javascript:;"><img src="../../assets/logo.png" class="layui-nav-img">我</a>
        </li>
   </ul>
	</div>
  
</template>

<script>
export default {
  name: 'App',
  props:['location'],
  data() {
    return{
      wetherDesc:'',
      weatherTemp:''
    }
  },
  created:function(){
    var url = "http://139.199.59.97:8081/cloud/weather/getWeatherNow?location=" + this.location;
    console.log(url);
     this.$ajax.get(url).then(res=>{
      this.wetherDesc = JSON.parse(JSON.stringify(res.data))['responseBody']['weatherDescription'];
      this.weatherTemp = JSON.parse(JSON.stringify(res.data))['responseBody']['weatherTemperature'];
     });
    }
}
</script>

<style>
 .header .layui-nav {z-index: 1000;}
</style>
