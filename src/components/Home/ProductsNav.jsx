import React, { useEffect, useState } from "react";

export default function ProductsNav({
  selectedNav,
  setSelectedNav,
  classNames,
  id,
}) {
  const [filterNav, setFilterNav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/screens/filter-list");
      const filterNavData = await data.json();
      setFilterNav(filterNavData);
    };

    fetchData();
  }, []);

  return (
    <div className={`inline-flex gap-x-2 ${classNames}`} id={id}>
      {filterNav.map((nav, index) => (
        <button
          id="btn"
          key={index}
          className={
            selectedNav === `${nav.name}`
              ? "px-4 py-2 rounded-[20px] capitalize text-white bg-gray-900 border whitespace-nowrap"
              : "px-4 py-2 rounded-[20px] capitalize text-black hover:bg-gray-900 hover:text-white sm:block border whitespace-nowrap"
          }
          onClick={() => setSelectedNav(`${nav.name}`)}
        >
          {nav.name}
        </button>
      ))}
    </div>
  );
}
