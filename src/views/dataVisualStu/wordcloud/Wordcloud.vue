<template>
  <div class="wordcloud" ref="wordcloud"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const data = createData();
const {container:wordcloud} = useEcharts({
    xAxis:{
      show:false
    },
    yAxis:{
      show:false
    },
    series: [{
      type: 'custom',
      renderItem(params, api){
        let x = Math.random() * 500;
        let y = Math.random() * 500;
        return {
          type:'text',
          x,
          y,
          style:{
            text: data[params.dataIndex].name,
            fontSize:data[params.dataIndex].value,
            fill: `rgba(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)}, ${Math.random()})`
          }
        }
      },
      data
    }]
  });
  function createData(){
    return  [{
  name: 'hellp',
  value: 10
}, {
    name: '没有',
    value: 20
  }, {
    name: '不错',
    value: 16
  }, {
    name: '还行',
    value: 30
  }, {
    name: '屏幕',
    value: 40
  }];
  }

</script>

<style scoped>
.wordcloud
{
  height: 100%;
}
</style>