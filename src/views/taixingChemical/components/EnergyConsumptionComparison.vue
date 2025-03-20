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
      top:'20%',
      right:'10%',
      width:'50%',
      textStyle:{
        color:'#fff'
      }
    },
    title:{
      text:'重点用能单位的能耗分析（单位：吨标准煤炭）',
      textStyle:{
        color:'#fff',
        fontSize:15
      },
      left:'5%',
      top:'10%'
    },
    grid:{
      top:'40%',
      left:'30%',
      right:'10%',
      bottom:22,
      containWithLabel:true
    },
    xAxis:{
      type:'category',
      data:['煤炭','电','天然气','蒸汽'],
      axisLabel:{
        show:true,
        fontSize:11,
        color:'#fff'
      },
      axisLine:{
        show:true,
        color:'#fff'
      }
    },
    yAxis:{
      type:'value',
      min:0,
      max:5000,
      // interval:250,
      name:'综合能耗（单位：吨标准煤炭）',
      nameTextStyle:{
        fontSize:15,
        color:'#fff'
      },
      axisLine:{
        show:false,
        lineStyle:{
          color:'#fff'
        }
      }
    },
    color:['#0d1a92','#0263ff'],
    series:[{
      type:'bar',
      name:'存能',
       label:{
        show:true,
        position:'top'
      },
      barWidth:15,
      data:[312,614,880,300]
    },{
      type:'bar',
      name:'增能',
       label:{
        show:true,
        position:'top'
      },
      barWidth:15,
      data:[356,500,200,400]
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
