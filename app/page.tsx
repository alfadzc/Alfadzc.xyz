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
        className="relative z-10 flex flex-col justify-center items-center text-center pt-2 pb-8 md:py-24 px-6">

        <h2 className="text-4xl md:text-4xl font-bold leading-tight">
          <span className="gradient-text">
      𝑆e𝑐u𝑟e y𝑜u𝑟 𝑎s𝑠e𝑡s w𝑖tℎ 𝑟e𝑙i𝑎b𝑙e i𝑛f𝑟a𝑠t𝑢c𝑡u𝑟e 
          </span>
        </h2>

        <div className="mt-10 max-w-2xl mx-auto px-4">
          <p className="text-sm md:text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
            An Independent Validator dedicated to securing decentralized networks,<br/>
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
