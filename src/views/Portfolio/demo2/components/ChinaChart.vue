<template>
  <div class="china-chart">
    <div class="chart-box" ref="chartBox"></div>
  </div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts';
import chinaMap from '@/assets/map/china.json'
echarts.registerMap('china', chinaMap)
const pointData = [
  [116.41995,40.18994],
  [
                    117.347043,
                    39.288036
                ],[
                    121.438737,
                    31.072559
                ],[113.429919,
                    23.334643],[
                    112.271301,
                    30.987527
                ]
];
const lineData = [[{
  coord:[116.41995,40.18994]
},{
  coord:[117.347043,39.288036]
}],[{
  coord:[116.41995,40.18994]
},{
  coord:[121.438737,31.072559]
}],[{
  coord:[121.438737,31.072559]
},{
  coord:[116.41995,40.18994]
}],[{
  coord:[113.429919,
                    23.334643]
},{
  coord:[
                    112.271301,
                    30.987527
                ]
}]]
const {container:chartBox} = useEcharts({
  geo:{
    map:'china',
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
      return [...item,5]
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
.china-chart{
width: 100%;
  height:calc(100% - 200px);
}
 .chart-box{
  width: 100%;
  height:100%;
 }
</style>
