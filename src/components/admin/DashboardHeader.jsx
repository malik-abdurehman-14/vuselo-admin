"use client";

import { Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between rounded-[24px] bg-white px-5 py-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] md:px-6">
      <div>
        <h2 className="text-[18px] font-semibold tracking-tight text-[#111827] md:text-[20px]">
          Hey! Admin
        </h2>

        <p className="mt-1 text-sm text-[#737b88]">
          Welcome back! Here is your store overview.
        </p>
      </div>

      <button
        type="button"
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#59616d] transition hover:bg-[#f7f7f7]"
      >
        <Bell size={19} strokeWidth={1.7} />

        <span className="absolute right-[5px] top-[4px] h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
      </button>
    </header>
  );
}
