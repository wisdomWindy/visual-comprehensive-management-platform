<template>
 <div class="aside-chart">
  <div class="header">航班运行分析</div>
  <div class="chart-item">
    <div class="top">
      <div class="chart-logo">总</div>
      <div class="value">
        <div class="value-item"><span class="today">今</span><span class="value-content">786</span></div>
         <div class="value-item"><span class="yesterday">昨</span><span class="value-content">750(班)</span></div>
      </div>
    </div>
    <div class="bottom">
      <div class="panel-item">
        <div class="title">今日取消数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/cancel_purple.png"></el-image>
          <span>10</span>
        </div>
      </div>
       <div class="panel-item">
        <div class="title">昨日取消数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/cancel_green.png"></el-image>
          <span>6</span>
        </div>
      </div>
    </div>
  </div>
  <div class="chart-item">
    <div class="top">
      <div class="chart-logo">正</div>
      <div class="value">
        <div class="value-item"><span class="today">今</span><span class="value-content">82.04</span></div>
         <div class="value-item"><span class="yesterday">昨</span><span class="value-content">94.21(%)</span></div>
      </div>
    </div>
    <div class="bottom">
      <div class="panel-item">
        <div class="title">今日备降数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/plane_purple.png"></el-image>
          <span>3</span>
        </div>
      </div>
       <div class="panel-item">
        <div class="title">昨日备降数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/plane_green.png"></el-image>
          <span>8</span>
        </div>
      </div>
    </div>
  </div>
  <div class="chart-item">
    <div class="top">
      <div class="chart-logo">收</div>
      <div class="value">
        <div class="value-item"><span class="today">今</span><span class="value-content">8246</span></div>
         <div class="value-item"><span class="yesterday">昨</span><span class="value-content">8888(万)</span></div>
      </div>
    </div>
    <div class="bottom">
      <div class="panel-item">
        <div class="title">今日返航数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/back_purple.png"></el-image>
          <span>10</span>
        </div>
      </div>
       <div class="panel-item">
        <div class="title">昨日返航数量</div>
        <div class="content">
          <el-image :width="40" :height="40" src="/imgs/demo2/back_green.png"></el-image>
          <span>12</span>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
 .aside-chart{
  width:100%;
  height: 500px;
  padding:20px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  background: url('/imgs/demo2/border_img.png') no-repeat 0% 0%/100% 100%;
 }
 .header{
  width:100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #77E9FF;
  font-size:20px;
 }
 .chart-logo{
  width:144px;
  height: 144px;
  margin-right:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  background: url('/imgs/demo2/ring.png') no-repeat 0% 0%/100% 100%;
  color: #94EBFE;
  font-weight:bold;
  font-size:30px;
 }
 .chart-item{
  margin:0 20px;
 }
 .bottom,
 .top{
  display: flex;
  align-items: center;
  justify-content: space-around;
 }
 .top{
  margin-bottom:20px;
 }
 .value-item:first-child{
  border-bottom:1px solid #53C6DE;
 }
 .today{
  color: #ED97FF;
 }
 .yesterday{
  color:#54FFD9;
 }
 .value-content{
  color: #fff;
  font-size:20px;
  margin-left: 20px;
 }
 .title{
  color:#77E9FF;
  font-size: 12px;
 }
 .content{
  color: #fff;
  font-size:20px;
  display: flex;
  align-items: center;
  margin-top:20px;
 }
</style>
