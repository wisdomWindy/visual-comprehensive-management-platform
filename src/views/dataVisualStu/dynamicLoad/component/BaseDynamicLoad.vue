<template>
 <div class="container" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
import { onBeforeUnmount, onMounted,ref } from 'vue';
const category = ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'];
const timer = ref()
const data = [114, 190, 330, 220, 310, 180]
const {echart,container:chartBox} = useEcharts({
  title:{
    text:'基础动态加载'
  },
  grid:{
    left:'15%',
    bottom:'10%'
  },
  xAxis:{
    type:'category',
    data:category,
    axisTick:{
      alignWithLabel:true,
    }
  },
  yAxis:{
    type:'value',
    min:0,
    max:1000
  },
  series:[{
    type:'line',
    name:'销量',
    data,
    lineStyle:{
      color:'#5470C6',
    },
    markPoint:{
      data:[
        {type:'max',name:'最大值'},
        {type:'min',name:'最小值'}
      ]
    },
    areaStyle:{
      color:'#B3C4D7',
    }
  }]
});
onMounted(()=>{
  timer.value = setInterval(()=>{
    echart.value.setOption({
      series:[{
        name:'销量',
        data:data.map(item=>{
          return item + Math.floor(Math.random()*50)
        })
      }]
    })
  },1000)
});
onBeforeUnmount(()=>{
  clearInterval(timer.value)
})
</script>

<style scoped>
.container{
  width:50%;
  height: 300px;
}
</style>
