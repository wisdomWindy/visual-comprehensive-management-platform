<template>
  <div class="calendar" ref="calendar"></div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts';

const {container:calendar} = useEcharts({
    tooltip: {
      
    },
    title:{
      text:"基础日历图"
    },
    visualMap: [{
      type: 'piecewise',
      pieces: [{
        value: 0,
        color: '#f0f0f2'
      }, {
        min: 1,
        max: 1000,
        color: '#daf3f0'
      }, {
        min: 1001,
        max: 5000,
        color: '#cceeea'
      }, {
        min: 5001,
        max: 6000,
        color: '#99ddd4'
      }, {
        min: 6001,
        max: 9000,
        color: '#73c0de'
      }, {
        min: 9001,
        color: '#73c0de'
      }],
      orient: 'horizontal',
      left: 'center',
      top:'10%'
    }],
    calendar: {
      left:'9%',
      right:'0%',
      top:'30%',
      cellSize: [20,15],
      range: '2022',
      splitLine: {
        show: false
      },
      itemStyle: {
        borderWidth: 5,
        borderColor:'#fff',
      },
      dayLabel:{
        nameMap:'ZH'
      },
      monthLabel:{
        nameMap:'ZH'
      },
      yearLabel: { 
        color:'red',
        show: true,
        position:'left',
        formatter(params){
          return params.end
        }
      }
    },
    series: [{
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: createData('2022')
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
.calendar
{
  width: 100%;
  height: calc(100vw / 15 * 3);
}
</style>