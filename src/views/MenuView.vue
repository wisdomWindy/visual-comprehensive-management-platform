<template>
  <main class="container">
    <div class="menu-list">
      <router-link class="menu-item" v-for="(menu) in app.menuList" :key="menu.path" :to="menu.path">
        {{ menu.name }}
      </router-link>
    </div>
  </main>
</template>
<script setup lang="ts">
import useAppStore from '@/stores/appStore';
import { onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
const app = useAppStore();
onBeforeMount(()=>{
});
</script>
<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.menu-list{
  width:80%;
  display: flex;
  justify-content: space-between;
}
.menu-item{
  padding:10px;
  width:18%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #ccc;
  background: #bfbfbf;
  cursor: pointer;
  color:#000;
  text-decoration: none;
}
</style>