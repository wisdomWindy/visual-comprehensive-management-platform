import { defineStore } from 'pinia'

export default defineStore('appStore', {
  state() {
    return {
      menuList: [
        {
          name: '电商可视化',
          path: '/elec-statistic',
        },
        {
          name: '就业情况可视化',
          path: '/employment-condition',
        },
        {
          name: '新生报到可视化',
          path: '/freshman-statistic',
        },
        {
          name: '智慧城市可视化',
          path: '/smart-city',
        },
        {
          name: '智能家居',
          path: '/smartHome',
        },
        {
          name: '化工',
          path: '/taixingChemical',
        },
        {
          name: '可视化学习',
          path: '/dataVisualStu',
        },
        {
          name: '作品1',
          path: '/demo1',
        },
        {
          name: '作品2',
          path: '/demo2',
        },
        {
          name: '作品9',
          path: '/demo9',
        },
        {
          name: '作品15',
          path: '/demo15',
        },
      ],
    }
  },
})
