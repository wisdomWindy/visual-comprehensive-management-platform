<template>
 <div class="chart-box">
  <div class="left-chart" ref="chartBox"></div>
  <div class="right-chart">
    <div class="data-list">
      <div class="data-item">
        <div>功能名称</div>
        <div class="data-value">60.25%</div>
      </div>
      <div class="data-item">
        <div>功能名称</div>
        <div class="data-value">60.25%</div>
      </div>
      <div class="data-item">
        <div>功能名称</div>
        <div class="data-value">60.25%</div>
      </div>
      <div class="data-item">
        <div>功能名称</div>
        <div class="data-value">60.25%</div>
      </div>
    </div>
  </div>
 </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'
const {container:chartBox} = useEcharts({
  grid:{
    left:'20%',
    right:'10%'
  },
  series:[{
      name: 'Funnel',
      type: 'funnel',
      left: '30%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'ascending',
      gap: 2,
      label: {
        show: true,
        position: 'left',
        formatter(params){
          return `${params.percent}%`
        }
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { 
          value: 60, 
          name: 'Visit',
          label:{
            color:'#FFE118'
          },
          itemStyle:{
            color:'rgba(255,199,6,0.4)'
          } 
        },
        { 
          value: 40, 
          name: 'Inquiry',
          label:{
            color:'#0BFF72'
          },
          itemStyle:{
            color:'rgba(11,255,109,0.4)'
          } 
        },
        { 
          value: 20, 
          name: 'Order',
          label:{
            color:'#00D4FF'
          } ,
          itemStyle:{
            color:'rgba(10,218,255,0.4)'
          } 
        },
        { 
          value: 80, 
          name: 'Click',
          label:{
            color:'#008AE2'
          },
          itemStyle:{
          color:'rgba(26,171,255,0.4)'
          } 
        },
      ]
    }]
})
</script>

<style scoped>
 .chart-box{
  width:100%;
  height:100%;
  display:flex;
 }
.left-chart,
.right-chart{
  width:45%;
}
.data-item{
  font-size:12px;
  padding:10px;
  margin-bottom:10px;
  display:flex;
  color:#fff;
  justify-content:space-between;
  background-image:linear-gradient(to right,#06305A,#0E6DCC)
}
</style>
