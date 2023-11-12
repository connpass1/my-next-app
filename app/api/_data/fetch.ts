export async function getItem(slug: string ) { 
    const res = await fetch(`https://summer-hat-efa6.connpass.workers.dev?id=${slug}` ) 
    if (!res.ok)    return false
    return res.json()
}
export async function signIn(email: string ,password: string  ) {  
  const requestOptions:RequestInit  = { 
    method: 'POST',  
    body: JSON.stringify({ email: email, password: password }) 
};
return await fetch("/api_login",  requestOptions)
  
}  
 
export async function signUp(email: string ,password: string  ) { 
  return await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
    method: 'POST', 
   headers: {
     'Content-Type': 'application/json' }, 
    body: JSON.stringify({ email: email, password: password }), 
      cache: 'no-store'  
  })  
 
}  
 
export async function getUserData(idToken: string  ) { 
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'  }, 
    body: JSON.stringify({ 
idToken:idToken
    }),
  }) 
  if (!res.ok) {
    return {
      status: res.statusText, 
    }
  }  
  return res.json()
}  


 