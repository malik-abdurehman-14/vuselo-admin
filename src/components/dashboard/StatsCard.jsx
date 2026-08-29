import { TrendingUp } from "lucide-react";

export default function StatsCard({
  title,
  value,
  change,
  description,
  icon: Icon,
}) {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-wide text-[#737b88]">
            {title}
          </p>

          <h3 className="mt-2 text-[25px] font-semibold tracking-tight text-[#111827]">
            {value}
          </h3>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#dffafa] text-[#29c9cc]">
          <Icon size={21} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs">
        <TrendingUp size={15} className="text-emerald-500" />

        <span className="font-medium text-emerald-500">↑ {change}</span>

        <span className="text-[#737b88]">{description}</span>
      </div>
    </div>
  );
}
