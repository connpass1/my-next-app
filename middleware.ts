 

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
     
    if (request.nextUrl.pathname.startsWith('/api_login')) { 
          // You can also set request headers in NextResponse.rewrite
          const response =   NextResponse.rewrite(new URL('http://127.0.0.1:8787', request.url)) 
          response.headers.set( 'Content-Type', 'application/json')
          return response

      }

}
 
// See "Matching Paths" below to learn more
 