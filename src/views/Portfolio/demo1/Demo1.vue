<template>
  <div class="container">
    <div class="left">
      <div class="line-list">
        <div class=border-box>
          <Total></Total>
          <BaseBox class="base-box-item" title="负载率">
            <Line :options="loadRate" title="负载率"></Line>
          </BaseBox>
          <BaseBox class="base-box-item" title="使用率">
            <Line :options="usedRate" title="使用率"></Line>
          </BaseBox>
          <BaseBox class="base-box-item" title="连接数">
           <Line :options="linkedNum" title="连接数"></Line>
          </BaseBox>
        </div>
      </div>
      <div class="left-right">
        <Health></Health>
        <RingList></RingList>
        <Flow></Flow>
      </div>
    </div>
    <div class="center">
      <div class="header">实时数据大屏</div>
      <div class="preview">
        <div class="data-item">
          <div class="description">流入</div>
          <div><span class="value">363</span>gb/s</div>
        </div>
        <div class="data-item">
          <div class="description">流出</div>
          <div><span class="value">642</span>gb/s</div>
        </div>
        <div class="data-item">
          <div class="description">响应时间</div>
          <div><span class="value">1.368</span>s</div>
        </div>
      </div>
      <div class="main-body"></div>
    </div>
    <div class="right">
      <div class="top">
        <StatusPie></StatusPie>
        <NumChart></NumChart>
      </div>
      <div class="bottom">
        <StoreChart></StoreChart>
        <div class="charts">
          <IoChart></IoChart>
          <inputOutput></inputOutput>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'
import Total from './components/Total.vue'
import BaseBox from './components/BaseBox.vue'
import RingList from './components/RingList.vue'
import Health from './components/Health.vue'
import Flow from './components/Flow.vue'
import StatusPie from './components/StatusPie.vue'
import NumChart from './components/NumChart.vue'
import StoreChart from './components/StoreChart.vue'
import InputOutput from './components/InputOutput.vue'
import IoChart from './components/IoChart.vue'
import Line from './components/Line.vue'
const xData = ['00:05', '00:10', '00:15', '00:20', '00:25', '00:30']
// 负载率
const loadRate = reactive({
  xAxis: {
    boundaryGap:false,
    data: xData,
  },
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:'30%'
  },
  series: [
    {
      type: 'line',
      smooth: true,
      itemStyle:{
        color:'transparent',
        opacity:0
      },
      lineStyle: {
        color: 'rgb(25,104,255)',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(25,104,255,0)',
            },
            {
              offset: 0,
              color: 'rgba(54,161,255,0.6)',
            },
          ],
        },
      },
      data: [20, 22, 43, 41, 90, 38, 61, 82, 59, 50, 42],
    },
  ],
})
const usedRate = reactive({
  xAxis: {
    data: xData,
    boundaryGap:false
  },
  grid:{
    top:'30%',
    left:'10%',
    bottom:'10%',
    right:'10%',
  },
  series: [
    {
      type: 'line',
      smooth: true,
      itemStyle:{
        color:'transparent',
        opacity:0
      },
      lineStyle: {
        color: 'rgb(240,41,112)',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(25,111,154,0.1)',
            },
            {
              offset: 0,
              color: 'rgba(255,34,104,0.42)',
            },
          ],
        },
      },
      data: [20, 22, 43, 41, 90, 38, 61, 82, 59, 50, 42],
    },
  ],
})
const linkedNum = reactive({
  xAxis: {
    data: xData,
    boundaryGap:false
  },
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:'30%'
  },
  series: [
    {
      type: 'line',
      smooth: true,
      itemStyle:{
        color:'transparent',
        opacity:0
      },
      lineStyle: {
        color: 'rgb(13,255,183)',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(116,168,255,0.1)',
            },
            {
              offset: 0,
              color: 'rgba(71,255,144,0.41)',
            },
          ],
        },
      },
      data: [20, 22, 43, 41, 90, 38, 61, 82, 59, 50, 42],
    },
  ],
})
</script>

<style scoped>
.container {
  display: flex;
  background: url('/imgs/main_bg.png') no-repeat 0% 0%/100% 100%;
  width:100%;
  height: auto;
}
.left-right{
  width:55%;
}
.line-list{
  width:45%;
}
.center,
.left,
.right {
  width:30%;
  height: 900px;
}
.left {
  width:40%;
  display: flex;
  flex-wrap: nowrap;
}
.right {
  display: flex;
  flex-direction: column;
}

.header{
  color:#fff;
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;
  background:url('/imgs/header_bg.png') no-repeat 0% 0%/100% 100%;
}
.border-box{
  width:100%;
  padding:20px;
  height:auto;
  border:1px solid ;
  background: url('/imgs/left_bg.png') no-repeat 0% 0%/100% 100%;
}
.preview{
  color: #3DE6FF;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.data-item{
  flex:1;
}
.value{
  font-size: 20px;
}
.top{
  display: flex;
  padding:20px;
  width:100%;
  height:332px;
  flex-shrink: 0;
  background-image: url('/imgs/border_dashed.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0% 0%;
}
.bottom{
  padding:22px;
  width:100%;
  margin-top:20px;
  background-image: url('/imgs/border_solid.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0% 0%;
}
.charts{
  display:flex;
  width:100%;
  height:335px;
}
.base-box-item{
  height:258px;
}
.main-body{
  width:100%;
  height:calc(100% - 104px);
  background:url('/imgs/main-body.svg') no-repeat 0% 0%/100% 60%;
}
</style>
