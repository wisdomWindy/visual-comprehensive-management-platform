<template>
  <div class="total-data">
    <div class="header"><span>数据总量</span><span ref="total"></span><span>条记录</span></div>
    <div class="area-box">
      <div class="area-item">
        <span class="area-name">华北</span>
        <span ref="city1"></span>
      </div>
      <div class="area-item">
        <span class="area-name">东北</span>
        <span ref="city2"></span>
      </div>
      <div class="area-item">
        <span class="area-name">华东</span>
        <span ref="city3"></span>
      </div>
      <div class="area-item">
        <span class="area-name">中南</span>
        <span ref="city4"></span>
      </div>
      <div class="area-item">
        <span class="area-name">西南</span>
        <span ref="city5"></span>
      </div>
      <div class="area-item">
        <span class="area-name">西北</span>
        <span ref="city6"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { ref, onMounted } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const total = ref<HTMLElement>()
const city1 = ref<HTMLElement>()
const city2 = ref<HTMLElement>()
const city3 = ref<HTMLElement>()
const city4 = ref<HTMLElement>()
const city5 = ref<HTMLElement>()
const city6 = ref<HTMLElement>()

onMounted(() => {

  new CountUp(total.value!, props.data.total).start()
  new CountUp(city1.value!, props.data.hb).start()
  new CountUp(city2.value!, props.data.db).start()
  new CountUp(city3.value!, props.data.hd).start()
  new CountUp(city4.value!, props.data.zn).start()
  new CountUp(city5.value!, props.data.xn).start()
  new CountUp(city6.value!, props.data.xb).start()
})
</script>

<style scoped lang="scss">
.total-data {
  width: 80%;
  margin: 0 auto;
}
.area-name {
  font-size: 14px;
}
.area-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.area-item {
  width: 30%;
}
.text-gradient {
  background-image: linear-gradient(to bottom, #e5e4ea, #5ea8f2);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
