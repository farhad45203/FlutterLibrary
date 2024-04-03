import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

import Logo from "../../images/logo.png";
import Image from "next/image";
import HomeTemplets from "./HomeTemplets";
import HomeArticles from "./HomeArticles";
import HomeSreens from "./HomeSreens";
import Footer from "../Common/Footer";

import discover from "../../images/discover.png";
import uikits from "../../images/uikits.png";
import screens from "../../images/screens.png";
import articles from "../../images/articles.png";
import sponsor from "../../images/sponsor.png";
import hire from "../../images/hire.png";
import sun from "../../images/sun.png";

const navigation = [
  { name: "Discover", href: "#", icon: discover, current: true },
  { name: "UI Kits", href: "#", icon: uikits, current: false },
  { name: "Screens", href: "#", icon: screens, current: false },
  { name: "Articles", href: "#", icon: articles, current: false },
  {
    name: "Become Sponsor",
    href: "#",
    icon: sponsor,
    current: false,
  },
  { name: "Hire Flutter Dev", href: "#", icon: hire, current: false },
];
const teams = [
  { id: 1, name: "Sign in", href: "#", initial: 10, current: false },
  { id: 2, name: "Chat", href: "#", initial: 5, current: false },
  { id: 3, name: "Onboarding", href: "#", initial: 18, current: false },
  { id: 1, name: "E-commerce", href: "#", initial: 9, current: false },
  { id: 2, name: "Checkout", href: "#", initial: 10, current: false },
  { id: 3, name: "Error", href: "#", initial: 16, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This HomeLayout requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white pb-4">
                    <div className="flex h-16 pl-6 shrink-0 items-center">
                      <Image href="#" src={Logo} alt="Your Company" />
                    </div>
                    <nav className="flex flex-1 flex-col overflow-x-hidden">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-[#F0F0F0] text-gray-900"
                                      : "text-[#989898] hover:text-gray-900 hover:bg-[#F0F0F0]",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold pl-6"
                                  )}
                                >
                                  <div className="flex items-center gap-2">
                                    <Image src={item.icon} alt={item.name} />
                                    {item.name}
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="px-6">
                          <div className="text-sm leading-5 text-gray-900">
                            All Screens
                          </div>
                          <ul role="list" className="mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-[#F0F0F0] text-gray-900"
                                      : "text-[#989898] hover:text-gray-900 hover:bg-[#F0F0F0]",
                                    "group flex gap-x-3 justify-between rounded-md p-2 text-sm leading-5"
                                  )}
                                >
                                  <span className="truncate">{team.name}</span>
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "text-gray-900"
                                        : "text-[#989898] group-hover:text-gray-900",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-sm"
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white pb-4">
            <div className="flex h-16 pl-6 shrink-0 items-center">
              <Image src={Logo} alt="Your Company" />
            </div>
            <nav className="flex flex-1 flex-col overflow-x-hidden">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#F0F0F0] text-gray-900"
                              : "text-[#989898] hover:text-gray-900 hover:bg-[#F0F0F0]",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold pl-6"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <Image src={item.icon} alt={item.name} />
                            {item.name}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="px-6">
                  <div className="text-sm leading-5 text-gray-900">
                    All Screens
                  </div>
                  <ul role="list" className="mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-[#F0F0F0] text-gray-900"
                              : "text-[#989898] hover:text-gray-900 hover:bg-[#F0F0F0]",
                            "group flex gap-x-3 justify-between rounded-md p-2 text-sm leading-5"
                          )}
                        >
                          <span className="truncate">{team.name}</span>
                          <span
                            className={classNames(
                              team.current
                                ? "text-gray-900"
                                : "text-[#989898] group-hover:text-gray-900",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-sm"
                            )}
                          >
                            {team.initial}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="items-center justify-end py-2 px-4 gap-x-4 lg:gap-x-4 sm:hidden flex">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <Image src={sun} alt="sun" />
            </button>
            <button className="px-4 py-[14px] rounded-[20px] capitalize text-black hover:bg-gray-900 hover:text-white sm:block border">
              Log in
            </button>
            <button className="px-4 py-[14px] rounded-[20px] capitalize text-white bg-gray-900 border">
              Get Pro
            </button>
          </div>
          <div className="sticky top-0 z-40 flex shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex w-full justify-between items-center gap-x-4 py-4 self-stretch lg:gap-x-6">
              <form
                className="relative flex flex-1 h-full items-center"
                action="#"
                method="GET"
              >
                <div className="flex sm:w-1/2 w-full items-center max-h-12">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 h-full left-5 w-5 text-gray-900"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 py-3 pl-12 pr-0 rounded-full outline-none bg-[#F0F0F0] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </div>
              </form>
              <div className="items-center gap-x-4 lg:gap-x-4 sm:flex hidden">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <Image src={sun} alt="sun" />
                </button>
                <button className="px-4 py-[14px] rounded-[20px] capitalize text-black hover:bg-gray-900 hover:text-white sm:block border">
                  Log in
                </button>
                <button className="px-4 py-[14px] rounded-[20px] capitalize text-white bg-gray-900 border">
                  Get Pro
                </button>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 grid gap-y-10 sm:px-6 lg:px-8">
              <div className="mx-auto mt-10 max-w-3xl sm:text-center">
                <h1 className="text-[40px] leading-[52px] font-normal tracking-tight text-gray-900">
                  Build your next App
                  <br />
                  even faster!
                </h1>
                <p className="mt-2 text-lg leading-5 text-gray-600">
                  Beautifully designed, expertly crafted Flutter components and
                  templates, to jumpstart your projects and speed up your
                  development process.
                </p>
              </div>
              <HomeTemplets />
              <HomeArticles />
              <HomeSreens />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
