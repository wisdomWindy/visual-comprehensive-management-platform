import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: () => import('@/views/MenuView.vue'),
    },
    {
      path: '/elec-statistic',
      name: 'elecStatistics',
      component: () => import('@/views/elecStatistics/ElecStatistics.vue'),
    },
    {
      path: '/employment-condition',
      name: 'employment-condition',
      component: () => import('@/views/employmentCondition/EmploymentCondition.vue'),
    },
    {
      path: '/smart-city',
      name: 'smartCity',
      component: () => import('@/views/smartCity/SmartCity.vue'),
    },
    {
      path: '/freshman-statistic',
      name: 'freshManStatistic',
      component: () => import('@/views/freshmanStatistic/FreshmanStatistic.vue'),
    },
    {
      path: '/smartHome',
      name: 'smartHome',
      component: () => import('@/views/smartHome/SmartHome.vue'),
    },
    {
      path: '/taixingChemical',
      name: 'taixingChemical',
      component: () => import('@/views/taixingChemical/TaixingChemical.vue'),
    },
    {
      path: '/dataVisualStu',
      name: 'dataVisualStu',
      component: () => import('@/views/dataVisualStu/DataVisualStu.vue'),
      children: [
        {
          path: 'line',
          component: () => import('@/views/dataVisualStu/line/Line.vue'),
        },
        {
          path: 'bar',
          component: () => import('@/views/dataVisualStu/bar/Bar.vue'),
        },
        {
          path: 'pie',
          component: () => import('@/views/dataVisualStu/pie/Pie.vue'),
        },
        {
          path: 'scatter',
          component: () => import('@/views/dataVisualStu/scatter/Scatter.vue'),
        },
        {
          path: 'buble',
          component: () => import('@/views/dataVisualStu/bubble/Bubble.vue'),
        },
        {
          path: 'radar',
          component: () => import('@/views/dataVisualStu/radar/Radar.vue'),
        },
        {
          path: 'funnel',
          component: () => import('@/views/dataVisualStu/funnel/Funnel.vue'),
        },
        {
          path: 'gauge',
          component: () => import('@/views/dataVisualStu/gauge/Gauge.vue'),
        },
        {
          path: 'boxplot',
          component: () => import('@/views/dataVisualStu/boxplot/Boxplot.vue'),
        },
        {
          path: 'heatmap',
          component: () => import('@/views/dataVisualStu/heatmap/Heatmap.vue'),
        },
        {
          path: 'sunburst',
          component: () => import('@/views/dataVisualStu/sunburst/Sunburst.vue'),
        },
        {
          path: 'sankey',
          component: () => import('@/views/dataVisualStu/sankey/Sankey.vue'),
        },
        {
          path: 'wordcloud',
          component: () => import('@/views/dataVisualStu/wordcloud/Wordcloud.vue'),
        },
        {
          path: 'tree',
          component: () => import('@/views/dataVisualStu/tree/Tree.vue'),
        },
        {
          path: 'treemap',
          component: () => import('@/views/dataVisualStu/treemap/Treemap.vue'),
        },
        {
          path: 'graph',
          component: () => import('@/views/dataVisualStu/graph/Graph.vue'),
        },
        {
          path: 'calendar',
          component: () => import('@/views/dataVisualStu/calendar/Calendar.vue'),
        },
        {
          path: 'map',
          component: () => import('@/views/dataVisualStu/map/Map.vue'),
        },
        {
          path: 'geo',
          component: () => import('@/views/dataVisualStu/geo/Geo.vue'),
        },
        {
          path: 'timeline',
          component: () => import('@/views/dataVisualStu/timeline/Timeline.vue'),
        },
        {
          path: 'elecDashboard',
          component: () => import('@/views/dataVisualStu/elecSale/ElecSale.vue'),
        },
        {
          path: 'carsSale',
          component: () => import('@/views/dataVisualStu/carsSale/CarsSale.vue'),
        },
        {
          path: 'lines',
          component: () => import('@/views/dataVisualStu/lines/Lines.vue'),
        },
        {
          path: 'chartRelation',
          component: () => import('@/views/dataVisualStu/chartRelation/ChartRelation.vue'),
        },
        {
          path: 'dynamicLoad',
          component: () => import('@/views/dataVisualStu/dynamicLoad/DynamicLoad.vue'),
        },
      ],
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('@/views/Portfolio/demo1/Demo1.vue'),
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/views/Portfolio/demo2/Demo2.vue'),
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import('@/views/Portfolio/demo9/Demo9.vue'),
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: () => import('@/views/Portfolio/demo15/Demo15.vue'),
    },
  ],
})

export default router
