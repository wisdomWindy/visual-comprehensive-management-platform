<template>
  <div class="sankey" ref="sankey"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:sankey} = useEcharts({
    tooltip:{},
    series: [{
      type: 'sankey',
      data: [{
        name: '输入1'
      }, {
        name: '输入2'
      }, {
        name: '输出1'
      }, {
        name: '输出2'
      }],
      links: [{
        source: '输入1',
        target: '输出2',
        value: 10
      }, {
        source: '输入2',
        target: '输出1',
        value: 30
      }],
      label:{
        show:true
      }
    }]
  });
</script>

<style scoped>
.sankey
{
  height: 100%;
}
</style>