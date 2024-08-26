


import React, { useEffect, useState } from 'react'
import FormHeader from '../Form/Header'
import PageHeader from '../Header/Page'
import Input from '../Form/Input'
import styles from './index.module.css'

// Define the interface for the inquiry result
interface InquiryResult {
  nsNam: string;
  ntnlId: string;
  plcyUnqCod: string;
  insNam: string;
}

const PersonInfo: React.FC = () => {
  const [inquiryResult, setInquiryResult] = useState<InquiryResult | null>(null); // Initialize state with the interface

  useEffect(() => {
    const res = localStorage.getItem("inquiryRes");
    if (res) {
      try {
        const parsedRes: InquiryResult = JSON.parse(res); // Parse and assign type
        console.log(parsedRes);
        
        setInquiryResult(parsedRes); // Set the parsed object to state
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  const handleSubmit = () => {
    // Handle form submission logic here
  }

  return (
    <div className={styles.layoutContainer}>
      <PageHeader title={"اطلاعات فردی"} />
      <form onSubmit={handleSubmit} className={styles.mainForm}>
        <div className={styles.formContainer}>
          <p>نام و نام خانوادگی: {inquiryResult?.nsNam}</p>
          <p>کد ملی: {inquiryResult?.ntnlId}</p>
          <p>کد بیمه نامه: {inquiryResult?.plcyUnqCod}</p>
          <Input title={"نام و نام خانوادگی"} name={"nationalCode"}  />
          <Input title={"نوع گواهینامه"} name={"licenseType"} />
          <Input title={"تاریخ صدور"} name={"issueDate"} />
          <Input title={"شماره همراه"} name={"phoneNumber"} />
          <Input title={"شماره شبا مالک"} name={"ownerIban"} />
          <Input title={"شماره پلاک"} name={"plateNumber"} />
          <Input title={"تاریخ تولد"} name={"birthDate"} />
        </div>
        <button type="submit" className={styles.button}>استعلام</button>
      </form>
    </div>
  )
}

export default PersonInfo
