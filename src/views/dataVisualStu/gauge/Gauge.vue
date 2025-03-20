<template>
  <div class="gauge" ref="gauge">

  </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:gauge} = useEcharts({
    series: [{
      name: '完成率',
      type: 'gauge',
      data: [{
        value: 76,
        name: '完成率'
      }]
    }]
  });
</script>

<style scoped>
.gauge
{
  height: 100%;
}
</style>