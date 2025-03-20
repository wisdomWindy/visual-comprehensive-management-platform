<template>
   <div class="line-chart" ref="lineChart"></div>
</template>

<script setup>
import { computed } from 'vue'
import useEcharts from '@/hooks/useEcharts'
const defaultOptions = {
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '10%',
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 20,
    splitLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    }
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLabel: {
      boundaryGap: false,
      alignWithTick: true,
      color:'rgba(255,255,255,0.65)'
    },
    axisLine:{
      lineStyle:{
        color:'rgba(255,255,255,0.1)'
      }
    }
  },
}
const props = defineProps({
  options: {},
})
const options = computed(() => {
  return Object.assign(defaultOptions, props.options)
})
const { echart, container: lineChart } = useEcharts(options.value)
</script>

<style scoped>

.line-chart {
  width:100%;
  height:100%;
}
</style>
