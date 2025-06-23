export default function parseDateString(dateString) {
  if (!dateString) {
    return null;
  }
  const parts = dateString.split("/");
  // Date constructor expects YYYY, MM (0-indexed), DD
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  // Check if the parsed date is valid (e.g., handles "31/02/2025")
  if (
    isNaN(date.getTime()) ||
    date.getDate() !== day ||
    date.getMonth() !== month ||
    date.getFullYear() !== year
  ) {
    console.warn(
      `Invalid date string encountered: ${dateString}. Treating as null.`
    );
    return null;
  }
  return date;
}
