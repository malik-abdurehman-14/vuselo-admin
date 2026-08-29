"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCartOutline, IoSettings, IoLogOutOutline } from "react-icons/io5";
import { IoMdCube } from "react-icons/io";

function Sidebar() {
  const pathname = usePathname();

  const pages = [
    {
      title: "Dashboard",
      link: "/admin/dashboard",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      title: "Sales",
      link: "/admin/sales",
      icon: <IoCartOutline size={20} />,
    },
    {
      title: "Products",
      link: "/admin/products",
      icon: <IoMdCube size={20} />,
    },
  ];

  return (
    <div className="px-8 py-4 w-full h-full flex flex-col justify-between gap-8 bg-black">
      <div className="w-full flex flex-col gap-5 items-center">
        <img className="w-[200px]" src="/logo.png" alt="Vuselo" />
        <div className="border border-gray-600 w-full" />
        {/* Pages */}
        <div className="w-full flex flex-col gap-4">
          {pages.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.link}
                href={item.link}
                className={`flex items-center gap-3 py-3 px-4 w-full transition-all duration-200 rounded-full font-bold ${
                  isActive
                    ? "bg-froozen text-black"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                {item.icon}

                <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      {/* bottom */}
      <div className="w-full flex p-3 gap-5 items-center justify-between bg-froozen rounded-full">
        <div className="flex gap-2 items-center">
          <img className="rounded-full h-12 w-12" src="/user.jpg" alt="" />
          <div>
            <p className="text-lg font-bold space-grotesk">Jhon Dee</p>
            <p className="text-sm">Jhon@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <a href="#">
            <IoSettings size={24} />
          </a>
          <a href="#" className="text-red-700">
            <IoLogOutOutline size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
