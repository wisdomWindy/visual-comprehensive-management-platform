<template>
 <div class="funnel" ref="funnel"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:funnel} = useEcharts({
    legend:{
      data:['登录', '注册']
    },
    series:[{
      type:'funnel',
      name:'漏斗图',
      min:0,
      max:100,
      minSize:'0%',
      maxSize:'100%',
      data:[{
        name:'登录',
        value:30
      }, {
          name: '注册',
          value: 50
        }]
    }]
  });
</script>

<style scoped>
.funnel{
  height: 100%;
 }
</style>