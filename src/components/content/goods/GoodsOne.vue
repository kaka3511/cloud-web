<template>
  <div>
    <!-- 内容主体区域 -->
    <div class="demoTable">
                 搜索标题：
      <div class="layui-inline">
          <input class="layui-input" name="keyword" id="demoReload" autocomplete="off">
      </div>
      <button class="layui-btn" data-type="reload">搜索</button>
      <button class="layui-btn" v-on:click="updateNews">同步网易推荐新闻标题</button>
      <hr>
      <div class="layui-upload">
        <a href="http://139.199.59.97/新闻上传模板.xlsx">模板下载</a>
        <button type="button" class="layui-btn" id="uploadBtn">上传数据</button>
        <button type="button" class="layui-btn"
        onclick="window.location.href='http://139.199.59.97:8081/cloud/news/exportNews'">导出数据</button>
        <!-- 模拟进度条 -->
      <div class="layui-progress layui-progress-big" lay-showpercent="true" lay-filter="demo" hidden="true">
        <div class="layui-progress-bar layui-bg-pink" lay-percent="0%"></div>
      </div>


      </div>
    </div>
    <table class="layui-hide" id="test" lay-filter="test"></table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      updateStatus:''
    }
  },
  mounted:function(){

    layui.use('table', function(){
    var table = layui.table;

      table.render({
        elem: '#test',
        url:'http://139.199.59.97:8081/cloud/news/queryNews',
        // url:'http://139.199.59.97:80/cloud/news/queryNews',
        cols: [[
          {field:'id', width:120, title: 'ID', sort: true},
          {field:'title', width:500, title: '标题'},
          {field:'url', width:500, title: '链接',templet:function(d){
            return '<a style="color: #3366FF" target="view_window" href="'+d.url+'">'+d.url+'</a>';}},
          {field:'updateTime', width:300, title: '更新时间'},
          {field:'operate', width:250, title: '操作',templet:function(d){
            return '<a class="layui-btn layui-btn-xs" lay-event="detail">查看</a>'+
                  '<a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>'+
                  '<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>';}}
        ]],
        page: true,
        limit:16,
        limits:[16,32,64],
        id:'newsTable'
      });

      //搜索
      var $ = layui.$, active = {
        reload: function(){
            var demoReload = $('#demoReload');

            table.reload('newsTable', {
                where: {
                    keyword: demoReload.val()
                } ,
                page: {
                    curr: 1 //重新从第 1 页开始
                }

            });
        }
    };

    $('.demoTable .layui-btn').on('click', function(){
      var type = $(this).data('type');
      active[type] ? active[type].call(this) : '';
    });




    //监听操作
    table.on('tool(test)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
      var data = obj.data; //获得当前行数据
      var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
      var tr = obj.tr; //获得当前行 tr 的DOM对象

      if(layEvent === 'detail'){ //查看
        layer.msg(obj.data.title);
        //do somehing
      } else if(layEvent === 'del'){ //删除
        layer.confirm('真的删除行么', function(index){
          obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
          layer.close(index);

          //请求接口删除

           $.ajax({
                url: "http://139.199.59.97:8081/cloud/news/delNews",
                type: "POST",
                data:JSON.stringify({"id":data.id}),
                dataType: "json",
                contentType: 'application/json',
                success: function(data){
                        layer.msg("删除成功", {icon: 6});
                }

            });


          //数据重载
          table.reload('newsTable', {
                page: {
                    curr: 1 //重新从第 1 页开始
                }
            });


          //向服务端发送删除指令
        });
      } else if(layEvent === 'edit'){ //编辑
        //do something
         layer.prompt({
            formType: 4
            ,title: '修改ID为 ['+ data.id +'] 的标题'
            ,value: data.uv
        }, function(value, index){
            //修改请求
             $.ajax({
                url: "http://139.199.59.97:8081/cloud/news/modifyNews",
                type: "POST",
                data:JSON.stringify({"id":data.id,"title":value}),
                dataType: "json",
                contentType: 'application/json',
                success: function(data){

                       //关闭弹框
                        layer.close(index);
                        //同步更新表格和缓存对应的值
                        obj.update({
                            uv: value
                        });
                        layer.msg("修改成功", {icon: 6});

                        //数据重载
                      table.reload('newsTable', {
                            page: {
                                curr: 1 //重新从第 1 页开始
                            }
                        });

                }

            });
        });

      }
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












    //上传
        layui.use('upload', function(){
          var $ = layui.jquery;
          var element = layui.element;
          var upload = layui.upload;
          var timer;
          //执行实例
          var uploadInst = upload.render({
            accept: 'file',
            elem: '#uploadBtn' //绑定元素
            // ,url: 'http://139.199.59.97:8081/cloud/news/uploadNews' //上传接口
            ,url:'http://139.199.59.97:8081/cloud/news/uploadNews'
            ,before: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                  $('.layui-progress').removeAttr("hidden");
                  var n = 0;
                  timer = setInterval(function(){
                    n = n + Math.random()*10|0;
                    if(n>90){
                      n = 50;
                      clearInterval(timer);
                    }
                    element.progress('demo', n+'%');
                  }, 300+Math.random()*1000);

              }
            ,done: function(res){
                clearInterval(timer);
                element.progress('demo', 100+'%');
                layer.msg("上传成功", {icon: 6});
                setTimeout(function(){$('.layui-progress').attr("hidden", "hidden");},1000);


              //上传完毕回调
            }
            ,error: function(){
               layer.msg("上传失败", {icon: 6});
              //请求异常回调
            }
          });
        });




    });
  },


  methods:{
    //手动更新操作
    updateNews: function () {
      var url = "http://139.199.59.97:8081/cloud/news/updateNews";
      this.$ajax.post(url).then(res=>{
      this.updateStatus = JSON.parse(JSON.stringify(res.data))['msg'];
      console.log(this.updateStatus);

        layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['200px', '100px'], //宽高
        content: this.updateStatus
        });
     });
    }
  }
}
</script>

<style>
	.demoTable { padding-bottom: 20px;}
</style>
