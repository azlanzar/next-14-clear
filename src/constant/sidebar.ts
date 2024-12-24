// ============== Icons ==============
import { UserRole } from "@/types/Enum/user-role.enum";
import { RxDashboard } from "react-icons/rx";

export const tabs = [
  {
    name: "Dashboard",
    link: "/analytics",
    icon: RxDashboard,
    role: UserRole.ADMIN,
  },
];
