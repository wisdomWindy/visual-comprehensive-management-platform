<template>
 <div class="container">
  <div class="title">吞吐</div>
  <div class="chart-container" ref="chartContainer"></div>
 </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const xData = ['00:05', '00:10', '00:15', '00:20', '00:25', '00:30']
const {container:chartContainer} = useEcharts({
   grid:{
    left:'15%',
    bottom:'10%',
    top:'30%',
    right:'10%'
  },
  legend:{
    right:0,
    top:'1%',
    itemWidth:12,
    itemHeight:12,
    textStyle:{
      color:'#fff'
    },
    data:[{
      name:'读取',
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:1,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#9471FF'
          },{
            offset:1,
            color:'#7547FF'
          }]
        }
      }
    },{
      name:'写入',
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:1,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#FFDE00'
          },{
            offset:1,
            color:'#FF54A8'
          }]
        }
      }
    }]
  },
  xAxis:[{
    type:'category',
    alignTicks:true,
    data:xData,
    boundaryGap:true,
    axisLabel:{
      show:true,
      color:'#fff',
    },
    axisTick:{
      show:true,
      alignWithLabel:true
    }
  },{
    type:'category',
    alignTicks:true,
    boundaryGap:true,
    data:xData,
    offset:-265,
    axisLabel:{
      show:true,
      color:'#fff',
      inside:true
    },
    axisTick:{
      inside:true,
      alignWithLabel:true
    },
    axisLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    }
  }],
  yAxis:{
    type:'value',
    axisLabel:{
      color:'#fff',
      formatter:(value)=>{
        return Math.abs(value)
      }
    },
    axisTick:{
      show:false
    },
    splitLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    }
  },
  series:[{
    type:'bar',
    barWidth:20,
    barGap:'20%',
    name:'读取',
    stack:'total',
    itemStyle:{
      borderRadius:[4,4,0,0],
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[{
          offset:0,
          color:'#7547FF'
        },{
          offset:1,
          color:'#1829AC'
        }]
      }
    },
    data:[45,26,70,55,28,47]
  },{
    type:'bar',
    name:'写入',
    stack:'total',
    itemStyle:{
      borderRadius:[0,0,4,4],
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[{
          offset:0,
          color:'#FF47C2'
        },{
          offset:1,
          color:'#FF47C2'
        }]
      }
    },
    data:[-50,-30,-70,-18,-63,-40]
  }]
})
</script>

<style scoped>
.container{
  height:436px;
  position: relative;
}
.title{
  width:200px;
  text-indent:30px;
  position: absolute;
  /* top:5%;
  left:5%; */
  font-size: 21px;
  color: #fff;
  background: url('/imgs/title_bg.png') no-repeat 0% 0%/100% 100%;
}
.chart-container{
  width: 100%;
  height:100%;
}
</style>
