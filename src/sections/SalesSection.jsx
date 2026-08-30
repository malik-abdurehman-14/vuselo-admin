"use client";

import { ShoppingCart, Package, Users, Wallet } from "lucide-react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsCard from "@/components/admin/StatsCard";
import AreaChartCard from "@/components/admin/AreaChartCard";
import DonutChartCard from "@/components/admin/DonutChartCard";
import DataTable from "@/components/admin/DataTable";
import TopSellingProducts from "@/components/dashboard/TopSellingProducts";

const stats = [
  {
    title: "Today's Sales",
    value: "£4,285",
    change: "22%",
    description: "from yesterday",
    icon: ShoppingCart,
  },
  {
    title: "Weekly Sales",
    value: "£28,740",
    change: "14%",
    description: "from last week",
    icon: Package,
  },
  {
    title: "Monthly Sales",
    value: "£127,450",
    change: "15%",
    description: "from last month",
    icon: Users,
  },
  {
    title: "Average Order Value",
    value: "£34.60",
    change: "8%",
    description: "from last month",
    icon: Wallet,
  },
];

const salesData = [
  { label: "Aug 1", value: 2300 },
  { label: "Aug 2", value: 2850 },
  { label: "Aug 3", value: 3150 },
  { label: "Aug 4", value: 3120 },
  { label: "Aug 5", value: 3250 },
  { label: "Aug 6", value: 3400 },
  { label: "Aug 7", value: 2850 },
  { label: "Aug 8", value: 1200 },
  { label: "Aug 9", value: 1050 },
  { label: "Aug 10", value: 2200 },
  { label: "Aug 11", value: 1300 },
  { label: "Aug 12", value: 2100 },
  { label: "Aug 13", value: 3900 },
  { label: "Aug 14", value: 3700 },
  { label: "Aug 15", value: 3450 },
  { label: "Aug 16", value: 3500 },
  { label: "Aug 17", value: 1850 },
  { label: "Aug 18", value: 2200 },
  { label: "Aug 19", value: 1300 },
  { label: "Aug 20", value: 1700 },
  { label: "Aug 21", value: 3650 },
  { label: "Aug 22", value: 2500 },
  { label: "Aug 23", value: 1800 },
  { label: "Aug 24", value: 1450 },
  { label: "Aug 25", value: 1500 },
  { label: "Aug 26", value: 3650 },
  { label: "Aug 27", value: 2800 },
];

const salesByChannel = [
  {
    name: "Online Store",
    value: 82843,
    percentage: 65,
  },
  {
    name: "Wholesale",
    value: 31863,
    percentage: 25,
  },
  {
    name: "Subscription",
    value: 12745,
    percentage: 10,
  },
];

const topProducts = [
  {
    name: "VELO Spearmint Slim 6mg",
    units: 342,
    amount: "£1,710",
  },
  {
    name: "Vuse Go 800 Berry Blend",
    units: 287,
    amount: "£2,580",
  },
  {
    name: "VELO Ice Cool Mini 4mg",
    units: 256,
    amount: "£1,024",
  },
  {
    name: "Vuse ePod 2 Starter Kit",
    units: 198,
    amount: "£3,960",
  },
  {
    name: "VELO Freeze Max",
    units: 176,
    amount: "£880",
  },
];

const recentSales = [
  {
    id: "#TXN-8842",
    customer: "James Wilson",
    product: "VELO Spearmint ×5",
    date: "25 Aug 2026",
    amount: "£21.25",
    payment: "Completed",
  },
  {
    id: "#TXN-8841",
    customer: "Sarah Chen",
    product: "Vuse Go 800 Berry",
    date: "25 Aug 2026",
    amount: "£8.99",
    payment: "Completed",
  },
  {
    id: "#TXN-8840",
    customer: "Mike Roberts",
    product: "Mixed Bundle",
    date: "25 Aug 2026",
    amount: "£34.99",
    payment: "Pending",
  },
  {
    id: "#TXN-8839",
    customer: "Emma Davis",
    product: "VELO Ice Cool ×10",
    date: "24 Aug 2026",
    amount: "£42.50",
    payment: "Completed",
  },
  {
    id: "#TXN-8838",
    customer: "Tom Baker",
    product: "Vuse ePod 2 Kit",
    date: "24 Aug 2026",
    amount: "£19.99",
    payment: "Refunded",
  },
];

export default function SalesSection() {
  const paymentStyles = {
    Completed: "bg-emerald-50 text-emerald-600",
    Pending: "bg-amber-50 text-amber-600",
    Refunded: "bg-red-50 text-red-500",
  };

  const columns = [
    {
      key: "id",
      label: "Transaction ID",
    },
    {
      key: "customer",
      label: "Customer",
    },
    {
      key: "product",
      label: "Product",
    },
    {
      key: "date",
      label: "Date",
    },
    {
      key: "amount",
      label: "Amount",
    },
    {
      key: "payment",
      label: "Payment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* Header */}
        <DashboardHeader />

        {/* Heading */}
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight text-[#111827]">
            Sales
          </h1>

          <p className="mt-1 text-sm text-[#737b88]">
            Track and manage all sales transactions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Sales Overview */}
        <AreaChartCard
          title="Sales Overview"
          subtitle="Track product sales over the past 30 days"
          data={salesData}
          dataKey="value"
          xAxisKey="label"
          yDomain={[0, 5000]}
          yTicks={[0, 1000, 2000, 3000, 4000, 5000]}
          valuePrefix="£"
          height={230}
        />

        {/* Products + Channel */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <TopSellingProducts products={topProducts} />

          <DonutChartCard
            title="Sales by Channel"
            subtitle="Breakdown of sales across channels"
            data={salesByChannel}
            total="£127.4K"
            totalLabel="Total"
          />
        </div>

        {/* Recent Sales */}
        <DataTable
          title="Recent Sales"
          columns={columns}
          data={recentSales}
          renderCell={(row, key) => {
            if (key === "payment") {
              return (
                <span
                  className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium ${
                    paymentStyles[row.payment]
                  }`}
                >
                  {row.payment}
                </span>
              );
            }

            if (key === "id") {
              return (
                <span className="font-medium text-[#27303b]">{row[key]}</span>
              );
            }

            if (key === "amount") {
              return (
                <span className="font-semibold text-[#27303b]">{row[key]}</span>
              );
            }

            return row[key];
          }}
        />
      </div>
    </div>
  );
}
