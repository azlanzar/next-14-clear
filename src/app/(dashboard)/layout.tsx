import LayoutView from "@/components/layout/layoutView";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutView>{children}</LayoutView>;
};

export default Layout;
