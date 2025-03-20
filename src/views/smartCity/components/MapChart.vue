<template>
  <div class="">
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import mapJson from '@/assets/map/china.json'
import type { MapData } from '@/types/visualization';

const props = defineProps<{
  data:MapData
}>()

const chartContainer = ref(null)
const createTimelineOptions = (data:MapData) => {
  return data.voltageLevel?.map((item, index) => {
    return {
      backgroundColor: '',
      title: [
        {
          text: '2019-2023年度数据统计',
          top: '0%',
          left: '0%',
          textStyle: {
            color: '#ccc',
            countSize: 30
          }
        },
        {
          id: 'statistics',
          text: `${item}年数据情况`,
          right: '0%',
          top: '4%',
          textStyle: {
            color: '#ccc',
            fontSize: 20
          }
        }
      ],
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          margin: 2,
          color: '#aaa'
        }
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ddd'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: '#ddd'
        },
        data: data.categoryData[item]?.map((item) => item.name)
      },
      series: [
        {
          type: 'bar',
          zLevel: 1.5,
          itemStyle: {
            color: data.colors[index]
          },
          data: data.categoryData[item]?.map((item) => item.value)
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: data.topData[item],
          symbolSize: (val:number[]) => {
            return val[2] / 4
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          itemStyle: {
            color: data.colors[index],
            shadowBlur: 5,
            shadowColor: data.colors[index]
          }
        }
      ]
    }
  })
}
const createOptions = (data:MapData) => {
  const options = {
    timeline: {
      data: data.voltageLevel,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '0%',
      wdith: '80%',
      label: {
        color: '#ddd'
      },
      emphasis: {
        label: {
          color: '#fff'
        },
        controlStyle: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        borderColor: '#888',
        borderWidth: 2
      },
      controlStyle: {
        showNextButton: true,
        showPrevButton: true,
        color: '#666',
        borderColor: '#666'
      }
    },
    baseOption: {
      grid: {
        right: '2%',
        top: '15%',
        bottom: '10%',
        width: '20%'
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 0.8,
        center: [113, 34],
        itemStyle: {
          borderColor: 'rgba(147,234,248,1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              { offset: 0, color: 'rgba(147,235,248,0)' },
              { offset: 1, color: 'rgba(147,235,248,1)' }
            ]
          }
        },
        emphasis: {
          itemStyle: {
            areaColor: '#3db8ff',
            borderWidth: 1
          }
        }
      }
    },
    options: createTimelineOptions(data)
  }
  return options
}
const renderChart = () => {
  const myChart = echarts.init(chartContainer.value)
  myChart.setOption(createOptions(props.data) as any)
}

onMounted(() => {
  echarts.registerMap('china', mapJson as any)
  renderChart()
})
</script>

<style scoped></style>
