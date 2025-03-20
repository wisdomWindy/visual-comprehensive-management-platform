import { defineStore } from 'pinia'

export default defineStore('employmentStore', {
  state() {
    return {
      emploeeCondition: [
        {
          industry: '旅游业',
          value: 3210,
        },
        {
          industry: '游戏行业',
          value: 5220,
        },
        {
          industry: '电商行业',
          value: 4220,
        },
        {
          industry: '金融行业',
          value: 3220,
        },
        {
          industry: '房地产行业',
          value: 2220,
        },
        {
          industry: '餐饮业',
          value: 1220,
        },
      ],
      employTrend: [
        {
          startTime: '2024-01-01',
          endTime: '2024-01-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-02-01',
          endTime: '2024-02-29',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-03-01',
          endTime: '2024-03-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-04-01',
          endTime: '2024-04-30',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-05-01',
          endTime: '2024-05-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-06-01',
          endTime: '2024-06-30',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-07-01',
          endTime: '2024-07-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-08-01',
          endTime: '2024-08-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-09-01',
          endTime: '2024-09-30',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-10-01',
          endTime: '2024-10-31',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-11-01',
          endTime: '2024-11-30',
          addFans: 100,
          addVisitor: 140,
        },
        {
          startTime: '2024-12-01',
          endTime: '2024-12-31',
          addFans: 100,
          addVisitor: 140,
        },
      ],
      ageDistribution: [
        {
          name: '20-30',
          value: 500,
        },
        {
          name: '30-40',
          value: 100,
        },
        {
          name: '40-50',
          value: 100,
        },
        {
          name: '50-60',
          value: 100,
        },
      ],
      skillCondition: [
        {
          name: 'HTML5',
          value: 702,
        },
        {
          name: 'CSS3',
          value: 350,
        },
        {
          name: 'javascript',
          value: 610,
        },
        {
          name: 'Vue',
          value: 793,
        },
        {
          name: 'Node',
          value: 664,
        },
      ],
      playData: [
        {
          time: '2024-01-01',
          playCount: 50,
          forward: 20,
        },
        {
          time: '2024-01-02',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-03',
          playCount: 200,
          forward: 150,
        },
        {
          time: '2024-01-04',
          playCount: 1100,
          forward: 540,
        },
        {
          time: '2024-01-05',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-06',
          playCount: 11100,
          forward: 1111,
        },
        {
          time: '2024-01-07',
          playCount: 2450,
          forward: 456,
        },
        {
          time: '2024-01-08',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-09',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-10',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-11',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-12',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-13',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-14',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-15',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-16',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-17',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-18',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-01',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-19',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-20',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-21',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-22',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-23',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-24',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-25',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-26',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-27',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-28',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-29',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-30',
          playCount: 100,
          forward: 50,
        },
        {
          time: '2024-01-31',
          playCount: 100,
          forward: 50,
        },
      ],
      areaData: [
        {
          areaName: '广东',
          value: 3120,
        },
        {
          areaName: '云南',
          value: 290,
        },
        {
          areaName: '北京',
          value: 4120,
        },
        {
          areaName: '山东',
          value: 920,
        },
        {
          areaName: '河北',
          value: 820,
        },
        {
          areaName: '浙江',
          value: 1120,
        },
        {
          areaName: '深圳',
          value: 2120,
        },
        {
          areaName: '上海',
          value: 3000,
        },
      ],
    }
  },
})
