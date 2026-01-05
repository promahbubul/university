import {
  BookContainer,
  FilterSection,
  Heading,
  SearchAndPagination,
} from "@/components/client/books";

const Books = () => {
  return (
    <div className="w-full h-full">
      <Heading />
      <FilterSection />
      {/* <SearchAndPagination /> */}
      <BookContainer />
    </div>
  );
};
export default Books;
