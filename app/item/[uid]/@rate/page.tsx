import { getItem } from "@/app/api/_data/fetch";
import { ColUidParamsType } from "@/app/api/_data/types";
import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
export const runtime = 'edge';

export default async function X({ params: { uid } }: ColUidParamsType) { 

  const data = await getItem(uid);
  const rate=data.rate
  return<>     
  <div className="grid grid-cols-5  text-orange-600">         
  {[0, 1, 2, 3, 4].map((i) =><React.Fragment key={i}>
      {rate / 2 < i ? <IoIosStarOutline /> : rate / 2 > i ? <IoIosStar /> : <IoIosStarHalf />}
      </React.Fragment>) } 
  </div>
    <span className="font-font1 text-sm">
      {data.quantity?"нет в наличии" : "в наличи: много"}
  </span> 
  </>
  }