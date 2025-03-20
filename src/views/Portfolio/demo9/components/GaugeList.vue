<template>
  <div class="gauge-chart">
    <div class="title">{{title}}</div>
    <div class="chart-box" ref="chartBox"></div>
    <div class="description" :style="{color}">{{description}}<span class="content">{{value}}万亿</span></div>
  </div>
</template>

<script setup>
import {watch,computed} from 'vue'
import useEcharts from '@/hooks/useEcharts'
const props =defineProps({
  title:{
    type:String,
    default:''
  },
  description:{
    type:String,
    default:''
  },
  value:{
    type:Number,
    value:0
  },
  color:{
    type:String,
    default:''
  },
  total:{
    type:Number,
    default:100
  },
  labelTitle:{
    type:String,
    default:''
  }
})
const percent = computed(()=>{
  return Math.round(props.value / props.total) * 100
})
const defaultOption = {
  series:[{
    type:'gauge',
    center:['50%','50%'],
    radius:'80%',
    min:0,
    axisLine:{
      lineStyle:{
        width:20,
        color:[[0,'#0F1A3F'],[1,'#0F1A3F']]
      }
    },
    axisLabel:{
      show:false,
    },
    axisTick:{
      show:false
    },
    splitLine:{
      show:false
    },
    title:{
      show:false
    },
    detail:{
      color:props.color,
      offsetCenter:[0,0],
      fontSize:12,
      formatter(params){
        return `${percent.value}% \n ${props.labelTitle}`
      }
    },
    pointer:{
      show:false
    },
    anchor:{
      show:false
    },
    progress:{
      show:true,
      itemStyle:{
        color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[{
          offset:0,
          color:props.color
        },{
          offset:1,
          color:props.color
        }]
      }
      }
    },
    data:[{
      name:props.labelTitle,
      value:props.value
    }]
  }]
}
const {echart,container:chartBox} = useEcharts(defaultOption)
watch(()=>props.total,()=>{
  defaultOption.series[0].max = props.total
  if(echart.value){
    echart.value.setOption(defaultOption)
  }
  
},{immediate:true});
</script>

<style scoped>
 .gauge-chart{
  width:50%;
  height:100%;
 }
 .title,
 .description{
  color:#fff;
  text-align:center;
 }
 .chart-box{
  width:100%;
  height:50%;
 }
 .content{
  color:#fff;
 }
</style>
