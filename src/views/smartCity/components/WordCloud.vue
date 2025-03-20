<template>
  <div class="ring-bar">
    <div>关键词条</div>
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { onMounted, ref } from 'vue'
import type { WordCloudData } from '@/types/visualization'

const props = defineProps<{
  data: WordCloudData
}>()
const chartContainer = ref(null)
const randomRGB = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`
}
const createOptions = (data: WordCloudData) => {
  const options = {
    series: [
      {
        type: 'wordCloud',
        sizeRange: [8, 46],
        rotationRange: [0, 0],
        gridSize: 0,
        layoutAnimation: true,
        textStyle: {
          color: randomRGB
        },
        emphasis: {
          textStyle: {
            fontWeight: 'bold',
            color: '#000'
          }
        },
        data: data.datas || []
      }
    ]
  }
  return options
}
// 渲染图表
const renderChart = () => {
  const myChart = echarts.init(chartContainer.value)
  myChart.setOption(createOptions(props.data))
}

onMounted(() => {
  renderChart()
})
</script>

<style scoped></style>
