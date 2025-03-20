export type StudentData = {
  name: string
  id: string
  college: string
  graduationSchool: string
}

export type SexRatio = {
  male: number
  female: number
}
export type CollegeData = {
  name: string
  shouldArrive: number
  actualArrival: number
}
export type ProvinceReportingSituation = {
  name: string
  shouldArrive: number
  actualArrival: number
}

export type Minorities = {
  name: string
  value: number
}

export type TotalData = {
  total: number
  actualArrival: number
  datas: ItemData[]
}
export type ItemData = {
  name: string
  reportNumber: number
  enrollmentsNumber: number
}
