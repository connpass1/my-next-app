 
import { ChildrenType } from "../layout";
export default function RootLayout({ children }: ChildrenType) { 
  return    <section
  className="place-items-cemter backdrop-blur-md dark:bg-primary_bg_dark/50 fixed left-0  top-0 z-50  grid  h-full   w-full
place-content-center bg-primary/20   dark:bg-slate-950/80"
  > {children}  <div>connpass21f2@mailinator.com</div> <div>ffffff</div> </section>;
}
