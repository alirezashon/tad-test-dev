import { UserLogin, UserRole } from '@/interfaces'

const url = 'https://192.168.1.103'

export const userLogin = async (inputs: UserLogin) => {

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
    if (result?.data?.resCode > 0) {
      if (
        result.data &&
        result.data.resInfo &&
        result.data.resInfo.roleName &&
        result.data.resInfo.tokenString
      ) {
        localStorage.setItem('roleName', result.data.resInfo.roleName)
        localStorage.setItem('token', result.data.resInfo.tokenString)
      }
    }

    // save token and roleName in local storage
  } catch (error) {
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
      throw error
    }
  } else {
    console.error('Token not found in localStorage')
    return []
  }
}

export const getPlateInquiry = async (inputs: any) => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    try {
      const res = await fetch(`${url}/api/ExternalSrv/GetInfo4Sanhab2Pelak`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
        },
        body: JSON.stringify({
          pelakPart1: inputs.pelakPart1,
          pelakPart2: inputs.pelakPart2,
          pelakPart3: inputs.pelakPart3,
          pelakPart4: inputs.pelakPart4,
        }),
      })
      const result = await res.json()

      if (result) {
        if (result.data.resInfo && result.data.resInfo.length > 0) {
          return result.data.resInfo[0]
        }
      }
    } catch (error) {
      console.error('Error sending inquiry request:', error)
      throw error
    }
  } else {
    console.error('Token not found in localStorage')
    return []
  }
}
