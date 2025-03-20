<template>
 <div class="chart-box">
  <div class="mapChart" ref="chartBox"></div>
 </div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts';
import worldJson from '@/assets/map/world.json'
echarts.registerMap('world', worldJson)
const pointData = [
  [-128.34, -24.33],
  [-110.39, 76.39],
  [13.72, 45.6],
  [160.14, 60.58],
  [133.59, -2.53]

];
const lineData = [[{
  coord:[-128.34, -24.33],
  value:5
},{
  coord:[-110.39, 76.39],
  value:5
}
],[{
  coord:[13.72, 45.6],
  value:5
},{
  coord:[160.14, 60.58],
  value:5
}],[{
  coord:[133.59, -2.53],
  value:5
},{
  coord:[-128.34, -24.33],
  value:5
}],[{
  coord:[13.72, 45.6],
  value:5
},{
  coord:[133.59, -2.53],
}]]
const {container:chartBox} = useEcharts({
  geo:{
    map:'world',
    label:{
      show:false
    },
    itemStyle:{
      areaColor:'#50A8B4'
    },
    emphasis:{
      itemStyle:{
        areaColor:'#54FFD9'
      }
    }
  },
  series:[{
   type:'scatter',
   coordinateSystem:'geo',
   data:pointData.map(item => {
    return [item[0],item[1],5]
   }),
   itemStyle:{
    color:'#54FFD9'
   }

  },{
    type:'lines',
    data:lineData.map((item,index) => {
      return {
        name:index,
        coords:[item[0].coord,item[1].coord]
      }
    }),
    coordinateSystem:'geo',
    lineStyle:{
      color:'#54FFD9',
      type:'dashed',
      curveness:0.3
    },
    effect:{
      show:true,
      trailLength:0.1,
      symbol:'circle',
      symbolSize:10,
      color:'#54FFD9'
    }
  }]
})
</script>

<style scoped>
.chart-box{
  width:100%;
  height:calc(100% - 200px);
}
.mapChart{
  width:100%;
  height: 100%;
}
.header{
  background: url('/imgs/demo2/plane.png') no-repeat 0% 0%/100% 100%;
}
</style>
