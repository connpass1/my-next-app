import Link from "next/link";
import { mainMenu } from "../api/_data/menu";

export default function Menu() {
  return (
    <ol className= "font-font2 text-lg child:grid child:my-1">
    
      {mainMenu.map((l, i) => (<li  key={i }>
        <Link href={l[1]} className="hover:text-primary p-2 focus:text-primary  px-4 dark:focus:bg-slate-900 
         dark:hover:bg-slate-900/50 dark:hover:text-slate-400 dark:focus:text-slate-100">
           
          {l[0]}
        </Link></li>
      ))}
    </ol>
  );
}
