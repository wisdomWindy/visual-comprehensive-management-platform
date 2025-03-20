<template>
  <border-box-7 class="w-full flex-1 text-white">
    <div class="w-full h-30 flex justify-around">
      <border-box10 class="department" v-for="(item, index) in data.datas" :key="index">
        <div class="text-[#69caea]">{{ item.name }}</div>
        <div>报到人数：{{ item.reportNumber }}</div>
        <div>招生人数：{{ item.enrollmentsNumber }}</div>
        <div>报到率：{{ getRate(item) }}%</div>
      </border-box10>
    </div>
    <div class="w-full chart-box" ref="chartBox"></div>
  </border-box-7>
</template>

<script setup lang="ts">
import { onMounted, ref,watch } from 'vue'
import * as echarts from 'echarts'
import { BorderBox7,BorderBox10 } from '@kjgl77/datav-vue3'
import chinaMap from '@/assets/map/china.json?raw'
import type { ProvinceReportingSituation } from '@/types'
const props = defineProps<{
  data: any,
  provienceData:Array<ProvinceReportingSituation> | undefined
}>()
echarts.registerMap('china',chinaMap)
const chartBox = ref()

function createOptions(data: any) {
  const options = {
    grid:{
      // top:'60%',
      left:0,
      bottom:0,
      right:0
    },
    visualMap:{
      type:'continuous',
      show:true
    },
    series:[{
      type:'map',
      map:'china',
      name:'报到人数',
      nameProperty:'shortName',
      top:'6%',
      bottom:'5%',
      left:'30%',
      right:'30%',
      label:{
        show:false
      },
      emphasis:{
        label:{
          show:true
        }
      },
      data:props.provienceData?.map((item:any) => {
        return {
          name:item.name,
          value:item.actualArrival
        }
      })
    }]
  }
  return options
}
watch(()=> props.provienceData,()=>{
  console.log(props.provienceData)
  if(chartBox.value){
    renderChart();
  }
})
function renderChart(){
const myChart = echarts.init(chartBox.value)
  myChart.setOption(createOptions(props.data))
}

onMounted(() => {
  console.log(chartBox.value)
   
  renderChart();
})
const getRate = (value: any) => {
  return ((value.reportNumber / value.enrollmentsNumber) * 100).toFixed(2)
}
</script>

<style scoped>

.chart-box{
  width:100%;
  height:calc(100% - 120px);
}
.department{
  width:20%;
  padding:10px;
  border:1px solid #ccc;
  height:120px;
}
</style>
