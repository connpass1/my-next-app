
"use client";
import { ChildrenType } from "@/app/layout";
  import { useRouter } from 'next/navigation';
  import { useEffect, useState } from "react";
export default function RootLayout({ children }:ChildrenType) { 
  const router = useRouter()
    useEffect(()=>{
      const user=  localStorage.getItem("user" )
       if(user!==null)router.push("/profile")  
    },[router ])
 
 

  return   <> {children} </>;
}
