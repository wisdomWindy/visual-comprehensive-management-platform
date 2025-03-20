<template>
 <div class="geo" ref="geo"></div>
</template>

<script setup>
import chinaMap from '@/assets/map/china.json';
import useEcharts,{echarts} from '@/hooks/useEcharts';
function createData() {
  return chinaMap.features.map(item => {
    return {
      name: item.properties.shortName,
      value: Math.floor(Math.random() * 361)
    }
  });
}
echarts.registerMap('china', chinaMap);
const {container:geo} = useEcharts({
    geo:{
      map:'china',
      nameProperty:'shortName'
    },
    visualMap: {
      type: 'piecewise',
      pieces: [{
        min: 0,
        max: 100,
        color: '#10ff10'
      }, {
        min: 101,
        max: 190,
        color: '#eeffaa'
      }, {
        min: 191,
        max: 360,
        color: '#eeffff'
      }]
    },
    series: [{
      type: 'map',
      show:false,
      map: 'china',
      nameProperty: 'shortName',
      name: 'shortName',
      data: createData()
    }]
  });
</script>

<style scoped>
 .geo{
  width: 100%;
  height: 100%;
 }
</style>