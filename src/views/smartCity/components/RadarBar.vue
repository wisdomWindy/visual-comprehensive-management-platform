<template>
  <div class="">
    <div>云端报警风险</div>
    <div class="w-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import type { RiskData } from '@/types/visualization';

const props = defineProps<{
  data:RiskData
}>()

const chartContainer = ref(null)

const createOptions = (data:RiskData) => {
  const options = {
    radar: {
      axisName: {
        color: '#05d5ee',
        fontSize: 14
      },
      shape: 'polygon',
      center: ['50%', '55%'],
      radius: '80%',
      startAngle: 90,
      axisLine: {
        lineStyle: {
          color: 'rgba(5,213,255,.8)'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(5,213,255,.8)'
        }
      },
      indicator:data.risks.map(item => {
        return {
          name:item.name,
          max:100
        }
      })
    },
    polar: {
      center: ['50%', '50%'],
      radius: '0%'
    },
    angleAxis: {
      min: 0,
      interval: 5,
      clockWise: false
    },
    radiusAxis: {
      min: 0,
      interval: 20,
      splitLine: {
        show: true
      }
    },
    series: [
      {
        type: 'radar',
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          color: '#05d5ff'
        },
        areaStyle: {
          color: '#05d5ff',
          opacity: 0.5
        },
        label: {
          show: true,
          color: '#fff'
        },
        data: [{
          value:data.risks?.map((item) => item.value)
        }]
      }
    ]
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
