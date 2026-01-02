import React from "react";
import { courseDurationList } from "@/constant/client/university/subject/subject.constant";
import Link from "next/link";
import Image from "next/image";

const Subject = async ({
  params,
}: {
  params: Promise<{ subject: string }>;
}) => {
  const { subject } = await params;

  console.log(subject);
  return (
    <div className="w-full bg-neutral-950 h-full pb-5 ">
      <div className="bg-slate-950 text-2xl font-medium py-3 mb-5 text-center">
        {subject?.split("-").join(" ").toUpperCase()}
      </div>
      <div className="p-5 mb-5   overflow-auto h-[calc(100%-76px)] flex flex-col gap-5">
        {courseDurationList?.map((subject) => (
          <Link
            style={{}}
            className="bg-neutral-900 hover:bg-neutral-800 ease-in-out transition-all py-5 px-5 w-full rounded-md flex flex-row items-center gap-5"
            key={subject?.id}
            href={subject?.path || ""}
          >
            <p className="text-base text-neutral-400">{subject?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subject;
