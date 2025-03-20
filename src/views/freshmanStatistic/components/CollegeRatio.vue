<template>
  <border-box-7 class="w-full h-full">
    <div class="p-2 text-white">各学院报到率</div>
    <div class="p-2 w-full h-5/6" ref="chartBox"></div>
  </border-box-7>
</template>

<script setup lang="ts">
import { BorderBox7 } from '@kjgl77/datav-vue3'
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import type { CollegeData } from '@/types'

const props = defineProps<{
  data: CollegeData[]
}>()

const chartBox = ref<HTMLElement>()

const createOptions = (data: CollegeData[]) => {
  const options = {
    grid: {
      top: '0',
      left: '10%',
      right: '20%',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false,
      min: 0,
      max: 100
    },
    yAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: true,
        color: '#fff',
        formatter: (value, index) => {
          const item = data[index]
          return `${item.name} ${item.actualArrival}/${item.shouldArrive}`
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: data.map((item) => {
        return {
          value: item.name,
          data: item
        }
      })
    },
    series: [
      {
        type: 'bar',
        barWidth: 10,
        label: {
          show: true,
          formatter: (value) => {
            return `${value.data.toFixed(2)}%`
          },
          position: 'right'
        },
        itemStyle: {
          borderRadius: 5,
          color: '#1d9ffd'
        },
        backgroundStyle: {
          color: '#fff'
        },
        barGap: '100%',
        data: data.map((item) => {
          return Math.round(item.actualArrival / item.shouldArrive) * 100
        })
      }
    ]
  }
  return options
}

const renderChart = (data: CollegeData[]) => {
  const chart = echarts.init(chartBox.value)
  chart.setOption(createOptions(data))
}
onMounted(() => {
  renderChart(props.data)
})
</script>

<style scoped></style>
