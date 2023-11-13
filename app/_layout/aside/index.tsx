 
import Link from "next/link";
const mainMenu = [
  ["home", "/"],
  ["login", "/login"],
  ["items", "/items"],
  ["item1", "/item/1"],
  ["item2", "/item/2"],
  ["item3", "/item/3"],
  ["item6", "/item/6"],
  ["item4s", "/item/4"],
  ["item77", "/item/77"],
  ["item777", "/item/777"],
  ["item", "/item"], 
  ["profile", "/profile"] 
  ]

export  function Menu() {
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
export default function Aside( ) {
  return (
    <aside >
          <Menu/>
        </aside>
  );
}
