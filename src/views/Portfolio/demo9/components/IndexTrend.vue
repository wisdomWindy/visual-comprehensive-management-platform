<template>
 <div class="chart-box" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'
const category = ['2012','2013','2014','2015','2016','2017']
const {container:chartBox} = useEcharts({
  legend:{
    itemWidth:20,
    itemHeight:4,
    icon:'rect',
    textStyle:{
      color:'#fff'
    },
    data:[{
      name:'收入指数',
      itemStyle:{
        color:'rgba(61,197,255,0.16)',
        borderColor:'#3DBDFF'
      }
    }]
  },
  xAxis:{
    type:'category',
    data:category,
    axisLine:{
      show:true,
      lineStyle:{
        color:'#464849'
      },
      
    },
    axisLabel:{
        color:'#DAF4FF'
      },
      axisTick:{
        show:false
      }
  },
  yAxis:{
    type:'value',
    axisLine:{
      show:true,
      lineStyle:{
        color:'#464849'
      }
    },
    splitLine:{
      show:false
    },
    axisLabel:{
      color:'#DAF4FF'
    },
    axisTick:{
      show:false
    }
  },
  series:[{
    type:'line',
     data:[0.3,0.6,0.2,1.1,0.9,1.0,2.2,1.5,1.6],
    lineStyle:{
      color:'#30D1FF',
      
    },
    areaStyle:{
      color:'#30D1FF'
    },
    itemStyle:{
      opacity:0
    },
  },{
    type:'line',
    data:[0.6,1.0,0.4,1.4,1.0,1.6,1.5,2.4],
    lineStyle:{
      color:'#FFD725',
    },
    itemStyle:{
      opacity:0
    },
  }]
})
</script>

<style scoped>
 .chart-box{
  width:100%;
  height:100%;
 }
</style>