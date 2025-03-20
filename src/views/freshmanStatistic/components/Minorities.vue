<template>
  <BorderBox7 style="width:33%">
    <div class="p-2 text-white">少数民族招生人数</div>
    <div class="h-2/5" ref="chartBox"></div>
  </BorderBox7>
</template>

<script setup lang="ts">
import { BorderBox7 } from '@kjgl77/datav-vue3'
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { Minorities } from '@/types'

const props = defineProps<{
  data: Minorities[]
}>()

const chartBox = ref<HTMLElement>()

const createOptions = (data: Minorities[]) => {
  const options = {
    grid: {
      top: 0,
      left: '10%',
      right: '10%',
      bottom: '60%'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        label: {
          show: true,
          color: '#fff',
          formatter: (value) => {
            return `${value.name}:${value.value}`
          }
        },
        data: data.map((item) => {
          return {
            name: item.name,
            value: item.value
          }
        })
      }
    ]
  }
  return options
}
const renderChart = (data: Minorities[]) => {
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
