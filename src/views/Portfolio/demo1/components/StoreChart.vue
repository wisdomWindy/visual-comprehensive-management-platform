<template>
 <div class="container">
  <div class="top">
    <div class="title">存储</div>
    <div><span class="value">3312</span>GB</div>
  </div>
  <div class="chart-container">
    <div class="progress-bar" :style="{width:value}"></div>
  </div>
  <div class="description">
    <span>使用率</span>
    <span>69%</span>
  </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('69%')
</script>

<style scoped>
.container{
  flex-direction: column;
  padding:20px;
  margin-bottom:20px;
  width:100%;
  height:160px;
  background-image:linear-gradient(to bottom,#052E7F , #001337) ;
  border:1px solid #227FFD;
}
.title{
  /* text-indent:20px; */
}
.title::before{
  content:'';
  width:5px;
  height: 10px;
  background-color: #fff;
}
.description,
.top{
  color: #fff;
  display: flex;
  align-items:center;
  justify-content: space-between;
}
.value{
  color:#3DE6FF ;
  font-size:32px;
}
.chart-container{
  width:100%;
  height: 20px;
  border-radius: 10px;
  position: relative;
  background-color: #1968FF;
  margin:10px 0;
}
.progress-bar{
  content:'';
  height: 20px;
  border-radius: 10px;
  position: absolute;
  left:0;
  top:0;
  background-image: linear-gradient(to right, #1968FF, #3DE6FF);
}
</style>
