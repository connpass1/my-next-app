"use client";
import { FormEvent, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [result, setResult] = useState(" undefined");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
   // if (!file) return;
    const url = "/api_login";
   // const formData = new FormData();
   // formData.append("file", file);
   // formData.append("fileName", file.name);
   const requestOptions:RequestInit  = { 
    method: 'POST', 
    body: JSON.stringify({ email: "connpass21f2@mailinator.com", password: "ffffff" }) 
};



console.log("hhhhhhhhhhhhh")
   fetch(url,requestOptions).then((res)=>{

if(res.ok) {
 res.json().then(json=>setResult( JSON.stringify(json) ) ) 
}
 
    console.log(res)
   }).catch(e => {
    console.log(e);
    return e;
  });
 
 
  }

  return (
    <main className="grig-cols-1 grid">
      <p>{result}</p>
      <form onSubmit={handleSubmit} className=" grig-cols-1 grid gap-8" >
        <input
          name="file" 
          id="file"
          type="file"
          onChange={(v) => {
            setFile(v.target.files?.[0]);
          }}
        />
           <label htmlFor="input">input label</label> 
        <button type="submit" className="m-4 bg-red-500"> submit</button>
      </form>
 
    </main>
  );
}
