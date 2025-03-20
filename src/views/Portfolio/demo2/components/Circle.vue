<template>
 <div class="circle-box">
  <div class="title"><el-image :width="18" :height="18" :src="iconSrc"></el-image><span>{{ title }}</span></div>
  <div class="circle" :style="{borderColor:borderColor,color:borderColor}"><span style="color:#fff;">{{ value }}架</span></div>
 </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  iconSrc: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 20px;
  color:#68D5EA;
  margin-bottom: 20px;
}
.circle{
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  border:10px solid currentColor;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.circle::before{
  content:'';
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border:2px solid currentColor;
  position: absolute;
}
</style>
