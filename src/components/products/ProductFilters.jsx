"use client";

import { Search, ChevronDown } from "lucide-react";

export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="rounded-[16px] bg-white p-3.5 shadow-[0_3px_18px_rgba(0,0,0,0.03)]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-[330px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f7885]"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-lg border border-[#e1e4e8] bg-white pl-10 pr-4 text-sm text-[#111827] outline-none placeholder:text-[#9aa3af] transition focus:border-[#35cdd0]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-2 sm:flex-row">
          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 min-w-[205px] appearance-none rounded-lg border border-[#e1e4e8] bg-white pl-3 pr-9 text-sm text-[#111827] outline-none focus:border-[#35cdd0]"
            >
              <option value="All Categories">Category: All Categories</option>

              <option value="Nicotine Pouches">Nicotine Pouches</option>

              <option value="Disposable Vapes">Disposable Vapes</option>

              <option value="Vape Devices">Vape Devices</option>

              <option value="Pods & Refills">Pods & Refills</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555f6d]"
            />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-10 min-w-[160px] appearance-none rounded-lg border border-[#e1e4e8] bg-white pl-3 pr-9 text-sm text-[#111827] outline-none focus:border-[#35cdd0]"
            >
              <option value="All Status">Status: All Status</option>

              <option value="In Stock">In Stock</option>

              <option value="Low Stock">Low Stock</option>

              <option value="Out of Stock">Out of Stock</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555f6d]"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 min-w-[155px] appearance-none rounded-lg border border-[#e1e4e8] bg-white pl-3 pr-9 text-sm text-[#111827] outline-none focus:border-[#35cdd0]"
            >
              <option value="newest">Sort by: Newest</option>

              <option value="oldest">Sort by: Oldest</option>

              <option value="price-high">Price: High to Low</option>

              <option value="price-low">Price: Low to High</option>

              <option value="stock-high">Stock: High to Low</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555f6d]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
