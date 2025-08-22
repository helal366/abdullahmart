import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookie=request.cookies.get('nextjs-token');
    console.log(currentCookie?.value)
    const dummyUserData={
        role: "Admin",
        email: 'test@admin.com'
    }
    let isProductPage=request?.nextUrl?.pathname?.startsWith('/products');
    let isAdmin=dummyUserData?.role==='Admin';
    console.log("Pathname: ", isProductPage)
    if(isProductPage && !isAdmin){
        return NextResponse.redirect(new URL('/login', request.url))
        // return NextResponse.rewrite(new URL('/login', request.url))
    }
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }