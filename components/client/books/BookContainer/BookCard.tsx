/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BookCard = () => {
  return (
    <Link href={`/client/books/1`}>
      <div className="bg-neutral-900 p-5 rounded-md cursor-pointer hover:scale-95 transition-all ease-in-out">
        <div className="w-full h-52">
          <img
            src="https://www.wiley.com/storefront-pdp-assets/_next/image?url=https%3A%2F%2Fmedia.wiley.com%2Fproduct_data%2FcoverImage300%2F82%2F11193151%2F1119315182.jpg&w=384&q=75"
            alt="photo"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-lg py-2 underline font-bold text-orange-400">
          Political Geography: A Critical Introduction
        </h2>
        <div className="flex flex-col items-end">
          <div className="flex flex-row items-center gap-1">
            <p className="font-bold text-xs">Author:</p>
            <p className="text-sx font-normal italic ">Abdul Azad</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="font-bold text-xs">Publish:</p>
            <p className="text-xs font-normal italic ">2022</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
