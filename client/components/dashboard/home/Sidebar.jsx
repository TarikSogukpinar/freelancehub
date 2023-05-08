import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLink45Deg,
  BsLinkedin,
  BsEye,
  BsPersonCheck,
} from "react-icons/bs";
import { AiFillEdit, AiFillFlag } from "react-icons/ai";
import { FcCallback, FcSettings } from "react-icons/fc";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col ml-20 self-start w-2/5">
      <div className="social flex flex-col justify-start items-start bg-white p-4 col-span-3 col-start-2 shadow">
        <div className="flex justify-evenly items-center w-full">
          <h2 className="text-xl font-bold">Paylaş:</h2>
          <div className="icons flex justify-center items-center">
            <BsFacebook className="mx-1 text-2xl hover:text-indigo-900 cursor-pointer" />
            <BsInstagram className="mx-1 text-2xl hover:text-indigo-900 cursor-pointer" />
            <BsTwitter className="mx-1 text-2xl hover:text-indigo-900 cursor-pointer" />
            <BsLink45Deg className="mx-1 text-2xl hover:text-white hover:bg-indigo-900 cursor-pointer bg-black text-white rounded-full" />
            <BsLinkedin className="mx-1 text-2xl hover:text-indigo-900 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="profile mt-10 flex justify-center items-center relative bg-white p-4 col-span-3 col-start-2 px-10 py-15 w-full shadow">
        <div className="edit absolute top-5 right-5 flex justify-evenly items-center cursor-pointer hover:underline text-indigo-900">
          <AiFillEdit className="text-xl" />{" "}
          <Link href={"/settings#general-settings"} className=" font-bold">
            Düzenle
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center pt-12 w-full ">
          <div className="img w-1/2 relative">
            <Image
              src={"/images/profile.jpg"}
              priority
              width={300}
              height={300}
              className="rounded-full"
              alt="profile"
            />
            <div className="w-6 h-6 bg-green-500 rounded-full absolute top-3 right-3 border-2 border-white"></div>
          </div>
          <p className="font-bold text-md">username</p>
          <p className="font-tiny text-md italic text-gray-500">
            Jr. Full Stack Developer
          </p>
          <Link
            className="my-10 font-medium text-white bg-indigo-900 border border-gray-500 px-10 py-4 text-xl hover:bg-indigo-700 shadow-lg"
            href={"/"}
          >
            Listelerim
          </Link>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-start items-center">
              <FcCallback className="text-3xl" />{" "}
              <span className="text-xl font-bold text-lime-500">
                Freelancer Telefon Hattı
              </span>
            </div>
            <Link href={"/settings#contact"}>
              <FcSettings className="text-3xl cursor-pointer" />
            </Link>
          </div>
          <div className="py-5 mt-5 border-t-2 border-b-2 border-separate text-lg">
            <span className="text-lime-500 font-bold">FreelancerHub</span>{" "}
            <span className="font-semibold text-gray-500">
              freelancer hattı sayesinde kişisel numaranı paylaşmaksızın cep
              telefonun üzerinden tüm kullanıcılarla güvenle görüşmeye
              başlayabilirsin.
            </span>
            <p className="text-lime-500 font-bold cursor-pointer hover:text-indigo-900">
              {" "}
              Üstelik ilk ay ücretsiz! 😉
            </p>
          </div>
          <div className="w-full p-4">
            <div className="flex justify-between my-2">
              <div className="w-1/2 flex justify-start items-center font-semibold text-gray-500 cursor-default">
                <BsEye /> <span className="pl-5">Son Görülme</span>
              </div>
              <div className="w-1/2 flex justify-end items-center text-lime-500 font-bold cursor-default">
                Çevirimiçi
              </div>
            </div>
            <div className="flex justify-between my-2">
              <div className="w-1/2 flex justify-start items-center font-semibold text-gray-500 cursor-default">
                <BsPersonCheck /> <span className="pl-5">Kayıt Tarihi</span>
              </div>
              <div className="w-1/2 flex justify-end items-center text-indigo-900 font-bold cursor-default">
                15 Şubat 2021
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about mt-10 flex flex-col justify-center items-center relative bg-white p-4 col-span-3 col-start-2 px-10 py-15 w-full shadow">
        <div className="flex justify-between w-full mb-10">
          <h2 className="text-xl font-bold">Hakkında</h2>{" "}
          <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
            <AiFillEdit className="text-xl" />{" "}
            <Link href={"/settings#general-settings"} className=" font-bold">
              Düzenle
            </Link>
          </span>
        </div>
        <div className="mb-10 font-semibold text-gray-500 text-lg">
          Yaklaşık 10 yıldır Adobe programlarını kullanarak logo, afiş, stand ve
          katalog tasarımları yapmaktayım.
        </div>
        <div className="flex flex-col justify-between w-full mb-10 pb-10  border-b-2 border-separate">
          <h2 className="text-xl font-bold border-t-2 py-5">
            Uzmanı Olduğu Alanlar & Araçlar
          </h2>
          <div className="skils flex justify-start items-center flex-wrap">
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              MongoDB
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              ExpressJs
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              ReactJS
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              NodeJs
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              TailwindCss
            </Link>
            <Link
              href="/"
              className="py-3 px-7 text-gray-500 border m-1 rounded-md hover:border-lime-400 hover:bg-indigo-900 hover:text-lime-400"
            >
              Javascript
            </Link>
          </div>
          <div className="add-skils mt-5">
            <Link
              href="/settings#experience"
              className="py-1 px-4 border-lime-600 text-lime-600 border-2 m-1 rounded-md hover:border-indigo-900 hover:bg-indigo-900 hover:text-lime-400"
            >
              Ekle +
            </Link>
          </div>
        </div>
        <div className="mb-10 flex flex-col font-semibold text-gray-500 text-lg">
          <div className="flex justify-between w-full mb-10">
            <h2 className="text-xl font-bold text-black">
              Eğitim ve Sertifika Bilgileri
            </h2>{" "}
            <span className="flex justify-center items-center cursor-pointer hover:underline text-indigo-900">
              <AiFillEdit className="text-xl" />{" "}
              <Link href={"/settings#education"} className=" font-bold">
                Düzenle
              </Link>
            </span>
          </div>
          <p>
            Eğitim bilgilerini veya varsa katıldığın sertifika programlarını
            eklemen alıcıların tercihte bulunmaları ve daha kolay teklif alman
            için faydalı olabilir.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-lg text-gray-500 font-semibold hover:underline cursor-pointer pt-5">
        <AiFillFlag /> Hata Bildir
      </div>
    </div>
  );
}
