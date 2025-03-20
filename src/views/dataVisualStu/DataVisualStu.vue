<template>
 <div class="container">
  <el-container class="container">
    <el-aside class="aside" width="200px">
      <el-menu class="menu" :default-active="$route.path" :router="true">
        <el-menu-item v-for="(menu) in menus" :index="menu.path" :key="menu.path">{{menu.name}}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
 </div>
</template>

<script setup>
import {computed} from 'vue'
import {RouterView} from 'vue-router'
import useDataVisualStore from '@/stores/useDataVisualStore'
const dataVisualStore = useDataVisualStore()
const menus = computed(()=>{
  return dataVisualStore.menus
})
</script>

<style scoped>
 .aside{
  height: 100%;
  
 }
 .menu{
  height: 100%;
  overflow-y: scroll;
 }
 ::-webkit-scrollbar{
  width:0;
  height:0;
  display:none;
 }
</style>