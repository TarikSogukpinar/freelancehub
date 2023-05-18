import Link from "next/link";
import { useState } from "react";
import { BsXDiamondFill } from "react-icons/bs";
import { BiExit, BiGroup } from "react-icons/bi";
import { useRouter } from "next/router";
import { logoutUser } from "@/services/authService";
export default function ProfileButton({ bgColor, userData }) {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);

  const removeCookie = async () => {
    const data = await logoutUser();
    if (data.status === 200) {
      router.push("/login");
    }
  };
  console.log(userData);

  return (
    <div className={`flex relative justify-center items-center p-2 z-50`}>
      <div className={` flex justify-end items-center relative z-50`}>
        <div className="block">
          <div className="inline relative">
            <button
              type="button"
              className={`bg-${bgColor} inline-flex items-center relative px-2 border rounded-full hover:shadow-lg`}
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="pl-1">
                {/* <svg
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
                </svg> */}
              </div>
              <div className="font-bold text-indigo-900">
                {userData?.user[0]?.firstName +
                  " " +
                  userData?.user[0]?.lastName}
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
      <div
        className={
          showProfile ? "absolute bg-white p-4 border top-0" : "hidden"
        }
        style={{ top: 60 }}
      >
        <div className="flex flex-col justify-center items-start w-full">
          <Link
            href={"/dashboard"}
            className="flex justify-start items-center pr-10 text-gray-500 hover:text-indigo-900 font-bold"
          >
            <BiGroup className="mr-4 my-2" />
            Profil
          </Link>
          <Link
            href={"/dashboard/settings"}
            className="flex justify-start items-center pr-10 text-gray-500 hover:text-indigo-900 font-bold"
          >
            <BsXDiamondFill className="mr-4 my-2" /> Ayarlar
          </Link>
          <button
            type="button"
            onClick={() => removeCookie()}
            className="m-0 p-0 flex justify-start items-center pr-10 text-gray-500 hover:text-indigo-900 font-bold "
            href={"/"}
          >
            <BiExit className="mr-4 my-2" /> Çıkış
          </button>
        </div>
      </div>
    </div>
  );
}
