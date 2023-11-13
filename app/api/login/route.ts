// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from "next/server";
export const runtime = "edge"; 
export async function POST(request: NextRequest) {
  console.log("data");
  const req = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword", {
    method: 'POST',
    body: JSON.stringify({
      email: 'connpass21f2@mailinator.com',
      password: 'ffffff'
    }),
  });
  req.headers.append("Content-Type", 'application/json; charset=utf-8')
  req.headers.append("X-goog-api-key", "" + process.env.NEXT_PUBLIC_FIREBASE_API_KEY  ) 
  return new Response(JSON.stringify({ name: "John Doe" }));
 
}
export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ name: "John ssse" }));
}
