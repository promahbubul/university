"use client";

import { useState } from "react";
import Select, { StylesConfig } from "react-select";

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "nu", label: "National University" },
  { value: "du", label: "Dhaka University" },
  { value: "cu", label: "Chittagong University" },
];

const FilterSection = () => {
  const [universities, setUniversities] = useState<Option | undefined | null>(
    null
  );

  console.log("---- Universities ----", universities);
  return (
    <div className="bg-neutral-800 p-3 mx-5 rounded-md">
      <div className="flex flex-row items-end gap-5">
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-base text-neutral-300 font-medium">
            Select University:{" "}
          </h3>
          <Select<Option>
            options={options}
            value={universities as unknown as Option}
            onChange={(option) => setUniversities(option)}
            onInputChange={(value) => console.log(value)}
            onMenuOpen={() => {}}
            onMenuClose={() => {}}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "#0A0A0A",
                border: "none",
                color: "blue",
                ":placeholder-shown": {
                  color: "red",
                },
                placeContent: "red",
              }),
              option: (styles) => ({
                border: "none",
                ...styles,
                backgroundColor: "#1f1f1f",
                ":hover": {
                  backgroundColor: "#1D293D",
                },
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-base text-neutral-300 font-medium">Department</h3>
          <Select
            options={options}
            value={null}
            onChange={(option) => console.log(option)}
            onInputChange={(value) => console.log(value)}
            onMenuOpen={() => {}}
            onMenuClose={() => {}}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "#0A0A0A",
                border: "none",
              }),
              option: (styles) => ({
                border: "none",
                ...styles,
                backgroundColor: "#1f1f1f",
                ":hover": {
                  backgroundColor: "#1D293D",
                },
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-base text-neutral-300 font-medium">Year</h3>
          <Select
            options={options}
            value={null}
            onChange={(option) => console.log(option)}
            onInputChange={(value) => console.log(value)}
            onMenuOpen={() => {}}
            onMenuClose={() => {}}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "#0A0A0A",
                border: "none",
              }),
              option: (styles) => ({
                border: "none",
                ...styles,
                backgroundColor: "#1f1f1f",
                ":hover": {
                  backgroundColor: "#1D293D",
                },
              }),
            }}
          />
        </div>
        <button className=" py-2 px-10 rounded-md bg-slate-700 cursor-pointer ">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
