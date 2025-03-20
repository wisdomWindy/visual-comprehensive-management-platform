<template>
 <div class="container" ref="container"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {
  container
} = useEcharts({
  title:{
    text:'多列柱状图',
    top:'10%',
    left:'center'
  },
    tooltip: {
      show:true,
      trigger: 'axis',
      showContent:true,
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#ff54de'
        }
      }
    },
    grid:{
      containLabel:true,
      top:'20%',
      left:'4%',
      bottom:'10%'
    },
    legend: {
      data: ['A产品', 'B产品', 'C产品', 'D产品', 'E产品']
    },
    xAxis: {
      type: 'value',
      axisLine:{
        show:true
      },
      axisTick:{
        show:true,
        alignWithLabel:true
      }
    },
    yAxis: {
      type: 'category',
      data: ['A商场', 'B商场', 'C商场', 'D商场', 'E商场'],
    },
    series: [{
      type: 'bar',
      name: 'A产品',
      data: [20, 100, 125, 43, 65],
      label: {
        show: true,
        position: "right"
      },
      emphasis:{
        focus:'series'
      },
    }, {
      type: 'bar',
      name: 'B产品',
      data: [20, 170, 127, 43, 69],
      label: {
        show: true,
        position: "right"
      },
      emphasis:{
        focus:'series'
      },
    }, {
      type: 'bar',
      name: 'C产品',
      data: [60, 120, 135, 83, 165],
      label: {
        show: true,
        position: "right"
      },
      emphasis:{
        focus:'series'
      },
    }, {
      type: 'bar',
      name: 'D产品',
      data: [50, 130, 165, 53, 235],
      label: {
        show: true,
        position: "right"
      },
      emphasis:{
        focus:'series'
      },
    }, {
      type: 'bar',
      name: 'E产品',
      data: [30, 190, 185, 33, 75],
      label: {
        show: true,
        position: "right"
      },
      emphasis:{
        focus:'series'
      },
    }]
  })
</script>

<style scoped>
 
</style>