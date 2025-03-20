<template>
  <div class="container">
    <div class="container" ref="radar"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useEcharts from '@/hooks/useEcharts'

const radarColor = ref(['#29ABE2','#F5B041','#E74C3C'])
const textColor = ref('#1E293B')
const indicators = ref([
  { name: '沟通能力', max: 100 },
  { name: '技术能力', max: 100 },
  { name: '领导力', max: 100 },
  { name: '创新能力', max: 100 },
  { name: '协作能力', max: 100 },
])
const data = ref([
  [75, 80, 90, 85, 70],
  [60, 70, 80, 75, 65],
  [80, 85, 95, 90, 80],
])

const { container: radar } = useEcharts({
  legend: {
    data: ['员工1', '员工2','员工3'],
    textStyle: {
      color: textColor.value,
    },
    orient: 'horizontal',
  },
  title: {
    text: '员工能力雷达图',
    textStyle: {
      color: textColor.value,
    },
  },
  // grid: {},
  radar: {
    indicator: indicators.value.map((item) => {
      return {
        ...item,
        color: textColor.value,
      }
    }),
    center: ['40%', '60%'],
    radius: '70%',
    axisName:{
      color: textColor.value,
      fontSize: 14,
      fontWeight: 'bold',
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(114, 147, 203, 0.1)', 'rgba(114, 147, 203, 0.2)'], // More subtle gradients
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(114, 147, 203, 0.3)',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(114, 147, 203, 0.3)',
      },
    },
    
  },
  series: [
    {
      name:'员工能力评估',
      type: 'radar',
       lineStyle: {
        width: 2,
      },
      data: [
        {
          value: data.value[0],
          name: '员工1',
          
          itemStyle: {
            color: radarColor.value[0], // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value[0], // Make it slightly transparent
          },
        },
        {
          value: data.value[1],
          name: '员工2',
          
          itemStyle: {
            color: radarColor.value[1], // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value[1], // Make it slightly transparent
          },
        },
        {
          value: data.value[2],
          name: '员工3',
          
          itemStyle: {
            color: radarColor.value[2], // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value[2], // Make it slightly transparent
          },
        },
      ],
    },
  ],
})
</script>

<style scoped></style>
