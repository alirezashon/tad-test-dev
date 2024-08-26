import React from 'react';
import styles from './index.module.css';

interface TableData {
  id: number;
  name: string;
  description: string;
}

const sampleData: TableData[] = [
  { id: 1, name: 'Test 1', description: 'Description 1' },
  { id: 2, name: 'Test 2', description: 'Description 2' },
  { id: 3, name: 'Test 3', description: 'Description 3' },
  { id: 4, name: 'Test 4', description: 'Description 4' },
  { id: 5, name: 'Test 5', description: 'Description 5' },
];

const FileManagementTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>مدیریت پرونده ها</h2>
      <input className={styles.searchInput} type="text" placeholder="جستجو..." />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ستون 1</th>
            <th>ستون 2</th>
            <th>ستون 3</th>
            <th>ستون 4</th>
            <th>ستون 5</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileManagementTable;

// import React, { useEffect, useState } from 'react'
// import { handleAccess } from '../../constants/functions'

// const Dashboard = () => {

  
//   const [control, setControl] = useState('') // Using useState to manage control state
  
//   useEffect(() => {
//     const roleName = localStorage.getItem('roleName')
//     console.log(roleName)
    
//     const pageName = 'Page1'
//     console.log(pageName)
//     const fetchControl = async () => {
//       try {
//         const result = await handleAccess(pageName) // Await the result of handleAccess
//         setControl(result) // Set the result to the state
//       } catch (error) {
//         console.error('Error fetching control:', error)
//       }
//     }

//     fetchControl() // Call the async function
//   }, []) // Dependency array includes pageName

//   return (
//     <div>
//       Dashboard
//       <div>Controls: {control}</div> {/* Display the control */}
//     </div>
//   )
// }

// export default Dashboard
