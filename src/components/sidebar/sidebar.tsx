"use client";

// Utilities
import { cn } from "@/lib/utils";

// Next && React

// Assets Imports

// Component
import Tab from "./tab";

// Constants
import { tabs } from "@/constant/sidebar";

// Icons Imports
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserRole } from "@/types/Enum/user-role.enum";

interface TabProps {
  isOpen: boolean;
  setIsOPen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOPen }: TabProps) => {
  const userRole = useSelector(
    (state: RootState) => state.authenticationSlice.user?.role
  ) as UserRole;
  return (
    <div
      className={cn(
        "py-6",
        "!h-screen",
        "custom-transition",
        "flex flex-col justify-between",
        "w-[300px] min-w-[275px] max-w-[275px]",
        "bg-[#181818]",
        isOpen ? "absolute lg:relative left-0 top-0 z-[999]" : "hidden lg:flex"
      )}
    >
      <IoIosClose
        className="absolute lg:hidden right-2 rounded-md top-2 text-primary  hover:text-white cursor-pointer"
        onClick={() => setIsOPen(false)}
        size={26}
      />

      <div className="space-y-6 mt-3">
        <p className="text-2xl text-center text-primary">Z E N - A I</p>

        <div className={`space-y-3 w-full text-base px-4`}>
          {tabs.map(
            (item, index) =>
              item.role === userRole && <Tab key={index} {...item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
