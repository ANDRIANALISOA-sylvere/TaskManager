"use client";
type DateFormatterProps = {
  date: string;
};

export default function DateFormatter({ date }: DateFormatterProps) {
  const formatDate = (input: string) => {
    const parseDate = new Date(input);
    const month = parseDate.toLocaleDateString("en-US", {
      month: "short",
    });
    const day = parseDate.getDate();
    const year = parseDate.getFullYear();

    return `${month} ${day} ${year}`;
  };

  return <span>{formatDate(date)}</span>;
}
