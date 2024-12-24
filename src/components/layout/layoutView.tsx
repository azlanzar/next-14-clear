"use client";

// React & next Imports
import React from "react";

// Components
import Sidebar from "../sidebar/sidebar";

// Icons Imports
import { removeCookie } from "@/utils/storage.util";
import { useRouter } from "next/navigation";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { queryClient } from "@/providers/react-query-provider";

const LayoutView = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenDrawer = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    removeCookie("accessToken");
    queryClient.clear();
    router.push("/login");
  };

  return (
    <div className={`flex h-screen w-full overflow-hidden`}>
      <div
        className={`${isOpen && "bg-lightBlack z-10 w-screen absolute top-0 left-0 h-screen lg:bg-transparent"}`}
      />
      <Sidebar isOpen={isOpen} setIsOPen={setIsOpen} />

      <div className="w-full">
        <div className="h-14 flex justify-between lg:justify-end items-center lg:px-1 px-2">
          <div
            onClick={handleLogout}
            className="p-1.5 hover:bg-slate-100 rounded-full h-fit cursor-pointer w-fit"
          >
            <AiOutlineLogout size={26} />
          </div>
          <div
            onClick={handleOpenDrawer}
            className="p-1.5 hover:bg-slate-100 rounded-full h-fit cursor-pointer w-fit"
          >
            <AiOutlineMenu
              className="lg:hidden cursor-pointer text-text-primary"
              size={25}
            />
          </div>
        </div>

        <div className=" py-4 px-6 h-[94.5dvh] lg:w-[calc(100vw-275px)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutView;
