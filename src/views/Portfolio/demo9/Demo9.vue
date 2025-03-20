<template>
 <div class="container">
  <div class="header">
    <div class="header-left">
      <el-image :width="13" :height="13" src="/imgs/demo9/clock_icon.png"></el-image>
      <span>2022-07-28 17:39:06</span>
    </div> 
    <div class="header-center">
      <span>金融态势可视化数据平台</span>
    </div> 
    <div class="header-right">
      <el-image :width="13" :height="13" src="/imgs/demo9/sun_icon.png"></el-image>
      <span>晴  6 - 12°</span>
    </div> 
  </div>
  <div class="content">
    <div class="aside">
    <ChartBox title="全国金融指数">
      <IndexBox v-for="(item,index) in indexData" :key="index" :title="item.name" :value="item.value"></IndexBox>
    </ChartBox>
    <ChartBox title="菜单栏目名称">
      <GaugeChart :data="totalData"></GaugeChart>
      <GaugeChart :data="percentData"></GaugeChart>
      <GaugeChart :data="timerangeData"></GaugeChart>
    </ChartBox>
    <ChartBox title="城市金融指数对比">
      <IndexCompare></IndexCompare>
    </ChartBox>
    <ChartBox title="菜单栏目名称">
      <Batery></Batery>
    </ChartBox>
  </div>
  <div class="main">
    <div class="preview">
      <div class="preview-left">
        金融态势
      </div>
      <div class="preview-right">
        <div>本年度经济收益</div>
        <div>1,229,381,273,217</div>
      </div>
    </div>
    <!-- <MapChart></MapChart> -->
  </div>
  <div class="aside">
    <ChartBox title="菜单栏目名称">
      <Tower></Tower>
    </ChartBox>
    <ChartBox title="金融数据统计">
      <Statistics></Statistics>
    </ChartBox>
     <ChartBox title="菜单栏目名称">
      <GaugeList title="功能名称" description="支出总额：" color="#4276C7" :value="98260" :total="163766" labelTitle="成本"></GaugeList>
      <GaugeList title="功能名称" description="消耗总额：" color="#FFD725" :value="49088" :total="163766" labelTitle="消耗"></GaugeList>
    </ChartBox>
     <ChartBox title="全国金融指数态势">
      <IndexTrend></IndexTrend>
    </ChartBox>
  </div>
  </div>
  
 </div>
</template>

<script setup>
import ChartBox from './components/ChartBox.vue'
import IndexBox from './components/IndexBox.vue'
import IndexCompare from './components/IndexCompare.vue'
import Batery from './components/Batery.vue'
import GaugeChart from './components/GaugeChart.vue'
import GaugeList from './components/GaugeList.vue'
import Tower from './components/Tower.vue'
import Statistics from './components/Statistics.vue'
import IndexTrend from './components/IndexTrend.vue'
const indexData = [{
  name:'杭州金融指数',
  value:8.8
},{
  name:'上海金融指数',
  value:9.8
},{
  name:'深圳金融指数',
  value:9.4
},{
  name:'北京金融指数',
  value:9.4
}]
const totalData = [{
   name:'总额数据',
      value:6595,
      total:10000
}]
const percentData = [{
   name:'占比数据',
      value:40,
      total:100
}]
const timerangeData = [{
   name:'时长栏目',
      value:658,
      total:1000
}]
</script>

<style scoped>
.container{
  display:flex;
  flex-direction:column;
  background:url('/imgs/demo9/bg.png') no-repeat 0% 0%/100% 100%;
}
.header{
  height:30px;
  display:flex;
  align-items:center;
  background:url('/imgs/demo9/header_bg.png') no-repeat 0% 0%/100% 100%;
}
.header-left,
.header-center,
.header-right{
  flex:1;
  display:flex;
  align-items:center;
  color:#fff;
}

.header-right{
  justify-content:flex-end;
}
.header-center{
  justify-content:center;
  font-size:30px;
  font-weight:bold;
}
.preview{
  width:100%;
  height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.preview-left{
  color:#fff;
  display:flex;
  text-indent:20px;
  align-items:center;
  background:url('/imgs/demo9/arrow_icon.png') no-repeat 0% 0%/100% 100%;
}
.preview-right{
  color:#fff;
}
.preview-right div:last-child{
  color:#FF9F2E;
}
.content{
  display:flex;
  height:calc(100% - 30px);
}
.aside{
  width:37%;
  display:flex;
  flex-wrap:wrap;
}
.main{
  width:26%;
  
}
</style>
