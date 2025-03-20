<template>
  <div class="map container" @dbclick="backMap">
    <div class="echarts" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { getProvienceMap } from '@/apis'
import useEcharts, { echarts } from '@/hooks/useEcharts'
import chinaMap from '@/assets/map/china.json?raw'
const allData = ref(null)
const provinces = reactive({
  西安: 'xian',
  哈尔滨: 'haerbin',
})

const mapData = reactive({})
const { echart: chartInstance, container } = useEcharts(createOption())
onMounted(async () => {
  await getData()
})

function createOption() {
   echarts.registerMap('china', chinaMap)
  const initOption = {
    title: {
      text: '▎商家分布',
      left: 20,
      top: 20,
    },
    geo: {
      map: 'china',
      top: '5%',
      bottom: '5%',
      itemStyle: {
        areaColor: '#27ef72',
        borderColor: '#333',
      },
    },
  }
  return initOption
}
async function getData() {
  allData.value =[{
    name:'北京',
    children:[116.41995,40.18994,20]
  }]
  updateChart()
}
function updateChart() {
  let legendArr = allData.value.map((item) => {
    return item.name
  })
  const effectCoption = {
      type: 'effectScatter',
      rippleEffect: {
        scale: 5,
        bruhsType: 'stroke',
      },
      data: allData.value.map((item) => {
        return item.children
      }),
      coordinateSystem: 'geo',
    }

  let dataOption = {
    series: [effectCoption],
  }
  chartInstance.value.setOption(dataOption)
}
function backMap() {
  let revertOption = {
    geo: {
      map: 'china',
    },
  }
  chartInstance.value.setOption(revertOption)
}
</script>

<style scoped>
.echarts{
  width:100%;
  height:100%;
}
</style>
