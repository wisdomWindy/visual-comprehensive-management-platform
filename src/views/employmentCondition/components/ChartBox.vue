<template>
  <div class="chart-box">
    <div class="container" ref="container"></div>
  </div>
</template>

<script setup lang="ts">
import useEcharts from '@/hooks/useEcharts'
import type { EChartsCoreOption } from 'echarts/core'
import { watch } from 'vue'
const props = defineProps<{
  options: EChartsCoreOption
}>()
const { container, echart } = useEcharts(props.options)
watch(
  () => props.options,
  (val) => {
    if (Object.keys(val).length && container.value) {
      echart.value!.setOption(props.options)
    }
  },
)
</script>

<style scoped>
.chart-box {
  width: 100%;
  height: 200px;
  padding: 10px;
}
</style>
