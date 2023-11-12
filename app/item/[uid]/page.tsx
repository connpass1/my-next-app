 
import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
import { Metadata, ResolvingMetadata } from "next";
import { IItem } from "../../api/_data/types";
 
 
export async function generateMetadata(
  { params: { uid } }: ColUidParamsType,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const item = await getItem(uid);
  const meta: Metadata = {};
  meta.title = item?.title ?? "404";
  meta.description = item?.meta_description ?? "";
  if (item?.images?.length) meta.openGraph = { images: item.images };
  return meta;
}
export default async function X({ params: { uid } }: ColUidParamsType) {
  const data = await getItem(uid);
  
  const item: IItem = data as IItem;
  return null
}
