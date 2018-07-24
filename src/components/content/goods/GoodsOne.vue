<template>
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <table class="layui-hide" id="test"></table>
  </div>
</template>

<script>
export default {
  name: 'App',
  created:function(){
    layui.use('table', function(){
  var table = layui.table;

  table.render({
    elem: '#test',
    // url:'http://localhost/cloud/news/queryNews',
    url:'http://localhost/cloud/healthCheck2',
    cols: [[
      // {field:'id', width:80, title: 'ID', sort: true},
      // {field:'title', width:80, title: '标题'},
      // {field:'url', width:80, title: '链接'},
      // {field:'updateTime', width:80, title: '更新时间'}
       {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
      ,{field: 'username', title: '用户名', width:80}
      ,{field: 'sex', title: '性别', width:80, sort: true}
      ,{field: 'city', title: '城市', width:80}
      ,{field: 'sign', title: '签名', width: 177}
      ,{field: 'experience', title: '积分', width: 80, sort: true}
      ,{field: 'score', title: '评分', width: 80, sort: true}
      ,{field: 'classify', title: '职业', width: 80}
      ,{field: 'wealth', title: '财富', width: 135, sort: true}
    ]]
  });
});
  }
}
</script>

<style>
</style>
