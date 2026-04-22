import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(
    {
      chain: "Bitbadges",
      moniker: "alfadzc",
      operatorAddress: "",
      totalBonded: "202974.11",
      totalBondedUSD: "0.00",
      price: 0,
      validators: 45,
      uptime: 99.9,
      isFallback: true,
      lastUpdated: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    }
  );
}
