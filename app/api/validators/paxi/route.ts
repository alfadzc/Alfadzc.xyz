import { NextResponse } from "next/server";

export async function GET() {
  try {
    const RPC_URL = "https://rpc.paxi.xyz";

    const validatorRes = await fetch(
      `${RPC_URL}/cosmos/staking/v1beta1/validators?pagination.limit=100`
    );
    const validatorData = await validatorRes.json();

    return NextResponse.json(validatorData, {
      status: 200,
      headers: { "Cache-Control": "public, s-maxage=300" },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
