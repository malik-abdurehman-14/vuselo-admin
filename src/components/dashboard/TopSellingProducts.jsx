export default function TopSellingProducts({ products }) {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_3px_18px_rgba(0,0,0,0.04)]">
      <div>
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Top Selling Products
        </h3>

        <p className="mt-1 text-xs text-[#737b88]">
          Highest volume product models
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {products.map((product, index) => (
          <div key={product.name} className="flex items-center gap-3">
            <div className="flex h-6 w-7 shrink-0 items-center justify-center rounded-md bg-[#e8fbfb] text-[11px] font-medium text-[#2ac9cb]">
              #{index + 1}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#27303b]">
                {product.name}
              </p>

              <p className="mt-0.5 text-[11px] text-[#8a929d]">
                {product.units} units
              </p>
            </div>

            <span className="shrink-0 text-sm font-semibold text-[#27303b]">
              {product.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
