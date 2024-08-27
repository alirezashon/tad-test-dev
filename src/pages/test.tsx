

import { ApiResponse } from '@/interfaces'
// import DataDisplay from '../components/Inquiry/FormShow'

import FlowChart from "@/components/FlowChart"

const sampleData: ApiResponse = {
  resCode: 0,
  resMessage: 'Operation Successful',
  resInfo: [
    {
      id: 1,
      userId: 123,
      thirdPartyRequestId: 456,
      carGrpCod: 'ABC123',
      cmpCod: 'COMP789',
      cmpNam: 'Sample Company',
      cntryCod: 'IR',
      disFnYrNum: '10',
      disFnYrPrcnt: '5%',
      disLfYrNum: '15',
      disLfYrPrcnt: '10%',
      disPrsnYrNum: '20',
      disPrsnYrPrcnt: '15%',
      discBdnYrNum: '5',
      fndCst: '1000',
      hbgnDte: '2024-01-01',
      hendDte: '2024-12-31',
      hisuDte: '2024-06-30',
      insNam: 'Insurance A',
      lastCmpCod: 'LAST123',
      lastCmpDocNo: 'DOC456',
      mtrNum: 'MTR789',
      ntnlId: 'IR123456',
      plcyUnqCod: 'POL123',
      plk: 'PLK123',
      prdDte: '2024-01-01',
      prntCmpDocNo: 'PRNT123',
      shsNum: 'SHS123',
      typPlcy: 'Type A',
      usgCod: 'USG123',
      usgNam: 'Usage A',
      vin: 'VIN123456',
      vehNam: 'Vehicle A',
      vehSysCod: 'SYS123',
      edrses: [
        {
          id: 1,
          thirdpartyResponseId: 789,
          carGrpCod: 'ABC123',
          cntryCod: 'IR',
          disBdnYrNum: '5',
          disFnYrNum: '10',
          disFnYrPrcnt: '5%',
          disLfYrNum: '15',
          disLfYrPrcnt: '10%',
          disPrsnYrNum: '20',
          disPrsnYrPrcnt: '15%',
          edrsCmpDocNo: 'EDRS123',
          edrsTyp: 'Type B',
          mtrnum: 'MTR456',
          plk: 'PLK456',
          shsNam: 'SHS456',
          usgCod: 'USG456',
          vin: 'VIN654321',
          vehSysCod: 'SYS456',
        },
      ],
      losses: [
        {
          id: 1,
          thirdpartyResponseId: 789,
          hancDte: '2024-03-01',
          hpayDte: '2024-03-05',
          losCmpDocNo: 'LOS123',
          losTyp: 'Type C',
          payAmnt: '500',
        },
      ],
    },
  ],
  resErrPos: 'No errors',
}

// const HomePage: React.FC = () => {
//   return <DataDisplay data={sampleData.resInfo[0]} />
// }

// export default HomePage


const HomePage: React.FC = () => {
  return <FlowChart data={sampleData.resInfo[0]}/>
  }
  export default HomePage