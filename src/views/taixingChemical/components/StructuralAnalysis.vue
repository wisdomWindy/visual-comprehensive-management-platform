<template>
  <div class="container">
    <div class="chart" ref="container"></div>
  </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'
const { echart: chartInstance,container } = useEcharts(createOption())
function createOption(){
  const initOption = {
    legend: [
      {
        data: ['煤炭', '电', '天然气', '蒸汽'],
        itemWidth: 25,
        itemHeight: 20,
        itemGap: 10,
        bottom: 1,
        left: '5%',
        right:'5%',
        width: '50%',
        textStyle: {
          color: '#fff',
        },
      },
      {
        data: ['化工企业', '非化工企业'],
        itemWidth: 25,
        itemHeight: 20,
        itemGap: 10,
        bottom: 1,
        right: '5%',
        width: '50%',
        textStyle: {
          color: '#fff',
        },
      },
    ],
    title: [
      {
        text: '行业能耗结构分析（单位：吨标准煤炭）',
        textStyle: {
          color: '#fff',
          fontSize: 15,
        },
        left: '10%',
        top: '10%',
      },
      {
        text: '能耗结构分析',
        textStyle: {
          color: '#fff',
          fontSize: 15,
        },
        right: '10%',
        top: '10%',
      },
    ],
    grid: {
      top: '10%',
      left: '5%',
      right: '5%',
      bottom: '10%',
      containWithLabel: true,
    },

    color: ['#06e5b6', '#fc4456', '#2545be', '#4590e1'],
    series: [
      {
        type: 'pie',
        roseType: true,
        radius: ['10%', '50%'],
        center: ['30%', '50%'],
        startAngle: 245,
        labelLine: {
          show: false,
        },
        label: {
          position: 'inside',
          formatter(r) {
            return `${r.name}${r.value}`
          },
          color: '#fff',
        },
        data: [
          {
            name: '煤炭',
            value: 68,
          },
          {
            name: '电',
            value: 45,
          },
          {
            name: '蒸汽',
            value: 789,
          },
          {
            name: '天然气',
            value: 45,
            label: {
              height: -10,
            },
          },
        ],
      },
      {
        type: 'pie',
        roseType: true,
        radius: ['10%', '50%'],
        center: ['70%', '50%'],
        startAngle: 180,
        labelLine: {
          show: false,
        },
        label: {
          position: 'inside',
          formatter(r) {
            return `${r.name}${r.value}`
          },
          color: '#fff',
        },
        data: [
          {
            name: '化工企业',
            value: 12,
          },
          {
            name: '限上批零业',
            value: 7.04,
          },
          {
            name: '规上服务业',
            value: 42.25,
          },
          {
            name: '非化工企业',
            value: 21.13,
            label: {
              height: -10,
            },
          },
        ],
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
