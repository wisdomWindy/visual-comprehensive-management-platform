<template>
  <div class="hot container">
    <div class="echarts" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted,onUnmounted } from 'vue'
import useEcharts from '@/hooks/useEcharts'
const currentIndex = ref(0)
const allData = ref(null)
const titleFontSize = ref(0)
const catName = computed(() => {
  return allData.value ? allData.value[currentIndex.value].name : ''
})
const comStyle = computed(() => {
  return {
    fontSize: titleFontSize.value + 'px',
  }
})
const { echart:chartInstance, container } = useEcharts(createOption());
onMounted(async () => {
  await getData()
});
function createOption() {
  const initOption = {
    title: {
      text: '▎热销商品的占比统计',
    },
    legend: {
      top: '10%',
      icon: 'circle',
      itemWidth:30,
      textStyle:{
        fontSize:20
      }
    },
    tooltip: {
      show: true,
      formatter: (arg) => {
      let  thirdCategory = arg.data.children
        let total = 0
        thirdCategory.forEach((item) => {
          total += item.value
        })
        let retStr = ''
        thirdCategory.forEach((item) => {
          retStr += `${item.name}:${parseInt((item.value / total) * 100)} + %</br>`
        })
        return retStr
      },
    },
    series: {
      type: 'pie',
      center:['50%','60%'],
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
    },
  }
 return initOption
}

function updateChart() {
  const seriesData = allData.value[currentIndex.value].children.map((item) => {
    return {
      name: item.name,
      value: item.value,
      children: item.children,
    }
  })
  const legendArr = allData.value[currentIndex.value].children.map((item) => {
    return item.name
  })
  const dataOption = {
    legend: {
      data: legendArr,
    },
    series: [
      {
        data: seriesData,
      },
    ],
  }
  chartInstance.value.setOption(dataOption)
}
async function getData() {
  allData.value = [{
    children:[{
      name:'商品1',
      value:1200
    },{
      name:'商品2',
      value:1200
    },{
      name:'商品3',
      value:1600
    },]
  }]
  updateChart()
}

</script>

<style scoped>

</style>
