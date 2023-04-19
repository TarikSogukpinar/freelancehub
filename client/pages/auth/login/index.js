import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  return (
    <section className="bg-white">
      <div>
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-7xl  ">
            <a
              className="flex justify-center items-center  text-slate-400 hover:text-indigo-600"
              href="/"
            >
              <span className="sr-only">Home</span>
              <FaUserCircle className=" text-9xl" />
            </a>

            {/* <h1 className="mt-6 text-2xl justify-center items-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome Freelancer App
            </h1> */}

            <p className="flex justify-center items-center mt-4 leading-relaxed font-semibold text-gray-500">
              Please log in to post and view ads
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive email notifications
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500 mr-1">
                  By creating an account, you agree to{" "}
                  <Link href="/terms" target="_blank" className="underline">
                    our terms and conditions privacy policy
                  </Link>
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  You don't have an account, sign up{" "}
                  <Link
                    href="/auth/register"
                    target="_blank"
                    className="underline"
                  >
                    Register
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
