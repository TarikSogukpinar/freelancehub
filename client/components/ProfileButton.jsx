import Link from "next/link";
import { useState } from "react";

export default function ProfileButton() {
  const [showProfile, setShowProfile] = useState(false);
  const removeCookie = () => {
    // cookie silen fonksiyon yazılacak
    // cookie kontrol edilip yoksa loginpage e yönlendirilecek
  };
  return (
    <div className="flex-initial relative">
      <div className="flex justify-end items-center relative z-50">
        <div className="block">
          <div className="inline relative">
            <button
              type="button"
              className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
              onClick={() => setShowProfile(!showProfile)}
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
      <div
        className={
          showProfile ? "absolute bg-white p-10 border top-0" : "hidden"
        }
      >
        <div className="flex flex-col">
          <Link href={"/"}>Profil</Link>
          <Link href={"/"}>Ayarlar</Link>
          <button
            type="button"
            onClick={() => removeCookie()}
            className="m-0 p-0 text-left"
            href={"/"}
          >
            Çıkış
          </button>
        </div>
      </div>
    </div>
  );
}
