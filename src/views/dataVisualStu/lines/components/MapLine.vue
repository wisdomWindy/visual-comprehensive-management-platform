<template>
  <div class="container">
    <div class="chart-container" ref="chartContainer"></div>
  </div>
</template>

<script setup>
import useEcharts, { echarts } from '@/hooks/useEcharts'
import mapJson from '@/assets/map/china.json'
echarts.registerMap('china', mapJson)
const centerCity = [{
  coord:[116.405285, 39.904989]
},{
  coord:[117.190182, 39.125596]
},{
  coord:[114.502461, 38.045474]
},{
  coord:[113.429919, 23.334643]
}]
const linesData = [[{
  coord:[116.405285, 39.904989]
},{
  coord:[117.190182, 39.125596]
}],[{
  coord:[117.190182, 39.125596]
},{
  coord:[114.502461, 38.045474]
}],[{
  coord:[116.405285, 39.904989]
},{
  coord:[113.429919, 23.334643]
}]]
const { container: chartContainer } = useEcharts({
  geo: {
    map: 'china',
    zoom: 1.3,
    top: '30%',
    left: '10%',
    bottom: '10%',
  },
  series: [
    {
      type: 'lines',
      coordinateSystem: 'geo',
      effect: {
        show: true,
        symbolSize:5,
        trailLength:0.1,
        symbol:'arrow'
      },
      lineStyle:{
        width:1,
        opacity:1,
        curveness:0.3
      },
      data: linesData.map(item => {
        return {
          coords:[item[0].coord,item[1].coord]
        }
      }),
    },{
      type:'effectScatter',
      coordinateSystem:'geo',
      data:centerCity.map(item => {
        item.coord.push(1)
        return {
          value:item.coord
        }
      })
    }
  ],
})
</script>

<style scoped>
.chart-container {
  height: 700px;
}
</style>
