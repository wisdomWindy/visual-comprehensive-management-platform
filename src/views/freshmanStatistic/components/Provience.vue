<template>
  <border-box-7 class="h-full container" style="width:33%">
    <div class="p-2 text-white">省份报道情况</div>
    <div class="h-2/5" ref="chartBox"></div>
  </border-box-7>
</template>

<script setup lang="ts">
import { BorderBox7 } from '@kjgl77/datav-vue3'
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { ProvinceReportingSituation } from '@/types'

const props = defineProps<{
  data: ProvinceReportingSituation[]
}>()

const chartBox = ref<HTMLElement>()
const createOptions = (data: ProvinceReportingSituation[]) => {
  return {
    grid: {
      top: '20%',
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    legend: {
      show: true,
      icon: 'rect',
      right:0,
      top:0,
      data: [
        {
          name: '已报到',
          itemStyle: {
            color: '#1d9fff'
          }
        },
        {
          name: '未报到',
          itemStyle: {
            color: '#fc7165'
          }
        }
      ],
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { color: '#fff' },
      data: data.map((item) => item.name)
    },
    yAxis: {
      type: 'value',
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: '#fff'
      },
      splitLine:{
        show:false
      }
    },
    series: [
      {
        type: 'bar',
        name: '已报到',
        barWidth: 20,
        data: data.map((item) => item.actualArrival),
        itemStyle:{
          color:'#1d9fff'
        },
        label: {
        show: true,
        color: '#fff',
        position:'top'
      }
      },
      {
        type: 'bar',
        name: '未报到',
        barWidth: 20,
        data: data.map((item) => item.shouldArrive),
        itemStyle:{
          color:'#fc7165'
        },
        label: {
        show: true,
        color: '#fff',
        position:'top'
      }
      }
    ]
  }
}
const renderChart = (data: ProvinceReportingSituation[]) => {
  const chart = echarts.init(chartBox.value)
  chart.setOption(createOptions(data))
}
watch(props, () => {
  if (chartBox.value) {
    renderChart(props.data)
  }
})
onMounted(() => {
  renderChart(props.data)
})
</script>

<style scoped>
.container {
  width: 33%;
}
</style>
