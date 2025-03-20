<template>
  <div class="carSale" ref="carSale"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {container:carSale} = useEcharts({
    title: [{
      text: '车辆总数（辆）',
      x: '7%',
      y: '7%'
    }, {
      text: '4509834',
      x: '7.6%',
      y: '11%',
      FontSize: 20
    }, {
      text: '车辆行驶数（辆）',
      x: '19%',
      y: '7%'
    }, {
      text: '34220',
      x: '20.3%',
      y: '11%'
    }, {
      text: '行驶里程总数（KM）',
      x: '34%',
      y: '7%'
    }, {
      text: '34220',
      x: '36.3%',
      y: '11%'
    }, {
      text: '行驶里程平均数（KM）',
      x: '50%',
      y: '7%'
    }, {
      text: '2310',
      x: '53.2%',
      y: '11%'
    }, {
      text:'行驶时长总数(h)',
      x:'69%',
      y:'7%'
    },{
      text:'34220',
      x:'71.2%',
      y:'11%'
    },{
      text:'行驶时长平均数（h）',
      x:'83%',
      y:'7%'
      }, {
        text: '34220',
        x: '85.6%',
        y: '11%'
      },{
      text: '车辆类型统计',
      x: '25%',
      y: '20%',
      textAlign: 'center',
    }, {
      text: '车辆报警统计',
      x: '67.5%',
      y: '20%',
      textAlign: 'center',
    }, {
      text: '车辆状态统计',
      x: '25%',
      y: '58%',
      textAlign: 'center',
    }, {
      text: '车辆行驶数量',
      x: '67.5%',
      y: '58%',
    }, {
      text: '订单量分时段统计',
      x: '65%',
      y: '60%'
    }],
    tooltip:{},
    grid: [{
      left: '5%',
      right: '55%',
      top: '65%',
      bottom: '5%',
      containLabel: true
    }, {
      gridIndex: 1,
      left: '50%',
      right: '5%',
      top: '65%',
      bottom: '5%',
      containLabel: true
    }],
    xAxis: [{
      type: 'value',
      boundaryGap: [0, 0.02]
    }, {
      gridIndex: 1,
      type: 'category',
      data: ['0:00', "1:00", '2:00', '3:00', '4:00', '5:00', '6:00'],
      boundaryGap: false
    }],
    yAxis: [{
      type: 'category',
      data: ['客运车', '危险品运输车', '网约车', '校车', '私家车']
    }, {
      gridIndex: 1,
      type: 'value'
    }],
    legend: {
      data: ['停车', '行驶', '熄火', '离线'],
      x: '12%',
      y: '62%'
    },
    series: [ {
      type: 'pie',
      center: ['25%', '42%'],
      radius: ['', '25%'],
      data: [{
        name: '客运车',
        value: 10000
      }, {
        name: '危险品运输车',
        value: 11000
      }, {
        name: '网约车',
        value: 7000
      }, {
        name: '校车',
        value: 5000
      }, {
        name: '私家车',
        value: 18000
      }]
    }, {
      type: 'pie',
      center: ['73%', '42%'],
      radius: ['', '25%'],
      data: [{
        name: '超速',
        value: 12000
      }, {
        name: 'SOS',
        value: 23000
      }, {
        name: '偏移',
        value: 50000
      },{
        namee:'其他',
        value:19000
      }]
    }, {
      name:'停车',
      type: 'bar',
      stack:'总量',
      data: [320,302,301,334,394]
      }, {
        name: '行驶',
        type: 'bar',
        stack: '总量',
        data: [120, 123, 101, 234, 465]
      }, {
        name: '熄火',
        type: 'bar',
        stack: '总量',
        data: [234, 398, 289, 323, 127]
      }, {
        name: '离线',
        type: 'bar',
        stack: '总量',
        data: [454, 784, 331, 437, 237]
      }, {
        xAxisIndex:1,
        yAxisIndex:1,
        type:'line',
        data:[129,430,238,549,123,543,238],
        smooth:true
      }]
  });
</script>

<style scoped>
.carSale
{
  height: 100%;
}
</style>