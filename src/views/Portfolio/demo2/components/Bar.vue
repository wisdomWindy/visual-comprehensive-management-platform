<template>
 <div class="chart-box" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const category = ['天气因素', '航空管制', '机械故障', '飞机掉配', '航空管制'];
const data = [28,24,20,18,14]
const {container:chartBox} = useEcharts({
  grid:{
    left:'20%',
    right:'20%',
    top:'10%',
    bottom:'10%'
  },
  xAxis:{
    show:false,
    type:'value',
  },
  yAxis:{
    type:'category',
    data:category,
    boundaryGap:['30%','30%'],
    axisLabel:{
      interval:0,
      color:'#68D5EA',
    },
    axisLine:{
      show:false
    },
    axisTick:{
      show:false,
      alignWithLabel:true
    }
  },
  aria:{
    enable:true,
    decal:{
      show:true
    }
  },
  series:[{
    type:'bar',
    name:'bg',
    barWidth:10,
    data:data.map(item => {
      return 100
    }),
    label:{
      show:true,
      position:'right',
      color:'#fff',
      fontWeight:'bold',
      formatter(params){
        console.log(params)
        return data[params.dataIndex]
      }
    },
    itemStyle:{
     color:'rgba(255,255,255,0.2)',
      borderRadius:5,
      decal:{
        symbol:'none'
      }
    },

  },{
    type:'bar',
    name:'fg',
    data,
    barWidth:10,
    barGap:'-100%',
    zLevel:4,
    barCategoryGap:'30%',
    label:{
      show:false,
    },
    itemStyle:{
      color:'#54FFD9',
      borderRadius:5,
      decal:{
        symbol:'rect',
        symbolSize: 1,
        color:'#2BCCA8',
        dashArrayX:5,
         dashArrayY:10,
        rotation:Math.PI / 4,
        maxTileHeight:10
      }
    }
  }]
})
</script>

<style scoped>
 .chart-box{
  width: 100%;
  height: 200px;
 }
</style>
