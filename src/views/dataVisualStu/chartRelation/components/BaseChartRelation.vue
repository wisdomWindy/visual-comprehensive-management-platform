<template>
 <div class="container" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
import { onMounted } from 'vue';
const category = ['一月','二月','三月','四月','五月','六月','七月'];
const {echart,container:chartBox} = useEcharts({
  title:{
    text:'图表联动',
  },
  xAxis:{
    type:'category',
    data:category,
    axisLine:{
      lineStyle:{
        color:'#00ffee'
      }
    },
    axisTick:{
      show:false
    }
  },
  yAxis:{
    type:'value',
  },
  series:[{
    type:'bar',
    data:[120, 200, 150, 80, 70, 110, 130]
  }]
})
onMounted(()=>{
echart.value.on('click',(e)=>{
  console.log(e)
})
})

</script>

<style scoped>

</style>
