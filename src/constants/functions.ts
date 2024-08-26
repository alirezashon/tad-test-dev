import { userAccess } from "../utils/User";

export const handleAccess = async (pageName:string) => {
  const roleName = localStorage.getItem("roleName");
  if (roleName && pageName) {
   const res= await userAccess({roleName, pageName});
   console.log("in handle access");

   console.log(res);
   
   
   if( res ){
    if(res.resInfo && res.resInfo.length>0){
      return res.resInfo[0].controlDescription	
    }
   }
  } else {
    console.log("no page name or role name");
  }
};
