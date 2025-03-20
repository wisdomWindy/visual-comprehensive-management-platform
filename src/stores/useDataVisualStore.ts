import { defineStore } from 'pinia'

export default defineStore('useDataVisual', {
  state() {
    return {
      menus: [
        {
          name: '折线图',
          path: '/dataVisualStu/line',
        },
        {
          name: '柱状图',
          path: '/dataVisualStu/bar',
        },
        {
          name: '饼图',
          path: '/dataVisualStu/pie',
        },
        {
          name: '散点图',
          path: '/dataVisualStu/scatter',
        },
        {
          name: '气泡图',
          path: '/dataVisualStu/buble',
        },
        {
          name: '雷达图',
          path: '/dataVisualStu/radar',
        },
        {
          name: '漏斗图',
          path: '/dataVisualStu/funnel',
        },
        {
          name: '仪表盘',
          path: '/dataVisualStu/gauge',
        },
        {
          name: '箱线图',
          path: '/dataVisualStu/boxplot',
        },
        {
          name: '热力图',
          path: '/dataVisualStu/heatmap',
        },
        {
          name: '旭日图',
          path: '/dataVisualStu/sunburst',
        },
        {
          name: '桑基图',
          path: '/dataVisualStu/sankey',
        },
        {
          name: '词云图',
          path: '/dataVisualStu/wordcloud',
        },
        {
          name: '树图',
          path: '/dataVisualStu/tree',
        },
        {
          name: '矩形树图',
          path: '/dataVisualStu/treemap',
        },
        {
          name: '关系图',
          path: '/dataVisualStu/graph',
        },
        {
          name: '日历图',
          path: '/dataVisualStu/calendar',
        },
        {
          name: 'map地图',
          path: '/dataVisualStu/map',
        },
        {
          name: 'geo地图',
          path: '/dataVisualStu/geo',
        },
        {
          name: '路线图',
          path: '/dataVisualStu/lines',
        },
        {
          name: '图表联动',
          path: '/dataVisualStu/chartRelation',
        },
        {
          name: '动态加载',
          path: '/dataVisualStu/dynamicLoad',
        },
      ],
    }
  },
  getters: {},
})
