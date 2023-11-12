"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
//const c = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
//const c1 = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
export default function X() {
  const [user, setUser] = useState("init")
  const router = useRouter()
    useEffect(()=>{
      const item=  localStorage.getItem("user" )
       if(user ==="init"|| !item )router.push("/login/sign/in") 
      setUser(localStorage.getItem("user" )||user);
      
    },[router, user])

const exit=()=>{  
  console.log(user);
   localStorage.removeItem("user") 
   setUser(""); 
}
if(user==="")    return <div className='grid place-items-center row-span-full col-span-full  '> 
<span>{user} </span>
<Link href="/">Link</Link>
<span className="w-96">  </span>

</div>
 
    
    return <div className='grid place-items-center row-span-full col-span-full  '> 
        <span>{JSON.stringify(user)} </span>
        <button onClick={exit}> exit </button>
        <span className="w-96">  </span>
       
     </div>   
 
}  