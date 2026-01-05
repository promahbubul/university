"use client";
import { universityList } from "@/constant/client/dashboard/sidebar.constant";
import useSidebarStore from "@/store/client/useSidebarStore";
import Link from "next/link";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
const ClientSideBar = () => {
  const { isIconSidebar, setIsIconSidebar } = useSidebarStore();
  console.log("--- Icon Sidebar ---", isIconSidebar);
  return (
    <>
      {/* Full Sidebar */}
      {isIconSidebar ? (
        <div className="w-20 h-full bg-gray-900">
          <div className="justify-center items-center py-5 flex">
            <GoSidebarCollapse
              className="cursor-pointer text-2xl"
              onClick={() => setIsIconSidebar(false)}
            />
          </div>
          <div className="h-[calc(100%-108px)]">
            {universityList?.map((university) => {
              const Icon = university?.Icon;
              return (
                <Link
                  key={university?.id}
                  className="border-b border-b-slate-700 hover:bg-slate-700 w-full py-3 text-center text-2xl  flex justify-center items-center"
                  href={university?.path}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
          <div className="bg-red-500 text-white py-3 p text-center justify-center items-center flex ">
            <IoMdLogOut className="text-xl" />
          </div>
        </div>
      ) : (
        <div className="w-70 bg-gray-900 h-full">
          <div className="py-5 px-5 flex flex-row items-center justify-between ">
            <h1 className="text-lg font-extrabold  text-center">U-Library</h1>
            <GoSidebarExpand
              onClick={() => setIsIconSidebar(true)}
              className="cursor-pointer text-2xl"
            />
          </div>
          <div className="h-[calc(100%-112px)] flex flex-col ">
            {universityList?.map((university) => {
              const Icon = university?.Icon;

              return (
                <Link
                  className="border-b py-2 px-3 flex flex-row items-center gap-2 border-b-slate-700 hover:bg-slate-800"
                  key={university?.id}
                  href={university?.path}
                >
                  <Icon />
                  <p> {university?.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="">
            <button className="bg-red-500 text-white w-full py-2 text-lg font-medium cursor-pointer hover:bg-red-600 transition-all ease-in-out">
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientSideBar;
