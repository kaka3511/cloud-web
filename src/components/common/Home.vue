<template>
<div>
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">
        <div class="banner">
           <div class="layui-carousel" id="banner1">
              <div carousel-item>
                  <div>
                     <img src="../../../static/images/1.jpg" alt="" width="100%"/>
                  </div>
                  <div>
                     <img src="../../../static/images/2.jpg" alt="" width="100%"/>
                  </div>
                  <div>
                     <img src="../../../static/images/3.jpg" alt="" width="100%"/>
                  </div>
                  <div>
                     <img src="../../../static/images/4.jpg" alt="" width="100%"/>
                  </div>
                  <div>
                     <img src="../../../static/images/5.jpg" alt="" width="100%"/>
                  </div>
                  <div>
                     <img src="../../../static/images/6.jpg" alt="" width="100%"/>
                  </div>
              </div>
           </div>
        </div>
        <div class="product-list">
          <div class="nav" style="margin-top: 20px;">
            <ul class="layui-nav" lay-filter="">
              <li class="layui-nav-item"><a href="">首页推荐</a></li>
              <li class="layui-nav-item layui-this"><a href="">产品</a></li>
              <li class="layui-nav-item"><a href="">大数据</a></li>
              <li class="layui-nav-item">
                <a href="javascript:;">解决方案</a>
                <dl class="layui-nav-child"> <!-- 二级菜单 -->
                  <dd><a href="">移动模块</a></dd>
                  <dd><a href="">后台模版</a></dd>
                  <dd><a href="">电商平台</a></dd>
                </dl>
              </li>
              <li class="layui-nav-item"><a href="">社区</a></li>
            </ul>
          </div>
          <div class="layui-row" style="margin: 0 -20px;">
                <div class="layui-col-xs6 layui-col-sm6 layui-col-md3">
                    <div class="my-thumbnail">
                      <img src="../../../static/images/1522149048.jpeg" alt=""  width="100%"/>
                      <div class="my-caption">
                          <p>每天进步一点</p>
                          <a href="javascript:;" class="layui-btn">确定</a>
                      </div>
                    </div>
                </div>
                <div class="layui-col-xs6 layui-col-sm6 layui-col-md3">
                    <div class="my-thumbnail">
                      <img src="../../../static/images/1522149048.jpeg" alt=""  width="100%"/>
                      <div class="my-caption">
                          <p>每天进步一点</p>
                          <a href="javascript:;" class="layui-btn">确定</a>
                      </div>
                    </div>
                </div>
                <div class="layui-col-xs6 layui-col-sm12 layui-col-md3">
                    <div class="my-thumbnail">
                      <img src="../../../static/images/1527849878.png" alt=""  width="100%"/>
                      <div class="my-caption">
                          <p>每天进步一点</p>
                          <a href="javascript:;" class="layui-btn">确定</a>
                      </div>
                    </div>
                </div>
                <div class="layui-col-xs4 layui-col-sm7 layui-col-md3">
                    <div class="my-thumbnail">
                        <img src="../../../static/images/1529895337.jpeg" alt=""  width="100%"/>
                        <div class="my-caption">
                            <p>每天进步一点</p>
                          <a href="javascript:;" class="layui-btn">确定</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  </div>
   <div class="layui-footer">
    <!-- 底部固定区域 -->
    © author ：盼盼食品
  </div>
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

    layui.use("carousel",function(){
       var carousel = layui.carousel ;
       //创造实例
       carousel.render({
          elem: "#banner1",
          width: "100%",
          heigth:"auto",
          arrow: "always",
          interval : 2000,
          anim: "fade"
       })
    })
  }
}
</script>

<style>
   .my-thumbnail { margin: 20px;}
   .my-caption p { padding: 10px 0; font-size: 16px; color: #666;}
</style>
