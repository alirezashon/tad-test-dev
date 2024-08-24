import React, { useEffect, useState } from 'react'
import { handleAccess } from '../../constants/functions'

const Dashboard = () => {

  
  const [control, setControl] = useState('') // Using useState to manage control state
  
  useEffect(() => {
    const roleName = localStorage.getItem('roleName')
    console.log(roleName)
    
    const pageName = 'Page1'
    console.log(pageName)
    const fetchControl = async () => {
      try {
        const result = await handleAccess(pageName) // Await the result of handleAccess
        setControl(result) // Set the result to the state
      } catch (error) {
        console.error('Error fetching control:', error)
      }
    }

    fetchControl() // Call the async function
  }, []) // Dependency array includes pageName

  return (
    <div>
      Dashboard
      <div>Controls: {control}</div> {/* Display the control */}
    </div>
  )
}

export default Dashboard
