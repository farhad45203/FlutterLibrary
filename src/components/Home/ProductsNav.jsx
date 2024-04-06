import React from "react";

export default function ProductsNav({
  selectedNav,
  setSelectedNav,
  classNames,
  id,
}) {
  const navList = [
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "New",
    },
    {
      id: 3,
      name: "Popular",
    },
    {
      id: 4,
      name: "Onboarding",
    },
    {
      id: 5,
      name: "Auth",
    },
    {
      id: 6,
      name: "Shop",
    },
    {
      id: 7,
      name: "Chat",
    },
    {
      id: 8,
      name: "TOP Verification",
    },
    {
      id: 9,
      name: "Dashboard",
    },
    {
      id: 10,
      name: "Food",
    },
    {
      id: 11,
      name: "Restaurent",
    },
    {
      id: 12,
      name: "Fitness",
    },
  ];
  return (
    <div className={`inline-flex gap-x-2 ${classNames}`} id={id}>
      {navList.map((nav, index) => (
        <button
          id="btn"
          key={index}
          className={
            selectedNav === `${nav.name}`
              ? "px-4 py-2 rounded-[20px] capitalize text-white bg-gray-900 border"
              : "px-4 py-2 rounded-[20px] capitalize text-black hover:bg-gray-900 hover:text-white sm:block border"
          }
          onClick={() => setSelectedNav(`${nav.name}`)}
        >
          {nav.name}
        </button>
      ))}
    </div>
  );
}
