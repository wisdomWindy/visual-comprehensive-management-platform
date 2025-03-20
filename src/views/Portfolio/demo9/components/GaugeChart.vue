<template>
 <div class="gauge-chart">
  <div class="chart-box" ref=chartBox></div>
  <div class="title">{{title}}</div>
 </div>
</template>

<script setup>
import {watch} from 'vue'
import useEcharts from '@/hooks/useEcharts'
const props = defineProps({
  title:{
    type:String,
    default:''
  },
  data:{
    type:Object,
    default:()=>{
      return {}
    }
  }
})
const defaultOption = {
  grid:{
    left:"10%",
    right:"10%",
    bottom:'10%',
    top:'10%'
  },
  series:[{
    type:'gauge',

    center:['50%','50%'],
    splitNumber:50,
    radius:'90%',
    axisLine:{
      lineStyle:{
         width:2,
        color:[[0,'#19EBFF'],[1,'#00E2DB']]
      }
    },
    axisLabel:{
      show:false
    },
    pointer:{
      show:false
    },
    anchor:{
      show:false
    },
    axisTick:{
      show:true,
      distance:-6,
      splitNumber:1,
      length:12,
      lineStyle:{
        width:3,
        color:'#19EBFF'
      }
    },
    splitLine:{
      show:false,
      distance:-10,
      lineStyle:{
        color:'#19EBFF'
      }
    }
  },{
    type:'gauge',
     min:0,
    max:100,
    center:['50%','50%'],
    radius:'60%',
    axisLine:{
      roundCap:true,
      lineStyle:{
         color:[[0,'#D8D8D8'],[1,'#D8D8D8']]
      }
    },
    label:{
      show:false
    },
    progress:{
      show:true,
      roundCap:true,
      itemStyle:{
        color:{
          type:'linear',
          x:0,
          y:0,
          x2:0,
          y2:1,
          colorStops:[{
            offset:0,
            color:'#55FFF4'
          },{
            offset:1,
            color:'#01FED2'
          }]
        }
      }
    },
    detail:{
      show:true,
      color:'#fff',
      fontSize:12,
      fontWeight:'normal',
      lineHeight:5,
      formatter:(params)=>{
        return params+'\n\n单位'
      },
      offsetCenter:[0,'10%']
    },
    title:{
      show:true,
      offsetCenter:[0,'220%'],
      color:"#fff",
      fontSize:12
    },
    axisLabel:{
      show:false
    },
    pointer:{
      show:false
    },
    anchor:{
      show:false
    },
    axisTick:{
      show:false,
    },
    splitLine:{
      show:false,
    },
    data:[]
  }]

}
const {echart,container:chartBox} = useEcharts(defaultOption)
watch(()=> props.data,()=>{
  defaultOption.series[1].max = props.data[0].total;
  defaultOption.series[1].data =props.data;
  if(echart.value){
    echart.value.setOption(defaultOption)
  }
},{
  immediate:true
})
</script>

<style scoped>
.gauge-chart{
  width:33%;
  height:220px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.titile{
  color:#fff;
  font-size:12px
}
.chart-box{
  width:100%;
  height:200px;
}
</style>
