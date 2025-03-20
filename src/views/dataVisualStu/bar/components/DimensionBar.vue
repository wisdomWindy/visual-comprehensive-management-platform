<template>
  <div class="container">
    <div class="chart-item" ref="container"></div>
    <div class="chart-item" ref="gradientContainer"></div>
    <div class="chart-item" ref="rectContainer"></div>
  </div>
  
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'

const colorList = ['#872425','#828320','#af8b00','#a35c1e','#2b4f5c','#b0674b','#748948','#89282b']
const xAxisData = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
const seriesData = [2000, 1000, 3000, 5000, 8000, 1000]
const { container } = useEcharts(createOption())

function createOption() {
  return {
    title: {
      text: '立体柱状图',
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'pictorialBar',
        symbolSize: [30, 11],
        symbolPosition: 'end',
        symbolOffset: [0, -5],
        itemStyle:{
          color: (params) => {
            return colorList[params.dataIndex]
          },
        },
        z: 5,
        data: [2000, 1000, 3000, 5000, 8000, 1000],
      },
      {
        type: 'pictorialBar',
        symbolSize: [30, 11],
        itemStyle:{
          color: (params) => {
            return colorList[params.dataIndex]
          }
        },
        z: 5,
        data: seriesData,
      },
      {
        type: 'bar',
        barWidth: 30,
        itemStyle:{
          color: (params) => {
            return colorList[params.dataIndex]
          }
        },
        data: seriesData,
      },
    ],
  }
}

const {container:gradientContainer} = useEcharts({
  title:{
    text:'渐变柱状图'
  },
  xAxis:{
    type:'category',
    data:xAxisData
  },
  yAxis:{
    type:'value'
  },
  series:[{
    type:'bar',
    barWidth:20,
    itemStyle:{
      borderRadius:10,
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:1,
        y2:1,
        colorStops:[{
          offset:0,
          color:'rgba(199,114,34,1)'
        },{
          offset:1,
          color:'rgba(255,255,255,0)'
          
        }]
      }
    },
    data:seriesData
  }]
})
const {container:rectContainer} = useEcharts({
  title:{
    text:'矩形柱状图'
  },
  xAxis:{
    type:'category',
    data:xAxisData
  },
  yAxis:{
    type:'value'
  },
  series:[{
    type:'pictorialBar',
    symbol:'diamond',
    symbolOffset:[0,-5],
    symbolSize:[30,11],
    symbolPosition:'end',
    data:seriesData,
    itemStyle:{
      color:'rgb(199,114,34)'
    }
  },{
    type:'bar',
    barWidth:15,
    itemStyle:{
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:1,
        y2:1,
        colorStops:[{
          offset:0,
          color:'rgb(199,114,34)'
        },{
          offset:1,
          color:'rgb(255,255,255)'
        }]
      }
      
    },
    data:seriesData
  },{
    type:'bar',
    barWidth:15,
    barGap:0,
    // barCategoryGap:0,
    itemStyle:{
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:1,
        y2:1,
        colorStops:[{
          offset:0,
          color:'rgb(199,114,34)'
        },{
          offset:1,
          color:'rgb(255,255,255)'
        }]
      }
    },
    data:seriesData
  }]
})
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
}
.chart-item{
  width:50%;
  height:300px;
}
</style>
