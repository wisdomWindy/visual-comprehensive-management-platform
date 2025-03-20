<template>
  <border-box-7  class="w-full h-full overflow-hidden pb-10 text-white">
    <div class="p-5 text-white">最新报道学生</div>
    <div class="w-full h-full overflow-y-auto">
      <div class="flex align-center mb-5 mt-5" v-for="(item) in data" :key="item.name">
        <img class="w-20 h-20" src="@/assets/profile.png" />
        <div class="w-1/3 flex justify-center items-center">{{ item.name }}</div>
        <div class="w-1/3">
          <div>{{ item.id }}</div>
          <div>{{ item.college }}</div>
          <div>{{ item.graduationSchool }}</div>
        </div>
      </div>
    </div>
  </border-box-7>
</template>

<script setup lang="ts">
import type { StudentData } from '@/types'
import { BorderBox7 } from '@kjgl77/datav-vue3';
const props = defineProps<{
  data: StudentData[]
}>()
</script>

<style scoped>
.ranklist{
  height:calc(100% - 10rem);
}
</style>
