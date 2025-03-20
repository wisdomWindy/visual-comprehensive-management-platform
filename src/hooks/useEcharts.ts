import * as echarts from 'echarts'
import type { EChartsCoreOption, ECharts } from 'echarts'
import { ref, onMounted, type Ref, onUnmounted } from 'vue'
export default function useEcharts(options: EChartsCoreOption) {
  const echart = ref<ECharts | null>()
  const container = ref(null)
  onMounted(() => {
    // console.log('use', echart)
    echart.value = echarts.init(container.value)
    echart.value.setOption(options)
    window.addEventListener('resize', resizeChart)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeChart)
    echart.value!.dispose()
  })
  function resizeChart() {
    echart.value!.resize()
  }

  return {
    container,
    echart,
  }
}
export { echarts }
