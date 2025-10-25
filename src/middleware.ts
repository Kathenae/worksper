import { NextRequest } from "next/server";
import matchLocale from "./dictionary/middleware";

export function middleware(request: NextRequest) {
    return matchLocale(request)
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        "/((?!api|images|_next/static|_next/image|favicon.ico).*)",

    ],
};