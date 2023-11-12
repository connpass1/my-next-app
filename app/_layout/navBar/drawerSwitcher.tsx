"use client"

import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function X() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
  
  
    function changeOpen(event: ChangeEvent<HTMLInputElement>): void {
        setOpen(!open)
    }

    return <>
     <label htmlFor="drawer-toggle" aria-label="navigation open" > 
    <BiMenu className={` h-8 w-8  max-md:h-6  max-md:w-6 cursor-pointer  ${open!&&"rotate-90"}`}  /> 
  </label> 
    
    
    <input type="checkbox" id="drawer-toggle" checked={!open} onChange={changeOpen} className="peer sr-only collapse relative" /> 
    </>
}
 