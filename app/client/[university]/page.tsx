import React from "react";
import { universitySubjectsList } from "@/constant/client/university/university.constant";
import Link from "next/link";
import Image from "next/image";

const University = async ({
  params,
}: {
  params: Promise<{ university: string }>;
}) => {
  const { university } = await params;

  console.log(university);
  return (
    <div className="w-full bg-neutral-950 h-full pb-5 ">
      <div className="bg-slate-950 text-2xl font-medium py-3 mb-5 text-center">
        {university?.split("-").join(" ").toUpperCase()}
      </div>
      <div className="p-5 mb-5   overflow-auto h-[calc(100%-76px)] grid grid-cols-4 gap-5">
        {universitySubjectsList?.map((subject) => (
          <Link
            style={{}}
            className="bg-neutral-900 hover:bg-neutral-800 ease-in-out transition-all py-5 px-5 w-full rounded-md flex flex-row items-center gap-5"
            key={subject?.id}
            href={subject?.path}
          >
            <Image
              src={"https://cdn-icons-png.freepik.com/512/9098/9098295.png"}
              width={25}
              height={25}
              alt=""
            />
            <p className="text-base text-neutral-400">{subject?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default University;
