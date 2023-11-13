"use client"
import { ChildrenType } from "@/app/layout";
  import { useRouter } from 'next/navigation';
  import { useEffect, useState } from "react";

export default  function X( ) { 
  const router = useRouter()
  const [user, setUser] = useState("")
    useEffect(()=>{
      
    const  u= localStorage.getItem("user" )
       if(u===null)router.push("/profile") 
       else setUser(u as string) 
    },[router ])


    const exit=()=>{
      localStorage.removeItem("user") 
      router.push("/")
    }
  return <>    
  { user }
<button onClick={exit} >exit</button>
 
  </>
}

 