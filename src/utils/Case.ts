import { UserLogin } from '@/interfaces'

const url = 'https://192.168.1.102'

export const inquirySanhab = async (inputs: UserLogin) => {
  try {
    const res = await fetch(`${url}/api/userLogin/userLogin`, {
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
  } catch (error) {
    console.error('Error sending login request:', error)
    throw error
  }
}
