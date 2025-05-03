import { ArrowDown, ArrowUp } from "lucide-react";

export default function SummaryCard({
  current,
  previous,
}: {
  title: string;
  current: number;
  previous: number;
}) {
  const diff = current - previous;
  const isUp = diff > 0;
  const color = isUp ? "text-green-500" : "text-red-500";
  const Icon = isUp ? ArrowUp : ArrowDown;

  return (
    <div className={`flex items-center font-bold ${color}`}>
      <Icon className="w-4 h-4"></Icon>
      <span className="text-sm">{Math.abs(diff)}</span>
    </div>
  );
}
