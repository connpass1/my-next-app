"use client";
import { SubmitButton } from "@/app/_components/form/button";
import { minLength } from "@/app/_components/form/errorMessage";
import { signUp } from "@/app/api/_data/fetch";
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { IFormInput } from "../in/page";
export default function Page() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors, 
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (output: IFormInput) => {
    setLoading(true);  
    signUp(output.email, output.password)
      .then((res) => {
        setLoading(false);
          const error: ErrorOption = { type: "auth", message:JSON.stringify(res) };
        setError("root", error);
      })
      .catch((e) => {
        const error: ErrorOption = { type: "auth", message: JSON.stringify(e) };
        setError("root", error);
        setLoading(false);
      });
  };
  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="email"
        className="mb-2 block text-right text-sm font-medium"
      >
        Your email
      </label>
      <input
        type="text"
        
        id="email"
        {...register("email", minLength("email", 6))}
        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 font-font3 text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
        placeholder="name@company.com"
      />
      <label
        htmlFor="password"
        className="mb-2 block text-right font-font1 text-sm font-medium"
      >
        Password
      </label>
      <input
        type="password"
        {...register("password", minLength("password", 6))} 
        id="password"
        placeholder="••••••••"
        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
      />
 <label
      htmlFor="password1"
      className="mb-2 block text-sm font-medium text-right font-font1"
    >
      Password repeat
    </label>
    <input
      type="password"
      name="password1"
      id="password1"
      placeholder="••••••••"
      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
      required
    /> 
      <SubmitButton loading={loading}> Sign in </SubmitButton>
    </form>
  );
}


 
 