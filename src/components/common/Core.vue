<template>
<div class="layui-layout layui-layout-admin">

  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item">
            <a href="">首页</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed">
          <a href="javascript:;">测试页面</a>
          <dl class="layui-nav-child">
            <dd>
                <router-link :to="{name:'GoodsOne'}">
                <span>爬虫小测试</span>
                </router-link>
            </dd>
            <dd>
                <router-link :to="{name:'GoodsTwo'}">
                <span>文件上传测试</span>
                </router-link>
            </dd>
            <dd>
                <router-link :to="{name:'GoodsThree'}">
                <span>列表三</span>
                </router-link>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">云市场</a></li>
        <li class="layui-nav-item"><a href="">发布商品</a></li>


      </ul>
    </div>
  </div>
      <!-- 内容主体区域 -->
      <router-view></router-view>




</div>
</template>
<script>


export default {
  name: 'App',
  created:function(){
    //JavaScript代码区域
    layui.use('element', function(){
      var element = layui.element;
    });
  }
}
</script>

<style>
   @import "../../../static/css/layui.css";
</style>
