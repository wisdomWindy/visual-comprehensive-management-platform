<template>
  <div class="elecsale" ref="elecsale"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {container:elecsale} = useEcharts({
    title: [{
      text: '今日订单总销量',
      x: 'center',
      y: '4.5%'
    }, {
      text: '4509834',
      x: 'center',
      y: '10%',
      FontSize: 20
    }, {
      text: '今日成交订单数',
      x: '14.7',
      y: '18%'
    }, {
      text: '34220',
      x: '15.3',
      y: '23%'
    }, {
      text: '订单成功占比',
      x: 'center',
      y: '18%'
    }, {
      text: '93.25%',
      x: 'center',
      y: '23%'
    }, {
      text: '今日取消订单数',
      x: '74.5%',
      y: '18%'
    }, {
      text: '2310',
      x: '76%',
      y: '23%'
    }, {
      text: '购买用户\n\n设备分布',
      x: '19.8%',
      y: '45%',
      textAlign: 'center',
      textBaseline: 'middle'
    }, {
      text: '购买用户\n\n年龄分布',
      x: '49.8%',
      y: '45%',
      textAlign: 'center',
      textBaseline: 'middle'
    }, {
      text: '购买用户\n\n渠道分布',
      x: '79.8%',
      y: '45%',
      textAlign: 'center',
      textBaseline: 'middle'
    }, {
      text: '订单量TOP10城市',
      x: '18%',
      y: '60%',
      textAlign: 'center',
      textBaseline: 'middle'
    }, {
      text: '订单量分时段统计',
      x: '65%',
      y: '60%'
    }],
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
      data: ['城市A', '城市B', '城市C', '城市D', '城市E']
    }, {
      gridIndex: 1,
      type: 'value'
    }],
    series: [{
      type: 'bar',
      data: [90, 23, 54, 67, 23]
    }, {
      type: 'pie',
      center: ['20%', '45%'],
      radius: ['15%', '20%'],
      data: [{
        name: 'Mac',
        value: 10000
      }, {
        name: 'Windows',
        value: 11000
      }, {
        name: 'Linux',
        value: 7000
      }, {
        name: 'Unix',
        value: 5000
      }, {
        name: '其他',
        value: 18000
      }]
    }, {
      type: 'pie',
      center: ['50%', '45%'],
      radius: ['15%', '20%'],
      data: [{
        name: '小于25岁',
        value: 12000
      }, {
        name: '25-40岁',
        value: 23000
      }, {
        name: '大于40岁',
        value: 50000
      }]
    }, {
      type: 'pie',
      center: ['80%', '45%'],
      radius: ['15%', '20%'],
      data: [{
        name: '天猫',
        value: 99990
      }, {
        name: '京东',
        value: 88880
      }, {
        name: '唯品会',
        value: 77770
      }, {
        name: '拼多多',
        value: 66660
      }]
    }, {
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: [456, 234, 768, 346, 325, 768, 231, 908],
      smooth: true
    }]
  });
</script>

<style scoped>
.elecsale
{
  height: 100%;
}
</style>