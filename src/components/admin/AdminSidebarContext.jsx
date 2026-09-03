"use client";

import { createContext, useContext, useState } from "react";

const AdminSidebarContext = createContext(null);

export function AdminSidebarProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AdminSidebarContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AdminSidebarContext.Provider>
  );
}

export function useAdminSidebar() {
  const context = useContext(AdminSidebarContext);

  if (!context) {
    throw new Error("useAdminSidebar must be used inside AdminSidebarProvider");
  }

  return context;
}
