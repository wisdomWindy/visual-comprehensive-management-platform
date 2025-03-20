<template>
 <div class="index-box">
  <div class="index-value">{{value}}</div>
  <div class="index-title">{{title}}</div>
 </div>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String,
    default:''
  },value:{
      type:Number,
      default:0
    }
})
</script>

<style scoped>
.index-box{
  width:35%;
  height:70px;
  margin:10px;
  padding:5px;
  border:1px solid #349FD6;
  background:url('/imgs/demo9/border_bg.png') no-repeat 0% 0%/100% 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.index-value{
  font-size:20px;
  font-weight:bold;
  color:#DAF4FF;
}
.index-title{
  font-size:12px;
  color:#DAF4FF;
}
</style>
