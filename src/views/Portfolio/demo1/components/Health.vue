<template>
  <BaseBox title="健康度" class="base-box">
      <div class="chart-container" ref="chartContainer"></div>
      <div class="legend">
        <div class="legend-item">
          <div class="legend-icon" style="border-color:#F7F05A;"></div>
          <div class="legend-text">危险</div>
        </div>
        <div class="legend-item">
          <div class="legend-icon" style="border-color:#FE5757;"></div>
          <div class="legend-text">高危</div>
        </div>
        <div class="legend-item">
          <div class="legend-icon" style="border-color:#3DE6FF;"></div>
          <div class="legend-text">良好</div>
        </div>
        <div class="legend-item">
          <div class="legend-icon" style="border-color:#347AFF;"></div>
          <div class="legend-text">健康</div>
        </div>
      </div>
  </BaseBox>
</template>

<script setup>
import BaseBox from './BaseBox.vue'
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'
import useEcharts from '@/hooks/useEcharts'
import { KeepAlive } from 'vue'

const { container: chartContainer } = useEcharts({
  // legend: {
  //   show: false,
  //   icon: 'circle',
  //   textStyle: {
  //     color: '#fff',
  //   },
  //   data: [
  //     {
  //       name: '危险',
  //       itemStyle: {
  //         color: '#F7F05A',
  //       },
  //     },
  //     {
  //        name: '高危',
  //       itemStyle: {
  //         color: '#FE5757',
  //       },
  //     },
  //     {
  //       name: '良好',
  //       itemStyle: {
  //         color: '#3DE6FF',
  //       },
  //     },
  //     {
  //       name: '健康',
  //       itemStyle: {
  //         color: '#347AFF',
  //       },
  //     },
  //   ],
  // },
  series: [
      {
        type: 'gauge',
        min:0,
        max:100,
        radius:'80%',
        splitNumber:5,
        center:['50%','60%'],
        axisLine:{
          lineStyle:{
             color:[[0,'#FF1866'],[0.2,'#FF1866'],[0.6,'#21E2FF'],[1,'#0A5EFF']],
          }
        },
        axisLabel:{
          distance:20,
          formatter:(params)=>{
            if(params % 20 === 0){
              return params
            }else {
              return ''
            }
          }
        },
        axisTick:{
          distance:-15,
          splitNumber:20
        },
        splitLine:{
          show:true,
          distance:-25,
          length:15
        },
        pointer:{
          offsetCenter:[0,0],
          keepAspect:true,
          icon:'pin',
          icon:'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          itemStyle:{
            color:'#3DE6FF',
            borderWidth:10
          }
        },
        anchor:{
          show:true,
          size:20,
          itemStyle:{
            borderColor:'#3DE6FF',
            borderWidth:2
          }
        },
        data: [
          {
            value: 72,
          },
        ],
      },{
        type: 'gauge',
        min:0,
        max:100,
        radius:'50%',
        center:['50%','60%'],
        splitNumber:5,
        detail:{
          show:true,
          
        },
        axisLine:{
          lineStyle:{
            color:[[0,'#FF1866'],[0.2,'#FF1866'],[0.6,'#21E2FF'],[1,'#0A5EFF']],
            // shadowBlur:10
          },
          roundCap:true,
        },
        axisLabel:{
          show:false
        },
        axisTick:{
          show:false
        },
        splitLine:{
          show:false,
          distance:-30,
          length:20
        },
        pointer:{
          show:false
        },
        anchor:{
          show:true,
          size:10,
          itemStyle:{
            borderColor:'#3DE6FF',
            borderWidth:5
          }
        },
      }
    ],
})
</script>

<style scoped>
.base-box{
  width:100%;
  height:426px;
  background:url('/imgs/border_solid.png') no-repeat 0% 0%/100% 100%; 
}

.chart-container {
  width: 100%;
  height: 100%;
}
.legend{
  position:absolute;
  left:10%;
  top:13%;
}
.legend-item{
  display:flex;
  align-items:center;
  color:#fff;
}
.legend-icon{
  width:12px;
  height:12px;
  margin-right:5px;
  border-radius:50%;
  border:1px solid #FE5757;
}
</style>
