import { ChildrenType } from "@/app/layout";

export default function RootLayout({ children }: ChildrenType) {
  return (
    <h1 className="text-xl font-font2   leading-tight tracking-tight  dark:text-white md:text-2xl">
      {children}
    </h1>
  );
}
