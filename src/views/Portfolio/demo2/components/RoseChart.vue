<template>
  <div class="chart-box">
    <div class="rose-chart" ref="roseChart"></div>
    <div class="circle">128</div>
  </div>

</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {container:roseChart} = useEcharts({
  legend:{
    itemWidth:8,
    itemHeight:8,
    icon:'circle',
    orient:'vertical',
    top:'30%',
    right:'10%',
    textStyle:{
      color:'#fff'
    },
    data:[{
      name:'2小时内',
      itemStyle:[{
        color:'#ED97FF'
      }]
    },{
      name:'2-4小时',
      itemStyle:[{
        color:'#FFF57B'
      }]
    },{
      name:'4小时以上',
      itemStyle:[{
        color:'#54FFD9'
      }]
    }]
  },
  grid:{
    top:'5%'
  },
  series:[{
    type:'pie',
    center:['50%','40%'],
    radius:['60%','80%'],
    roseType:'radius',
    startAngle:90,
    // clockWise:false,
    label:{
      position:'outside',
      formatter(params){
        return Math.round(params.percent)+'%'
      }
    },
    labelLine:{
      length:10,
      length2:10,
      minTurnAngle:120,
      lineStyle:{
        color:'#53C6DE'
      }
    },
    data:[{
      name:'2小时内',
      value:64,
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#F7C8FF'
          },{
            offset:1,
            color:'#ED97FF'
          }]
        }
      }
    },{
name:'2-4小时',
      value:43,
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#FFFBB2'
          },{
            offset:1,
            color:'#FFF57B'
          }]
        }
      }
    },{
name:'4小时以上',
      value:21,
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#54FFD9'
          },{
            offset:1,
            color:'#8DFFEE'
          }]
        }
      }
    }]
  }]
})
</script>

<style scoped>
.chart-box,
.rose-chart{
  width:100%;
  height: 200px;
  position: relative;
}
.circle{
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  border:1px solid #54FFD9;
  top:50%;
  left:50%;
  transform: translate(-50%,-70%);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
