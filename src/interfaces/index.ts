export interface UserLogin {
  username: string
  password: string
}

export interface UserRole {
  roleName: string
  pageName: string
}

export interface Edrs {
  id: number
  thirdpartyResponseId: number
  carGrpCod: string
  cntryCod: string
  disBdnYrNum: string
  disFnYrNum: string
  disFnYrPrcnt: string
  disLfYrNum: string
  disLfYrPrcnt: string
  disPrsnYrNum: string
  disPrsnYrPrcnt: string
  edrsCmpDocNo: string
  edrsTyp: string
  mtrnum: string
  plk: string
  shsNam: string
  usgCod: string
  vin: string
  vehSysCod: string
}

export interface Losses {
  id: number
  thirdpartyResponseId: number
  hancDte: string
  hpayDte: string
  losCmpDocNo: string
  losTyp: string
  payAmnt: string
}

export interface ResInfo {
  id: number
  userId: number
  thirdPartyRequestId: number
  carGrpCod: string
  cmpCod: string
  cmpNam: string
  cntryCod: string
  disFnYrNum: string
  disFnYrPrcnt: string
  disLfYrNum: string
  disLfYrPrcnt: string
  disPrsnYrNum: string
  disPrsnYrPrcnt: string
  discBdnYrNum: string
  fndCst: string
  hbgnDte: string
  hendDte: string
  hisuDte: string
  insNam: string
  lastCmpCod: string
  lastCmpDocNo: string
  mtrNum: string
  ntnlId: string
  plcyUnqCod: string
  plk: string
  prdDte: string
  prntCmpDocNo: string
  shsNum: string
  typPlcy: string
  usgCod: string
  usgNam: string
  vin: string
  vehNam: string
  vehSysCod: string
  edrses: Edrs[]
  losses: Losses[]
}

export interface ApiResponse {
  resCode: number
  resMessage: string
  resInfo: ResInfo[]
  resErrPos: string
}
