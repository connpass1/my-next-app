import { Metadata } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} | login`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

export default function RootLayout({
  switchLink: switchLink,
  header,
  loginForm,
}: {
  loginForm: React.ReactNode;
  switchLink: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
  
      <div className="grid min-h-[240px] min-w-[240px]  gap-8 md:rounded-lg bg-white p-8 shadow dark:border dark:border-slate-800/50 dark:bg-slate-900  sm:max-w-md md:mt-0">
        {header} 
       {switchLink}
       {loginForm}
        <div className="col-span-full inline-grid grid-cols-[1fr_min-content_1fr] place-items-center gap-4 ">
          <div className="h-[2px] w-full dark:bg-slate-700 bg-slate-500" />
          or <div className="h-[2px] w-full  dark:bg-slate-700 bg-slate-500" />
        </div>
      
        <Link
          className="col-span-full inline-flex items-center justify-center gap-2 text-lg text-slate-500 hover:text-primary"
          href="/login/google"
        >
          <FcGoogle /> Sign in with Google
        </Link>
      </div>
 
  );
}
