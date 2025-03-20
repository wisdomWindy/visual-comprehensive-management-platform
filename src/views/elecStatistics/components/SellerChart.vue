<template>
  <div class="seller container">
    <div class="echart" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useEcharts, { echarts } from '@/hooks/useEcharts'
import { init } from 'echarts'
const allData = ref([])
const totalPage = ref(0)
const currentPage = ref(1)
const timerId = ref(null)

const { echart: chartInstance,container } = useEcharts(createOption())
onMounted(async ()=>{
  await getData();
});
function createOption() {
  const initOption = {
    title: {
      text: '▎商家销售统计',
      textStyle: {
        fontSize: 20,
      },
      left: 20,
      top: 20,
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'line',
    //     z: 0,
    //     lineStyle: {
    //       width: 66,
    //       color: '#2d3443',
    //     },
    //   },
    // },
    grid: {
      top: '20%',
      right: '10%',
      left: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        barWidth: 30,
        label: {
          show: true,
          position: 'right',

          color: '#fff',
        },
        itemStyle: {
          borderRadius: [0, 33, 33, 0],
          color:{
            type:'linear',
            x:0,
            y:0,
            x2:1,
            y:0,
            colorStops:[
            {
              offset: 0,
              color: '#505211',
            },
            {
              offset: 1,
              color: '#ab6EE5',
            },
          ]
          },
        },
      },
    ],
  };
  return initOption
}
async function getData() {
  allData.value = [{
    name:'北京',
    value:100
  }]
  allData.value.sort((a, b) => {
    return b.value - a.value
  })
  totalPage.value =
    allData.value.length % 5 === 0 ? allData.value.length / 5 : allData.value.length / 5 + 1
  startInterval()
  updateChart()
}
function updateChart() {
  let start = (currentPage.value - 1) * 5
  let end = currentPage.value * 5
  let showData = allData.value.slice(start, end)
  let sellerName = showData.map((item) => {
    return item.name
  })
  let sellerValues = showData.map((item) => {
    return item.value
  })
  let option = {
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     // type:'line',
    //     z: 2,
    //     lineStyle: {
    //       width: 66,
    //       color: '#2d3443',
    //     },
    //   },
    // },
    grid: {
      top: '20%',
      right: '10%',
      left: '3%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      data: sellerName,
    },
    series: [
      {
        type: 'bar',
        data: sellerValues,
        label: {
          show: true,
          position: 'right',
          color: '#ccc',
        },
        itemStyle: {
          borderRadius: [0, 33, 33, 0],
          x:0,
          y:0,
          x2:1,
          y2:0,
          color:{
            type:'linear',
            colorStops:[
            {
              offset: 0,
              color: '#505211',
            },
            {
              offset: 1,
              color: '#ab6EE5',
            },
          ]
          }
        },
      },
    ],
  };
  chartInstance.value.setOption(option)
}
function startInterval() {
  clearInterval(timerId.value)
  timerId.value = setInterval(() => {
    currentPage.value++
    if (currentPage.value >= totalPage.value) {
      currentPage.value = 1
    }
    updateChart()
  }, 3000)
}


</script>

<style scoped>
.echart{
  width:100%;
  height:100%;
}
</style>
