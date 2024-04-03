/* eslint-disable @next/next/no-img-element */
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

import { useEffect, useState } from "react";

export default function HomeArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/articles");
      const articlesData = await data.json();
      setArticles(articlesData);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-normal leading-8 text-gray-900">
          Articles
        </h2>
        <a
          href="#"
          className="hidden text-sm font-normal leading-4 text-[#989898] sm:block"
        >
          See all
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-5 lg:gap-x-4">
        {articles.map((article) => (
          <div key={article.id} className="group relative">
            <div className="h-64 w-full relative overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 hidden group-hover:flex h-full items-end justify-center overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-2xl font-semibold text-white">
                  {article.content}
                </p>
              </div>
            </div>
            <div>
              <div className="flex mt-4 items-center gap-2">
                <p className="text-[#989898] text-sm">{article.date}</p>
                <span className="block h-1 w-1 rounded-full bg-[#F0F0F0]"></span>
                <p className="text-[#989898] text-sm">{article.type}</p>
              </div>
              <h3 className="mt-2 text-base leading-5 font-semibold text-gray-900">
                <a href={article.href}>
                  <span className="absolute inset-0" />
                  {article.content}
                </a>
              </h3>
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
