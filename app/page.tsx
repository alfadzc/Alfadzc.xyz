import NetworkSection from "@/components/NetworkSection";
import DocsSection from "@/components/DocsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import LogoTicker from "@/components/LogoTicker";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="relative z-10 flex flex-col justify-center items-center text-center
        pt-2 pb-8 md:py-24 px-6"
      >
        <p className="text-lg md:text-medium uppercase tracking-[0.4em] font-bold dark:text-gray-300 mb-10">
         𝐒𝐞𝐜𝐮𝐫𝐢𝐧𝐠 𝐭𝐡𝐞 𝐅𝐮𝐭𝐮𝐫𝐞 𝐨𝐟 𝐃𝐞𝐜𝐞𝐧𝐭𝐫𝐚𝐥𝐢𝐳𝐞𝐝 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬
        </p>

        <h2 className="text-3xl md:text-3xl font-bold leading-tight">
          <span className="gradient-text">
           𝐒𝐞𝐜𝐮𝐫𝐞 𝐲𝐨𝐮𝐫 𝐚𝐬𝐬𝐞𝐭𝐬 𝐰𝐢𝐭𝐡 𝐫𝐞𝐥𝐢𝐚𝐛𝐥𝐞 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
          </span>
        </h2>
                                                           
        <div className="mt-10 max-w-2xl mx-auto px-4">
          <p className="text-base md:text-base font-medium text-slate-900 dark:text-gray-100">
            We are an Independent Validator dedicated to securing decentralized networks,
           <span className="text-base md:text-base font-medium text-slate-800 dark:text-gray-100">
            offering transparent validation services and modern tools for the growing crypto community.
           </span>
         </p>
       </div>
      </section>

      {/* LOGO TICKER */}
      <LogoTicker />

      {/* NETWORK */}
      <NetworkSection />

      {/* DOCS */}
      <DocsSection />

      {/* TOOLS */}
      <ToolsSection />

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
