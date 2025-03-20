<template>
 <div class="container">
  <BaseDynamicLoad />
  <DynamicAppend />
 </div>
</template>

<script setup>
import BaseDynamicLoad from './component/BaseDynamicLoad.vue';
import DynamicAppend from './component/DynamicAppend.vue';
</script>

<style scoped>
.container{
  display: flex;
}
</style>
