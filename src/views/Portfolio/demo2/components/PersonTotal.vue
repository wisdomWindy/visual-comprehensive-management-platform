<template>
 <div class="person-total">
  <div class="data-item">
    <div class="num">268</div>
    <div class="num">74.2%</div>
  </div>
  <div class="data-item">
    <div class="num">268</div>
    <div class="num">74.2%</div>
  </div>
  <div class="data-item">
    <div class="num">268</div>
    <div class="num">74.2%</div>
  </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
.person-total{
  width:30%;
  height: 100%;
}
.data-item{
 height: 75px;
 color: #fff;
 font-weight: bold;
 font-size:30px;
 position: relative;
 margin:50px 0;
}
.data-item:first-child{

  background: url('/imgs/demo2/person_icon1.png') no-repeat 0% 0%/100% 100%;
}
.data-item:nth-child(2){
background: url('/imgs/demo2/person_icon2.png') no-repeat 0% 0%/100% 100%;
}
.data-item:nth-child(3){
  background: url('/imgs/demo2/person_icon3.png') no-repeat 0% 0%/100% 100%;
}
.num{
  position: absolute;
  height: 50%;
}
.data-item .num:nth-child(1){
  right:20%;
  top:1%;
}
.data-item .num:nth-child(2){
  right:1%;
  top:50%;
}
</style>
