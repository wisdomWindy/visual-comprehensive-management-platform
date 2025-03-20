<template>
 <div class="chart-box">
  <div class="header">{{ title }}</div>
  <div class="content">
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
  width:100%;
  height:200px;
  display: flex;
  flex-direction: column;
}
 .header{
  color: #fff;
  height: 57px;
  display: flex;
  align-items: center;
  text-indent: 20px;
  background: url('/imgs/demo15/chart_header_bg.png') no-repeat 0% 0%/100% 100%;
 }
 .content{
  height:calc(100% - 57px);
 }
</style>
