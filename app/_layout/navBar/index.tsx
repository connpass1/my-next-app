 
import dynamic from "next/dynamic";
import Link from "next/link";
import { BiChevronLeft, BiHome, BiLogIn, BiMoon, BiSun } from "react-icons/bi";
import { Menu } from "../aside";
const DrawerSwitcher = dynamic(() => import(  "./drawerSwitcher")  )  
const ThemeSwitcher = dynamic(() => import ("./themeSwitcher"));
 
export default function NavBar() {
  return (
    <div className="col-span-full col-start-1 row-start-1 grid h-full grid-cols-3  place-items-center  gap-4  px-4 dark:bg-slate-900">
      <Link className="justify-self-start" href={"/"} aria-label="home">
        <BiHome className="h-8 w-8 max-md:h-6 max-md:w-6" />
      </Link>
      <div className="col-start-2 col-end-[-2]">search</div>

      <div className="col-end-[-1] grid grid-cols-3 gap-4 justify-self-end lg:grid-cols-2 child:cursor-pointer child:grid child:place-content-center">
        <label   aria-label="theme">
          <ThemeSwitcher />
          <BiSun className="h-8 w-8 peer-checked:hidden max-md:h-6 max-md:w-6" />
          <BiMoon className="hidden h-8 w-8 peer-checked:block max-md:h-6  max-md:w-6" />
        </label>
        <Link  href={"/login"} aria-label="login">
          <BiLogIn className="  h-8  w-8  max-md:h-6  max-md:w-6" />
        </Link> 
        <div className="lg:hidden">
          <DrawerSwitcher />
          <div
            className="duration-800 fixed left-0 top-0 z-50 grid  h-full w-full   translate-x-0   transform grid-cols-4  backdrop-blur-sm
         bg-primary/50 dark:bg-slate-950/80 transition-all peer-checked:-translate-x-full  dark:bg-primary_bg_dark/50"
          >
            <div className="col-start-1  col-end-[-2]   h-full w-full bg-white   shadow-lg 
             dark:bg-slate-900 sm:w-3/4 md:w-1/2">      <label htmlFor="drawer-toggle" aria-label="navigation open"  className="flex justify-end p-4" > 
             <BiChevronLeft className=" h-8 w-8   cursor-pointer   justify-end" /> 
           </label>
               <Menu/>
            </div>
            <label
              htmlFor="drawer-toggle"
              className="h-full w-full" 
              aria-label="close"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
