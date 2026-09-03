"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { AdminSidebarProvider } from "@/components/admin/AdminSidebarContext";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminSidebarProvider>
      <div className="flex h-screen bg-black p-4">
        <div className="hidden lg:flex w-[20%]">
          {" "}
          <Sidebar />
        </div>

        <main className="flex-1 lg:w-[80%] w-full bg-white rounded-4xl overflow-y-scroll">
          {children}
        </main>

        {/* Mobile / Tablet Sidebar Drawer */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </AdminSidebarProvider>
  );
}
