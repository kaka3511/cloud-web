<template>
  <div id="app">
    <ul class="layui-nav">
        <li class="layui-nav-item">
          <a href="">天气<span class="layui-badge">9</span></a>
        </li>
        <li class="layui-nav-item">
          <a href="">控制台<span class="layui-badge">9</span></a>
        </li>
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
  created:function(){
     this.$ajax.get("http://localhost/cloud/weather/getWeatherNow?location=wuhan").then(res=>{
      console.log(res.data);
     });
    }

}
</script>

<style>
    @import "../layui/css/layui.css";
</style>
