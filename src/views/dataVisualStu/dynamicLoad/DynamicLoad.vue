<template>
 <div class="container" v-loading="loading">
  <BaseDynamicLoad></BaseDynamicLoad>
  <DynamicAppend></DynamicAppend>
 </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import BaseDynamicLoad from './component/BaseDynamicLoad.vue';
import DynamicAppend from './component/DynamicAppend.vue';
const loading = ref(true);
onMounted(()=>{
  loading.value = false;
})
</script>

<style scoped>
.container{
  display: flex;
}
</style>
