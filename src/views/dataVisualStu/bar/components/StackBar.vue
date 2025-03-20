<template>
 <div class="container" ref="container"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {
  container
} = useEcharts({
    title:{
      text:'堆叠柱状图',
      top:'10%',
      left:'center'
    },
    tooltip: {
      type: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#feed3e'
        }
      }
    },
    legend: {
      data: ['A产品', 'B产品', 'C产品', 'D产品', 'E产品']
    },
    xAxis: {
      type: 'value',
      axisLine:{show:true},
      axisTick:{
        show:true,
        alignWithLabel:true
      }
    },
    yAxis: {
      type: 'category',
      data: ['A商场', 'B商场', 'C商场', 'D商场', 'E商场']
    },
    series: [{
      type: 'bar',
      name: 'A产品',
      data: [200, 300, 430, 230, 530],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'B产品',
      data: [200, 340, 650, 340, 230],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'C产品',
      data: [100, 200, 230, 760, 32],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'D产品',
      data: [102, 390, 120, 230, 354],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }, {
      type: 'bar',
      name: 'E产品',
      data: [150, 230, 540, 120, 323],
      stack: 'sale',
      label: {
        show: true,
        position: 'right'
      }
    }]
  })
</script>

<style scoped>
 
</style>