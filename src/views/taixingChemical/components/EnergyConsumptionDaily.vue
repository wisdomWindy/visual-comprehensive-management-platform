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
    legend:{
      itemWidth:36,
      itemHeight:20,
      itemGap:20,
      bottom:1,
      left:'10%',
      width:'30%',
      textStyle:{
        color:'#fff'
      }
    },
    title:{
      text:'园区当日能耗',
      textStyle:{
        color:'#fff',
        fontSize:20
      },
      left:25,
      top:'10%'
    },
    grid:{
      top:'30%',
      left:'15%',
      right:'25%',
      bottom:'20%',
      containWithLabel:true
    },

    color:['#06e5b6','#fc4456','#2545be','#4590e1'],
    xAxis:{
      type:'value',
      axisLine:{
        show:true,
        lineStyle:{
          color:'#fff'
        }
      },
      interval:25
    },
    yAxis:{
      type:'category',
      boundaryGap:true,
      data:['当日用电量','当日天然气量','当日蒸汽量','当日煤炭量'],
      splitLine:{
        interval:4
      },
      axisLabel:{
        color:'#fff'
      },
       axisTick:{
        show:false
      },
    },
    series:[{
      type:'bar',
      barWidth:15,
      areaStyle:{
        color:'#10327d'
      },
      data:[50,21,32,42]
    }]
  };
 return initOption
}
</script>

<style scoped>
.chart{
  width:100%;
  height:100%;
}</style>
