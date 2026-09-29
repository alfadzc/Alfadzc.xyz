import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 8 Validator Address Pactus alfadzc
const PACTUS_VALIDATORS = [
  "pc1pkq3wu3tkcjqw2qv7flmuhpczfsx68f5eaasn5z",
  "pc1pg4ytdvmkkzujnuqg35vx6qsx2fefdzt3pp3x29",
  "pc1pspqqhem9f6vmjg5cvdxceuaqydjjwrxlphdsde",
  "pc1pn62remqjwu305z0y4hhdxd23hyg8jwq5s487cc",
  "pc1pclyly0uvqvkl9wl54r282g2hmrkucc30rn7jqx",
  "pc1psf7mw93xdmqzy042grtgcj88t4pmu2rcthm4gd",
  "pc1pktxnyk09nykkkkru9y32dy9jkckekje2apd8g7",
  "pc1psgjz0r46a4dnz75zu9qw3le9x7susp8jegjqpt",
];

const CHAIN_DIVISOR = 1_000_000_000;
const PAC_PRICE_USD = 0.01072077;

const FALLBACK = {
  chain: "Pactus",
  moniker: "alfadzc",
  operatorAddress: PACTUS_VALIDATORS[0],
  totalBonded: "0",
  totalBondedUSD: 0,
  price: PAC_PRICE_USD,
  validators: 0,
  uptime: 100,
  isFallback: true,
  isNonCosmos: true,
  commission: 0.2,
  lastUpdated: new Date().toISOString(),
};

async function fetchValidator(address: string) {
  try {
    const res = await fetch(
      `https://pactusscan.com/api/v1/address/${address}`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.validator ?? null;
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const validatorResults = await Promise.all(
      PACTUS_VALIDATORS.map((addr) => fetchValidator(addr))
    );

    let totalStakeNano = 0;
    let totalAvailability = 0;
    let validCount = 0;

    validatorResults.forEach((validator) => {
      if (validator) {
        totalStakeNano += Number(validator.stake || 0);
        totalAvailability += Number(validator.availability_score ?? 0) * 100;
        validCount++;
      }
    });

    if (validCount === 0) {
      return NextResponse.json(FALLBACK, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const totalBonded = totalStakeNano / CHAIN_DIVISOR;
    const totalBondedUSD = totalBonded * PAC_PRICE_USD;
    const avgUptime = totalAvailability / validCount;

    return NextResponse.json(
      {
        chain: "Pactus",
        moniker: "alfadzc",
        operatorAddress: PACTUS_VALIDATORS[0],
        totalBonded: totalBonded.toFixed(4),
        totalBondedUSD: parseFloat(totalBondedUSD.toFixed(2)),
        price: PAC_PRICE_USD,
        validators: validCount,
        uptime: parseFloat(avgUptime.toFixed(1)),
        isFallback: false,
        isNonCosmos: true,
        commission: 0.2,
        lastUpdated: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(FALLBACK, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}
