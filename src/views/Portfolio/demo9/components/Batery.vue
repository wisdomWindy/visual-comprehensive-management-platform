<template>
 <div class="batery">
  <div class="header">
    <div class="column">站点名称</div>
    <div class="column">站点数量</div>
  </div>
  <div class="main">
    <div class="row">
      <div class="column">AA区</div>
    <div class="column">
      <div class="progress" :style="{backgroundPosition:`${-(1-(12 / 100))*100}% 0%`}"></div>
      <div>12个</div>
    </div>
    </div>
  </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
.batery{
  width:86%;
  height:100%;
  margin:auto;
}
.header{
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
}
.column{
  display:flex;
  align-items:center;
  justify-content:center
}
.header .column:first-child{
  width:30%;
}
.header .column:last-child{
  width:70%;
}
.row{
  display:flex;
}
.progress{
  width:70%;
  height:20px;
  background-image:url('/imgs/demo9/progress_bg.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.row .column:first-child{
  width:30%;
  color:#E9FDFF;
}
.row .column:last-child{
  width:70%;
  color:#2CE4FF;
}
</style>
