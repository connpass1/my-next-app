"use client"
import { IItem } from '@/app/api/_data/types';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Add({item }:{  item:IItem}) { 
    const router = useRouter()
     const [state,setState]=useState(1)
    const handle = () => router.push(`/card/${item.uid}/${state}`)  
    return<>    
     <div  className="text-5xl   text-slate-500  gap-6 font-font3">
     <button type="button"  aria-label="-" onClick={()=>setState(state-1)} disabled={state===1}
            className="border p-2 rounded hover:ring-1 dark:bg-slate-950 ring-primary" ><AiOutlineMinus /></button >  
        <span >{state}</span> 
          <button type="button" aria-label="+" onClick={()=>setState(state+1)} 
          className="border p-2 rounded hover:ring-1 dark:bg-slate-950 ring-primary"><AiOutlinePlus /></button > 
           
         </div> 
      <button type="button"  onClick={handle}
       className="border p-2 rounded hover:text-primary dark:bg-base text-slate-500 m-8 ring-primary" > add to card </button> 
    </>
    }