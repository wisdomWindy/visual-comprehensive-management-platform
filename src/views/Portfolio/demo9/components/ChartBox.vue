<template>
 <div class="chart-box">
  <div class="header" v-if="title">{{title}}</div>
  <div class="content" :style="{height:`calc(100% - ${title ? '40px' : '0px'})`}">
    <slot></slot>
  </div>
 </div>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String,
    default:''
  }
})
</script>

<style scoped>
.chart-box{
  width:50%;
  height:50%;
  background:url('/imgs/demo9/chart_bg.png') no-repeat 0% 0%/100% 100%;
}
 .header{
  width:80%;
  height:20px;
  margin:20px auto 0;
  display:flex;
  align-items:center;
  padding:0 20px;
  color:#fff;
  background:url('/imgs/demo9/title_bg.png') no-repeat 0% 0%/100% 100%;
  font-size:12px;
 }
 .content{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
 }
</style>
