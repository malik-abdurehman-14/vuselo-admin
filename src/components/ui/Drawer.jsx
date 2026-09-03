"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Don't render portal during SSR
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-lg cursor-pointer
          transition-opacity duration-700
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-[9999] h-full sm:w-[350px] w-[280px] max-w-[90vw]
          bg-white text-black
          transition-transform duration-700
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>,
    document.body,
  );
}

export default Drawer;
