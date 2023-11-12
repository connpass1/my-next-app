import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
export const runtime = 'edge';
export default async function X({ params: { uid } }: ColUidParamsType) { 
  const data = await getItem(uid);
  return <>{data.title }</>
    
  }