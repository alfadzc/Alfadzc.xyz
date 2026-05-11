export default function DocsSection() {
  return (
    <section
      id="docs"
      className="flex flex-col justify-center items-center text-center
      py-16 md:py-24 px-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-[#ff7b00] flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧
      </h3>
      <p className="text-gray-900 dark:text-gray-100 max-w-2xl mx-auto mb-8">
        Access our guides and technical resources to get started with our
        validator services, setup tutorials, and API references.
      </p>
      <a
        href="/coming-soon"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 rounded-2xl
        bg-yellow-400 text-black font-bold
        shadow-lg shadow-yellow-500/40
        hover:bg-yellow-500 hover:scale-105
        transition"
      >
      𝐑𝐞𝐚𝐝 𝐃𝐨𝐜𝐬 →
      </a>
    </section>
  );
}
