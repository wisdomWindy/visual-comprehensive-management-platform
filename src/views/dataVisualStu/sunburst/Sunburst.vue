<template>
 <div class="sunburst" ref="sunburst"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:sunburst} = useEcharts({
    tooltip:{},
    series:[{
      type:"sunburst",
      data:createData(),
      radius:[0, '90%'],
      label:{
        showL:true,
        rotate:'radial'
      }
    }]
  });
function createData(){
  let data = [];
  for(let i = 0; i < 3; i++){
    data[i] = {
      name:'产品'+i,
      value: Math.floor(Math.random() * 101),
      children:[]
    }
    for(let j = 0; j < 2; j++){
      data[i].children.push({
        name:data[i].name+j,
        value: Math.floor(Math.random() * 101)
      });
    }
  }
  return data;
}
</script>

<style scoped>
 .sunburst{
  height: 100%;
 }
</style>