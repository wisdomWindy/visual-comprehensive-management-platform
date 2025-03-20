<template>
 <div class="statistics">
  <div class="left">
    <div>{{ title }}</div>
    <div class="value">{{ value }}</div>
  </div>
  <div class="right">
     <div>{{ rateValue }}%</div>
    <div class="title">{{ rateTitle }}</div>
  </div>
 </div>
</template>

<script setup>
const props = defineProps({
  title:{
    type: String,
    default: ''
  },
  value: {
    type: Number,
    default: 0
  },
  rateTitle:{
    Type:String,
    default:''
  },
  rateValue:{
    type:Number,
    value:0
  }
})
</script>

<style scoped>
.statistics {
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px 0;
  padding:0 20px;
}
.left{
  font-size:20px;
  text-align: center;
  color: #fff;
  background: url('/imgs/demo15/statistics.png') no-repeat 0% 0%/100% 100%;
}
.value{
  color: #49FDFD;
}
.right{
  color: #fff;
  background: url('/imgs/demo15/chart_bg.png') no-repeat 0% 0%/110% 110%;
  text-align: center;
  width:100px;
  height: 100px;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title{
  font-size: 12px;
}
</style>
