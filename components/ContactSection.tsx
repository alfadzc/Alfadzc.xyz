export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center
      py-16 md:py-24 px-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-[#ff7b00]">
      𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐔𝐬
      </h3>

      <p className="text-gray-900 dark:text-gray-200 mb-4">
        Have questions or want to collaborate? Reach out to us:
      </p>

      {/* Email */}
      <p className="text-gray-900 dark:text-gray-200 mb-6">
        📩 𝐄𝐦𝐚𝐢𝐥
        :{" "}
        <a
        href="mailto:contact@alfadzc.xyz"
        className="text-[#3d2e00] dark:text-[#FFD700] font-semibold"
        >
          𝚌𝚘𝚗𝚝𝚊𝚌𝚝@𝚊𝚕𝚏𝚊𝚍𝚣𝚌.𝚡𝚢𝚣
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4">
        {/* 𝐗 */}
        <a
          href="https://x.com/lfadzcc"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="flex items-center justify-center w-11 h-11 rounded-full
          bg-blue-500 hover:bg-blue-600 text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
         </svg>
        </a>

        {/* 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 */}
        <a
          href="https://discord.com/users/940270226904318043"
          target="_blank"
          rel="noopener noreferrer"
          title="Discord"
          className="flex items-center justify-center w-11 h-11 rounded-full
          bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 55" fill="white" className="w-6 h-6">
          <path d="M60.104 4.552A58.725 58.725 0 0046.882.5a41.795 41.795 0 00-1.995 4.153 56.317 56.317 0 00-16.771 0A41.79 41.79 0 0025.122.5 58.73 58.73 0 0011.9 4.552C4.474 18.28 1.2 31.744 1.956 45.1a59.65 59.65 0 0017.874 9.09 43.245 43.245 0 003.793-6.204 36.05 36.05 0 01-5.887-2.89c.494-.36.983-.735 1.464-1.121 11.62 5.37 24.26 5.37 35.79 0 .48.386.97.761 1.465 1.12a36.04 36.04 0 01-5.888 2.89 43.254 43.254 0 003.793 6.204 59.64 59.64 0 0017.874-9.09c.756-13.357-2.518-26.822-9.944-40.548z" />
          </svg>
        </a>

        {/* 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 */}
        <a
          href="https://t.me/alfadzc"
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
          className="flex items-center justify-center w-11 h-11 rounded-full
          bg-blue-400 hover:bg-blue-500 text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="white" className="w-6 h-6">
          <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm55.8 84.5l-20.8 97c-1.6 6-5.8 7.5-11.7 4.7l-32.4-23.9-15.7 15.1c-1.7 1.7-3.1 3.1-6.3 3.1l2.2-31.5 57.5-52.1c2.5-2.2-0.6-3.5-3.9-1.3l-71 44.8-30.6-9.6c-6.6-2.1-6.7-6.6 1.4-9.7l119.1-46.1c5.5-2.1 10.4 1.3 8.8 9.5z" />
         </svg>
        </a>

        {/* 𝐆𝐢𝐭𝐇𝐮𝐛 */}
        <a
          href="https://github.com/alfadzc"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="flex items-center justify-center w-11 h-11 rounded-full
          bg-gray-300 dark:bg-gray-700
          hover:bg-gray-400 dark:hover:bg-gray-600
          text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.403c1.02.005 2.045.138 3 .403 2.288-1.552 3.293-1.23 3.293-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
         </svg>
       </a>
     </div>
   </section>
 );
}
