<template>
    <div class="uploadFile">
    <!-- 内容主体区域 -->
	    <div class="layui-upload">
	      <button type="button" class="layui-btn" id="test1">上传文件</button>
	      <div class="layui-upload-list">
	        <img class="layui-upload-img" id="demo1">
	        <p id="demoText"></p>
	      </div>
	    </div>

	    <!-- 模拟进度条 -->
	    <div class="layui-progress layui-progress-big" lay-showpercent="true" lay-filter="demo" hidden="true">
	      <div class="layui-progress-bar layui-bg-pink" lay-percent="0%"></div>
	    </div>
	    <h4><span>已上传的图片</span></h4>
	    <table class="layui-hide" id="test" lay-filter="test"></table>
	    <h4><span>已上传的文件</span></h4>
	    <table class="layui-hide" id="test2" lay-filter="test2"></table>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted:function(){




        //图片表格展示
        layui.use('table', function(){
        var table = layui.table;

          table.render({
            elem: '#test',
            url:'http://139.199.59.97:8081/cloud/file/queryFile?fileType=image',
            // url:'http://139.199.59.97:80/cloud/file/queryFile?fileType=image',
            cols: [[
              {field:'id', width:120, title: 'ID', sort: true},
              {field:'fileName', width:700, title: '名称'},
              {field:'fileType', width:200, title: '类型'},
              {field:'url', width:300, title: '内容',templet:function(d){
                return '<a target="view_window" href="'+d.url+'"><img style="max-width:100%;max-height:100%" src="'+d.url+'">'+'</img></a>';}},

              {field:'updateTime', width:300, title: '更新时间'}
            ]],
            page: true,
            limit:5,
            limits:[5,10,15,20]
          });
        });


        //文件表格展示
        layui.use('table', function(){
        var table = layui.table;

          table.render({
            elem: '#test2',
            url:'http://139.199.59.97:8081/cloud/file/queryFile',
            // url:'http://139.199.59.97:80/cloud/file/queryFile',
            cols: [[
              {field:'id', width:120, title: 'ID', sort: true},
              {field:'fileName', width:700, title: '名称'},
              {field:'fileType', width:200, title: '类型'},
              {field:'url', width:300, title: '内容',templet:function(d){
                return '<a target="view_window" href="'+d.url+'">'+'点击查看'+'</a>';}},

              {field:'updateTime', width:300, title: '更新时间'}
            ]],
            page: true,
            limit:5,
            limits:[5,10,15,20]
          });
        });


        //上传
        layui.use('upload', function(){
          var $ = layui.jquery;
          var element = layui.element;
          var upload = layui.upload;
          var timer;
          //执行实例
          var uploadInst = upload.render({
            accept: 'file',
            elem: '#test1' //绑定元素
            ,url: 'http://139.199.59.97:8081/cloud/file/uploadFile' //上传接口
            // ,url:'http://139.199.59.97:80/cloud/file/uploadFile'
            ,before: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  $('.layui-progress').removeAttr("hidden");
                  var n = 0;
                  timer = setInterval(function(){
                    n = n + Math.random()*10|0;
                    if(n>90){
                      n = 99;
                      clearInterval(timer);
                    }
                    element.progress('demo', n+'%');
                  }, 300+Math.random()*1000);

              }
            ,done: function(res){
                clearInterval(timer);
                element.progress('demo', 100+'%');
                layer.msg("上传成功", {icon: 6});
                setTimeout(function(){$('.layui-progress').attr("hidden", "hidden");},2000);

              //上传完毕回调
            }
            ,error: function(){
               layer.msg("上传失败", {icon: 6});
              //请求异常回调
            }
          });
        });


    layui.use('util', function(){
      var util = layui.util;

      //执行
      util.fixbar({
        bar1: true
        ,click: function(type){
          console.log(type);
          if(type === 'bar1'){
            layer.msg('©author ：kaka3511')
          }
        }
      });
    });



  }
}
</script>

<style>
	 h4 { color:#333; font-size: 18px; padding: 10px 0px ;}
	 h4 span { position: relative; padding-left: 20px;}
	 h4 span:after { content: ""; display: block; position: absolute; top: 0; left: 0; width: 3px; background: #009688; height: 100%;}
</style>
