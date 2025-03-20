<template>
  <div class="rank container">
    <div class="echarts" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useEcharts, { echarts } from '@/hooks/useEcharts'
import { getMapData } from '@/apis'
const allData = ref([])
const startValue = ref(0)
const endVlaue = ref(9)
const timer = ref(null)
const { echart: chartInstance, container } = useEcharts(createOption())
onMounted(async () => {
  await getData()
})
function createOption() {
  let initOption = {
    title: {
      text: '▎地区销售排行',
      left: 20,
      top: 20,
    },
    grid: {
      top: '40%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    tooltip: {
      label: {
        show: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [],
  }
  return initOption
  
}
async function getData() {
  allData.value =[{
    name:'北京',
    value:100
  }]
  allData.value.sort((a, b) => {
    return a.value - b.value
  })
  updateChart()
}
function updateChart() {
  let colorArr = [
    ['#0ba82c', '#4f778'],
    ['#2e72bf', '#23e5e5'],
    ['#5052ee', '#ab6ee5'],
  ]
  let provinceArr = allData.value.map((item) => {
    return item.name
  })
  let valueArr = allData.value.map((item) => {
    return item.value
  })

  let dataOption = {
    xAxis: {
      type:'category',
      data: provinceArr,
    },
    // dataZoom: {
    //   show: false,
    //   startValue: startValue.value,
    //   endValue: endVlaue.value,
    // },
    series: [
      {
        type:'bar',
        name:'总销量',
        data: valueArr,
        barWidth:20,
        // itemStyle: {
        //   color: (e) => {
        //     let targetArr = null
        //     if (e.data > 300) {
        //       targetArr = colorArr[0]
        //     } else if (e.data > 200) {
        //       targetArr = colorArr[1]
        //     } else {
        //       targetArr = colorArr[2]
        //     }
        //     return {
        //       type:'linear',
        //       x:0,
        //       y:0,
        //       x2:0,
        //       y2:1,
        //       colorStops:[
        //       {
        //         offset: 0,
        //         color: targetArr[0],
        //       },
        //       {
        //         offset: 1,
        //         color: targetArr[1],
        //       },
        //     ]
        //     }
        //   },
        // },
      },
    ],
  }
  chartInstance.value.setOption(dataOption)
}
</script>

<style scoped>
.echarts{
  width:100%;
  height:100%;
}
</style>
