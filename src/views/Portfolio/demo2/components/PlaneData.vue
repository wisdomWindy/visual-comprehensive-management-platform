<template>
 <div class="plane-data">
  <div class="title">{{ title }}</div>
  <div class="content">
    <el-image :width="40" :height="40" :src="iconSrc"></el-image>
    <div class="value">{{value}}架</div>
  </div>
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
  }
})
</script>

<style scoped>
.plane-data{
  width: 50%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.title{
  font-size: 20px;
  color: #68D5EA;
  margin-bottom:20px;
}
.content{
  display: flex;
  align-items: center;
  font-size: 48px;
  color: #fff;
}
</style>
