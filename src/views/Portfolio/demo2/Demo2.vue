<template>
 <div class="container">
    <div class="aside">
      <div class="aside-header">
        <div class="header-item">
          <el-image :width="16" :height="16" src="/imgs/demo2/clock_icon.png"></el-image>
          <span>2020-12-12 12:30:00 十月二十八 星期六</span>
        </div>
         <div class="separator">|</div>
        <div class="header-item">
          <el-image :width="16" :height="16" src="/imgs/demo2/cloud_icon.png"></el-image>
          <span>多云 10℃ 湿度：48% 风速：2米/秒</span>
        </div>
      </div>
      <ChartBox title="今日飞机信息">
        <PlaneData title="在册飞机总数" iconSrc="/imgs/demo2/file_icon.png" value="186"></PlaneData>
        <PlaneData title="执行航班飞机数" iconSrc="/imgs/demo2/gauge_icon.png" value="176"></PlaneData>
        <Circle title="定检飞机数量" value="10" borderColor="#ED97FF" iconSrc="/imgs/demo2/check_icon.png"></Circle>
        <Circle title="故障飞机数量" value="6" borderColor="#FFF57B" iconSrc="/imgs/demo2/error_icon.png"></Circle>
        <Circle title="飞机故障保留数" value="88" borderColor="#54FFD9" iconSrc="/imgs/demo2/system_icon.png"></Circle>
      </ChartBox>
      <ChartBox title="航班延误分析">
        <RoseChart></RoseChart>
        <Bar></Bar>
      </ChartBox>
      <ChartBox title="收入运力信息">
       <InputChart />
      </ChartBox>
      <ChartBox title="重点关注航班信息">
       <AirPlane />
      </ChartBox>
    </div>
    <div class="main-content">
      <div class="header">
        <el-image :width="32" :height="48" src="/imgs/demo2/logo.png"></el-image>
        <span>包图萧山国际机场运营分析平台</span>
      </div>
      <div class="control">
        <el-image :width="560" :height="94" src="/imgs/demo2/plane.png"> </el-image>
        <el-button-group class="btn-group">
          <el-button :color="active === 0 ? '#6DDEF5': 'transparent'" border="#6DDEF5" @click="handleSwitch(0)">国际</el-button>
          <el-button :color="active === 1 ? '#6DDEF5' : 'transparent'"  border="#6DDEF5" @click="handleSwitch(1)" >国内</el-button>
        </el-button-group>
      </div>
      <MapChart v-if="active === 0"></MapChart>
      <ChinaChart v-if="active === 1"></ChinaChart>
    </div>
    <div class="aside">
      <div class="aside-header flex-end">
        <div class="header-item">
          <el-image :width="16" :height="16" src="/imgs/demo2/management_icon.png"></el-image>
          <span>值班领导：xxx</span>
        </div>
         <div class="separator">|</div>
        <div class="header-item">
           <el-image :width="16" :height="16" src="/imgs/demo2/team_icon.png"></el-image>
          <span>值班经理：xxx xxx xxx</span>
        </div>
      </div>
      <AsideChart></AsideChart>
      <ChartBox title="人员信息">
        <PersonTotal></PersonTotal>
        <PersonDetail></PersonDetail>
      </ChartBox>
      <ChartBox title="承运情况分析">
        <div class="data-list">
          <div class="data-item">
            <div class="data-content">2360</div>
            <div class="data-title">今日计划旅客数</div>
          </div>
          <div class="data-item">
            <div class="data-content">8800</div>
            <div class="data-title">实时承运人数</div>
          </div>
          <div class="data-item">
            <div class="data-content">89.20%</div>
            <div class="data-title">实时客座率</div>
          </div>
          <div class="data-item">
            <div class="data-content">18</div>
            <div class="data-title">今日VIP旅客数</div>
          </div>
          <div class="data-item">
            <div class="data-content">32</div>
            <div class="data-title">今日特殊旅客数</div>
          </div>
          <div class="data-item">
            <div class="data-content">2100</div>
            <div class="data-title">今日提供座位数</div>
          </div>
        </div>
      </ChartBox>
    </div>
 </div>
</template>

<script setup>
import {ref} from 'vue'
import Circle from './components/Circle.vue';
import PlaneData from './components/PlaneData.vue';
import ChartBox from './components/ChartBox.vue';
import RoseChart from './components/RoseChart.vue';
import Bar from './components/Bar.vue';
import InputChart from './components/InputChart.vue';
import AirPlane from './components/AirPlane.vue'
import MapChart from './components/MapChart.vue'
import ChinaChart from './components/ChinaChart.vue'
import AsideChart from './components/AsideChart.vue'
import PersonTotal from './components/PersonTotal.vue'
import PersonDetail from './components/PersonDetail.vue'
const active = ref(0)
function handleSwitch(type){
  active.value = type
}
</script>

<style scoped>
.container{
  width: 3840px;
  height: auto;
  display:flex;
  background:url('/imgs/demo2/bg.png') no-repeat 0% 0%/100% 100%;
}

.aside,
.main-content{
  width:33%;
  /* height:100%; */
}
.aside{
  display:flex;
  flex-wrap:wrap;
}
.aside-header{
  font-size: 12px;
  width:100%;
  height: 20px;
  display: flex;
}
.separator{
  margin:0 20px;
}
.header-item{
 display: flex;
 align-items: center;
 justify-content: space-around;
  color: #94EBFE;
}
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  color:#7EE8FF;
  font-size:20px;
  width:100%;
  height:40px;
  background:url('/imgs/demo2/header_bg.png') no-repeat 0% 0%/100% 100%;
}
.control{
  display: flex;
  justify-content: center;
  position: relative;
}
.btn-group{
  position: absolute;
  top:10%;
  right:10%;
}
.data-list{
  display: flex;
  flex-wrap: wrap;
}
.data-item{
  width:33%;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.data-content{
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 40px;
}
.data-title{
  display: flex;
  justify-content: center;
  color:#68D5EA;
  font-size: 12px;
}
.flex-end{
  display: flex;
  justify-content: flex-end;
}
</style>
