<template>
  <div class="pie" ref="pie"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'

let { container: pie } = useEcharts({
  legend: {
    data: ['A产品', 'B产品', 'C产品', 'D产品'],
  },
  tooltip: { 
    show: true 
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      data: [
        {
          name: 'A产品',
          value: 100,
        },
        {
          name: 'B产品',
          value: 150,
        },
        {
          name: 'C产品',
          value: 170,
        },
        {
          name: 'D产品',
          value: 130,
        },
      ],
    },
  ],
})
</script>

<style scoped>
.pie {
  width: 100%;
  height: 100%;
}
</style>
