import React, { useState, useEffect } from "react";
import data from "../data/Jobs.json";

const Filter = ({ onFilterChange }) => {
  const [categories, setCategories] = useState("");
  const [salary, setSalary] = useState("");
  console.log('Selected Categories:', categories);
  console.log('Selected Salary:', salary);

  onFilterChange(categories);
  
  

  //This block of code gets all categories item for each object in the array then filters all unique values
  const getAllUniqueCategories = (data) => {
    return data
      .reduce((allCategories, item) => {
        // Concatenate all categories for each item
        const itemCategories = item.categories || [];
        return [...allCategories, ...itemCategories];
      }, [])
      .filter((value, index, self) => {
        // Filter out duplicates
        return self.indexOf(value) === index;
      });
  };

  const getAllUniqueSalaries = (data) => {
    return data.reduce((allSalaries, item) => {
      if (item.salary && !allSalaries.includes(item.salary)) {
        allSalaries.push(item.salary);
      }
      return allSalaries;
    }, []);
  };

  const newCategories = getAllUniqueCategories(data);
  const salaryOptions = getAllUniqueSalaries(data);

  console.log(categories);

  return (
    <div>
      <div className="w-[375px] h-[50px] px-4 py-3 bg-white shadow-inner justify-center items-center gap-2 inline-flex sm:hidden">
        <div className="w-6 h-6 relative"></div>
        <p className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed ">
          More Filters
        </p>
      </div>

      <div className=" mt-12 hidden sm:flex flex-col ">
        <select
          name=""
          id=""
          value={categories}
          onChange={(e) => {
            const selectedCategory = e.target.value;
            setCategories(selectedCategory);
            onFilterChange({ categories: selectedCategory, salary });
          }}
          className="text-slate-800 text-base font-bold leading-normal mb-56 p-5"
        >
          <option value="">Categories</option>
          {newCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name=""
          id=""
          onChange={(e) => {
            const selectedSalary = e.target.value;
            setSalary(selectedSalary);
            onFilterChange({ categories, salary: selectedSalary });
          }}
          className="text-slate-800 text-base font-bold leading-normal mb-14 p-5"
        >
          <option value="">Salary</option>
          {salaryOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
