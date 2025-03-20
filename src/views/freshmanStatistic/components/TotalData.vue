<template>
  <div class="w-full h-20 flex justify-center text-white">
    <div class="flex items-center h-20 mr-20">
      <div>招生总人数</div>
      <div class="flex justify-center items-center p-2 m-2 border border-[#508d94]" v-for="(item, index) in total" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="flex items-center h-20">
      <div>报道总人数</div>
      <div
        class="flex justify-center items-center p-2 m-2 border border-[#508d94]"
        v-for="(item, index) in actualArrival"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  data: any
}>()
const total = computed(() => {
  return props.data.total?.toString().split('')
})
const actualArrival = computed(() => {
  return props.data.actualArrival?.toString().split('')
})
</script>

<style scoped></style>
