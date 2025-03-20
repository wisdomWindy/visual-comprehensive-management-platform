<template>
  <div class="">
    <div>服务资源占用比</div>
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,watch } from 'vue'
import * as echarts from 'echarts'
import type { ServerData } from '@/types/visualization';
const props = defineProps<{
  data:ServerData
}>()

const chartContainer = ref(null)
const createOptions = (data:ServerData) => {
  const options = {
    grid: {
      top: 0,
      right: 16,
      bottom: 26,
      left: -26,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.servers.map(item => item.name)
    },
    yAxis: {
      type: 'value',
      show: false,
      max: (value:{min:number,max:number}) => {
        return parseInt(value.max * 1.2+'')
      }
    },
    series: [
      {
        type: 'bar',
        data: data.servers.map(item => item.value),
        itemStyle: {
          color: '#5d9ec8',
          borderRadius: 5,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 5
        },
        barWidth: true,
        label: {
          show: true,
          position: 'top',
          color: '#fff',
          formatter: '{c}%'
        }
      }
    ]
  }
  return options
}

const renderChart = () => {
  const myChart = echarts.init(chartContainer.value)
  myChart.setOption(createOptions(props.data))
}
watch(props, () => {
  renderChart()
})
onMounted(() => {
  renderChart()
})
</script>

<style scoped lang="scss">

</style>
