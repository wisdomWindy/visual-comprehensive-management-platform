<template>
 <div class="person-detail" ref="chartBox">

 </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const category = ['机长','副驾','机长（台外）','副驾（台外）']
const { container:chartBox} = useEcharts({
  legend:{
    right:'10%',
    top:'20%',
    itemWidth:12,
    itemHeight:12,
    icon:'circle',
    textStyle:{
      color:'#fff',
      fontSize:12
    },
    data:[{
      name:'国际',
      itemStyle:{
        color:'#ED97FF'
      }
    },{
      name:'国内',
      itemStyle:{
        color:'#FFF57B'
      }
    },{
      name:'国际1',
      itemStyle:{
        color:'#54FFD9'
      }
    },{
      name:'国内1',
      itemStyle:{
        color:'#57E1FF'
      }
    }]
  },
  xAxis:{
    typpe:'category',
    data:category,
    axisTick:{
      show:false
    },
    axisLabel:{
      interval:0,
      color:'#68D5EA',
      textStyle:{
        fontSize:12
      }
    }
  },
  yAxis:{
    type:'value',
    axisTick:{
      show:false
    },
    axisLabel:{
      color:'#68D5EA',
      textStyle:{
        fontSize:12
      }
    },
    splitLine:{
      lineStyle:{
        color:'rgba(83,198,222,0.24)'
      }
    }
  },
  series:[{
    type:'bar',
    name:'国际',
    data:[80,45,53,35],
    itemStyle:{
      color:'#ED97FF',
      borderRadius:[10,10,0,0]
    }
  },{
    type:'bar',
    name:'国内',
    data:[48,40,30,48],
    itemStyle:{
      color:'#FFF57B',
      borderRadius:[10,10,0,0]
    }
  },{
    type:'bar',
    name:'国际1',
    data:[38,35,25,40],
    itemStyle:{
      color:'#54FFD9',
      borderRadius:[10,10,0,0]
    }
  },{
    type:'bar',
    name:'国际1',
    data:[51,45,32,23],
    itemStyle:{
      color:'#57E1FF',
      borderRadius:[10,10,0,0]
    }
  }]
})
</script>

<style scoped>
.person-detail{
  width: 60%;
  height: 100%;
}
</style>
