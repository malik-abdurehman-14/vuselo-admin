import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsCard from "@/components/admin/StatsCard";
import AreaChartCard from "@/components/admin/AreaChartCard";
import DonutChartCard from "@/components/admin/DonutChartCard";
import DataTable from "@/components/admin/DataTable";

import InventoryStatusChart from "@/components/dashboard/InventoryStatusChart";
import OrdersStatusChart from "@/components/dashboard/OrdersStatusChart";

import { ShoppingCart, Package, Users, Wallet } from "lucide-react";

export default function DashboardSection() {
  // ============================================
  // STATS
  // ============================================

  const stats = [
    {
      title: "Total Orders",
      value: "1,847",
      change: "12%",
      description: "from last month",
      icon: ShoppingCart,
    },
    {
      title: "Products Sold",
      value: "3,562",
      change: "18%",
      description: "from last month",
      icon: Package,
    },
    {
      title: "Active Subscribers",
      value: "426",
      change: "8%",
      description: "from last month",
      icon: Users,
    },
    {
      title: "Monthly Revenue",
      value: "£127,450",
      change: "15%",
      description: "from last month",
      icon: Wallet,
    },
  ];

  // ============================================
  // MONTHLY SALES CHART
  // ============================================

  const monthlySales = [
    { month: "Jan", sales: 1450 },
    { month: "Feb", sales: 1400 },
    { month: "Mar", sales: 1750 },
    { month: "Apr", sales: 1250 },
    { month: "May", sales: 1680 },
    { month: "Jun", sales: 1500 },
  ];

  // ============================================
  // REVENUE BY CATEGORY
  // ============================================

  const revenueByCategory = [
    {
      name: "Vape Devices",
      value: 53529,
      percentage: 42,
    },
    {
      name: "Nicotine Pouches",
      value: 44608,
      percentage: 35,
    },
    {
      name: "Pods & Refills",
      value: 29314,
      percentage: 23,
    },
  ];

  // ============================================
  // RECENT ORDERS
  // ============================================

  const recentOrders = [
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

  // ============================================
  // TABLE COLUMNS
  // ============================================

  const orderColumns = [
    {
      key: "id",
      label: "Order ID",
    },
    {
      key: "product",
      label: "Product",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "amount",
      label: "Amount",
    },
    {
      key: "items",
      label: "Items",
    },
  ];

  // ============================================
  // STATUS STYLES
  // ============================================

  const statusStyles = {
    Delivered: "bg-emerald-50 text-emerald-600",
    Processing: "bg-amber-50 text-amber-600",
    Shipped: "bg-blue-50 text-blue-600",
    Cancelled: "bg-red-50 text-red-500",
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-4 md:p-5 lg:p-6">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* ==========================================
            HEADER
        ========================================== */}

        <DashboardHeader />

        {/* ==========================================
            PAGE HEADING
        ========================================== */}

        <div>
          <h1 className="text-[22px] font-semibold tracking-tight text-[#111827]">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-[#737b88]">
            Overview of your store performance and product sales
          </p>
        </div>

        {/* ==========================================
            STATS
        ========================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* ==========================================
            SALES ANALYTICS
        ========================================== */}

        <div className="pt-1">
          <h2 className="text-[19px] font-semibold text-[#111827]">
            Sales Analytics
          </h2>
        </div>

        {/* ==========================================
            SALES + REVENUE
        ========================================== */}

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {/* Monthly Sales */}
          <AreaChartCard
            title="Monthly Sales Volume"
            subtitle="Track product sales over time"
            data={monthlySales}
            dataKey="sales"
            xAxisKey="month"
            yDomain={[0, 2500]}
            yTicks={[0, 500, 1000, 1500, 2000, 2500]}
            valuePrefix=""
            height={220}
          />

          {/* Revenue By Category */}
          <DonutChartCard
            title="Revenue by Category"
            subtitle="Breakdown of revenue across product categories"
            data={revenueByCategory}
            total="£127.4K"
            totalLabel="Total"
            valuePrefix="£"
          />
        </div>

        {/* ==========================================
            INVENTORY + ORDER STATUS
        ========================================== */}

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <InventoryStatusChart />

          <OrdersStatusChart />
        </div>

        {/* ==========================================
            RECENT ORDERS
        ========================================== */}

        <DataTable
          title="Recent Orders"
          columns={orderColumns}
          data={recentOrders}
          renderCell={(row, key) => {
            // Order ID
            if (key === "id") {
              return (
                <span className="font-medium text-[#27303b]">{row[key]}</span>
              );
            }

            // Status
            if (key === "status") {
              return (
                <span
                  className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium ${
                    statusStyles[row.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {row.status}
                </span>
              );
            }

            // Amount
            if (key === "amount") {
              return (
                <span className="font-semibold text-emerald-600">
                  {row[key]}
                </span>
              );
            }

            // Default
            return row[key];
          }}
        />
      </div>
    </div>
  );
}
