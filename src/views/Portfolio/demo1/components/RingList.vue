<template>
 <div class="container">
  <div class="ring-item" v-for="(option,index) in optionList" :key="index">
    <BaseRing :options="option.options" class="base-ring"></BaseRing>
    <div class="title">{{option.description}}</div>
  </div>

 </div>
</template>

<script setup>
import BaseRing from './BaseRing.vue';
const data = [{
  name:'使用率',
  description:'数据 2420GB',
  value:0.6,
  colors:[{
              offset:0,
              color:'rgba(98,219,255,1)'
            },{
              offset:1,
              color:'rgba(61,141,255,1)'
            }]
},{
  name:'使用率',
  description:'数据 2420GB',
  value:0.8,
  colors:[{
              offset:0,
              color:'rgba(61,230,255,1)'
            },{
              offset:1,
              color:'rgba(98,251,255,1)'
            }]
},{
  name:'使用率',
  description:'数据 620GB',
  value:0.45,
  colors:[{
              offset:0,
              color:'rgba(98,219,255,1)'
            },{
              offset:1,
              color:'rgba(61,141,255,1)'
            }]
},{
  name:'使用率',
  description:'数据 231GB',
  value:0.15,
  colors:[{
              offset:0,
              color:'rgba(98,219,255,1)'
            },{
              offset:1,
              color:'rgba(61,141,255,1)'
            }]
}]
const optionList = data.map(item => {
  return {
    description:item.description,
    options:{
  series:[{
      type: 'pie',
      radius: ['70%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1,
          itemStyle:{
            color:'rgba(255,255,255,0.65)'
          }
        }
      ]
    },{
      type: 'pie',
     radius: ['70%', '90%'],
      avoidLabelOverlap: false,
      clockwise:false,
      startAngle:90,
      labelLine: {
        show: false
      },
      itemStyle:{
        borderCap:'round',
      },
      data: [
        { value: 1,
          itemStyle:{
            color:'transparent'
          }
        },{
          name:item.name,
          value:item.value,
          label: {
              show: true,
              position: 'center',
              rich:{
                a:{
                  color:'#fff',
                  fontSize:25
                }
              },
            formatter(params){
              const value = params.data.value *100;
              return `{a|${value}%}\n${params.name}`
            }
          },

          itemStyle:{
            borderCap:'round',
            borderRadius:'50%',
            color:{
            type:'linear',
            x:0,
            y:0,
            x2:0,
            y2:1,
            colorStops:item.colors
          }
          }
        }
      ]
    }]
}
  }
})
</script>

<style scoped>
.container{
  display: flex;
  background-image: linear-gradient(to bottom, rgb(4,45,124) 0%, rgb(0,23,65) 100%);
  margin:18px 0;
  border:1px solid #017AFF;
}
.data-item{
  flex:1;

}
.base-ring{
  width: 80px;
  height: 80px;
}
.title{
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
