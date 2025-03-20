<template>
 <div class="chart-box" ref="chartBox"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const category = ['2011','2012','2013','2014','2015','2016','2017']
const {container:chartBox} = useEcharts({
  grid:{
    left:'10%',
    right:'10%',
    top:'10%',
    bottom:'15%'
  },
  xAxis:{
    type:'category',
    data:category,
    aixsLabel:{
      color:'#fff'
    },
    aixsLine:{
      show:false
    },
    axisTick:{
      show:false
    }
  },
  yAxis:[{
    name:'单位',
    type:'value',
     nameTextStyle:{ color:'#fff' },
     alignTicks:true,
     interval:25,
    min:25,
    max:100,
    splitLine:{
      lineStyle:{
        color:'#E6F7FF',
        type:'dashed'
      }
    },
    axisLine:{
      show:false
    },
    axisTick:{
      show:false
    },
    axisLabel:{
      color:'#fff'

    }
  },{
    name:'单位',
    alignTicks:true,
    type:'value',
    position:'right',
    interval:50,
    min:50,
    max:200,
    nameTextStyle:{ color:'#fff' },
    axisLine:{
      show:false
    },
    axisTick:{
      show:false
    },
    axisLabel:{
      color:'#fff',
    }
  }],
  series:[{
    type:'bar',
    itemStyle:{
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[{
          offset: 0,
          color: '#0EECE4',
        },
        {
          offset: 1,
          color: '#058FE7',
        },]
      }
    },
    data:[80,40,85,75,55,80,82]
  },{
    type:'line',
    smooth:true,
    yAxisIndex:1,
    lineStyle:{
      color:'#47E5E5'
    },
    itemStyle:{
      color:'#49FDFD',
      shadowColor: '#49FDFD',
      borderWidth:0,
      shadowBlur: 10
    },
    data:[120,80,160,110,150,90,140]
  }]
})
</script>

<style scoped>
.chart-box{
  width: 100%;
  height: 100%;
  margin-bottom:20px;
}
</style>
