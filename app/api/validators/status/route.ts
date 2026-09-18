import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      "Monolythium v1": "offline",
      "CNHO Stable": "offline",
      "Epix": "offline",
    },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
