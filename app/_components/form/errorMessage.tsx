import { ChildrenType } from "@/app/layout";
 

export const maxLength = (field: string, num: number) => {
  return { maxLength: { value: num, message: `${field} - максимум ${num} знаков` } } as any
}
export const required = (field: string) => {
  return { required: `${field} - обязательное поле` } as any
}
export const minLength = (field: string, num: number) => {
  return {
      required: `${field} - обязательное поле`,
      minLength: {
          value: num,
          message: `${field} - минимум ${num} знаков`
      }
  } as any
}
  
export function ErrorText({children }: ChildrenType) {
  if (children === undefined) return null;
  return <span className="col-span-2 col-end-[-1] text-sm text-error"> {children} </span>;
} 
 