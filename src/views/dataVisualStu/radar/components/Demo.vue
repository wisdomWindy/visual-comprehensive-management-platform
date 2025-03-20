<template>
  <div class="container">
    <div class="title">员工能力雷达图</div>
    <div class="radar-chart" ref="radarChart"></div>
    <div class="controls">
      <button @click="randomizeData">随机数据</button>
      <input type="color" v-model="radarColor" @change="updateChart" />
      <label>雷达图颜色</label>
      <input type="color" v-model="textColor" @change="updateChart" />
      <label>文本颜色</label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'

// Ref for the chart container
const radarChart = ref(null)

// Chart instance
let chart = null

// Reactive data for the chart options
const data = ref([
  [75, 80, 90, 85, 70],
  [60, 70, 80, 75, 65],
  [80, 85, 95, 90, 80],
])

const radarColor = ref('#29ABE2')
const textColor = ref('#FFFFFF')

// Radar chart options
const options = ref({
  backgroundColor: '#1E293B', // Dark background
  title: {
    textStyle: {
      color: textColor.value,
      fontWeight: 'normal',
      fontSize: 20,
    },
    left: 'center',
  },
  legend: {
    data: ['员工A', '员工B', '员工C'],
    textStyle: {
      color: textColor.value,
    },
    orient: 'horizontal',
    left: 'center',
    bottom: '5%',
  },
  radar: {
    indicator: [
      { name: '沟通能力', max: 100, color: textColor.value },
      { name: '技术能力', max: 100, color: textColor.value },
      { name: '领导力', max: 100, color: textColor.value },
      { name: '创新能力', max: 100, color: textColor.value },
      { name: '协作能力', max: 100, color: textColor.value },
    ],
    radius: '60%',
    startAngle: 90,
    splitNumber: 4,
    shape: 'polygon',
    axisName: {
      // formatter: '{value}',
      color: textColor.value,
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
      name: '员工能力评估',
      type: 'radar',
      lineStyle: {
        width: 2,
      },
      data: [
        {
          value: data.value[0],
          name: '员工A',
          itemStyle: {
            color: radarColor.value, // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value + '50', // Make it slightly transparent
          },
        },
        {
          value: data.value[1],
          name: '员工B',
          itemStyle: {
            color: radarColor.value, // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value + '50', // Make it slightly transparent
          },
        },
        {
          value: data.value[2],
          name: '员工C',
          itemStyle: {
            color: radarColor.value, // Dynamic color from v-model
          },
          areaStyle: {
            color: radarColor.value + '50', // Make it slightly transparent
          },
        },
      ],
    },
  ],
})

// Function to initialize the chart
const initChart = () => {
  chart = echarts.init(radarChart.value)
  chart.setOption(options.value)
}

// Function to update the chart options
const updateChart = () => {
  if (chart) {
    options.value.series[0].data.forEach((item) => {
      item.itemStyle.color = radarColor.value
      item.areaStyle.color = radarColor.value + '50'
    })
    options.value.title.textStyle.color = textColor.value
    options.value.legend.textStyle.color = textColor.value
    options.value.radar.axisName.textStyle.color = textColor.value
    options.value.radar.splitArea.areaStyle.color = [
      'rgba(114, 147, 203, 0.1)',
      'rgba(114, 147, 203, 0.2)',
    ]
    chart.setOption(options.value)
  }
}

const randomizeData = () => {
  data.value = [
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
  ]
  options.value.series[0].data.forEach((item, index) => {
    item.value = data.value[index]
  })
  updateChart()
}

// Initialize chart when the component is mounted
onMounted(() => {
  initChart()

  // Make the chart responsive
  window.addEventListener('resize', () => {
    chart.resize()
  })
})

// Watch for changes in data and update the chart
watch(data, () => {
  updateChart()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e293b;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  font-family: sans-serif;
  width: 800px; /* Set a fixed width for consistent layout */
  margin: 20px auto; /* Center the component */
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.radar-chart {
  width: 100%; /* Make the chart take up the full width */
  height: 500px;
  /* Add some styling to match the theme */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.controls {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.controls button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.controls input[type='color'] {
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
}

.controls label {
  color: #ffffff;
}
</style>
