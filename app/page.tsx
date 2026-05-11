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
        pt-2 pb-8 md:py-24 px-6">
        <p className="text-lg md:text-medium uppercase tracking-[0.4em] font-bold dark:text-slate-200 mb-10">
         𝖲𝖾𝖼𝗎𝗋𝗂𝗇𝗀 𝗍𝗁𝖾 𝖥𝗎𝗍𝗎𝗋𝖾 𝖣𝖾𝖼𝖾𝗇𝗍𝖺𝗅𝗂𝗓𝖾𝖽 𝖭𝖾𝗍𝗐𝗈𝗋𝗄
        </p>

        <h2 className="text-3xl md:text-3xl font-bold leading-tight">
          <span className="gradient-text">
           𝐒𝐞𝐜𝐮𝐫𝐞 𝐲𝐨𝐮𝐫 𝐚𝐬𝐬𝐞𝐭𝐬 𝐰𝐢𝐭𝐡 𝐫𝐞𝐥𝐢𝐚𝐛𝐥𝐞 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
          </span>
        </h2>
                                                           
        <div className="mt-10 max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold md:text-base leading-relaxed text-slate-800 dark:text-slate-200">
            We are Independent Validator dedicated to securing decentralized network<br/>
            offering transparent validation service and modern tool the growing crypto community. 
          </p>
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

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
