<template>
  <loading v-if="!data"></loading>
  <div
    class="container m-0 bg-cover bg-center w-screen h-screen flex overflow-hidden text-white p-5"
    v-if="data"
  >
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="w-full h-1/3 pb-4 box-border" :data="data.regionData" />
      <!-- 雷达图 -->
      <RadarBar class="w-full h-1/3 pb-4 box-border" :data="data.riskData"></RadarBar>
      <!-- 数据关系图 -->
      <Relation class="w-full h-1/3" :data="data.relationData"></Relation>
    </div>
    <div class="w-1/2 mr-5 flex flex-col">
      <TotalData class="bg-opacity-50 bg-slate-800 p-3" :data="data.totalData" />
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" :data="data.mapData" />
    </div>
    <div class="flex-1 m-0 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 竖向柱状图 -->
      <VerticalBar class="w-full h-1/3 pb-4 box-border" :data="data.serverData" />
      <!-- 环形图 -->
      <RingBar class="w-full h-1/3 pb-4 box-border" :data="data.abnormalData"></RingBar>
      <!-- 词云图图 -->
      <WordCloud class="w-full h-1/3" :data="data.wordCloudData"></WordCloud>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'
import HorizontalBar from './components/HorizontalBar.vue'
import VerticalBar from './components/VerticalBar.vue'
import RadarBar from './components/RadarBar.vue'
import Relation from './components/RelationChat.vue'
import RingBar from './components/RingBar.vue'
import TotalData from './components/TotalData.vue'
import WordCloud from './components/WordCloud.vue'
import MapChart from './components/MapChart.vue'
import type { ResponseDataType } from '@/types/visualization'
import { Loading } from '@kjgl77/datav-vue3'

const data = ref<null | ResponseDataType>()
const timer = ref<undefined | NodeJS.Timeout>()

const loadData = async () => {
  data.value = {
    regionData: {
      regions: [
        {
          name: '北京',
          value: 100,
        },
        {
          name: '北京',
          value: 100,
        },
        {
          name: '北京',
          value: 100,
        },
        {
          name: '北京',
          value: 100,
        },
      ],
    },
    mapData: {
      voltageLevel: ['2019', '2020', '2021', '2022', '2023'],
      categoryData: {
        '2019': [
          { name: '北京', value: 100 },
          { name: '上海', value: 100 },
          { name: '深圳', value: 100 },
          {name:'武汉',value:100},
          {name:'广州',value:100}
        ],
        '2020': [
         { name: '北京', value: 100 },
          { name: '上海', value: 100 },
          { name: '深圳', value: 100 },
          {name:'武汉',value:100},
          {name:'广州',value:100}
        ],
        '2021': [
         { name: '北京', value: 100 },
          { name: '上海', value: 100 },
          { name: '深圳', value: 100 },
          {name:'武汉',value:100},
          {name:'广州',value:100}
        ],
        '2022': [
         { name: '北京', value: 100 },
          { name: '上海', value: 100 },
          { name: '深圳', value: 100 },
          {name:'武汉',value:100},
          {name:'广州',value:100}
        ],
        '2023': [
         { name: '北京', value: 100 },
          { name: '上海', value: 100 },
          { name: '深圳', value: 100 },
          {name:'武汉',value:100},
          {name:'广州',value:100}
        ],
      },
      colors: [],
      topData: {
        2019: [
          [113.429919,23.334643,100],
          [108.7944,23.833381,20]],
        2020: [
          [113.429919,23.334643,100],
          [108.7944,23.833381,20]], 
        2021: [
          [113.429919,23.334643,100],
          [108.7944,23.833381,20]],
          2022: [
          [113.429919,23.334643,100],
          [108.7944,23.833381,20]],
          2023: [
          [113.429919,23.334643,100],
          [108.7944,23.833381,20]],
      },
    },
    abnormalData: {
      abnormals: [
        { name: '北京', value: 100 },
        { name: '上海', value: 200 },
        { name: '深圳', value: 300 },{
          name:'广州',value:400
        }],
    },
    relationData: {
      relations: [{
          id:1,
          name: '北京',
          source: '深圳',
          target: '上海',
          speed: 4,
          x:10,
          y:20,
          value:40,
        },{
          id:2,
          name: '上海',
          source: '北京',
          target: '广州',
          speed: 4,
          x:50,
          y:80,
          value:30,
        },{
          id:3,
          name: '深圳',
          source: '北京',
          target: '上海',
          speed: 4,
          x:20,
          y:100,
          value:20,
        },{
          id:4,
          name: '广州',
          source: '上海',
          target: '深圳',
          speed: 4,
          x:100,
          y:100,
          value:10,
      },],
    },
    riskData:{
      risks:[{
        name:'北京',
        value:20,
      },{
        name:'上海',
        value:20,
      },{
        name:'广州',
        value:20,
      },{
        name:'深圳',
        value:20,
      },{name:'武汉',value:20}],
    },
    serverData:{
      servers:[{ name: '北京', value: 100 },{name:'北京',value:100}]
    },
    totalData:{
      db:'100',
      hb:'100',
      xb:'100',
      hd:'100',
      total:'100',
      xn:'100',
      zn:'100',
    },
    wordCloudData:{
      datas:[{
        name:'北京',
        value:20,
      },{
        name:'上海',
        value:20,
      },{
        name:'广州',
        value:20,
      },{
        name:'深圳',
        value:20,
      },],
    },
  }
}
onMounted(() => {
  timer.value = setInterval(() => {
    loadData()
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style scoped>
.container {
 background-image:url('../../assets/bg/bg_1.png');
}
</style>
