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
                <span>echart测试</span>
                </router-link>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">云市场</a></li>
        <li class="layui-nav-item"><a href="139.199.59.97:19999">NetData监控</a></li>


      </ul>
    </div>
  </div>
      <!-- 内容主体区域 -->
  <div class="layui-body" style="padding: 20px;">
      <router-view></router-view>
  </div>
  <div class="layui-footer" style="text-align: center;">
   	  &copy;湖科四大才子
  </div>
  <div class="site-tree-mobile layui-hide">
	  <i class="layui-icon layui-icon-right"></i>
	</div>
	<div class="site-mobile-shade"></div>
</div>
</template>
<script>


export default {
  name: 'App',
  mounted:function(){
    //JavaScript代码区域
    layui.use(['element','jquery'], function(){
      var element = layui.element;
      var $ = layui.jquery;
      $(".site-tree-mobile").on("click",function(){
      	if($(".layui-side").hasClass("active")){
      		$(".layui-side").removeClass("active");
      	  $(".layui-side").animate({left:"-200px"});
      	  $(".site-mobile-shade").hide();
      	}else{
      		 $(".layui-side").addClass("active");
      	   $(".layui-side").animate({left:"0px"});
      	    $(".site-mobile-shade").show();
      	}

      })
      $(".site-mobile-shade").on("click",function(){
      	  $(".layui-side").animate({left:"-200px"});
      	   $(".site-mobile-shade").hide();
      	   $(".layui-side").removeClass("active");
      })
    });

  }
}
</script>

<style>
   @import "../../../static/css/layui.css";
   @media screen and (max-width: 750px){
   	.site-tree-mobile {
 	      display: block!important;
		    position: fixed;
		    z-index: 100000;
		    bottom: 15px;
		    left: 15px;
		    width: 50px;
		    height: 50px;
		    line-height: 50px;
		    border-radius: 2px;
		    text-align: center;
		    background-color: rgba(0,0,0,.7);
		    color: #fff;
     }
     .site-mobile-shade{
     	    content: '';
			    position: fixed;
			    top: 0;
			    bottom: 0;
			    left: 0;
			    right: 0;
			    background-color: rgba(0,0,0,.8);
			    z-index: 900;
			    display: none;
     }
     .layui-layout-admin .layui-body{
     	 position: static;
     	 overflow: auto;
     	 overflow-y: scroll;
     }
     .layui-layout-admin .layui-footer{
     	 position: static;
     }
    .layui-layout-admin .layui-side{
       left: -200px;
     }
   }

</style>
