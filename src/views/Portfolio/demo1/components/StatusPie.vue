<template>
 <div class="container">
  <div class="title">状态</div>
  <div class="chart-container" ref="chartContainer"></div>
 </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const data = [{name:'1200',value:1200},{name:'358',value:358},{name:'617',value:617}]
const total =data.reduce((pre,cur)=>{
  return pre+cur.value
},0)
const {container:chartContainer} = useEcharts({
  legend:{
    show:true,
    left:'5%',
    right:'5%',
    top:'18%',
    itemWidth:12,
    itemHeight:12,
    textStyle:{
      color:'#fff'
    },
    data:[{
      name:'1200',
      itemStyle:{
        color:'#0142C3'
      }
    },{
      name:'358',
      itemStyle:{
        color:'#E92B97'
      }
    },{
      name:'617',
      itemStyle:{
        color:'#028EF7'
      }
    }]
  },
  series:[{
    type:'pie',
    radius:['30%','50%'],
    label:{
      show:true,
      color:'#fff',
      padding:[0, 0, 40, 0],
      formatter:(params)=>{
        const percent = (params.data.value / total) * 100
        return `${Math.round(percent)}%`
      }
    },
    labelLine:{
      show:true,
      lineStyle:{
        cap:'round'
      }

    },
    data:data.map(item => {
      return {
        name:item.name,
        value:item.value
      }
    })
  }]
})
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  position: relative;
  width:100%;
  height: 100%;
}
.title{
  text-indent: 30px;
  color: #fff;
  width: 210px;
  height:30px;
  font-size: 21px;
  display: flex;
  align-items: center;
  position: absolute;
  top:5%;
  left:5%;
  background: url('/imgs/title_bg.png') no-repeat 0% 0%/100% 100%;
}

.chart-container{
  width:100%;
  height: 100%;
}
</style>
