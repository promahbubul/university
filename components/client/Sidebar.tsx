import React from "react";
import { universityList } from "@/constant/client/dashboard/sidebar.constant";
import Link from "next/link";
import Image from "next/image";
const ClientSideBar = () => {
  return (
    <div className="w-70 bg-gray-900 h-full">
      <div className="py-5 px-5">
        <h1 className="text-xl font-extrabold  text-center">Gronthagar</h1>
      </div>
      <div className="h-[calc(100%-112px)] flex flex-col ">
        {universityList?.map((university) => (
          <Link
            className="border-b py-2 px-3 flex flex-row items-center gap-2 border-b-slate-700 hover:bg-slate-800"
            key={university?.id}
            href={university?.path}
          >
            <Image
              src={university?.image?.src}
              alt=""
              width={30}
              height={30}
              className="rounded-md"
            />
            <p> {university?.title}</p>
          </Link>
        ))}
      </div>
      <div className="">
        <button className="bg-red-500 text-white w-full py-2 text-lg font-medium cursor-pointer hover:bg-red-600 transition-all ease-in-out">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ClientSideBar;
