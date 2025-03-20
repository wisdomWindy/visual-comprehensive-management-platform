<template>
  <full-screen-container class="bg-[#143048]">
    <div class="w-full h-10px flex text-white justify-center">XX 大学2024本科生迎新数据</div>
    <div class="flex w-full h-3/5">
      <!-- 最新报道学生 -->
      <div class="w-1/4 h-full">
        <rank-list v-if="studentData" :data="studentData"></rank-list>
      </div>

      <!-- 地图表 -->
      <div class="w-1/2 h-full flex flex-col">
        <total-data-view v-if="mapChartData" :data="mapChartData"></total-data-view>
        <map-chart
          v-if="mapChartData"
          :data="mapChartData"
          :provienceData="provienceData"
        ></map-chart>
      </div>
      <div class="w-1/4 h-full">
        <college-ratio v-if="collegeRatioData" :data="collegeRatioData!"></college-ratio>
      </div>
    </div>
    <div class="flex justify-between w-full h-2/5">
      <Minorities v-if="minoritiesData" :data="minoritiesData"></Minorities>
      <Provience v-if="provienceData" :data="provienceData"></Provience>
      <Ratio v-if="sexRatio" :data="sexRatio"></Ratio>
    </div>
  </full-screen-container>
</template>
<script setup lang="ts">
import { FullScreenContainer } from '@kjgl77/datav-vue3'
import { ref } from 'vue'
import RankList from './components/RankList.vue'
import MapChart from './components/MapChart.vue'
import CollegeRatio from './components/CollegeRatio.vue'
import Minorities from './components/Minorities.vue'
import Provience from './components/Provience.vue'
import Ratio from './components/Ratio.vue'
import TotalDataView from './components/TotalData.vue'
import type {
  StudentData,
  TotalData,
  CollegeData,
  Minorities as MinoritiesType,
  ProvinceReportingSituation,
  SexRatio
} from '@/types'
import {
  getCollegeRegistrationStatisticsData,
  getTotalData,
  getLatestReport,
  getEnrollmentOfEthnicMinorities,
  getProvincialReportingSituation,
  getSexRatio
} from '@/apis'

const studentData = ref<StudentData[]>()
const mapChartData = ref<TotalData>()
const collegeRatioData = ref<CollegeData[]>()
const minoritiesData = ref<MinoritiesType[]>()
const provienceData = ref<ProvinceReportingSituation[]>()
const sexRatio = ref<SexRatio>()
async function init() {
  studentData.value = [
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx",
      "graduationSchool": "xxx"
    },
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx学院",
      "graduationSchool": "xxx高中"
    },
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx学院",
      "graduationSchool": "xxx高中"
    },
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx学院",
      "graduationSchool": "xxx高中"
    },
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx学院",
      "graduationSchool": "xxx高中"
    },
    {
      "id": "202412316145",
      "name": "xx",
      "college": "xxx学院",
      "graduationSchool": "xxx高中"
    }
  ]
  mapChartData.value = {
    "total": 7325,
    "actualArrival": 7054,
    "datas": [
      {
        "name": "文理学部",
        "reportNumber": 3052,
        "enrollmentsNumber": 3161
      },
      {
        "name": "工学部",
        "reportNumber": 3052,
        "enrollmentsNumber": 3161
      },
      {
        "name": "信息学部",
        "reportNumber": 3052,
        "enrollmentsNumber": 3161
      },
      {
        "name": "医学部",
        "reportNumber": 3052,
        "enrollmentsNumber": 3161
      }
    ]
  }
  collegeRatioData.value = [
    {
      "name": "马克思主义学院",
      "shouldArrive": 86,
      "actualArrival": 86
    },
    {
      "name": "生命科学学院",
      "shouldArrive": 176,
      "actualArrival": 176
    },
    {
      "name": "政治与公共管理学院",
      "shouldArrive": 145,
      "actualArrival": 145
    },
    {
      "name": "动力与机械学院",
      "shouldArrive": 312,
      "actualArrival": 312
    },
    {
      "name": "弘毅学堂",
      "shouldArrive": 450,
      "actualArrival": 450
    },
    {
      "name": "药学院",
      "shouldArrive": 59,
      "actualArrival": 59
    },
    {
      "name": "社会学院",
      "shouldArrive": 58,
      "actualArrival": 58
    },
    {
      "name": "土木建筑工程学院",
      "shouldArrive": 110,
      "actualArrival": 110
    },
    {
      "name": "物理科学与技术学院",
      "shouldArrive": 204,
      "actualArrival": 204
    }
  ]
  minoritiesData.value = [
    {
      "name": "汉族",
      "value": 1000
    },
    {
      "name": "傣族",
      "value": 1000
    },
    {
      "name": "满族",
      "value": 1000
    },
    {
      "name": "土家族",
      "value": 1000
    },
    {
      "name": "黎族",
      "value": 1000
    },
    {
      "name": "壮族",
      "value": 1000
    },
    {
      "name": "回族",
      "value": 1000
    },
    {
      "name": "苗族",
      "value": 1000
    },
    {
      "name": "维吾尔族",
      "value": 1000
    },
    {
      "name": "彝族",
      "value": 1000
    },
    {
      "name": "蒙古族",
      "value": 1000
    },
    {
      "name": "藏族",
      "value": 1000
    },
    {
      "name": "布依族",
      "value": 1000
    },
    {
      "name": "侗族",
      "value": 1000
    },
    {
      "name": "瑶族",
      "value": 1000
    },
    {
      "name": "朝鲜族",
      "value": 1000
    }
  ]
  provienceData.value = [
    {
      "name": "内蒙古",
      "shouldArrive": 104,
      "actualArrival": 1
    },
    {
      "name": "北京",
      "shouldArrive": 97,
      "actualArrival": 2
    },
    {
      "name": "天津",
      "shouldArrive": 84,
      "actualArrival": 4
    },
    {
      "name": "香港",
      "shouldArrive": 48,
      "actualArrival": 40
    },
    {
      "name": "辽宁",
      "shouldArrive": 84,
      "actualArrival": 2
    },
    {
      "name": "吉林",
      "shouldArrive": 77,
      "actualArrival": 0
    }
  ]
  sexRatio.value = {
    "male": 950,
    "female": 660
  }
}
init()
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
