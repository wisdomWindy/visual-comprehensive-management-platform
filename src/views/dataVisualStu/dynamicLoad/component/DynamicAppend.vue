<template>
 <div class="dynamic-append" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
import { onMounted,onBeforeUnmount,ref } from 'vue';
const data = [1200, 1234, 1290, 1350, 1420, 1510, 1635, 1220, 1290, 1350];
const category = createCategory();
const timer = ref();
const {echart,container:chartBox} = useEcharts({
  title:{text:'动态追加'},
  grid:{
    left:'15%',
    bottom:'10%'
  },
  xAxis: {
    type:'category',
    data: category,
    axisTick: {
      alignWithLabel: true,
      show: false
    }
  },
  yAxis: {
    type:'value',
    min:0,
    max:2000,
    axisTick: {
      show: false
    }
  },
  series: [{
    name: '销量',
    data,
    type: 'line',
  }]
});
onMounted(()=>{
  timer.value = setInterval(()=>{
    data.push(Math.random() * 2000);
    const last = category[category.length-1]
    const lastDate = new Date(last)
    lastDate.setDate(lastDate.getDate() + 1);
     category.push(`${lastDate.getFullYear()}-${lastDate.getMonth()+1}-${lastDate.getDate()}`);
    category.shift();
    data.shift();
    echart.value.setOption({
      xAxis:{
        data:category
      },
      series:[{
        name:'销量',
        data
      }]
    })
  },2000);
})
onBeforeUnmount(()=>{
  clearInterval(timer.value)
});
function createCategory(){
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const date = currentDate.getDate();
  const result = []
  for(let i = 0;i<10;i++){
    result.push(`${year}-${month}-${date+i}`)
  }
  return result
}
</script>

<style scoped>
.dynamic-append{
  width:50%;
  height: 300px;
}
</style>
