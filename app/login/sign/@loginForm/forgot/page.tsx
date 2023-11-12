 
import { SubmitButton } from "@/app/_components/form/button";
 
export default function Page() {  
    return       <form className="gap-4 grid grid-cols-2" action="#"> 
    <label
      htmlFor="email"
      className="mb-2 block text-sm font-medium self-center"
    >
      Your email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      className="focus:ring-primary-600 font-font3 focus:border-primary-600 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
      placeholder="name@company.com"
      required
    />
    
  <SubmitButton loading> Восстановить пароль </SubmitButton> 
</form>
}  