<template>
 <div class="treemap" ref="treemap"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const data = [{
  name: 'A',
  value:20,
  children: [{
    name: 'A1',
    value: 40,
    children:[{
      name:'A1-1',
      value:10
    },{
      name:'A1-2',
      value:10
    },{
      name:'A1-3',
      value:10
    },{
      name:'A1-4',
      value:10
    }]
  }, {
    name: 'A2',
    value: 20,
  }]
},{
  name:'B',
  value:60,
  children:[{
    name:'B1',
    value:30
  },{
    name:'B2',
    value:30
  }]
},{
  name:'C',
  value:'40',
  children:[{
    name:'C1',
    value:30
  },{
    name:'C2',
    value:10
  }]
}];
const levels = [{
  itemStyle: {
    borderColor: '#555',
    borderWidth: 4,
    gapWidth: 4
  }
},{
  colorSaturation: [0.3, 0.6],
  itemStyle: {
    borderColorSaturation: 0.7,
    gapWidth: 2,
    borderWidth: 2
  }
}]
const {container:treemap} = useEcharts({
    tooltip: {},
    series: [{
      type: 'treemap',
      name: 'tree1',
      leafDepth:2,
      label:{
        show:true
      },
      visibleMin:0,
      levels,
      data
    }]
  });
</script>

<style scoped>
 .treemap{
  height: 95%;
 }
</style>
