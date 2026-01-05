"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const SingleBook = () => {
  const { back } = useRouter();

  return (
    <div className="w-full h-full p-5">
      <div className=" min-h-10">
        <button
          onClick={() => back()}
          className="bg-slate-950 px-10 py-2  text-base  rounded-md cursor-pointer"
        >
          Back
        </button>
      </div>
      <div
        style={{
          height: "calc(100% - 58px)",
          border: "",
        }}
        className="w-full mt-5 "
      >
        <iframe
          src={
            "http://ndl.ethernet.edu.et/bitstream/123456789/79454/19/Political%20Geography%20GeES%202063.pdf"
          }
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default SingleBook;
