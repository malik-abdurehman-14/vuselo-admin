import { TrendingDown, TrendingUp } from "lucide-react";

export default function StatsCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  variant = "success",
}) {
  const variants = {
    success: {
      iconBg: "bg-[#e5faf4]",
      iconColor: "text-[#21c978]",
      textColor: "text-[#21c978]",
      trend: "up",
    },

    warning: {
      iconBg: "bg-[#fff9e9]",
      iconColor: "text-[#f5a300]",
      textColor: "text-[#f5a300]",
      trend: "down",
    },

    danger: {
      iconBg: "bg-[#fff0f1]",
      iconColor: "text-[#f04451]",
      textColor: "text-[#f04451]",
      trend: "down",
    },
  };

  const currentVariant = variants[variant] || variants.success;

  const TrendIcon = currentVariant.trend === "down" ? TrendingDown : TrendingUp;

  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-wide text-[#737b88]">
            {title}
          </p>

          <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-[#111827]">
            {value}
          </h3>
        </div>

        {Icon && (
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${currentVariant.iconBg} ${currentVariant.iconColor}`}
          >
            <Icon size={19} strokeWidth={2} />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs">
        <TrendIcon size={15} className={currentVariant.textColor} />

        <span className={`font-medium ${currentVariant.textColor}`}>
          {change}
        </span>

        <span className="text-[#737b88]">{description}</span>
      </div>
    </div>
  );
}
