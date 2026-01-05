import React from "react";
import BookCard from "./BookCard";

const BookContainer = () => {
  return (
    <div className="mx-5 mt-5  h-[calc(100%-167px)] pb-5 grid grid-cols-4 gap-5 overflow-auto">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default BookContainer;
