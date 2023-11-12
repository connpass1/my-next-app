import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className=" h-screen w-screen top-0 left-0  absolute z-20 grid place-items-center text-primary">
      <CgSpinner className="h-8 w-8 animate-spin justify-center align-middle" />
    </div>
  );
}
