<template>
  <div class="container">
    <header class="header">可视化展板</header>
    <main class="main">
      <div class="column">
        <chart-box :options="employIndustryOptions"></chart-box>
        <chart-box :options="employTrendOptions"></chart-box>
        <chart-box :options="ageDistributionOptions"></chart-box>
      </div>
      <div class="column">
        <digit-board></digit-board>
        <map-chart style="flex: 1"></map-chart>
      </div>
      <div class="column">
        <chart-box :options="skillConditionOptions"></chart-box>
        <chart-box :options="playCountOptions"></chart-box>
        <chart-box :options="areaOptions"></chart-box>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import ChartBox from './components/ChartBox.vue';
import DigitBoard from './components/DigitBoard.vue';
import MapChart from './components/MapChart.vue';
import useEmploymentStore from '@/stores/useEmploymentStore'
import chinaMap from '@/assets/map/china.json?raw'
import * as echarts from 'echarts'
import type { SeriesData } from 'echarts/types/dist/shared';

const employmentStore = useEmploymentStore();
echarts.registerMap('china',chinaMap);
// 就业行业
const employIndustryOptions = computed(()=>{
  const industryData = employmentStore.emploeeCondition;
  return {
    title:{
      text:'就业行业 2019-2020',
      textStyle:{
        color:'#fff',
        fontSize:10
      },
      
      left:'center',
      top:0
    },
    grid:{
      containLabel:true,
      top:'15%',
      left:0,
      bottom:0
    },
    xAxis:{
      type:'category',
      data:industryData.map(item => item.industry),
      axisLine:{
        show:true
      },
      axisLabel:{
        color:'#5d5a88'
      },
      axisTick:{
        show:false,
        alignWithLabel:true
      }
    },
    yAxis:{
      type:'value',
      axisTick:{
        show:false,
        alignWithLabel:true
      },
      axisLine:{
        show:true
      },
      axisLabel:{
        interval:0,
        show:true,
        color:'#5d5a88'
      }
    },
    series:[{
      type:'bar',
      itemStyle:{
        color:'#4b7fd8',
        // borderRadius:10
      },
      barWidth:20,
      data:industryData.map(item => item.value)
    }]
  }
})

// 人员变化
const employTrendOptions = computed(()=>{
  const category:string[] = [];
  const fansData:number[] = []
  const visitor:number[] = []
  employmentStore.employTrend.forEach(item => {
    category.push(item.startTime.split('-')[1])
    fansData.push(item.addFans)
    visitor.push(item.addVisitor)
  })
  return {
    title:{
      text:'人员变化',
      textStyle:{
        color:'#fff',
        fontSize:10
      },
      left:'center',
      top:0
    },
    grid:{
      containLabel:true,
      top:'20%',
      bottom:0,
      left:0
    },
    legend:{
      show:true,
      top:'10%',
      right:'10%',
      data:['新增粉丝','新增游客'],
      itemStyle:{
        color:'#fff'
      }
    },
    xAxis:{
      type:'category',
      data:category,
      axisLine:{
        show:true
      },
      axisTick:{
        show:false,
        alignWithLabel:true
      },
      axisLabel:{
        show:true,
        color:'#5d5a88'
      }
    },
    yAxis:{
      type:'value',
       axisLine:{
        show:true
      },
      axisTick:{
        show:false,
        alignWithLabel:true
      },
      axisLabel:{
        show:true,
        color:'#5d5a88'
      }
    },
    series:[{
      type:'line',
      name:'新增粉丝',
      smooth:true,
      data:fansData
    },{
      type:'line',
      name:'新增游客',
      smooth:true,
      data:visitor
    }]
  }
});

// 年龄分布
const ageDistributionOptions = computed(()=>{
  const data:{name:string,value:number}[] = []
  employmentStore.ageDistribution.forEach(item => {
    data.push({name:item.name,value:item.value})
  })
  return {
    title:{
      text:'年龄分布',
       textStyle:{
        color:'#fff',
        fontSize:10
      },
      left:'center',
      top:0
    },
    grid:{
      containLabel:true,
      top:'20%',
      bottom:0,
      left:0,
    },
    series:[{
      type:'pie',
      radius:['50%','70%'],
      data
    }]
  }
});
// 技能掌握
const skillConditionOptions = computed(()=>{
  const category:string[] = []
  const data:number[] = []
  const colors = ['#1089e7','#f57474','#56d0e3','#f8b448','#8b78f6']
  employmentStore.skillCondition.forEach(item => {
    category.push(item.name)
    data.push(item.value)
  });
  return {
    title:{
      text:'技能掌握',
       textStyle:{
        color:'#fff',
        fontSize:10
      },
      left:'center',
      top:'5%'
    },
    grid:{
      containLabel:true,
      top:'10%',
      left:0,
      bottom:0
    },
    xAxis:{
      type:'value',
      show:false
    },
    yAxis:[{
      type:'category',
      data:category,
       axisLine:{
        show:false,
        color:'#fff'
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#fff'
      }
    },{
      type:'category',
      data,
       axisLine:{
        show:false,
        color:'#fff'
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#fff'
      }
    }],
    series:[{
      type:'bar',
      data,
      barWidth:10,
      label:{
        position:'inside',
        color:'#fff',
        formatter:(val:SeriesData)=>{
          console.log(val)
          return Math.floor(val.value / 1000) * 100+'%'
        }
      },
      boundaryGap:5,
      itemStyle:{
        borderRadius:10,
        color:function (params:SeriesData) {
          const num = colors.length;
          return colors[params.dataIndex % num]
        }
      }
    },{
      yAxisIndex:1,
      type:'bar',
      data:data.map(() => 1000),
      barWidth:15,
      label:{
        position:'right',
        color:'#fff'
      },
      itemStyle:{
        borderRadius:15,
        borderWidth:3,
        borderColor:'#ffdeee',
        color:'transparent'
      }
    }]
  }
});

// 播放量
const playCountOptions = computed(()=>{
  const playCount:number[] = [];
  const forwardCount:number[] = [];
  const category:string[] = []
  employmentStore.playData.forEach(item => {
    playCount.push(item.playCount)
    forwardCount.push(item.forward)
    category.push(item.time.split('-')[2])
  })
  return {
    title:{
      text:'播放量',
       textStyle:{
        color:'#fff',
        fontSize:10
      },
      left:'center',
      top:0
    },
    grid:{
      containLabel:true,
      top:'20%',
      bottom:0,
      left:0
    },
    legend:{
      show:true,
      top:'10%',
      left:'center',
      data:['播放量','转发量'],
      itemStyle:{
        color:'#fff'
      }
    },
    xAxis:{
      type:'category',
      data:category,
      axisLine:{
        show:true
      },
      axisTick:{
        show:true,
        alignWithLabel:true
      },
      axisLabel:{
        show:true,
        color:'#5d5a88'
      }
    },
    yAxis:{
      type:'value',
       axisLine:{
        show:true
      },
      axisTick:{
        show:true,
        alignWithLabel:true
      },
      axisLabel:{
        show:true,
        color:'#5d5a88'
      }
    },
    series:[{
      type:'line',
      name:'播放量',
      smooth:true,
      data:playCount,
      areaStyle:{}
    },{
      type:'line',
      name:'转发量',
      smooth:true,
      data:forwardCount,
      areaStyle:{}
    }]
  }
});

// 地区分布
const areaOptions = computed(()=>{
  const data:{name:string,value:number}[] = []
  employmentStore.areaData.forEach(item => {
    data.push({name:item.areaName,value:item.value})
  })
  return {
    title:{
      text:'地区分布',
      left:'center',
      top:'5%',
      textStyle:{
        color:'#fff',
        fontSize:10
      }
    },
    grid:{
      containLabel:true,
      left:0,
      bottom:0,
      top:'50%',
    },
    series:[{
      type: 'pie',
      radius: [20,60],
      center: ['50%', '50%'],
      roseType: 'radius',
      labelLine:{
        show:true
      },
      label:{
        show:true,
        position:'outside'
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data
    }]
  }
});
</script>
<style scoped>
.container{
  color:#fff;
  display: flex;
  flex-direction: column;
  background-image: url('/imgs/bg.jpeg');
}
.header{
  height:30px;
  padding:10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  margin-top:20px;
  flex:1;
  display: flex;
}
.column{
  height:100%;
}
.column:nth-child(3),
.column:nth-child(1){
  width:25%;
}
.column:nth-child(2){
  width:50%;
  margin:0 10px;
}
</style>
