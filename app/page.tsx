import LogoTicker from "@/components/LogoTicker";
import NetworkSection from "@/components/NetworkSection";
import StakeSection from "@/components/StakeSection";
import ToolsSection from "@/components/ToolsSection";
import DocsSection from "@/components/DocsSection";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="relative z-10 flex flex-col justify-center items-center text-center
        pt-2 pb-8 md:py-24 px-6">
        <p className="text-lg md:text-medium uppercase tracking-[0.4em] font-bold dark:text-slate-200 mb-10">
          Securing the Future of Decentralized Network
        </p>

        <h2 className="text-3xl md:text-3xl font-bold leading-tight">
          <span className="gradient-text">
            Secure your assets with reliable infrastructure
          </span>
        </h2>

        <div className="mt-10 max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold md:text-base leading-relaxed text-slate-800 dark:text-slate-200">
            We are an Independent Validator dedicated to securing decentralized networks,<br/>
            offering transparent validation services and modern tools for the growing crypto community.
          </p>
        </div>

        <div className="mt-12 w-full">
          {/* STAKE SECTION */}
          <StakeSection />
        </div>
      </section>

      {/* LOGO TICKER */}
      <LogoTicker />

      {/* NETWORK */}
      <NetworkSection />

      {/* TOOLS */}
      <ToolsSection />

      {/* DOCS */}
      <DocsSection />
    </>
  );
}
