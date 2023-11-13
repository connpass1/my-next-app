"use client";
import { SubmitButton } from "@/app/_components/form/button";
import { ErrorText, minLength } from "@/app/_components/form/errorMessage";
import { signIn } from "@/app/api/_data/fetch";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { BiCheckboxChecked, BiCheckboxMinus } from "react-icons/bi";
 
export interface IFormInput {
  email: string;
  password: string;
  remember: boolean;
}

export default function Page() {
  const [loading, setLoading] = useState(false);
 // const [result, setResult] = useState(""); 
   const router = useRouter()
  const {
    register,
    handleSubmit,
    setError, 
    clearErrors, 
    formState: { errors },
  } = useForm<IFormInput>();  
  async function  onSubmit (output: IFormInput) {
   // event?.preventDefault();
   clearErrors()
    setLoading(true); 
      const { email, password} = output
     const response = await fetch( "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword", {
      method: 'POST', 
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }); 

    
   try{  
    response.headers.append("Content-Type", 'application/json; charset=utf-8')
    response.headers.append("X-goog-api-key", "" + process.env.NEXT_PUBLIC_FIREBASE_API_KEY  ) 
    let json = await response.json();
    const {email,error}=json
    if(!json)throw new  Error("no json")
    if(error) return  setError("root", { type: "auth", message:   error.message})  
    localStorage.setItem("user",JSON.stringify(json  ));
    router.push("/profile") 
  }
   catch(e){
    const error: ErrorOption = { type: "auth", message: JSON.stringify(e) +"ERR"};
        setError("root", error);
   }  
   finally{ setLoading(false);} 
  }
       
  return (
    <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label   className="block  text-right font-font1 italic"
        htmlFor="email"> Your email  
      </label> 
      <input
        type="text" 
        id="email"
        {...register("email", {
          required: `email - обязательное поле`,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "не валидный email",
          },
        })}
        className={errors?.email?.message===undefined?"input":" err"}
        placeholder="name@company.com"
      /> 
      <ErrorText >{errors?.email?.message}</ErrorText>
      <label
        htmlFor="password"
        className="block text-right font-font1 italic"
      >
        Password
      </label>
      <input
        type="password"
        {...register("password", minLength("password", 6))} 
        id="password"
        placeholder="••••••••"
        className={errors?.password?.message===undefined?"input":" err"}    />
        <ErrorText >{errors?.password?.message}</ErrorText >
      <label className="flex items-center cursor-pointer col-span-2">
        <input
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          className="peer sr-only collapse relative"
        />
          <BiCheckboxChecked className="h-8 w-8 peer-checked:hidden text-primary" />
          <BiCheckboxMinus className="hidden h-8 w-8  peer-checked:block " />
        <span className="px-4 ">Remember me</span>

      </label> 
      <Link
        href="forgot"
        className="self-end justify-self-end text-sm font-medium hover:underline"
      > Forgot password? </Link> 
        <ErrorText>{errors?.root?.message }</ErrorText>  
      <SubmitButton loading={loading}  disabled={errors?.email!==undefined||errors?.password!==undefined}> Sign in </SubmitButton>
    </form>
  );
}
