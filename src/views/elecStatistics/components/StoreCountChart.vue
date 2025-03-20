<template>
  <div class="store-count container">
    <div class="echarts" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useEcharts, { echarts } from '@/hooks/useEcharts'
const allData = ref(null)
const currentIndex = ref(0)
const timer = ref(null)
const { echart: chartInstance, container } = useEcharts(createOption())
onMounted(async ()=>{
  await getData()
})

function createOption() {
  let initOption = {
    title: {
      text: '▎库存和销量分析',
    },
  }
  return initOption
}
async function getData() {
  allData.value = [{
    name:'北京',
    sales:100
  },{
    name:'上海',
    sales:200
  }]
  updateChart()
}
function updateChart() {
  let centerArr = [
    ['18%', '40%'],
    ['50%', '40%'],
    ['82%', '40%'],
    ['34%', '75%'],
    ['66%', '75%'],
  ]
  let colorArr = [
    ['#4ff778', '#0ba8bc'],
    ['#e5dd45', '#e8b11c'],
    ['#5052ee', '#ab6ee5'],
    ['#23e5e5', '#2e72bf'],
  ]
  const total = allData.value.reduce((pre,current)=>{
    return current.sales+pre
  },0)
  let seriesArr = allData.value.map((item, index) => {
    const value=  +((item.sales / total).toFixed(2))
    return {
      type: 'pie',
      radius: [`${index*2+1}0%`,`${index*2+2}0%`],
      center: ['50%','50%'],
      startAngle:90,
      label: {
        color: colorArr[index][0],
      },
      labelLine: {
        show: true,
      },
      data: [
        {
          name: item.name + '\n' + item.sales,
          value,
          itemStyle: {
            color: {
              type:'linear',
              x:0,
              y:0,
              x2:1,
              y2:1,
              colorStops:[
              {
                offset: 0,
                color: colorArr[index][0],
              },
              {
                offset: 1,
                color: colorArr[index][1],
              },
            ]
            }
          },
        },{
          value:1-value,
          itemStyle:{
            color:"#ccc"
          },
          labelLine:{
            show:false
          }
        }
      ],
    }
  })
  let dataOption = {
    series: seriesArr,
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
