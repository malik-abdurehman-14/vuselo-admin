"use client";

import { useMemo, useState } from "react";

import { Package, Check, TriangleAlert, CircleX, Plus } from "lucide-react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsCard from "@/components/admin/StatsCard";

import ProductFilters from "@/components/products/ProductFilters";
import ProductTable from "@/components/products/ProductTable";

export default function ProductsSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // ============================================
  // PRODUCTS DATA
  // ============================================

  const products = [
    {
      id: 1,
      name: "VELO Spearmint Slim 6mg",
      sku: "SKU-V001",
      category: "Nicotine Pouches",
      price: "£5.00",
      stock: 1245,
      status: "In Stock",
      image: "/product.png",
      createdAt: 8,
    },
    {
      id: 2,
      name: "Vuse Go 800 Berry Blend",
      sku: "SKU-D001",
      category: "Disposable Vapes",
      price: "£8.99",
      stock: 856,
      status: "In Stock",
      image: "/product.png",
      createdAt: 7,
    },
    {
      id: 3,
      name: "VELO Ice Cool Mini 4mg",
      sku: "SKU-V002",
      category: "Nicotine Pouches",
      price: "£4.00",
      stock: 32,
      status: "Low Stock",
      image: "/product.png",
      createdAt: 6,
    },
    {
      id: 4,
      name: "Vuse ePod 2 Starter Kit",
      sku: "SKU-D002",
      category: "Vape Devices",
      price: "£19.99",
      stock: 534,
      status: "In Stock",
      image: "/product.png",
      createdAt: 5,
    },
    {
      id: 5,
      name: "VELO Freeze Max 11mg",
      sku: "SKU-V003",
      category: "Nicotine Pouches",
      price: "£5.50",
      stock: 0,
      status: "Out of Stock",
      image: "/product.png",
      createdAt: 4,
    },
    {
      id: 6,
      name: "Vuse ePen Pods Tobacco",
      sku: "SKU-P001",
      category: "Pods & Refills",
      price: "£6.99",
      stock: 421,
      status: "In Stock",
      image: "/product.png",
      createdAt: 3,
    },
    {
      id: 7,
      name: "VELO Berry Frost Slim",
      sku: "SKU-V004",
      category: "Nicotine Pouches",
      price: "£5.00",
      stock: 18,
      status: "Low Stock",
      image: "/product.png",
      createdAt: 2,
    },
    {
      id: 8,
      name: "Vuse Go 700 Mango Ice",
      sku: "SKU-D003",
      category: "Disposable Vapes",
      price: "£7.99",
      stock: 612,
      status: "In Stock",
      image: "/product.png",
      createdAt: 1,
    },

    // Extra products for pagination
    {
      id: 9,
      name: "VELO Tropical Breeze",
      sku: "SKU-V005",
      category: "Nicotine Pouches",
      price: "£5.25",
      stock: 245,
      status: "In Stock",
      image: "/product.png",
      createdAt: 9,
    },
    {
      id: 10,
      name: "Vuse Go 800 Blueberry",
      sku: "SKU-D004",
      category: "Disposable Vapes",
      price: "£8.99",
      stock: 15,
      status: "Low Stock",
      image: "/product.png",
      createdAt: 10,
    },
    {
      id: 11,
      name: "VELO Arctic Berry",
      sku: "SKU-V006",
      category: "Nicotine Pouches",
      price: "£5.00",
      stock: 340,
      status: "In Stock",
      image: "/product.png",
      createdAt: 11,
    },
    {
      id: 12,
      name: "Vuse ePod 2 Black",
      sku: "SKU-D005",
      category: "Vape Devices",
      price: "£21.99",
      stock: 86,
      status: "In Stock",
      image: "/product.png",
      createdAt: 12,
    },
    {
      id: 13,
      name: "VELO Mint Strong",
      sku: "SKU-V007",
      category: "Nicotine Pouches",
      price: "£5.50",
      stock: 8,
      status: "Low Stock",
      image: "/product.png",
      createdAt: 13,
    },
    {
      id: 14,
      name: "Vuse Go 700 Berry",
      sku: "SKU-D006",
      category: "Disposable Vapes",
      price: "£7.99",
      stock: 0,
      status: "Out of Stock",
      image: "/product.png",
      createdAt: 14,
    },
    {
      id: 15,
      name: "Vuse Tobacco Pods",
      sku: "SKU-P002",
      category: "Pods & Refills",
      price: "£6.50",
      stock: 190,
      status: "In Stock",
      image: "/product.png",
      createdAt: 15,
    },
    {
      id: 16,
      name: "VELO Cool Mint Slim",
      sku: "SKU-V008",
      category: "Nicotine Pouches",
      price: "£5.00",
      stock: 75,
      status: "In Stock",
      image: "/product.png",
      createdAt: 16,
    },
  ];

  // ============================================
  // FILTER + SORT
  // ============================================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      );
    }

    // Category
    if (category !== "All Categories") {
      result = result.filter((product) => product.category === category);
    }

    // Status
    if (status !== "All Status") {
      result = result.filter((product) => product.status === status);
    }

    // Sort
    if (sort === "newest") {
      result.sort((a, b) => b.createdAt - a.createdAt);
    }

    if (sort === "oldest") {
      result.sort((a, b) => a.createdAt - b.createdAt);
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) =>
          parseFloat(b.price.replace("£", "")) -
          parseFloat(a.price.replace("£", "")),
      );
    }

    if (sort === "price-low") {
      result.sort(
        (a, b) =>
          parseFloat(a.price.replace("£", "")) -
          parseFloat(b.price.replace("£", "")),
      );
    }

    if (sort === "stock-high") {
      result.sort((a, b) => b.stock - a.stock);
    }

    return result;
  }, [search, category, status, sort]);

  // ============================================
  // RESET PAGE WHEN FILTER CHANGES
  // ============================================

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  // ============================================
  // PAGINATION
  // ============================================

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // ============================================
  // STATS
  // ============================================

  const totalProducts = 156;

  const inStock = products.filter(
    (product) => product.status === "In Stock",
  ).length;

  const lowStock = products.filter(
    (product) => product.status === "Low Stock",
  ).length;

  const outOfStock = products.filter(
    (product) => product.status === "Out of Stock",
  ).length;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      change: "Active catalog",
      description: "",
      icon: Package,
      variant: "success",
    },
    {
      title: "In Stock",
      value: 98,
      change: "Healthy levels",
      description: "",
      icon: Check,
      variant: "success",
    },
    {
      title: "Low Stock",
      value: 32,
      change: "Action needed",
      description: "",
      icon: TriangleAlert,
      variant: "warning",
    },
    {
      title: "Out of Stock",
      value: 12,
      change: "Urgent restock",
      description: "",
      icon: CircleX,
      variant: "danger",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-4 md:p-5 lg:p-6">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* ==========================================
            HEADER
        ========================================== */}

        <DashboardHeader />

        {/* ==========================================
            PAGE TITLE
        ========================================== */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[23px] font-semibold tracking-tight text-[#111827]">
              Products
            </h1>

            <p className="mt-0.5 text-sm text-[#737b88]">
              Manage your product catalog
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-froozen px-4 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* ==========================================
            STATS
        ========================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* ==========================================
            FILTERS
        ========================================== */}

        <ProductFilters
          search={search}
          setSearch={handleSearchChange}
          category={category}
          setCategory={handleCategoryChange}
          status={status}
          setStatus={handleStatusChange}
          sort={sort}
          setSort={handleSortChange}
        />

        {/* ==========================================
            PRODUCTS TABLE
        ========================================== */}

        <ProductTable
          products={paginatedProducts}
          currentPage={currentPage}
          totalProducts={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
