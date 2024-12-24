"use client";

import { cn } from "@/lib/utils";
// React & next Imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface IProps {
  name: string;
  icon: IconType;
  link: string;
}

const Tab = ({ icon, name, link }: IProps) => {
  const path = usePathname();
  const isActive = path.includes(link);
  const Icon = icon;

  return (
    <Link
      href={link}
      className={`flex cursor-pointer gap-x-4 items-center rounded-md p-2
        ${isActive && "text-panel bg-hover-primary bg-primary p-2"}`}
    >
      <Icon
        className={cn(isActive ? "text-panel" : "text-primary")}
        size={20}
      />
      <h1
        className={`${isActive ? "text-panel" : "text-primary"} text-lg font-medium`}
      >
        {name}
      </h1>
    </Link>
  );
};

export default Tab;
