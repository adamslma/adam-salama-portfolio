import { NextRequest, NextResponse } from "next/server";

function getPreferredLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return "en";
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, qualityValue] = entry.trim().split(";q=");
      return {
        tag: tag.toLowerCase(),
        quality: qualityValue ? Number(qualityValue) : 1,
      };
    })
    .filter(({ tag, quality }) => tag && !Number.isNaN(quality))
    .sort((a, b) => b.quality - a.quality);

  return languages[0]?.tag.startsWith("fr") ? "fr" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
