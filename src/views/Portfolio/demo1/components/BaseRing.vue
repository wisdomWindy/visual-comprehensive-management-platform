<template>
 <div class="ring-container" ref="ringContainer"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
import { computed,onMounted } from 'vue';

const props = defineProps({
  options:{
    type:Object,
    default:()=>{
      return {}
    }
  }
})

const {container:ringContainer} = useEcharts( props.options);
</script>

<style scoped>
.ring-container{
  width:100px;
  height:100px;
}
</style>
