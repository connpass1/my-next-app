import { IoIosStarOutline } from "react-icons/io";
import LoadingText from "../@title/loading";
export default function X() {
  return<>     
  <div className="grid grid-cols-5  text-gray-500/20 animate-pulse">         
  {[0, 1, 2, 3, 4].map((i) =>  <IoIosStarOutline key={i}/>  ) } 
      
  </div>
    < LoadingText/> 
  </>
}
