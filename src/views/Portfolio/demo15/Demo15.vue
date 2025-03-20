<template>
 <div class="container">
  <div class="header">温州智慧停车可视化平台</div>
  <div class="main">
    <div class="column">
      <Statistics title="外拓客户总量" :value="1028" rateTitle="外拓客户满意率" :rateValue="50.13"></Statistics>
      <Statistics title="本月中标金额" :value="1028" rateTitle="本月中标率" :rateValue="50.13"></Statistics>
      <Statistics title="本年中标金额" :value="1028" rateTitle="本年中标率" :rateValue="50.13"></Statistics>
      <ChartBox title="外拓客户类型占比">
        <TypeRate></TypeRate>
      </ChartBox>
    </div>
    <div class="column">
      <ChartBox title="区域中标情况">
        <AreaRate></AreaRate>
      </ChartBox>
      <ChartBox title="外部中标情况">
        <AreaRate></AreaRate>
      </ChartBox>
    </div>
    <div class="column">
      <ChartBox title="内部中标情况">
        <AreaRate></AreaRate>
      </ChartBox>
      <ChartBox title="内部投标情况">
        <AreaRate></AreaRate>
      </ChartBox>
      <ChartBox title="外部投标情况">
        <AreaRate></AreaRate>
      </ChartBox>
    </div>
  </div>
 </div>
</template>

<script setup>
import Statistics from './components/Statistics.vue';
import ChartBox from './components/ChartBox.vue';
import TypeRate from './components/TypeRate.vue';
import AreaRate from './components/AreaRate.vue';
</script>

<style scoped>
.container{
  width:100%;
  height: 100%;
  /* height: auto; */
  background:url('/imgs/demo15/bg.png') no-repeat 0% 0%/100% 100%, url('/imgs/demo15/bg_1.png') center center;
}
.main{
   display: flex;
   height:calc(100% - 100px);
}
.main .column{
  width:33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header{
  font-size:30px;
  font-weight: bold;
  color:#25BEFC;
  width:100%;
  height:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:url('/imgs/demo15/header_bg.png') no-repeat 0% 0% / 100% 100%;
}
</style>
