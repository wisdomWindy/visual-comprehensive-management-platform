<template>
  <div class="ring-bar">
    <div>大区异常处理</div>
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { PieSeriesOption } from 'echarts'
import { onMounted, ref } from 'vue'
import type { AbNormalData, ItemType } from '@/types/visualization'

const props = defineProps<{
  data: AbNormalData
}>()
const chartContainer = ref(null)
const createSeries = (seriesData: ItemType[]) => {
  const series: PieSeriesOption[] = []
  seriesData.forEach((item, index) => {
    series.push({
      name: item.name,
      type: 'pie',
      clockwise: false,
      emphasis: {
        scale: true
      },
      radius: [`${73 - index * 15}%`, `${68 - index * 15}%`],
      center: ['50%', '50%'],
      data: [
        {
          name: item.name,
          value: item.value
        },
        {
          value: 1000,
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0
          },
        }
      ]
    })
    series.push({
      name: item.name,
      type: 'pie',
      silent: true,
      z: 1,
      radius: [`${73 - index * 15}%`, `${68 - index * 15}%`],
      center: ['50%', '50%'],
      label: {
        show: false
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: 'rgb(3,32,62)',
            borderWidth: 0
          }
        },
        {
          value: 2.5,
          itemStyle: {
            color: 'rgba(0,0,0,0.5)',
            borderWidth: 0
          }
        }
      ]
    })
  })
  return series
}
const createOptions = (data: AbNormalData) => {
  const options = {
    legend: {
      show: true,
      icon: 'circle',
      top: '14%',
      left: '80%',
      data: data.abnormals?.map((item: ItemType) => item.name),
      width: -5,
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 6,
      textStyle: {
        fontSize: 12,
        lineHeight: 5,
        color: 'rgba(255,255,255,0.8)'
      }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{b}</br>{c}({d}%)'
    },
    yAxis: {
      show: false,
      type: 'category',
      inverse: true
    },
    xAxis: {
      show: false
    },
    series: createSeries(data.abnormals)
  }
  return options
}
const renderChart = () => {
  const myChart = echarts.init(chartContainer.value)
  myChart.setOption(createOptions(props.data))
}

onMounted(() => {
  renderChart()
})
</script>

<style scoped></style>
