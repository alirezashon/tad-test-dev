export interface UserLogin {
  username: string
  password: string
}
export interface UserRole {
  roleName: string
  pageName: string
}
interface Edrs {
  id: any
  thirdpartyResponseId: any
  carGrpCod: any
  cntryCod: any
  disBdnYrNum: any
  disFnYrNum: any
  disFnYrPrcnt: any
  disLfYrNum: any
  disLfYrPrcnt: any
  disPrsnYrNum: any
  disPrsnYrPrcnt: any
  edrsCmpDocNo: any
  edrsTyp: any
  mtrnum: any
  plk: any
  shsNam: any
  usgCod: any
  vin: any
  vehSysCod: any
}

interface Losses {
  id: any
  thirdpartyResponseId: any
  hancDte: any
  hpayDte: any
  losCmpDocNo: any
  losTyp: any
  payAmnt: any
}

export interface ResInfo {
  id: any
  userId: any
  thirdPartyRequestId: any
  carGrpCod: any
  cmpCod: any
  cmpNam: any
  cntryCod: any
  disFnYrNum: any
  disFnYrPrcnt: any
  disLfYrNum: any
  disLfYrPrcnt: any
  disPrsnYrNum: any
  disPrsnYrPrcnt: any
  discBdnYrNum: any
  fndCst: any
  hbgnDte: any
  hendDte: any
  hisuDte: any
  insNam: any
  lastCmpCod: any
  lastCmpDocNo: any
  mtrNum: any
  ntnlId: any
  plcyUnqCod: any
  plk: any
  prdDte: any
  prntCmpDocNo: any
  shsNum: any
  typPlcy: any
  usgCod: any
  usgNam: any
  vin: any
  vehNam: any
  vehSysCod: any
  edrses: Edrs[]
  losses: Losses[]
}

export interface ApiResponse {
  resCode: any
  resMessage: any
  resInfo: ResInfo[]
  resErrPos: any
}
