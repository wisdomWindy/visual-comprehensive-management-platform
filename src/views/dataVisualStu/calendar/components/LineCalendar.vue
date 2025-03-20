<template>
 <div class="container" ref="calendarContainer"></div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts'
const data = createData('2022')
const links = createLinks()
const {container:calendarContainer} = useEcharts({
  title:{
    text:'关系日历图',
  },
  calendar:{
    left:'10%',
    top:'15%',
    right:'10%',
    range:'2022',
    cellSize:[20,15],
    splitLine:{
      show:false
    },
    itemStyle:{
      color:'#ccc',
      borderColor:'#fff'
    },
    monthLabel:{
      nameMap:'ZH'
    },
    dayLabel:{
      nameMap:'ZH'
    },
    yearLabel:{
      nameMap:'ZH'
    }
  },
  series:[{
    type:'graph',
    center:['50%','50%'],
    edgeSymbol:['none','arrow'],
    coordinateSystem:'calendar',
    links,
    data
  }]
})
function createData(year) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),Math.floor(Math.random() * 10000)]);
  }
  return data;
}
function createLinks(){
  return data.map((item,index) => {
    return {
      source:index,
      target:index+1
    }
  })
}

</script>

<style scoped>
 .container{
  height:200px;
 }
</style>