import { NextResponse } from "next/server";

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
const FALLBACK_PRICE_USD = 0.0071;
const FIXED_VALIDATORS = 36;
const TOTAL_MY_VALIDATORS = 8;

const FALLBACK = {
  chain: "Pactus",
  moniker: "alfadzc",
  operatorAddress: PACTUS_VALIDATORS[0],
  totalBonded: "0",
  totalBondedUSD: "0",
  price: FALLBACK_PRICE_USD,
  validators: FIXED_VALIDATORS,
  uptime: 100,
  rank: 21,
  isFallback: true,
  isNonCosmos: true,
  commission: 0.2,
  lastUpdated: new Date().toISOString(),
};

async function fetchLivePrice(): Promise<number> {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=pactus&vs_currencies=usd", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return FALLBACK_PRICE_USD;
    const data = await res.json();
    return data?.pactus?.usd || FALLBACK_PRICE_USD;
  } catch {
    return FALLBACK_PRICE_USD;
  }
}

async function fetchMainValidator() {
  try {
    const res = await fetch(`https://pactusscan.com/api/v1/address/${PACTUS_VALIDATORS[0]}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) {
      const data = await res.json();
      return data?.validator ?? null;
    }
  } catch {}
  return null;
}

export async function GET() {
  try {
    const [livePrice, mainValidator] = await Promise.all([
      fetchLivePrice(),
      fetchMainValidator(),
    ]);

    if (!mainValidator) {
      return NextResponse.json({ ...FALLBACK, price: livePrice }, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const stakePerValidator = Number(mainValidator.stake || 0);
    const totalStakeNano = stakePerValidator * TOTAL_MY_VALIDATORS;

    const totalBonded = totalStakeNano / CHAIN_DIVISOR;
    const totalBondedUSD = totalBonded * livePrice;
    const avgUptime = Number(mainValidator.availability_score ?? 0) * 100;

    return NextResponse.json(
      {
        chain: "Pactus",
        moniker: "alfadzc",
        operatorAddress: PACTUS_VALIDATORS[0],
        totalBonded: totalBonded.toFixed(4),
        totalBondedUSD: parseFloat(totalBondedUSD.toFixed(2)),
        price: livePrice,
        validators: FIXED_VALIDATORS,
        uptime: parseFloat(avgUptime.toFixed(1)),
        rank: 21,
        isFallback: false,
        isNonCosmos: true,
        commission: 0.2,
        lastUpdated: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch {
    return NextResponse.json(FALLBACK, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}
