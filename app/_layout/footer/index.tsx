import Link from "next/link";

export default function Footer( ) {
  return (
    <footer className={`  col-span-full row-start-[-1] flex flex-col  items-center justify-center  border-t-2   border-slate-500/50 p-4    shadow  child:m-2  hover-a:underline hover-a:underline-offset-2 dark:border-slate-500/10  lg:my-4 lg:flex-row lg:justify-between  lg:child:m-0`}>
      <nav className=" gap-8 ">
        <Link href="/"> home</Link>
        <Link href="/item"> items</Link>
        <Link href="/item/first"> first</Link>
        <Link href="/articles">articles</Link>
      </nav>
      <span className="block text-sm">© 2023. All Rights Reserved. </span>
    </footer>
  );
}
