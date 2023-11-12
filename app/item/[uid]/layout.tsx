import Link from "next/link";

export default function Layout({
  breadcrumb,
  title,
  image,
  card,
  description,
  rate 
}: {
  breadcrumb: React.ReactNode;
  title: React.ReactNode;
  image: React.ReactNode;
  card: React.ReactNode;
  description: React.ReactNode;
    rate: React.ReactNode;
   
}) {
  return (
    <> 
      <nav className="col-span-full gap-2
      items-center justify-end  max-2xl:pr-4 "> 
        <Link href="/"> home </Link> &gt;
        <Link href="/items">items </Link> &gt;
        {breadcrumb}
      </nav>
      <h1 className="col-span-full h-12  text-xl first-letter:uppercase max-lg:pl-4 font-font2">
         {title}
      </h1>
      <div className="col-span-full  flex h-12 items-center justify-between text-2xl  max-2xl:pr-4 max-lg:pl-4">
        {rate}
      </div> 
      <div className="col-span-full  aspect-gallery    md:col-span-4 bg-slate-100     dark:bg-slate-900 flex flex-col">
        {image}
      </div> 
      <div className="col-span-full  md:col-span-2 flex flex-col justify-center gap-8 child:inline-flex  bg-slate-100 h-full
       dark:bg-slate-900/50 shadow-lg
       child:rounded  child:justify-center   py-8  font-font3 "  >{card}</div>
      <span className="col-span-full max-2xl:pr-4 max-lg:pl-4 xl:py-4 font-font1">{description}</span>
     
    </> 
  );
}
