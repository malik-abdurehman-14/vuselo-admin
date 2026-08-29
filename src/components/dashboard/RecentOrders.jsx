import { ArrowUpRight } from "lucide-react";

const orders = [
  {
    id: "#ORD-4521",
    product: "VELO Spearmint Slim 6mg (×10)",
    status: "Delivered",
    amount: "£42.50",
    items: 10,
  },
  {
    id: "#ORD-4520",
    product: "Vuse Go 800 Berry Blend",
    status: "Processing",
    amount: "£42.50",
    items: 1,
  },
  {
    id: "#ORD-4519",
    product: "VELO Ice Cool Mini 4mg (×20)",
    status: "Shipped",
    amount: "£42.50",
    items: 20,
  },
  {
    id: "#ORD-4518",
    product: "Vuse ePod 2 Starter Kit",
    status: "Processing",
    amount: "£42.50",
    items: 1,
  },
  {
    id: "#ORD-4517",
    product: "Mixed Bundle - Device + Pouches",
    status: "Delivered",
    amount: "£42.50",
    items: 3,
  },
];

const statusStyles = {
  Delivered: "bg-emerald-50 text-emerald-600",
  Processing: "bg-amber-50 text-amber-600",
  Shipped: "bg-blue-50 text-blue-600",
  Returned: "bg-red-50 text-red-500",
};

export default function RecentOrders() {
  return (
    <div className="rounded-[20px] bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.04)] md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-[#111827]">
          Recent Orders
        </h3>

        <button className="flex items-center gap-1 text-xs font-medium text-[#737b88] transition hover:text-[#111827]">
          View all
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="bg-[#eef2ff]">
              <th className="rounded-l-xl px-4 py-3 text-left text-xs font-medium text-[#687386]">
                Order ID
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-[#687386]">
                Product
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-[#687386]">
                Status
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-[#687386]">
                Amount
              </th>

              <th className="rounded-r-xl px-4 py-3 text-left text-xs font-medium text-[#687386]">
                Items
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-[#edf0f3] last:border-0"
              >
                <td className="px-4 py-4 text-xs font-medium text-[#27303b]">
                  {order.id}
                </td>

                <td className="px-4 py-4 text-xs text-[#687386]">
                  {order.product}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-xs font-semibold text-emerald-500">
                  {order.amount}
                </td>

                <td className="px-4 py-4 text-xs text-[#687386]">
                  {order.items}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
