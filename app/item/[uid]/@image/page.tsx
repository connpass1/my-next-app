import { getItem } from "@/app/api/_data/fetch";
import { IItem } from "@/app/api/_data/types";
import { IItemProps } from "../@card/page";
import Gallery from "./gallery";
export const runtime = 'edge';
export default async function X({ params: { uid } }: IItemProps) {
  const data = await getItem(uid);
  const item = data as IItem;
  return <Gallery {...item} />;
}
