import React from "react";
import Link from "next/link";
import { ImExit } from "react-icons/im";

export default function AccountSettings() {
  return (
    <div>
      <div className="flex justify-between w-full mb-10">
        <h2 className="text-3xl text-gray-500 cursor-default font-bold ">
          Hesap Yönetimi
        </h2>{" "}
      </div>
      <div className="bg-white p-10 mb-10">
        <Link
          href="/"
          className="py-1 px-4 w-48 border-gray-400 border-dotted text-gray-400 border-2 m-1 rounded-md flex justify-center items-center"
        >
          <ImExit /> Hesabını Askıya Al
        </Link>
      </div>
    </div>
  );
}
