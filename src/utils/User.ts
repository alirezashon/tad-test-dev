import { ResInfo, UserLogin, UserRole } from '@/interfaces'
import { Toast } from 'primereact/toast'
import { RefObject } from 'react'

const url = 'https://192.168.1.102'

export const userLogin = async (inputs: UserLogin, toast: RefObject<Toast>) => {
  try {
    const res = await fetch(`${url}/api/UserMng/userLogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({
        userName: inputs.username,
        userPassword: inputs.password,
      }),
    })

    const result = await res.json()
    console.log(result)
    if (result?.resCode > 0) {
      if (
        result &&
        result.resInfo &&
        result.resInfo.roleName &&
        result.resInfo.tokenString
      ) {
        localStorage.setItem('roleName', result.resInfo.roleName)
        localStorage.setItem('token', result.resInfo.tokenString)
        // document.cookie = "cookieName=token; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT; Secure; SameSite=Strict";
        toast.current?.show({
          severity: 'success',
          summary: 'در حال پردازش...',
          detail: 'موفق',
          life: 3000,
        })
        return 'success login authenticated'
      }
    } else {
      toast.current?.show({
        severity: 'error',
        summary: 'رمز عبور یا نام کاربری اشتباه است',
        detail: 'ناموفق',
        life: 3000,
      })
    }
  } catch (error) {
    toast.current?.show({
      severity: 'error',
      summary: 'خطای شبکه',
      detail: 'ناموفق',
      life: 3000,
    })

    console.error('Error sending login request:', error)
    throw error
  }
}

export const userAccess = async (inputs: UserRole) => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    try {
      const res = await fetch(`${url}/api/UserMng/userAccess`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
        },
        body: JSON.stringify({
          roleName: inputs.roleName,
          pageName: inputs.pageName,
        }),
      })
      const result = await res.json()
      if (result) {
        return result
      }
    } catch (error) {
      console.error('Error sending access request:', error)
    }
  } else {
    console.error('Token not found in localStorage')
    return []
  }
}

export const getPlateInquiry = async (
  inputs: any,
  toast: RefObject<Toast>,
  setResponse: (res: ResInfo) => void
) => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    console.log('send post request to sanhab')
    try {
      toast.current?.show({
        severity: 'info',
        summary: 'در حال جستجو',
        detail: 'ارتباط با سرور',
        life: 3000,
      })
      const res = await fetch(`${url}/api/ExternalSrv/GetInfo4Sanhab2Pelak`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
        },
        body: JSON.stringify(
          // {
          //   pelakPart1: 57,
          //   pelakPart2: 'ل',
          //   pelakPart3: 463,
          //   pelakPart4: 44,
          // } 
            {
            pelakPart1: inputs.pelakPart1,
            pelakPart2: inputs.pelakPart2,
            pelakPart3: inputs.pelakPart3,
            pelakPart4: inputs.pelakPart4,
          }
        ),
      })
      const result = await res.json()
      console.log(result)
      if (result) {
        if (result.resInfo && result.resInfo.length > 0) {
          setResponse(result.resInfo[0])
          return result.resInfo[0]
        }else if(result.resInfo.length === -40){
  toast.current?.show({
          severity: 'error',
          summary: 'پلاک در سیستم موجود نیست',
          detail: 'ناموفق',
          life: 3000,
        })
        }
      } else {
        toast.current?.show({
          severity: 'error',
          summary: 'داده ورودی اشتباه است',
          detail: 'ناموفق',
          life: 3000,
        })
      }
    } catch (error) {
      console.error('Error sending inquiry request:', error)
      toast.current?.show({
        severity: 'error',
        summary: 'خطای شبکه',
        detail: 'ناموفق',
        life: 3000,
      })
    }
  } else {
    toast.current?.show({
      severity: 'error',
      summary: 'خطای احراز هویت',
      detail: 'ناموفق',
      life: 3000,
    })
    return []
  }
}
