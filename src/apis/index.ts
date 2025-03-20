import request from '@/utils/request'
import type { ResponseDataType } from '@/types/visualization'
import type {
  StudentData,
  SexRatio,
  ProvinceReportingSituation,
  Minorities,
  TotalData,
  CollegeData,
} from '@/types'

// 获取最新报道学生
export function getLatestReport() {
  return request.get<StudentData[]>('/api/latestReport')
}

// 获取学院报道情况数据
export function getCollegeRegistrationStatisticsData() {
  return request.get<CollegeData[]>('/api/collegeRegistrationStatisticsData')
}

// 获取男女比例数据
export function getSexRatio() {
  return request.get<SexRatio>('/api/sexRatio')
}

// 获取个省份报道情况数据
export function getProvincialReportingSituation() {
  return request.get<ProvinceReportingSituation[]>('/api/provincialReportingSituation')
}
// 获取少数民族报道情况
export function getEnrollmentOfEthnicMinorities() {
  return request.get<Minorities[]>('/api/enrollmentOfEthnicMinorities')
}

// 获取概览数据
export function getTotalData() {
  return request.get<TotalData>('/api/totalData')
}


export const getVisualization = () => {
  return request.get<ResponseDataType>('/api/visualization')
}
// 获取热销商品
export const getHotProduct = ()=>{
  return request.get<ResponseDataType>('/api/hotproduct');
}
// 获取省份地图
export const getProvienceMap = (provienceName:string)=>{
  return request.get<ResponseDataType>(provienceName)
}

export const getMapData = () => {
  return request.get<ResponseDataType>('/api/mapData')
}