"use client";

import Sidebar from "@/components/layout/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-black p-4">
      <div className="w-[20%]">
        {" "}
        <Sidebar />
      </div>

      <main className="flex-1 w-[80%] bg-white rounded-4xl overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
