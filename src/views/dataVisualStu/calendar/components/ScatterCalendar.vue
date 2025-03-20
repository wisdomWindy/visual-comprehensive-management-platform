<template>
 <div class="container" ref="calendarContainer"></div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts'

const {container:calendarContainer} = useEcharts({
  title:{
    text:'散点日历图'
  },
  calendar:{
    left:'10%',
    top:'10%',
    right:'10%',
    range:'2022',
    cellSize:[30,15],
    itemStyle:{
      color:'pink',
      borderWidth:5,
      borderColor:'#fff'
    },
    splitLine:{
      show:false
    },
    dayLabel:{
      nameMap:'ZH'
    },
    monthLabel:{
      nameMap:'ZH'
    },
    yearLabel:{
      show:true,
      color:'red',
      position:'left'
    }
  },
  series:[{
    type:"scatter",
    coordinateSystem:'calendar',
    symbolSize:(value)=>{
      console.log(value)
      return Math.round(value[1] / 1000)
    },
    data:createData('2022')
  }]
});
function createData(year) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ]);
  }
  console.log(data)
  return data;
}
</script>

<style scoped>
 .container{
  height:calc(100vw / 10 * 3)
 }
</style>