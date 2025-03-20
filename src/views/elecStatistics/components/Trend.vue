<template>
  <div class="trend container">
    <div class="title">
      <div class="select-con" :style="marginStyle" v-show="showChoice">
        <div
          class="select-item"
          v-for="item in selectTypes"
          :key="item.type"
          @click="handleSelect(item.type)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="echarts" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import useEcharts, { echarts } from '@/hooks/useEcharts'
const allData = ref(null)
const showChoice = ref(false)
const choiceType = ref('map')
const titleFontSize = ref(15)
const selectTypes = computed(() => {
  if (!allData.value) {
    return []
  } else {
    return allData.value.type.filter((item) => {
      return item.key !== choiceType.value
    })
  }
})
const showTitle = computed(() => {
  if (!allData.value) {
    return ''
  } else {
    return allData.value[choiceType.value].title
  }
})
const comStyle = computed(() => {
  return {
    fontSzie: titleFontSize.value + 'px',
  }
})
const marginStyle = computed(() => {
  return {
    marginLeft: 10 + 'px',
  }
})
const { echart: chartInstance, container } = useEcharts(createOption())
onMounted(async () => {
  await getData();
});

function createOption() {
  let initOption = {
    title:{
      text:'|销售趋势表',
      textStyle:{
        fontSize:20
      }
    },
    grid: {
      left: '10%',
      top: '35%',
      right: '4%',
      bottom: '10%',
      containerLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      left: 20,
      top: '15%',
      icon: 'circle',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
    },
  }
 return initOption
}
async function getData() {
  allData.value = {
    common:{
      month:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]
    },
    type:[{key:'map'}],
    'map':[{
      name:'map',
      data:[1,2,3,4,5,65,6,78,8,9,1,12]
    }]
  }
  updateChart()
}
function updateChart() {
  let timeArr = allData.value.common.month
  let valueArr = allData.value[choiceType.value]
  let colorArr = [
    'rgba(11, 168, 44, 0.5)',
    'rgba(44, 110, 255, 0.5)',
    'rgba(22, 242, 217, 0.5)',
    'rgba(254,33, 30, 0.5)',
    'rgba(250, 105, 0, 0.5)',
  ]
  let colorArr2 = [
    'rgba(11, 168, 44, 0)',
    'rgba(44, 110, 255, 0)',
    'rgba(22, 242, 217, 0)',
    'rgba(254,33, 30, 0)',
    'rgba(250, 105, 0, 0)',
  ]
  let serierArr = valueArr.map((item, index) => {
    return {
      type: 'line',
      name:item.name,
      data: item.data,
      stack: 'line',
      areaStyle: {
        color: {
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[
          {
            offset: 0,
            color: colorArr[index],
          },
          {
            offset: 1,
            color: colorArr2[index],
          },
        ]
        }
      },
    }
  })
  let lengedArr = valueArr.map((item) => {
    return item.name
  })
  let dataOption = {
    xAxis: {
      data: timeArr,
    },
    legend: {
      data: lengedArr,
    },
    series: serierArr,
  }
  chartInstance.value.setOption(dataOption)
}

function handleSelect(currentType) {
  choiceType.value = currentType
  updateChart()
}

</script>

<style lang="less">
.echarts{
  width:100%;
  height:100%;
}
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #fff;
  z-index: 10;
  .title-icon {
    margin-left: 10px;
    cursor: pointer;
  }
  .select-con {
    background-color: #222733;
  }
}
</style>
