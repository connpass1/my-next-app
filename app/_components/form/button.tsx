import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export const SubmitButton=(props:  any  )=><button
disabled={props.disabled}
type="submit"
className="my-2 bg-primary_dark enabled:hover:bg-primary   col-span-full inline-flex gap-4 justify-center items-center
  w-full rounded px-5 py-2.5 text-center text-white  "
>{props.loading   ?<AiOutlineLoading3Quarters className="animate-spin"/>:props.children} 
</button>