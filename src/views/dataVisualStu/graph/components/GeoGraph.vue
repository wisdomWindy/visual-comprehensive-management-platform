<template>
 <div class="container" ref="container"></div>
</template>

<script setup>
import useEcharts,{echarts} from '@/hooks/useEcharts';
import chinaMap  from '@/assets/map/china.json'

echarts.registerMap('china',chinaMap);
const nodes = [[116.41995,40.18994,100],[112.271301,30.987527,100]]
const links = [{
  source:0,
  target:1,
  value:200
}]
const {container} = useEcharts({
  geo:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:'10%',
    map:'china'
  },
  series:[{
    coordinateSystem:'geo',
    type:'graph',
    data:nodes,
    links
  }]
});
</script>

<style scoped>
 .container{
  width:50%;
  height:400px;
 }
</style>
