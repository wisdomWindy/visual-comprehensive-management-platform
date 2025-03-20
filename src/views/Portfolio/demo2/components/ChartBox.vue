<template>
 <div class="chart-box">
  <div class="title">{{ title }}</div>
  <div class="content">
    <slot></slot>
  </div>
 </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.chart-box{
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50%;
  height: 500px;
  padding:0 20px 0;
  background: url('/imgs/demo2/border_img.png') no-repeat 0% 0%/100% 100%;
}
.title{
  width:100%;
  height: 40px;
  color: #77E9FF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content{
  /* width: 100%; */
  flex:1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
