/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

/*
  This HomeTemplates requires some changes to your config:
  
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

import phone from "../../images/phone.png";
import download from "../../images/download.png";
import Image from "next/image";

export default function HomeTemplate() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/templates");
      const templatesData = await data.json();
      setTemplates(templatesData);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-normal leading-8 text-gray-900">
          Templates
        </h2>
        <a
          href="#"
          className="hidden text-sm font-normal leading-4 text-[#989898] sm:block"
        >
          See all
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-5 lg:gap-x-4">
        {templates.map((template) => (
          <div key={template.id} className="group relative">
            <div className="h-64 relative w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <img
                src={template.image.src}
                alt={template.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute hidden group-hover:flex inset-y-0 top-0 h-full w-full items-end justify-start overflow-hidden rounded-lg">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0-0 h-full bg-gradient-to-r from-black opacity-50"
                />
                <p className="relative w-1/3 p-4 text-4xl font-semibold text-white">
                  {template.content}
                </p>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <h3 className="text-base leading-5 font-semibold text-gray-900">
                <a href={template.href}>
                  <span className="absolute inset-0" />
                  {template.content}
                </a>
              </h3>
              <div className="flex flex-wrap justify-end items-center gap-x-2 gap-y-1">
                <div className="flex items-center gap-2">
                  <div>
                    <Image src={phone} alt="phone" />
                  </div>
                  <p>{template.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image src={download} alt="download" />
                  </div>
                  <p>{template.download}</p>
                </div>
              </div>
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
