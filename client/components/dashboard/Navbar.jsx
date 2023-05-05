import Link from "next/link";
import React, { useState } from "react";
import { categories } from "./fakeDatas";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [onSubCate, setOnSubCat] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const categoryOnHandler = (cat) => {
    console.log(cat);
    setOnSubCat(true);
    setSelectedCat(cat);
  };
  const categoryOffHandler = () => {
    setOnSubCat(false);
    setSelectedCat(null);
  };
  const showMobilMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 w-full">
      <nav className="bg-white w-full flex  relative justify-between items-center px-4 h-30 sm:h-20 container mx-auto">
        <div className="hidden md:inline-flex">
          <Link href="/">
            <div className=" text-xl text-indigo-900 font-extrabold">
              FreelancerHub
            </div>
          </Link>
        </div>

        {showSearch ? (
          <div
            className={
              showSearch
                ? "flex justify-center items-center w-full px-2 mt-2 bg-white p-2 "
                : "hidden"
            }
          >
            <div className="relative w-full flex justify-center">
              <input
                type="search"
                name=""
                id=""
                className="border px-5 pr-0 py-1 w-4/5 rounded-l-lg"
                placeholder="Search"
                onBlur={() => setShowSearch(!showSearch)}
              />
              <div className="search-button bg-white p-2 rounded-r-lg border-r border-t border-b">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="flex justify-center items-center cursor-pointer"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "26px",
                    width: "26px",
                    stroke: "#312e81",
                    strokeWidth: "5.33333",
                    overflow: "visible",
                  }}
                >
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="block flex-shrink flex-grow-0 justify-center px-2 py-2 sm:py-0 ">
            <div className="flex justify-center">
              <div className="inline-flex items-center max-w-full">
                <button
                  className="flex items-center flex-grow-0 flex-shrink pl-1 sm:pl-2 relative w-full sm:w-60 border rounded-full px-1 py-1"
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <div className="hidden flex-grow flex-shrink overflow-hidden sm:block">
                    Aramaya Başlayın
                  </div>
                  <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "12px",
                        width: "12px",
                        stroke: "currentcolor",
                        strokeWidth: "5.33333",
                        overflow: "visible",
                      }}
                    >
                      <g fill="none">
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="block">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28" />
                        <path d="m2 24h28" />
                        <path d="m2 8h28" />
                      </g>
                    </svg>
                  </div>
                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="fill-lime-600"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-indigo-900 shadow-lg">
        <div className="max-w-screen-xl flex justify-end md:justify-between md:px-4 md:py-3 mx-auto">
          <div
            className={
              !showMenu
                ? "flex items-center justify-between w-full"
                : "flex items-center justify-end w-full"
            }
          >
            <ul className="md:flex hidden flex-row font-medium mt-0 mr-6 md:space-x-8 text-sm">
              {categories.map((cat, index) => {
                return (
                  <div key={index}>
                    <li
                      key={index}
                      onMouseEnter={() => categoryOnHandler(cat)}
                      className="px-4 py-3 hover:bg-lime-600"
                    >
                      <Link
                        href="/"
                        className="text-gray-900 dark:text-white"
                        aria-current="page"
                      >
                        {cat.categoryName}
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
            {!showMenu ? (
              <ul className="md:hidden flex flex-col self-start font-medium mt-0 mr-6 md:space-x-8 text-sm">
                {categories.map((cat, index) => {
                  return (
                    <div key={index}>
                      <li
                        key={index}
                        onMouseEnter={() => categoryOnHandler(cat)}
                        className="px-4 py-3 hover:bg-lime-600"
                      >
                        <Link
                          href="/"
                          className="text-gray-900 dark:text-white"
                          aria-current="page"
                        >
                          {cat.categoryName}
                        </Link>
                      </li>
                    </div>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <div className="block cursor-pointer md:hidden self-start p-4">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                onClick={showMobilMenu}
                style={{
                  display: "block",
                  fill: "none",
                  height: "32px",
                  width: "32px",
                  stroke: "white",
                  strokeWidth: 3,
                  overflow: "visible",
                }}
              >
                <g fill="none" fillRule="nonzero">
                  <path d="m2 16h28" />
                  <path d="m2 24h28" />
                  <path d="m2 8h28" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className={
            onSubCate
              ? "grid grid-cols-2 px-10 py-2 gap-2 border-t-2 justify-center z-20"
              : "hidden"
          }
          onMouseLeave={() => categoryOffHandler()}
        >
          {selectedCat?.subCategories.map((sub) => {
            return (
              <Link
                className="text-white hover:bg-lime-600 hover:underline hover:text-white p-2"
                href={sub.url}
                key={sub.subId}
              >
                {sub.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
