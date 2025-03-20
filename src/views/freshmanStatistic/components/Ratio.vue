<template>
  <border-box-7 style="width:33%;height:100%">
    <div class="p-2 text-white">招生男女比例</div>
    <div class="h-2/5" ref="chartBox"></div>
  </border-box-7>
</template>

<script setup lang="ts">
import type { SexRatio } from '@/types'
import { BorderBox7 } from '@kjgl77/datav-vue3'
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'

const chartBox = ref<HTMLElement>()

const props = defineProps<{
  data: SexRatio
}>()

const createOptions = (data: SexRatio) => {
  const options = {
    grid:{
      top:'10%'
    },
    legend: {
      show: true,
      icon: 'rect',
      textStyle: {
        color: '#fff'
      },
      data: [
        {
          name: '男',
          itemStyle: {
            color: '#1d9fff'
          }
        },
        {
          name: '女',
          itemStyle: {
            color: '#fc7165'
          }
        }
      ]
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
            const total = data.female + data.male
            return `${value.name}:${Math.round((value.value / total) * 100).toFixed(2)}%`
          }
        },
        data: [
          { name: '男', value: data.female, itemStyle: { color: '#1d9fff' } },
          {
            name: '女',
            value: data.male,
            itemStyle: {
              color: '#fc7165'
            }
          }
        ]
      }
    ]
  }
  return options
}

const renderChart = (data: SexRatio) => {
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
