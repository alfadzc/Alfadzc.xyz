"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative w-full border-t border-slate-300 dark:border-white/10 bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-md z-50 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 pb-6 md:pt-8 md:pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* BRAND + DESCRIPTION + SOCIAL */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Logo + Brand */}
            <div className="flex items-center gap-2">
              <img
                src="/favicon.ico"
                alt="Alfadzc"
                className="w-8 h-8 rounded-full"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white">
                Alfadzc.xyz
              </span>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Professional validator with enterprise-grade reliability.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Stake with confidence.
              </p>
            </div>

            {/* SOCIAL ICON */}
            <div className="flex items-center gap-8 mt-1">

              {/* GITHUB */}
              <a href="https://github.com/alfadzc" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-400 text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.83 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* X / TWITTER */}
              <a href="https://x.com/lfadzcc" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </a>

              {/* DISCORD */}
              <a href="https://discord.com/users/940270226904318043" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.125-.094.25-.19.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>

              {/* TELEGRAM */}
              <a href="https://t.me/alfadzc" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0088cc] hover:bg-[#0077bb] text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>

            {/* FEEDBACK & SUPPORT BUTTON → ke /contact (form) */}
            <a href="/contact"
             className="mt-3 group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-300/70 dark:border-slate-700 bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-900/60 dark:to-slate-800/60 hover:from-slate-200/90 hover:to-slate-300/90 dark:hover:from-slate-800/80 dark:hover:to-slate-700/80 transition-all duration-300 max-w-xs hover:scale-[1.02] hover:shadow-md">
             <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
           </svg>
         </div>
           <div className="text-left">
          <p className="text-sm font-bold text-[#ff7b00]">Feedback & Support</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">Report bugs or suggest features</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400 group-hover:text-[#ff7b00] group-hover:translate-x-1 transition-all ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
       </svg>
       </a>
          </div>

          {/* MAIN SITE */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-4">
              Main Site
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#home" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Home</a></li>
              <li><a href="/#ecosystem" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Network</a></li>
              <li><a href="/coming-soon" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Docs</a></li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-4">
              Tools
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://explorer.alfadzc.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Explorer</a></li>
              <li><a href="/tools/validator-monitor" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Monitoring</a></li>
              <li><a href="/tools/analytics" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Analytics</a></li>
              <li><a href="mailto:contact@alfadzc.xyz" className="text-gray-700 dark:text-gray-300 hover:text-[#ff7b00] transition">Contact us</a></li>
            </ul>
          </div>

        </div>
        {/* END MAIN GRID */}

        {/* BOTTOM BAR - COPYRIGHT CENTER (TIPIS) */}
        <div className="border-t border-gray-400/60 dark:border-gray-700 mt-6 pt-3 text-center">
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Copyright © {currentYear} Alfadzc.xyz. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
