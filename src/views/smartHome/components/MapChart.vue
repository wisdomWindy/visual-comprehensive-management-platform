<template>
  <div class="container">
    <div class="chart" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useEcharts, { echarts } from '@/hooks/useEcharts'
import homeJson from '@/assets/map/home.json?raw'
// let container = ref(null)
// let chartInstance = ref(null)
const sensorData = ref([
  {
    name: '主卧1',
    value: [116.409, 39.921, 1],
  },
  {
    name: '主卧2',
    value: [116.409, 39.935, 1],
  },
  {
    name: '书房',
    value: [116.432, 39.939, 1],
  },
  {
    name: '卫生间',
    value: [116.409, 39.921, 1],
  },
  {
    name: '客厅1',
    value: [116.41, 39.9036, 1],
  },
  {
    name: '客厅2',
    value: [116.43, 39.918, 1],
  },
  {
    name: '客厅3',
    value: [116.4516, 39.9306, 1],
  },
  {
    name: '次卧',
    value: [116.4516, 39.9306, 1],
  },
  {
    name: '楼梯',
    value: [116.447, 39.911, 1],
  },
  {
    name: '厨房',
    value: [116.4516, 39.905, 1],
  },
])
const baseStationData = ref([
  {
    name: '基站1',
    value: [116.415, 39.915, 0],
  },
  {
    name: '基站2',
    value: [116.448, 39.935, 0],
  },
  {
    name: '基站3',
    value: [116.455, 39.915, 0],
  },
  {
    name: '控制中心',
    value: [116.435, 39.925, 0],
  },
])
const transferLineData = [
  [
    {
      coord: [116.41, 39.9036],
      value: 25,
    },
    {
      coord: [116.409, 39.921],
    },
  ],
  [{
    coord: [116.415, 39.915],
    value: 20,
  },
  {
    coord: [116.448, 39.935],
  }]
  
]
const hour24 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
]
const lineData1 = [
  10, 14, 13, 20, 40, 45, 50, 60, 65, 80, 75, 70, 65, 60, 55, 50, 45, 40, 39, 35, 30, 27, 20, 10,
]
const lineData2 = [
  10, 14, 13, 20, 40, 45, 50, 60, 65, 80, 75, 70, 65, 60, 55, 50, 45, 40, 39, 35, 30, 27, 20, 10,
]
const { echart: chartInstance,container } = useEcharts(createOption())
function createOption() {
  echarts.registerMap('room', homeJson)
  const initOption = {
    legend: [
      {
        top: '65%',
        left: '73%',
        data: ['历史平均数据1', '历史平均数据2'],
      },
      {
        data: ['传感器', '基站', '运输路线'],
        top: '10%',
        left: '40%',
        textStyle: {
          color: '#ccc',
        },
        selected: {
          '主卧': false,
          '书房控制': false,
        },
      },
      {
        data: ['主卧', '书房控制'],
        orient: 'vertical',
        top: '10%',
        left: '15%',
        textStyle: {
          color: '#fff',
        },
        selected: {
          '主卧': false,
          '书房控制': false,
        },
      },
    ],
    visualMap: {
      text: ['height', 'low'],
      min: -5,
      max: 45,
      inRange: {
        color: ['#59a4b1', '#eac636', '#db5a5a'],
      },
      calculable: true,
      right: '5%',
      bottom: '40%',
      textStyle: {
        color: '#fff',
      },
    },
    title: [
      {
        text: '传感器布设平面图',
        textStyle: {
          color: '#fff',
          fontSize: 25,
        },
        top: '16',
        left: '5%',
      },
      {
        text: '温度数据统计情况',
        textStyle: {
          color: '#fff',
          fontSize: 25,
        },
        top: '16',
        left: '5%',
      },
      {
        text: `2025数据统计情况`,
        left: '60%',
        top: '5%',
        textStyle: {
          color: '#fff',
          fontSize: 25,
        },
      },
      {
        text: `平均值`,
        left: '60%',
        top: '14.5%',
        textStyle: {
          color: '#90ee90',
          fontSize: 15,
        },
      },
      {
        text: '最大值',
        left: '72%',
        top: '14.5%',
        textStyle: {
          color: '#ff4500',
          fontSize: 15,
        },
      },
      {
        text: '最小值',
        left: '84%',
        top: '14.5%',
        textStyle: {
          color: '#87ceff',
          fontSize: 15,
        },
      },
      {
        text: '未使用的传感器',
        left: '60%',
        top: '17.5%',
        textStyle: {
          color: '#ff7f00',
          fontSize: 15,
        },
      },
      {
        text: '数据异常传感器',
        left: '76%',
        top: '17.5%',
        textStyle: {
          color: '#9370db',
          fontSize: 15,
        },
      },
      {
        text: '数据正常范围',
        left: '60%',
        top: '20.5%',
        textStyle: {
          color: '#ffa54f',
          fontSize: 15,
        },
      },
    ],
    geo: {
      map: 'room',
      zoom: 0.8,
      show: true,
      left:'20%',
      itemStyle: {
        borderColor: 'rgba(147,235,248,1)',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(147,235,248,0)',
            },
            {
              offset: 1,
              color: 'rgba(147,235,248,0.2)',
            },
          ],
          globalCoord: false,
          shadowColor: 'rgba(128,217,248,1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
      },

      emphasis: {
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: '#389bb7',
          borderWidth: 0,
        },
      },
    },
    grid: [
      {
        left: '65%',
        top: '40%',
        right:'10%',
        bottom: '40%',
        // width: '30%',
      },
      {
        left: '65%',
        top: '75%',
        bottom: '10%',
        right: '10%',
        // width: '20%',
      },
    ],
    xAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#ddd',
          position: 'top',
        },
      },
      {
        gridIndex:1,
        type: 'category',
        data: hour24,
      },
    ],
    yAxis: [
      {
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          color: '#ddd',
        },
        type: 'category',
        data: sensorData.value.map((item) => item.name),
      },
      {
        gridIndex:1,
        type: 'value',
      },
    ],
    series: [
      {
        type: 'bar',
        yAxisIndex:0,
        xAxisIndex:0,
        data: sensorData.value
          .map((item) => {
            return item.value[2]
          })
          .sort(),
      },
      {
        name: '历史平均数据1',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: lineData1,
        markLine: {
          data: [
            {
              name: '平均线',
              type: 'average',
            },
          ],
        },
        markPoint: {
          data: [
            {
              name: '最大值',
              type: 'max',
            },
            {
              name: '最小值',
              type: 'min',
            },
          ],
          itemStyle: {
            color: '#d0648a',
          },
        },
      },
      {
        name: '历史平均数据2',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        data: lineData2,
        markLine: {
          data: [
            {
              name: '平均线',
              type: 'average',
            },
          ],
        },
        markPoint: {
          data: [
            {
              name: '最大值',
              type: 'max',
            },
            {
              name: '最小值',
              type: 'min',
            },
          ],
          itemStyle: {
            color: '#d0648a',
          },
        },
      },
      {
        name: '传感器',
        type: 'effectScatter',
        data: sensorData.value,
        coordinateSystem: 'geo',
        label: {
          show: true,
          position: 'right',
          formatter(v) {
            return v.name
          },
        },
        itemStyle: {
          color: 'yellow',
        },
      },
      {
        name: '基站',
        type: 'effectScatter',
        data: baseStationData.value,
        coordinateSystem: 'geo',
        label: {
          show: true,
          position: 'right',
          formatter(v) {
            return v.name
          },
        },
        itemStyle: {
          color: 'yellow',
        },
      },
      {
        name: '运输路线',
        type: 'lines',
        coordinateSystem: 'geo',
        effect: {
          show: true,
          symbol: 'arrow',
          symbolSize: [8, 6],
        },
        lineStyle: {
          curveness: 0.3,
        },
        data: transferLineData.map(item => {
          return [item[0].coord,item[1].coord]
        }),
      },
      {
        name: '主卧',
        type: 'effectScatter',
        data: [{ name: '主卧', value: [116.409, 39.928] }],
        symbol: 'rect',
        symbolSize: 10,
        coordinateSystem: 'geo',
        label: {
          show: true,
          position: 'right',
          formatter(v) {
            return v.name + '空调调温系统' + '开'
          },
        },
        emphasis: {
          label: {
            show: true,
            formatter(v) {
              return v.name + '温度(℃)'
            },
          },
        },
        itemStyle: {
          color: '#50a3ba',
        },
      },
      {
        name: '书房控制',
        type: 'effectScatter',
        data: [{ name: '主卧', value: [116.428, 39.939] }],
        symbol: 'rect',
        symbolSize: 10,
        coordinateSystem: 'geo',
        label: {
          show: true,
          position: 'right',
          formatter(v) {
            return v.name + '空调调温系统' + '开'
          },
        },
        emphasis: {
          label: {
            show: true,
            formatter(v) {
              return v.name + '温度(℃)'
            },
          },
        },
        itemStyle: {
          color: '#50a3ba',
        },
      },
    ],
  }
  const timelineOption = {
    baseOption: {
      timeline: {
        data: ['温度', '湿度', '震动', '烟雾'],
        axisType: 'category',
        width: '80%',
        autoPlay: true,
        left: '10%',
        symbolSize: 10,
      },
    },
    options: [initOption, initOption, initOption],
  }
  return timelineOption
  
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
