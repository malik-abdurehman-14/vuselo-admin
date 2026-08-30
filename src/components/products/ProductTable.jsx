"use client";

import { Pencil, Trash2 } from "lucide-react";

export default function ProductTable({
  products,
  currentPage,
  totalProducts,
  itemsPerPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startItem =
    totalProducts === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  const statusStyles = {
    "In Stock": "bg-[#e9faf1] text-[#16b968]",
    "Low Stock": "bg-[#fff9e8] text-[#ee9b00]",
    "Out of Stock": "bg-[#fff0f1] text-[#ef4350]",
  };

  return (
    <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_3px_18px_rgba(0,0,0,0.03)]">
      {/* Table */}
      <div className="overflow-x-auto p-4 md:p-5">
        <table className="w-full min-w-[1050px] border-collapse">
          <thead>
            <tr className="bg-[#eef2ff]">
              <th className="rounded-l-xl px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Image
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Product Name
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                SKU
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Category
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Price
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Stock
              </th>

              <th className="px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Status
              </th>

              <th className="rounded-r-xl px-5 py-4 text-left text-xs font-medium text-[#687386]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#e7eaee] last:border-0"
                >
                  {/* Image */}
                  <td className="px-5 py-3.5">
                    <div className="h-14 w-14 overflow-hidden rounded-md bg-[#e9fbfb]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-5 py-3.5">
                    <span className="whitespace-nowrap text-sm font-medium text-[#111827]">
                      {product.name}
                    </span>
                  </td>

                  {/* SKU */}
                  <td className="px-5 py-3.5 text-sm text-[#687386]">
                    {product.sku}
                  </td>

                  {/* Category */}
                  <td className="px-5 py-3.5 text-sm text-[#687386]">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-3.5 text-sm font-semibold text-[#111827]">
                    {product.price}
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-3.5 text-sm text-[#687386]">
                    {product.stock}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium ${
                        statusStyles[product.status]
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="text-xs font-medium text-[#27c9cb] transition hover:opacity-70"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="text-xs font-medium text-[#ef4350] transition hover:opacity-70"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="py-12 text-center text-sm text-[#737b88]"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-[#edf0f3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#737b88]">
          Showing{" "}
          <span className="font-medium text-[#4f5967]">
            {startItem}-{endItem}
          </span>{" "}
          of <span className="font-medium text-[#4f5967]">{totalProducts}</span>{" "}
          products
        </p>

        {/* Pagination */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="h-8 rounded-md border border-[#e1e4e8] px-3 text-xs text-[#687386] transition hover:bg-[#f7f8fa] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from(
            { length: Math.min(totalPages, 5) },
            (_, index) => index + 1,
          ).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium transition ${
                currentPage === page
                  ? "bg-froozen text-white"
                  : "text-[#687386] hover:bg-[#f3f5f7]"
              }`}
            >
              {page}
            </button>
          ))}

          {totalPages > 5 && (
            <>
              <span className="px-1 text-xs text-[#737b88]">...</span>

              <button
                type="button"
                onClick={() => setCurrentPage(totalPages)}
                className="h-8 min-w-8 rounded-md px-2 text-xs text-[#687386] hover:bg-[#f3f5f7]"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="h-8 rounded-md border border-[#e1e4e8] px-3 text-xs text-[#687386] transition hover:bg-[#f7f8fa] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
