export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="flex flex-col justify-center items-center text-center
      py-16 md:py-24 px-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-[#ff7b00]">
        𝐎𝐮𝐫 𝐓𝐨𝐨𝐥𝐬
      </h3>

      <p className="text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">
        Explore monitoring dashboards and blockchain analytics tools built for the community.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl">
        {/* Tool Card */}
        <div
          className="bg-blue-100/80 dark:bg-gray-800/80 backdrop-blur
          p-6 rounded-2xl shadow-lg w-full md:w-1/3
          transition-colors"
        >
          <h4 className="text-xl font-semibold mb-2 text-[#ff7b00]">
            𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫
          </h4>
          <p className="text-gray-900 dark:text-gray-100">
            Track node uptime, performance, and reliability in real time.
          </p>
        </div>

        {/* Tool Card */}
        <div
          className="bg-blue-100/80 dark:bg-gray-800/80 backdrop-blur
          p-6 rounded-2xl shadow-lg w-full md:w-1/3
          transition-colors"
        >
          <h4 className="text-xl font-semibold mb-2 text-[#ff7b00]">
            𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝
          </h4>
          <p className="text-gray-900 dark:text-gray-100">
            Visualize blockchain metrics with modern and intuitive charts.
          </p>
        </div>
      </div>
    </section>
  );
}
