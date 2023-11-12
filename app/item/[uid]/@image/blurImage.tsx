"use client";
import { useEffect, useState } from "react";
export default function BlurImage({
  src,
  alt = "",
  priority = false,
    sizes,
    onLoading 
}: {
  src: string;
  alt?: string;
  priority?: boolean;
        sizes: string;
        onLoading?:    () => void |undefined
}) {
  const [load, setLoad] = useState(false);
  useEffect(()=> { setLoad(false)},[ src])
    function onLoadingComplete(img: HTMLImageElement): void {
        setLoad(true)
        if(onLoading!==undefined)onLoading()
    }
    // eslint-disable-next-line @next/next/no-img-element
    return  <img  src={src}  alt={alt} style={{objectFit:"cover"}}/>
   
    //    
  //  return (
  //   <NextImage
  //     src={src}
  //     alt={alt}
  //     layout="fill"
  //         sizes={sizes}
  //         className={`bg-slate-400 transition duration-200 ${
  //           load ? 'grayscale-100 bg-slate-400 blur-0' : 'grayscale-20 blur-2xl'
  //         }`}
  //     priority={priority}
  //    
  //     placeholder="blur"
  //     blurDataURL="/blur.png"
  //     onLoadingComplete={ onLoadingComplete}
  //   />
  // );
}
