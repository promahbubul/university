import ClientSideBar from "@/components/client/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-row items-center">
      <ClientSideBar />
      {children}
    </div>
  );
};

export default Layout;
