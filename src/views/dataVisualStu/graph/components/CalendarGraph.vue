<template>
 <div class="chart-box" ref="container"></div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts';
const {container} = useEcharts({
  title:{
    text:'日历关系图'
  },
  calendar:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:'20%',
    range:'2024',
    cellSize:[20,20],
    splitLine:{
      show:false
    },
    dayLabel:{
      nameMap:'zh-CN'
    },
    monthLabel:{
      nameMap:'zh-CN'
    },
    yearLabel:{
      nameMap:'zh-CN'
    }
  },
  series:[{
    type:'graph',
    coordinateSystem:'calendar',
    symbolSize:10,
    data:createData('2024'),
    itemStyle:{
      borderWidth:2,
      borderColor:'#fff'
    },
    links:[{
      source:1,
      target:2,
      value:30
    },{
      source:3,
      target:4,
      value:50
    },{
      source:6,
      target:8,
      value:100
    }],
    emphasis:{
      itemStyle:{
        borderWidth:0
      }
    }
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
.chart-box{
  width:50%;
  height: 200px;
}
</style>
