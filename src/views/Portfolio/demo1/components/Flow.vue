<template>
 <BaseBox title="流量" class="base-box">
  <div class="chart-container" ref="chartContainer"></div>
</BaseBox>
</template>

<script setup>
import BaseBox from './BaseBox.vue';
import useEcharts from '@/hooks/useEcharts';
const xData = ['00:05', '00:10', '00:15', '00:20', '00:25', '00:30']
const {container:chartContainer} = useEcharts({
  legend:{
    itemWidth:12,
    itemHeight:12,
    show:true,
    top:'8%',
    right:'8%',
    textStyle:{
      color:'#fff'
    },

    data:[{
      name:'流入',
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[
            {
              offset: 0,
              color: 'rgba(98,251,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(61,221,255,1)',
            },
          ]
        }
      }
    },{
      name:'流出',
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[
            {
              offset: 0,
              color: 'rgba(254,59,103,1)',
            },
            {
              offset: 1,
              color: 'rgba(253,76,150,1)',
            },
          ]
        }
      }
    }]
  },
  grid:{
      top:'30%',
      left:'12%',
      bottom:'10%',
      right:'10%'
    },
  xAxis:{
    type:'category',
     boundaryGap:true,
     startValue:0,
    axisLabel:{
      color:'rgba(255,255,255,0.65)'
    },
    axisTick:{
      alignWithLabel:true
    },
    axisLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    },
    data:xData
  },
  yAxis:{
    type:'value',
    axisLabel:{
      interval:20,
      itemStyle:{
        color:'#fff'
      }
    },
    splitLine:{
       lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    },
    aixsTick:{
      show:false
    },

  },
  itemStyle:{
    borderRadius:[4,4,0,0]
  },
  series:[{
    type:'bar',
    name:'流入',
    itemStyle:{
      color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[
            {
              offset: 0,
              color: 'rgba(98,251,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(61,221,255,1)',
            },
          ]
        }
    },
    data:[55,58,90,69,65,73]
  },{
    type:'bar',
    name:'流出',
    itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[
            {
              offset: 0,
              color: 'rgba(254,59,103,1)',
            },
            {
              offset: 1,
              color: 'rgba(253,76,150,1)',
            },
          ]
        }
      },
      data:[70,75,50,83,43,50]
  }]
});
</script>

<style scoped>
.base-box{
  width: 100%;
  height: 312px;
  background:url('/imgs/border_solid.png') no-repeat 0% 0%/100% 100%;
}
.chart-container{
  width:100%;
  height:100%;
}
</style>
