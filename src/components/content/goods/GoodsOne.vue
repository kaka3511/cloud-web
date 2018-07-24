<template>
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <table class="layui-hide" id="test"></table>
    <button class="layui-btn layui-btn-lg" v-on:click="updateNews">同步网易推荐新闻标题</button>
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
  created:function(){

    layui.use('table', function(){
    var table = layui.table;

      table.render({
        elem: '#test',
        url:'http://139.199.59.97:8081/cloud/news/queryNews',
        cols: [[
          {field:'id', width:120, title: 'ID', sort: true},
          {field:'title', width:500, title: '标题'},
          {field:'url', width:500, title: '链接',templet:function(d){
            return '<a style="color: #FF0000" target="view_window" href="'+d.url+'">'+d.url+'</a>';}},
          {field:'updateTime', width:300, title: '更新时间'}
        ]]
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
