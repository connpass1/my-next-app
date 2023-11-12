"use client";
 
import { useState } from "react";
import BlurImage from "./blurImage";
export default function Gallery({images=["/box.png"],title="" }: { images?:string[],title? :string }) {
 
  const [state, setState] = useState(1);
  const [load, setLoad] = useState(false);
 
  return (
    <div className="flex  h-full  w-full flex-col">
      <div className="relative aspect-video  w-full   shrink-0">
        <BlurImage
          src={ images[state]}
          alt={ title}
          sizes="(max-width: 768px) 100vw,
   (max-width: 1024px) 50vw,
    33vw"
          priority
          onLoading={()=>setLoad(true)}
        />
      </div>
      <div className="flex h-full w-full justify-center gap-2 py-4 ">
        { load&&images.length  &&images.map((it, k) => (
          <button
            key={k}
            className={`relative aspect-video h-full focus:ring-4`}
            onClick={() => setState(k)}
          >
            <BlurImage
              src={it}
              alt={ title}
              sizes="(max-width: 768px) 20vw,
                (max-width: 1024px) 10vw,
                 5vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
