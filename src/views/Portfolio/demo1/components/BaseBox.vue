<template>
 <div class="base-box">
  <div class="title-box">{{title}}</div>
  <div class="chart-container">
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
.base-box{
  width:100%;
  height:237px;
  display:flex;
  flex-direction:column;
  margin:0 0 10px 0;
  position: relative;
  /* background: url('/imgs/border_solid.png') no-repeat 0% 0%/100% 100%; */
}
.title-box {
  text-indent:30px;
  position: absolute;
  left:5%;
  top:5%;
  color: #fff;
  font-size: 21px;
  width: 200px;
  height: 34px;
  background: url('/imgs/title_bg.png') no-repeat 0% 0%/100% 100%;
}
 .chart-container{
  position:relative;
  width:100%;
  height: 100%;
 }
</style>
