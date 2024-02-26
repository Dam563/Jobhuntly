import React, { useState } from "react";
import data from "../data/Jobs.json";
import { Link } from "react-router-dom";

const JobLists = ({ filterValue }) => {
  const itemPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  let dataItem = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Filtered Data:", dataItem);
  console.log("filter", filterValue);
  console.log("Original Data", data);

  //run a filter logic on the datitem with the value from the select option

  dataItem = filterValue
    ? dataItem.filter((item) => item.categories.includes(filterValue))
    : dataItem;
  console.log("Filter Value:", filterValue);
  // dataItem = filterValue ? dataItem.filter(item => item.salary.includes(filterValue)) : dataItem;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="p-4">
        <div className="w-full h-auto pb-8 bg-white flex-col justify-center items-center gap-6 inline-flex">
          <div className="self-stretch h-[63px] flex-col justify-start items-start gap-2 flex">
            <p className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px] sm:text-[32px] sm:leading-[38.40px]">
              All Jobs
            </p>
            <div className="justify-between items-center inline-flex sm:flex w-full h-[26px]">
              <div>
                <p className="text-slate-500 text-base font-normal leading-relaxed">
                  Showing {data.length} results
                </p>
              </div>
              <div className="justify-center items-center gap-[22px] flex">
                <div className="justify-start items-center gap-3 flex ">
                  <p className="text-right text-slate-500 text-base font-normal leading-relaxed hidden sm:inline-flex">
                    Sort by:
                  </p>
                  <select name="" id="" className=" ">
                    <option
                      value=""
                      className="text-slate-800 text-base font-medium leading-relaxed"
                    >
                      Most relevant
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* jobs */}
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            {dataItem.map((item, index) => (
              <div
                key={index}
                className="w-full  sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center "
              >
                <div className="sm:flex sm:flex-row sm:gap-10">
                  <div className="relative mb-10 mt-2">
                    <img
                      src={item.logo}
                      alt=""
                      className="w-full h-12 max-w-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"
                    />
                  </div>

                  <div className="flex-col  justify-start items-start gap-2 flex">
                    <p className="text-slate-800 text-xl font-semibold  leading-normal">
                      {item.title}
                    </p>
                    <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.company}
                      </p>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.location}
                      </p>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                        {item.jobType}
                      </button>
                      <div className="w-px self-stretch bg-zinc-200"></div>
                      <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                        {item.categories[0]}
                      </button>
                      <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                        {item.categories[1]}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col sm:gap-7 self-stretch gap-6 flex-col justify-between items-start flex mt-10 ">
                  {/* self-stretch h-[101px] flex-col justify-between items-start flex */}
                  <Link
                    to={`/job-details/${item.id}`}
                    className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed"
                  >
                    Apply
                  </Link>
                  <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-slate-800 text-sm font-semibold  leading-snug">
                        5 applied
                      </span>
                      <span className="text-black text-sm font-normal  leading-snug">
                        {" "}
                      </span>
                      <span className="text-slate-500 text-sm font-normal  leading-snug">
                        of 10 capacity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[22px] h-[26px]", Default: " text-slate-600 hover:bg-gray-50" */}
          {/* pagination */}
          <nav
            className="inline-flex self-stretch justify-center items-center gap-5"
            aria-label="Pagination"
          >
            {Array.from(
              { length: Math.ceil(data.length / itemPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`relative inline-flex text-center w-[22px]
                  ${
                    currentPage === index + 1
                      ? "bg-indigo-600 px-3 py-2.5 rounded-lg text-white  text-base font-semiboldfont-['Inter'] leading-relaxed"
                      : "text-slate-600 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
    
  );
};

export default JobLists;
