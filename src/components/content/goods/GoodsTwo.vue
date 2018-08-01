<template>
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">

        <div class="layui-upload">
          <button type="button" class="layui-btn" id="test1">上传文件</button>
          <div class="layui-upload-list">
            <img class="layui-upload-img" id="demo1">
            <p id="demoText"></p>
          </div>
        </div>
    </div>
    已上传的图片
    <table class="layui-hide" id="test" lay-filter="test"></table>
    <hr>
    已上传的文件
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
            // url:'http://localhost:80/cloud/file/queryFile?fileType=image',
            cols: [[
              {field:'id', width:120, title: 'ID', sort: true},
              {field:'fileName', width:700, title: '名称'},
              {field:'fileType', width:200, title: '类型'},
              {field:'url', width:300, title: '内容',templet:function(d){
                return '<a target="view_window" href="'+d.url+'"><img style="max-width:100%;max-height:100%" src="'+d.url+'">'+'</img></a>';}},

              {field:'updateTime', width:300, title: '更新时间'}
            ]],
            page: true,
            limit:10
          });
        });


        //文件表格展示
        layui.use('table', function(){
        var table = layui.table;

          table.render({
            elem: '#test2',
            url:'http://139.199.59.97:8081/cloud/file/queryFile',
            // url:'http://localhost:80/cloud/file/queryFile',
            cols: [[
              {field:'id', width:120, title: 'ID', sort: true},
              {field:'fileName', width:700, title: '名称'},
              {field:'fileType', width:200, title: '类型'},
              {field:'url', width:300, title: '内容',templet:function(d){
                return '<a target="view_window" href="'+d.url+'">'+'点击查看'+'</a>';}},

              {field:'updateTime', width:300, title: '更新时间'}
            ]],
            page: true,
            limit:10
          });
        });

        //上传
        layui.use('upload', function(){
          var upload = layui.upload;

          //执行实例
          var uploadInst = upload.render({
            accept: 'file',
            elem: '#test1' //绑定元素
            ,url: 'http://139.199.59.97:8081/cloud/file/uploadFile' //上传接口
            // ,url:'http://localhost:80/cloud/file/uploadFile'
            ,done: function(res){
                layer.msg("上传成功", {icon: 6});
              //上传完毕回调
            }
            ,error: function(){
               layer.msg("上传失败", {icon: 6});
              //请求异常回调
            }
          });
        });




  }
}
</script>

<style>
</style>
