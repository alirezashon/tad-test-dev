import React, { useEffect, useState } from 'react'
import FormHeader from '../Form/Header'
import PageHeader from '../Header/Page'
import Input from '../Form/Input'

const PersonInfo = () => {
  const [inquiryResult, setInquiryResult] = useState(null); // Initialize state to null

  useEffect(() => {
    const res = localStorage.getItem("inquiryRes");
    if (res) {
      try {
        const parsedRes = JSON.parse(res); // Parse the JSON string to an object
        console.log(parsedRes);
        
        setInquiryResult(parsedRes); // Set the parsed object to state
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  const handleSubmit=()=>{

  }
  return (
    <div className="layoutContainer">
      <PageHeader title={"اطلاعات فردی"} />
      <form onSubmit={handleSubmit} className="mainForm">
        <div className="formContainer">
          <p>نام و نام خانوادگی: {inquiryResult&& inquiryResult?.insNam}</p>
          <p>کد ملی: {inquiryResult&& inquiryResult.ntnlId}</p>
          <p>کد بیمه نامه: {inquiryResult&& inquiryResult.plcyUnqCod}</p>
          <Input title={"نام و نام خانوادگی"} name={"nationalCode"} value={inquiryResult&& inquiryResult.insNam}/>
          <Input title={"نوع گواهینامه"} name={"nationalCode"}/>
          <Input title={"تاریخ صدور"} name={"nationalCode"}/>
          <Input title={"شماره همراه"} name={"nationalCode"}/>
          <Input title={"شماره شبا مالک"} name={"nationalCode"}/>
          <Input title={"شماره پلاک"} name={"nationalCode"}/>
          <Input title={"تاریخ تولد"} name={"nationalCode"}/>
     
        </div>
        <button type="submit">استعلام</button>
      </form>
    </div>
  )
}

export default PersonInfo