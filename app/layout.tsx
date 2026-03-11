import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";
import LoadingWrapper from "@/components/LoadingWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}

                // Reset scroll ke HOME saat refresh
                if (history.scrollRestoration) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
              })();
            `,
          }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden selection:bg-blue-500/30">
        <LoadingWrapper>
          {/* Light mode: opacity dinaikkan biar garis/partikel terlihat tapi tetap soft */}
          <div className="fixed inset-0 z-0 opacity-50 dark:opacity-100">
            <ParticlesBackground />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </LoadingWrapper>
      </body>
    </html>
  );
}
