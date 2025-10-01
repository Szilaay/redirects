import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface RedirectProps {
  from: string;
  to: string;
}

const redirects: RedirectProps[] = [
  {
    from: "tacsipulcsi.hu",
    to: "https://www.garmondkennel.hu/",
  },
];

export function middleware(request: NextRequest) {
  const { host } = request.nextUrl;
  const redirect = redirects.find((r) => host.includes(r.from));

  return NextResponse.redirect(
    redirect?.to || "https://www.instagram.com/szilard.szucs/",
  );
}
