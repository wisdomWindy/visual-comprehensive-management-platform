<template>
  <div class="container">
    <div class="chart" ref="container"></div>
  </div>
</template>

<script setup>
import useEcharts, { echarts } from '@/hooks/useEcharts'
import taizhouJson from '@/assets/map/taizhou.json'
const regionData = [
  {
    label: '兴化市',
    value: [[119.930721, 32.826721]],
  },
  {
    label: '泰兴市',
    value: [
      [120.07215, 32.216865],
      [120.166436, 32.143519],
    ],
  },
  {
    label: '靖江市',
    value: [[120.135391, 31.997629]],
  },
]
echarts.registerMap('tz', taizhouJson)
const { echart: chartInstance,container } = useEcharts(createOption())
function createOption() {
  const initOption = {
    title: [
      {
        text: '泰兴位置总览',
        textStyle: {
          color: '#fff',
          fontSize: 20,
        },
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#1b2a7b',
            },
            {
              offset: 1,
              color: '#111860',
            },
          ],
          global: false,
        },
        padding: [9, 0, 12, 16],
        left: 27,
        top: 9,
      },
      {
        text: '入园申报统计',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 200,
        },
        left: 103,
        top: 220,
      },
      {
        text: `{a|今日进出园区车辆}\n {a|${1}}{a|2}{a|${3}}{a|${1}}`,
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 200,
          rich: {
            a: {
              // width:'39px',
              // height:'42px',
              padding: [10, 10, 6, 10],
              backgroundColor: '#121442',
              fontSize: 30,
              fontHeight: 600,
              align: 'center',
              shadowColor: '#15265f',
              shadowBlur: 10,
            },
            b: {
              align: 'center',
              fontSize: 18,
              lineHeight: 42,
            },
          },
        },
        left: '50%',
        top: '10%',
      },
      {
        text: `{a|危机预警次数}\n {a|${1}}{a|2}{a|${3}}{a|${1}}`,
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 200,
          rich: {
            a: {
              // width:'39px',
              // height:'42px',
              padding: [10, 10, 6, 10],
              backgroundColor: '#121442',
              fontSize: 30,
              fontHeight: 600,
              align: 'center',
              shadowColor: '#15265f',
              shadowBlur: 10,
            },
            b: {
              align: 'center',
              fontSize: 18,
              lineHeight: 42,
            },
          },
        },
        left: '78%',
        top: '10%',
      },
      {
        text: '今日危废品处理数据',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 200,
        },
        right: '22%',
        top: '33%',
      },
      {
        text: '今日化工原料生产情况',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 200,
        },
        right: '1%',
        top: '33%',
      },
      {
        text: '单位：吨',
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 200,
        },
        left: '75%',
        top: '65%',
      },
      {
        text: '单位：吨',
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 200,
        },
        left: '93%',
        top: '65%',
      },
      {
        text: '化工园区企业车辆统计',
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 200,
        },
        left: '75%',
        top: '75%',
      },
    ],
    legend: {
      data: ['轻度化工位置', '重度化工位置'],
      orient: 'vertical',
      textStyle: {
        color: '#fff',
      },
      left:'10%',
      top:'10%'
    },
    grid: {
      top: '80%',
      left: '70%',
      right: '5%',
      bottom: 23,
      containWithLabel: true,
    },
    radar: {
      radius: 103,
      center: ['18%', '80%'],
      splitArea: {
        areaStyle: {
          color: ['#0d78e0', '#11185f'],
        },
      },
      axisName: {
        fontSize: 10,
        colorr: '#fff',
      },
      axisNameGap: 10,
      indicator: [
        {
          name: '临时访客',
          // max: 6500,
        },
        {
          name: '危废车辆',
          // max: 6500,
        },
        {
          name: '职工白名',
          // max: 6500,
        },
        {
          name: '危化品车辆',
          // max: 6500,
        },
        {
          name: '普通车辆',
          // max: 6500,
        },
      ],
    },
    color: ['#06e5b6', '#fc4456', '#2545be', '#4590e1'],
    xAxis: {
      type: 'category',
      data: ['致诚', '朗逸化工', '华尔化工', '艾森化学'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: '#fff',
        interval: 0,
      },
      axisLine: {
        show: true,
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 5000,
      // interval: 250,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        },
      },
    },
    geo: {
      left: '30%',
      top: '10%',
      bottom: '5%',
      map: 'tz',
      show: true,
      itemStyle: {
        areaColor: '#09146e',
        borderColor: '#0d7be5',
        borderWidth: 2,
      },
      label: {
        show: true,
        color: '#fff',
        fontSize: 14,
      },
      regions: [
        {
          name: '兴化市',
          label: {
            offset: [-50, -10],
          },
        },
      ],
    },
    series: [
      {
        type: 'bar',
        name: '车辆统计',
        label: {
          show: true,
          position: 'top',
        },
        barWidth: 14,
        data: [312, 614, 880, 300],
      },
      {
        type: 'pie',
        radius: 68,
        gridIndex: 1,
        center: ['88%', '55%'],
        color: ['#06e5b6', '#fc4456', '#4590e1', '#2545be'],
        label: {
          position: 'inside',
          formatter(r) {
            return `${r.name}\n${r.value}`
          },
          color: '#fff',
        },
        data: [
          {
            name: '氯磷酸',
            value: 90,
          },
          {
            name: '硝酸铵',
            value: 140,
          },
          {
            name: '丙酸',
            value: 90,
          },
          {
            name: '水硫酸锰',
            value: 170,
          },
        ],
      },
      {
        type: 'pie',
        radius: 68,
        center: ['70%', '55%'],
        color: ['#06e5b6', '#fc4456', '#4590e1', '#2545be'],
        label: {
          position: 'inside',
          formatter(r) {
            return `${r.name}\n${r.value}`
          },
          color: '#fff',
        },
        data: [
          {
            name: '氯磷酸',
            value: 100,
          },
          {
            name: '硝酸铵',
            value: 120,
          },
          {
            name: '丙酸',
            value: 80,
          },
          {
            name: '水硫酸锰',
            value: 120,
          },
        ],
      },
      {
        type: 'effectScatter',
        name: '轻度化工位置',
        coordinateSystem: 'geo',
        data: regionData.map((item) => {
          return item.value[0]
        }),
        itemStyle: {
          color: '#ffff16',
        },
      },
      {
        type: 'effectScatter',
        name: '重度化工位置',
        coordinateSystem: 'geo',
        data: regionData.map((item) => {
          return item.value[0]
        }),
        itemStyle: {
          color: '#a70622',
        },
      },
      {
        type: 'radar',
        data: [50, 21, 32, 42, 100],
        areaStyle: {
          color: '#084fc6',
        },
      },
      {
        type: 'bar',
      },
    ],
  }
  return initOption
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
