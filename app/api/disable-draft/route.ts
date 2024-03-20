// ./app/api/disable-draft/route.ts

import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  draftMode().disable();
  console.log({ msg: "disable-draft-route" });

  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
}
