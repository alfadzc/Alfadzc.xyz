type Status = "mainnet" | "testnet" | "active" | "inactive";

export default function StatusBadge({ status }: { status: Status }) {
  const base =
    "inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide";

  const styles: Record<Status, string> = {
    mainnet:
      "bg-zinc-800 text-white dark:bg-zinc-700",
    testnet:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    active:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    inactive:
      "bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  };

  return (
    <span className={`${base} ${styles[status]}`}>
      {status.toUpperCase()}
    </span>
  );
}
