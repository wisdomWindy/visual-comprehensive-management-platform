<template>
  <div class="line" ref="container"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'

function createXAxis() {
  let data = []
  for (let i = 0; i < 7; i++) {
    data.push('周' + (i + 1))
  }
  return data
}
const { container, echart } = useEcharts({
  title: {
    text: '折线图',
    top: '5%',
    left: 'center',
  },
  tooltip: {
    show: true,
    trigger: 'item',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
    // formatter: '{a}-{b}',
  },
  grid: {
    containLabel: true,
    top: '10%',
    left: '10%',
  },
  legend: {
    type:'plain',
    show: true,
    data:['心情指数','饥饿指数'],
    // top:'5%',
    // right:100
  },
  xAxis: {
    type: 'category',
    data: createXAxis(),
    axisLabel: {
      show: true,
      interval: 0,
    },
    axisTick: {
      alignWithLabel: true,
    },
    axisLine: {
      show: true,
    },
  },
  yAxis: {
    show: true,
    type: 'value',
    name: '单位：int',
    axisTick: {
      show: true,
      alignWithLabel: true,
    },
    axisLine: {
      show: true,
    },
  },
  series: [
    {
      type: 'line',
      name: '心情指数',
      data: [10, 40, 90, 50, 46, 80, 78],
      smooth: true,
      // areaStyle:{}
    },
    {
      type: 'line',
      name: '饥饿指数',
      data: [20, 30, 100, 70, 92, 100, 90],
      smooth: true,
      // areaStyle:{}
    },
  ],
})
</script>

<style scoped>
.line {
  width: 100%;
  height: 100%;
}
</style>
