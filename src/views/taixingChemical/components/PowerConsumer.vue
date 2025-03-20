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
      itemWidth:30,
      itemHeight:20,
      itemGap:10,
      textStyle:{
        color:'#fff',
        formatter(r){
          return `{aa|${r.name}${r.value}}`
        },
        rich:{
          aa:{
            align:'center'
          }
        }
      },
      top:'20%',
      left:'5%',
      width:'30%'
    },
    grid:{
      left:'10%',
      right:'60%'
    },
    title:{
      text:'重点用能单位的能耗分析（单位：吨标准煤炭）',
      textStyle:{
        color:'#fff',
        fontSize:15
      },
      top:'10%',
      left:'5%',
      // padding:['10%']
    },
    color:['#4590e1','#06e5b6','#fc4456','#2545be'],
    series:[{
      type:'pie',
      startAngle:125,
      roseType:true,
      height:'80%',
      center:['65%','80%'],
      radius:[22.5,'65%'],
      labelLine:{
        length1:10,
        length2:10
      },
      label:{
        formatter(r){
          return `{a|${r.name}\n${r.value}}`
        },
        color:'#fff',
        fontSize:14,
        rich:{
          a:{
            align:'center'
          }
        }
      },
      data:[{
        name:'煤炭',
        value:9.26
      },{
        name:'电',
        value:18.25
      },{
        name:'蒸汽',
        value:25.93
      },{
        name:'天然气',
        value:46.30
      }]
    }]
  };
  return initOption
}
</script>

<style scoped>
 .chart{
  width:100%;
  height:100%;
}
</style>