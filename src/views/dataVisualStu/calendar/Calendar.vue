<template>
  <div class="container">
    <BaseCalendar />
    <ScatterCalendar />
    <LineCalendar/>
  </div>
</template>

<script setup>
import BaseCalendar from './components/BaseCalendar.vue'
import ScatterCalendar from './components/ScatterCalendar.vue'
import LineCalendar from './components/LineCalendar.vue'
</script>

<style scoped>
.container{
  display:flex;
  flex-wrap:wrap;
}
</style>