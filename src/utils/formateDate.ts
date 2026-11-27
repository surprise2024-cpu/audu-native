export function formatDate(value: string): string {
  const date = new Date(value);

  const formatetedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${formatetedDate}-${formattedTime}`;
}
