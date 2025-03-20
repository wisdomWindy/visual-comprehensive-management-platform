<template>
 <div class="container">
  <div class="title">IO</div>
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
            color:'#62FBFF'
          },{
            offset:1,
            color:'#3DDDFF'
          }
          ]
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
            color:'#9DF590'
          },{
            offset:1,
            color:'#6BE4B2'
          }
          ]
        }
      }
    }]
  },
  xAxis:{
    type:'category',
    axisLabel:{
      color:'#fff'
    },
    boundaryGap:true,
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
  yAxis:[{
    type:'value',
    axisLabel:{
      color:'#fff',
      formatter:(params)=>{
        return Math.abs(params)
      }
    },
    splitLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    },
    axisTick:{
      show:false
    }
  }],
  series:[{
    type:'bar',
    name:'读取',
    stack:'total',
    itemStyle:{
      borderRadius:[4,4,0,0],
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:1,
        y2:1,
        colorStops:[{
          offset:0,
          color:'#3D9FFF'
        },{
          offset:1,
          color:'#027BF7'
        }]
      }
    },
    data:[40,65,38,42,56,40]
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
        x2:1,
        y2:1,
        colorStops:[{
          offset:0,
          color:'#65E2B6'
        },{
          offset:1,
          color:'#B8FF7E'
        }]
      }
    },
    data:[-70,-43,-78,-58,-35,-65]
  }]
})
</script>

<style scoped>
.container{
  width: 100%;
  height: 436px;
  position: relative;
}
.title{
  color: #fff;
  width:210px;
  text-indent: 30px;
  height: 30px;
  font-size: 21px;
  position: absolute;
  background:url('/imgs/title_bg.png') no-repeat 0% 0%/100% 100%;
}
.chart-container{
  width: 100%;
  height:100%;
}
</style>
