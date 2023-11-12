import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
import Link from "next/link";
 
export default async function X({ params: { uid } }: ColUidParamsType) { 
  const data = await getItem(uid);
  return  <Link href={`/item/${data.parent_uid}`}>{data.parent_name}</Link>
    
  }