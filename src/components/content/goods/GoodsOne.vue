<template>
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <div class="demoTable">
      搜索标题：
      <div class="layui-inline">
          <input class="layui-input" name="keyword" id="demoReload" autocomplete="off">
      </div>
      <button class="layui-btn" data-type="reload">搜索</button>
      <button class="layui-btn" v-on:click="updateNews">同步网易推荐新闻标题</button>
    </div>
    <table class="layui-hide" id="test"></table>
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
        // url:'http://139.199.59.97:8081/cloud/news/queryNews',
        url:'http://localhost:80/cloud/news/queryNews',
        cols: [[
          {field:'id', width:120, title: 'ID', sort: true},
          {field:'title', width:500, title: '标题'},
          {field:'url', width:500, title: '链接',templet:function(d){
            return '<a style="color: #3366FF" target="view_window" href="'+d.url+'">'+d.url+'</a>';}},
          {field:'updateTime', width:300, title: '更新时间'}
        ]],
        page: true,
        limit:10,
        id:'newsTable'
      });

      var $ = layui.$, active = {
        reload: function(){
            var demoReload = $('#demoReload');

            table.reload('newsTable', {
                where: {
                    keyword: demoReload.val()
                }
            });
        }
    };

    $('.demoTable .layui-btn').on('click', function(){
      var type = $(this).data('type');
      active[type] ? active[type].call(this) : '';
    });

    });
  },


  methods:{
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
</style>
