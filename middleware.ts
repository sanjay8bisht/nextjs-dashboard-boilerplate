import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from './utils/common';

export async function middleware(request: NextRequest) {
    console.log(':::::::::::::: middleware', process.env.JWT_SECRET);
    const bearerToken = request.cookies.get('bearer_token')?.value ?? '';
    console.log(bearerToken);
    const response = NextResponse.next();

    if (request.url.includes('login') && (!bearerToken || !(bearerToken && (await verifyJWT(bearerToken))))) {
        return response;
    }

    if (!bearerToken || !(bearerToken && (await verifyJWT(bearerToken)))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (request.url.includes('login')) {
        return NextResponse.redirect(new URL('/home', request.url));
    }
    response.cookies.set('vercel', 'fast');
    response.cookies.set({
        name: 'vercel',
        value: 'fast',
        path: '/',
    });
    return response;
}

export const config = {
    matcher: ['/((?!signup|api|_next/static|_next/image|favicon.ico).*)'],
};
