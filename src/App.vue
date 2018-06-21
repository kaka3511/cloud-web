<template>
  <div id="app">
    <ul class="layui-nav">
        <li class="layui-nav-item">
          <a href="">天气<span class="layui-badge">{{wetherDesc}}</span></a>
        </li>
         <li class="layui-nav-item">
          <a href="">温度<span class="layui-badge">{{weatherTemp}}</span></a>
        </li>
        <!-- <li class="layui-nav-item">
          <a href="">控制台<span class="layui-badge">9</span></a>
        </li> -->
        <li class="layui-nav-item">
          <a href="">个人中心<span class="layui-badge-dot"></span></a>
        </li>
        <li class="layui-nav-item" lay-unselect="">
          <a href="javascript:;"><img src="http://t.cn/RCzsdCq" class="layui-nav-img">我</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      wetherDesc:'晴',
      weatherTemp:'30°c'
    }
  },
  created:function(){
     this.$ajax.get("http://139.199.59.97:8081/cloud/weather/getWeatherNow?location=wuhan").then(res=>{
      this.wetherDesc = JSON.parse(JSON.stringify(res.data))['responseBody']['weatherDescription'];
      this.weatherTemp = JSON.parse(JSON.stringify(res.data))['responseBody']['weatherTemperature'];
     });
    }

}
</script>

<style>
    @import "../layui/css/layui.css";
</style>
