import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <nav className=" bg-white w-full flex relative justify-between items-center px-4 h-20 container mx-auto">
        {/* logo */}
        <div className="inline-flex">
          <Link className="_o6689fn" href="/">
            <div className="hidden md:block">FreelancerHub</div>
          </Link>
        </div>
        {/* end logo */}
        {/* search bar */}
        {showSearch ? (
          <div
            className={
              showSearch
                ? "flex justify-center items-center w-full px-12 mt-2 bg-white p-2 "
                : "hidden"
            }
          >
            <div className="relative w-full flex justify-center">
              <input
                type="search"
                name=""
                id=""
                className="border px-5 py-1 w-4/5 rounded-l-lg"
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
          <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
            <div className="inline-block">
              <div className="inline-flex items-center max-w-full">
                <button
                  className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <div className="block flex-grow flex-shrink overflow-hidden">
                    Start your search
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

        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="block relative">
                <button
                  type="button"
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "16px",
                          width: "16px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
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
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
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
        {/* end login */}
      </nav>

      <nav className="bg-gray-50 dark:bg-indigo-900">
        <div className="max-w-screen-xl flex justify-end sm:justify-center  px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="sm:flex hidden flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Grafik Tasarım
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  İnternet Reklamcılığı
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Yazı & Çeviri
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Video & Animasyon
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Ses & Müzik
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Yazılım & Teknoloji
                </Link>
              </li>
            </ul>

            <div className="block cursor-pointer sm:hidden self-end">
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
      </nav>
    </>
  );
}
