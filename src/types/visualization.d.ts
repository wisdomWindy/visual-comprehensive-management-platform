
export type ResponseType<T> = {
  data:T,
  message:string,
  code:number,
  success:boolean
}

export type ResponseDataType = {
  regionData:RegionData,
  mapData:MapData,
  abnormalData:AbNormalData,
  relationData:RelationData,
  riskData:RiskData,
  serverData:ServerData,
  totalData:TotalData,
  wordCloudData:WordCloudData
}

export type RegionData = {
  regions: ItemType[]
}
export type AbNormalData = {
  abnormals: ItemType[]
}
export type ServerData = {
  servers: ItemType[]
}

export type RiskData = {
  risks: ItemType[]
}

export type MapData = {
  categoryData:Category,
  colors:string[],
  topData:TopData,
  voltageLevel:string[]
}
export type TopData = {
  [key: string]: Number[][]
}

export type Category = {
  [key: string]: ItemType[]
}

export type WordCloudData = {
  datas:ItemType[]
}

export type TotalData = {
  db: string
  hb: string
  xb: string
  hd: string
  total: string
  xn: string
  zn: string
}

export type RelationData = {
  relations: RelationDataItem[]
}

export type RelationDataItem = {
  id:number,
  name:string,
  source:string,
  target:string,
  speed:number,
  value:number
}

export type ItemType = {
  name: string
  value: number
  id?: number
}