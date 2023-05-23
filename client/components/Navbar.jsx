import Link from "next/link";
import { useState } from "react";
import ProfileButton from "./ProfileButton";

export default function Navbar({ cookies }) {
  const [cookieData, setCookieData] = useState(cookies ? cookies : null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-indigo-900 w-full border-b hidden border-gray-200 dark:border-gray-600 md:block">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-lime-500">
              Freelancer
            </span>
          </Link>

          {cookies ? (
            <ProfileButton bgColor={"white"} />
          ) : (
            <div className="flex md:order-2">
              <Link
                href="/login"
                className="text-white bg-lime-800 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-lime-700 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-700 mx-2"
              >
                Giriş
              </Link>
              <Link
                href="/register"
                className="text-white bg-lime-800 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-lime-700 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-700 mx-2"
              >
                Kaydol
              </Link>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex  right-3 bg-lime-700 items-center p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) => setShowMenu(!showMenu)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
      {cookies ? (
        <div className="flex-initinal mt-2 mr-2 sm:hidden">
          <ProfileButton />
        </div>
      ) : (
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex fixed top-3 right-3 bg-indigo-900 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  z-50 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => setShowMenu(!showMenu)}
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div
        className={
          showMenu
            ? "items-center flex justify-between w-4/5 h-screen md:hidden md:w-auto md:order-1 fixed z-40"
            : "hidden md:hidden"
        }
        id="navbar-sticky"
      >
        <div className="flex pt-10 flex-col items-center justify-start p-4 fixed h-screen right-0 w-3/5 md:p-0 font-medium border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-indigo-900 md:dark:bg-indigo-900 dark:border-gray-700">
          <Link
            href="/login"
            className="text-white bg-lime-800 hover:bg-lime-900 focus:outline-none focus:ring-lime-700 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-700 m-2 w-3/4"
          >
            Giriş
          </Link>
          <Link
            href="/register"
            className="text-white bg-lime-800 hover:bg-lime-900 focus:outline-none focus:ring-lime-700 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-700 m-2 w-3/4"
          >
            Kaydol
          </Link>
        </div>
      </div>
    </>
  );
}
