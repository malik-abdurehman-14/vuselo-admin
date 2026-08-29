import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import MonthlySalesChart from "@/components/dashboard/MonthlySalesChart";
import RevenueCategoryChart from "@/components/dashboard/RevenueCategoryChart";
import InventoryStatusChart from "@/components/dashboard/InventoryStatusChart";
import OrdersStatusChart from "@/components/dashboard/OrdersStatusChart";
import RecentOrders from "@/components/dashboard/RecentOrders";

import { ShoppingCart, Package, Users, Wallet, TrendingUp } from "lucide-react";

export default function DashboardSection() {
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

  return (
    <div className="h-full bg-[#f8f8f8] p-4 md:p-6 lg:p-8">
      <div className="mx-auto space-y-6">
        {/* Header */}
        <DashboardHeader />

        {/* Page Heading */}
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight text-[#111827]">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-[#737b88]">
            Overview of your store performance and product sales
          </p>
        </div>

        {/* Stats */}
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

        {/* Analytics heading */}
        <div className="pt-1">
          <h2 className="text-[19px] font-semibold text-[#111827]">
            Sales Analytics
          </h2>
        </div>

        {/* First row */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <MonthlySalesChart />
          <RevenueCategoryChart />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <InventoryStatusChart />
          <OrdersStatusChart />
        </div>

        {/* Recent Orders */}
        <RecentOrders />
      </div>
    </div>
  );
}
