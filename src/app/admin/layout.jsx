"use client";

import Sidebar from "@/components/layout/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-black p-4">
      <div className="w-[25%]">
        {" "}
        <Sidebar />
      </div>

      <main className="flex-1 w-[75%] bg-white rounded-4xl overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
