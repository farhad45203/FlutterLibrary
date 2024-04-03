import React from "react";
import Image from "next/image";
import Logo from "../../images/logo.png";
import twitter from "../../images/twitter.png";
import instra from "../../images/instra.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";

const navigation = {
  explore: [
    { name: "Blog", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Screens", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Become a sponsor", href: "#" },
    { name: "Hire top Flutter Devs", href: "#" },
  ],
  copyright: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    {
      name: "X",
      href: "#",
      icon: twitter,
    },
    {
      name: "Linkedin",
      href: "#",
      icon: linkedin,
    },
    {
      name: "Instagram",
      href: "#",
      icon: instra,
    },
    {
      name: "Facebook",
      href: "#",
      icon: facebook,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="space-y-[16px] col-span-3">
          <Image src={Logo} alt="Your Company" />
          <p className="text-sm w-1/2 leading-6 text-gray-600">
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart your projects and speed up your development
            process.
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <div className="bg-gray-900 h-8 w-8 rounded-full flex justify-center items-center">
                  <Image src={item.icon} alt={item.name} />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Explore
            </h3>
            <ul role="list" className="mt-[10px] space-y-[10px]">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Support
            </h3>
            <ul role="list" className="mt-[10px] space-y-[10px]">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-between border-t border-gray-900/10 pt-4 sm:mt-20 lg:mt-5">
        <p className="text-xs leading-5 text-gray-500">
          Copyright 2024 TheFlutterLibrary. All rights reserved.
        </p>
        <ul role="list" className="flex space-x-[10px] items-center">
          {navigation.copyright.map((item, index, array) => (
            <React.Fragment key={item.name}>
              <li>
                <a
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
              {index < array.length - 1 && (
                <span className="inline-block h-4 w-px bg-gray-400"></span> // Divider
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </footer>
  );
}
