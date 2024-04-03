/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ProductsNav from "./ProductsNav";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import filter from "../../images/filter.png";
import arrowRight from "../../images/arrowRight.png";
import Image from "next/image";

/*
  This HomeTemplets requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function HomeSreens() {
  const [selectedNav, setSelectedNav] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const screensPerPage = 10;

  const [screens, setScreens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/screens");
      const screensData = await data.json();
      setScreens(screensData);
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedNav === "all"
      ? screens
      : screens.filter((screens) => screens.type === selectedNav);

  // Pagination
  const indexOfLastScreen = currentPage * screensPerPage;
  const indexOfFirstScreen = indexOfLastScreen - screensPerPage;
  const currentScreens = filteredProducts.slice(
    indexOfFirstScreen,
    indexOfLastScreen
  );

  const handleNavChange = (category) => {
    setSelectedNav(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white grid gap-4">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-normal leading-8 text-gray-900">Sreens</h2>
        <a
          href="#"
          className="hidden text-sm font-normal leading-4 text-[#989898] sm:block"
        >
          See all
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-1 items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F5]">
            <div>
              <Image src={filter} alt="filter" />
            </div>
            <a className="capitalize text-gray-900">Filters</a>
          </div>
          <span className="inline-block h-4 w-px bg-gray-400"></span>
          <ProductsNav
            selectedNav={selectedNav}
            setSelectedNav={handleNavChange}
          />
        </div>
        <div>
          <Image src={arrowRight} alt="arrow" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-5 sm:grid-cols-5 sm:gap-x-4 sm:gap-y-5 lg:gap-x-4">
        {currentScreens.map((screen, index) => (
          <div key={index} className="group relative">
            <div className="h-auto relative w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75">
              <img
                src={screen.imageSrc}
                alt={screen.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              {/* <div className="absolute inset-x-0 bottom-0 hidden group-hover:flex h-full items-end justify-center overflow-hidden rounded-lg p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black"
                />
                <div className="w-full flex gap-4">
                  <span className="bg-white flex rounded-2xl p-2">
                    <DocumentDuplicateIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {screen.code}
                  </span>
                  <button className="flex-1 bg-white rounded-xl py-2">
                    Copy Code
                  </button>
                </div>
                <p className="relative text-lg font-semibold text-white">
                  {screen.content}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <a href="#" className="block text-sm leading-4 text-[#989898]">
          See all
        </a>
      </div>
    </div>
  );
}
