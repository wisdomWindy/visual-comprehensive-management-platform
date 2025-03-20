<template>
  <div class="horizontal-bar">
    <div class="chart-tit">大区数据信息</div>
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
import type { RegionData } from '@/types/visualization';
const props = defineProps<{
  data:RegionData
}>()
const chartContainer = ref(null)
const myChart = ref()
// 创建options
const createOptions = (data: RegionData) => {
  const options = {
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false,
      max: (value:{min:number,max:number}) => {
        return parseInt(value.max * 1.2+'')
      }
    },
    yAxis: {
      type: 'category',
      data: data.regions?.map((item) => item.name),
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#9eb1c8'
      }
    },
    series: [
      {
        type: 'bar',
        data: data.regions?.map((item) => {
          return { name: item.name, value: item.value }
        }),
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180,180,180,0.2)'
        },
        itemStyle: {
          color: '#5d9ec8',
          borderRadius: 5,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 5
        },
        barWidth: true,
        label: {
          show: true,
          position: 'right',
          color: '#fff'
        }
      }
    ]
  }
  return options
}
const renderChart = () => {
  myChart.value = echarts.init(chartContainer.value)
  myChart.value.setOption(createOptions(props.data))
}
watch(() => props.data, () => {
  if (chartContainer.value) {
    renderChart()
  }
})
onMounted(() => {
  renderChart()
})
</script>

<style scoped lang="scss">

</style>
