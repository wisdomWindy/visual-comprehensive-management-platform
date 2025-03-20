<template>
 <div class="timeline" ref="timeline"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
function createData() {
  let data = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date().getTime() - (24 * 3600 * 1000 * i);
    let dataItem = {
      date,
      category: date,
      data: []
    }
    for(let j = 0; j < 5; j++){
      dataItem.data.push({
        name:'商品'+(j+1),
        value:Math.floor(Math.random() * 101)
      });
    }
    data.push(dataItem);
  }
  return data;
}
const rankData = createData();
 
let {container:timeline} = useEcharts(createOption());
function createOption(){
  const option = {
    baseOption:{
      animationDurationUpdate:1000 * 1.5,
      animationEaseUpdate:'quinticInOut',
      timeline:{
        show:false,
        axisType:'category',
        orient:'vertical',
        autoPlay:true,
        loop:false,
        playInterval:1000,
        data:rankData.map(item => {
          return item.date;
        })
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#ff54de'
          }
        }
      },
      
      xAxis:[{}],
      yAxis: [{}],
      series: [{
        id:'bar',
        type: 'bar',
        data: [],
        label: {
          show: true,
          position: "right"
        }
      }]
    },
    options:[]
  };
  for(let i = 0; i < rankData.length; i++){
    let data = rankData[i];
    data.data.sort((a,b) => a.value-b.value);
    let xMax = data.data[0];
    let xMaxInterval = 5;
    if(data.data[0].value / xMaxInterval >= 10){
      xMaxInterval = data.data[0].value / 5;
    }
    option.options.push({
      title:{
        text:'商品销售'+ ' ' + data.category
      },
      xAxis:{
        type:'value',
        max:xMax,
        interval:xMaxInterval
      },
      yAxis:{
        type:'category',
        data:data.data.map(item => {
          return item.name;
        })
      },
      series:[{
        id:'bar',
        type:'bar',
        data:data.data.map(item => {
          return item.value;
        })
      }]
    });
  }
  return option
}
</script>

<style scoped>
 .timeline{
  height: 95%;
 }
</style>