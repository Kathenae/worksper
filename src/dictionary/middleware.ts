import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from ".";

function getPreferedLocale(request: Request) {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) return { lang: defaultLocale, country: null };

    // Extract the first language code (e.g. "en-US,en;q=0.9" → "en-US")
    const [firstLang] = acceptLanguage.split(",")[0].trim().split(";");
    if (firstLang == null || firstLang.length == 0) {
        return { lang: defaultLocale, country: null };
    }
    const [lang, country] = firstLang.split('-');

    return {
        lang: locales.includes(lang) ? lang : defaultLocale,
        country,
    }
}

export default function matchLocale(request: NextRequest) {
    const { pathname: p } = request.nextUrl
    const pathSegments = p.split('/').slice(1)
    const locale = pathSegments[0]
    const pathnameHasValidLocale = locales.includes(locale)

    if (pathnameHasValidLocale == false) {
        const { lang } = getPreferedLocale(request);
        pathSegments[0] = lang
        const pathname = pathSegments.join('/')
        return NextResponse.redirect(
            new URL(
                `${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            ),
        )
    }
}