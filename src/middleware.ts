import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === '/') {
    return NextResponse.next();
  }

  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtected = path.includes('/dashboard');

  const isPublic = path.startsWith('/login') || path.startsWith('/register');

  const isLogin = session != undefined && session != null;

  //isOwner y ptah
  if (isProtected && !isLogin) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isPublic && isLogin) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}
