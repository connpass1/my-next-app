import { getItem } from "@/app/api/_data/fetch";
import { IItem } from "@/app/api/_data/types";
import dynamic from "next/dynamic";

export type IItemProps = {
  params: { uid: string };
};
const Add = dynamic(() => import("./add"), {
  loading: () => <div>Loading...</div>,
});
export const runtime = 'edge';
export default async function X({ params: { uid } }: IItemProps) {
  const data = await getItem(uid); 
  return (
    <>
      <span className="items-end text-7xl  text-primary_dark font-font1 after:text-3xl after:px-l after:content-['р.'] dark:text-primary_light">
        {data.price} 
      </span>
      {data.quantity !== 0 ? (
        <span
          className="self-center rounded-sm border-2 border-current 
           bg-error/10  p-4 text-2xl text-error_dark dark:text-error_light" 
        > 
          нет в наличии
        </span>
      ) : (
        <Add item={data as IItem} />
      )}
    </>
  );
}
