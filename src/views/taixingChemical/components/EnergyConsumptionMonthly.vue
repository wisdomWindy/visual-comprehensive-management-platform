<template>
  <div class="container">
    <div class="chart" ref="container"></div>
  </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {echart:chartInstance,container} = useEcharts(createOption())
function createOption(){
  const initOption = {
    // legend:[{
    //   data:['煤炭','电','天然气','蒸汽'],
    //   itemWidth:36,
    //   itemHeight:20,
    //   itemGap:20,
    //   bottom:1,
    //   left:32,
    //   width:'30%',
    //   textStyle:{
    //     color:'#fff'
    //   }
    // },{
    //   data:['化工企业','非化工企业'],
    //   itemWidth:36,
    //   itemHeight:20,
    //   itemGap:20,
    //   bottom:1,
    //   left:32,
    //   width:'30%',
    //   textStyle:{
    //     color:'#fff'
    //   }
    // }],
    title:{
      text:'园区本月能耗',
      textStyle:{
        color:'#fff',
        fontSize:20
      },
      left:25,
      top:'5%'
    },
    grid:{
      top:'30%',
      left:'10%',
      right:'10%',
      bottom:'20%',
      containWithLabel:true
    },

    color:['#06e5b6','#fc4456','#2545be','#4590e1'],
    xAxis:{
      type:'category',
      boundaryGap:false,
      data:['当日用电量','当日天然气量','当日蒸汽量','当日煤炭量'],
      splitLine:{
        show:false,
        interval:4
      },
      axisLabel:{
        // interval:4,
        color:'#fff'
      }
    },
    yAxis:{
      type:'value',
      axisLine:{
        show:true,
        lineStyle:{
          color:'#fff'
        }
      },
      min:0,
      max:100,
      interval:25
    },
    series:[{
      type:'line',
      areaStyle:{
        color:'#10327d'
      },
      data:[50,21,32,42,31,26,28,37,45,12,26,36,39,42,50,32]
    }]
  };
  return initOption;
}
</script>

<style scoped>
.chart{
  width:100%;
  height:100%;
}
</style>
