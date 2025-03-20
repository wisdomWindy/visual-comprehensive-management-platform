<template>
 <div class="heatmap" ref="heatmap"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:heatmap} = useEcharts({
    xAxis:{
      type:'category',
      data:createXAxis()
    },
    yAxis:{
      type:'category',
      data:createyAxis()
    },
    visualMap:{
      min:0,
      max:100,
      orient:'horizontal'
    },
    series:[{
      type:'heatmap',
      data:createData(),
      label:{
        show:true
      }
    }]
  });
function createyAxis() {
  let yAxis = [];
  for (let i = 0; i < 7; i++) {
    yAxis.push(`周${i + 1}`);
  }
  return yAxis;
}
function createXAxis(){
  let data = [];
  for(let i = 0; i < 24; i++){
    data.push(`${i}:00`);
  }
  return data;
}
function createData() {
  let data = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 7; j++) {
      data.push([i, j, Math.floor(Math.random() * 101)]);
    }
  }
  return data;
}

</script>

<style scoped>
 .heatmap{
  height: 100%;
 }
</style>