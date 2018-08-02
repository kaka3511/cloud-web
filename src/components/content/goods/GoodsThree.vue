<template>

    <!-- 内容主体区域 -->
    <div style="padding: 15px;" class="echart">

        <div id="chartmain" style="width:600px; height: 400px;"></div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      dataTitle:[],
      dataValue:[]
    }
  },
  mounted:function(){


        var url = "http://139.199.59.97:8081/cloud/news/get4EchartNews";
         this.$ajax.get(url).then(res=>{


          this.dataTitle = res.data.responseBody.dataTitle;
          this.dataValue = res.data.responseBody.dataValue;


          //echarts显示
            var myChart = echarts.init(document.getElementById('chartmain'));

                    var option = {
                        title: {
                            text: '监测同步时间'
                        },
                        tooltip: {},
                        legend: {
                            data:['同步时间统计']
                        },
                        xAxis: {
                             axisLabel:{
                                  rotate:30,
                                  boundaryGap : false,
                                  textStyle:{
                                     color:"green", //刻度颜色
                                     fontSize:10  //刻度大小
                                }
                      },
                            data:this.dataTitle
                        },
                        yAxis: {},
                        series: [{
                            name: '同步时间统计',
                            type: 'bar',
                            barWidth : 30,//柱图宽度
                            data: this.dataValue
                        }]
                    };

                    myChart.setOption(option);
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
</style>
