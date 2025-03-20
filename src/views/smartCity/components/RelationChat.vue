<template>
  <div class="ring-bar">
    <div>数据传递信息</div>
    <div class="m-full h-full" ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import type { RelationData,RelationDataItem } from '@/types/visualization';

type FormatterParams = {
  componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: RelationDataItem,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array<any>|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
const props = defineProps<{
  data:RelationData
}>()
const chartContainer = ref(null)
const createOptions = (data:RelationData) => {
  const options = {
    legend: {
      show: true,
      icon: 'circle',
      top: '14%',
      left: '60%'
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{b}</br>{c}'
    },
    yAxis: {
      show: false,
      type: 'value',
      inverse: true
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 20,
        z: 3,
        edgeLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: (params:FormatterParams) => {
            return params.data.speed
          }
        },
        label: {
          show: true,
          position: 'bottom',
          color: '#5e5e5e'
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        data: data.relations?.map((item) => {
          if (item.id !== 0) {
            // 非数据中心
            return {
              name: item.name,
              active: true,
              speed: `${item.speed}kb/s`,
              value: item.value,
              x:item.x,
              y:item.y,
              symbolSize:20
            }
          } else {
            // 数据中心
            return {
              name: item.name,
              value: item.value,
              x:item.x,
              y:item.y,
              symbolSize: 50,
              itemStyle: {
                // color: {
                //   colorStops: [
                //     {
                //       offset: 0,
                //       color: '#157eff'
                //     },
                //     {
                //       offset: 1,
                //       color: '#35c2ff'
                //     }
                //   ]
                // }
              },
              label: {
                fontSize: 14
              }
            }
          }
        }),
        links: data.relations?.map((item) => {
          return {
            source: item.source,
            target: item.target,
            speed: `${item.speed}kb/s`,
            lineStyle: {
              color: '#12b5d0',
              curveness: 0.2
            },
            label: {
              show: true,
              position: 'middle',
              offset: [10, 0]
            }
          }
        })
      },
      // {
      //   type: 'lines',
      //   coordinateSystem: 'cartesian2d',
      //   z: 1,
      //   effect: {
      //     show: true,
      //     smooth: false,
      //     trailLength: 0,
      //     symbol: 'arrow',
      //     color: 'rgba(55,155,255,0.6)',
      //     symbolSize: 12,
      //     lineStyle: {
      //       curveness: 0.2
      //     },
      //     data: [
      //       {
      //         name: data.relations[0].name,
      //         coords: [
      //           [0, 300],
      //           [50, 200]
      //         ]
      //       },
      //       {
      //         name: data.relations[1].name,
      //         coords: [
      //           [0, 100],
      //           [50, 200]
      //         ]
      //       },
      //       {
      //         name: data.relations[2].name,
      //         coords: [
      //           [50, 200],
      //           [100, 100]
      //         ]
      //       },
      //       {
      //         name: data.relations[3].name,
      //         coords: [
      //           [50, 200],
      //           [100, 300]
      //         ]
      //       }
      //     ]
      //   }
      // }
    ]
  }
  return options
}
const renderChart = () => {
  const myChart = echarts.init(chartContainer.value)
  myChart.setOption(createOptions(props.data))
}

onMounted(() => {
  renderChart()
})
</script>

<style scoped></style>
