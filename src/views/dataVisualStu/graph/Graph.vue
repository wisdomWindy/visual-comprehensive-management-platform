<template>
  <div class="container">
    <BaseGraph />
    <CalendarGraph />
    <GeoGraph />
  </div>

</template>

<script setup>
import BaseGraph from './components/BaseGraph.vue';
import CalendarGraph from './components/CalendarGraph.vue';
import GeoGraph from './components/GeoGraph.vue';
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap:wrap;
}
</style>
