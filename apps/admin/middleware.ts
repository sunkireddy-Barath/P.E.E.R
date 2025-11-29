import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public paths that don't require authentication
const publicPaths = ['/api/auth'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public paths
    if (publicPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // For now, allow all requests (authentication can be added later)
    // For now, allow all requests (authentication can be added later)
    // TODO: Implement proper authentication check
    const token = request.cookies.get('next-auth.session-token');
    if (!token && pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/:path*',
        '/dashboard/:path*',
        '/students/:path*',
        '/performance/:path*',
        '/assignments/:path*',
    ],
};
